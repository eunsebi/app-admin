package app.admin

import grails.plugin.springsecurity.SpringSecurityService
import grails.plugin.springsecurity.SpringSecurityUtils
import grails.plugin.springsecurity.annotation.Secured
import grails.transaction.Transactional

import static org.springframework.http.HttpStatus.NOT_ACCEPTABLE
import static org.springframework.http.HttpStatus.NOT_FOUND

//@Secured("ROLE_ADMIN")
@Transactional(readOnly = true)
class ArticleController {

    ArticleService articleService
    SpringSecurityService springSecurityService
    UserService userService

    static responseFormats = ['html', 'json']

    static allowedMethods = [save   : "POST", update: ["PUT", "POST"], delete: ["DELETE", "POST"], scrap: "POST",
                             addNote: "POST", assent: ["PUT", "POST"], dissent: ["PUT", "POST"]]

    def beforeInterceptor = {
        response.characterEncoding = 'UTF-8' //workaround for https://jira.grails.org/browse/GRAILS-11830
    }

    //TODO 2019. 01. 28 카테고리 index
    def index(String code, Integer max) {

        params.max = Math.min(max ?: 20, 100)
        params.sort = params.sort ?: 'id'
        params.order = params.order ?: 'desc'
        params.query = params.query?.trim()

        def category = Category.get(code)

        if(category == null) {
            notFound()
            return
        }

        if (!SpringSecurityUtils.ifAllGranted(category.categoryLevel)) {
            notAcceptable()
            return
        }

        def notices = articleService.getNotices(category)

        def categories = category.children ?: [category]

        if(category.code == 'community')
            categories = categories.findAll { it.code != 'promote' }

        def articlesQuery = Article.where {
            category in categories
            if (SpringSecurityUtils.ifNotGranted("ROLE_ADMIN"))
                enabled == true
            if (params.query && params.query != '')
                title =~ "%${params.query}%" || content.text =~ "%${params.query}%"

            /*if(recruitFilter) {
                if(recruits)
                    id in recruits*.article*.id
                else
                    id in [Long.MAX_VALUE]
            }*/
        }

        def articles = articlesQuery.list(params)

        respond articles, model:[articlesCount: articlesQuery.count(), category: category, notices: notices]

    } // index

    def seq(Long id) {
        redirect uri: "/article/${id}"
    }

    //TODO 2019. 01. 28 게시판 새글페이지
    def create(String code) {

        def category = Category.get(code)

        //recaptchaService.cleanUp session

        User user = springSecurityService.loadCurrentUser()

        if (category == null) {
            notFound()
            return
        }

        if (user.accountLocked || user.accountExpired) {
            forbidden()
            return
        }

        /*println "user Role: " + user.getAuthorities()
        println "Category Role : " + category.cate_role*/

        /*String[] role = user.getAuthorities()
        int user_size = user.getAuthorities().size()
        String category_role = Integer.toString(category.cate_role)

        for (int num ; num < user_size ; num++) {
            role[num] = role[num].substring(role[num].length() -1)
        }

        boolean result = Arrays.asList(role).contains(category_role)

        //println " 권한 : " + result
        */

        if (!SpringSecurityUtils.ifAllGranted(category.categoryLevel)) {
            notAcceptable()
            return
        }

        params.category = category

        def writableCategories
        def categories = Category.findAllByEnabled(true)
        def goExternalLink = false

        if(SpringSecurityUtils.ifAllGranted("ROLE_ADMIN")) {
            writableCategories = Category.findAllByWritableAndEnabled(true, true)
        } else {
            goExternalLink = category.writeByExternalLink
            writableCategories = Category.findAllByParentAndWritableAndEnabledAndAdminOnly(category?.parent ?: category, true, true, false) ?: [category]
            params.anonymity = category?.anonymity ?: false
        }

        def notices = params.list('notices') ?: []

        if(goExternalLink) {
            redirect(url: category.externalLink)
        } else {
            respond new Article(params), model: [writableCategories: writableCategories, category: category, categories: categories, notices: notices]
        }

    }

    //TODO 2019. 01. 28 새글 저장
    def save(String code) {

        Article article = new Article(params)

        Category category = Category.get(params.categoryCode)

        User user = springSecurityService.loadCurrentUser()

        if(category?.code == 'recruit') {
            redirect uri: '/recruits/create'
            return
        }

        if(user.accountLocked || user.accountExpired) {
            forbidden()
            return
        }

        try {

            def realIp = userService.getRealIp(request)
            /*def reCaptchaVerified = recaptchaService.verifyAnswer(session, realIp, params)

            if(!reCaptchaVerified) {
                throw new Exception("invalid captcha")
            }

            recaptchaService.cleanUp session*/

            withForm {
                Avatar author = Avatar.load(springSecurityService.principal.avatarId)

                if(SpringSecurityUtils.ifAllGranted("ROLE_ADMIN")) {
                    article.choice = params.choice?:false
                    article.enabled = !params.disabled
                    article.ignoreBest = params.ignore ?: false
                }

                article.createIp = userService.getRealIp(request)

                println "Article save Controller"

                articleService.save(article, author, category)
                println "저장하고 옴"

                articleService.saveNotices(article, user, params.list('notices'))

                withFormat {
                    html {
                        flash.message = message(code: 'default.created.message', args: [message(code: 'article.label', default: 'Article'), article.id])
                        redirect article
                    }
                    json { respond article, [status: CREATED] }
                }
            }.invalidToken {
                redirect uri: "/articles/${code}", method:"GET"
            }

        } catch (Exception e) {

            category = Category.get(code)
            def categories = category?.children ?: category?.parent?.children ?: [category]
            def notices = params.list('notices') ?: []
            article.category = category

            respond article.errors, view: 'create', model: [categories: categories, category: category, notices: notices]
        }
    }

    //TODO 2019. 01. 28 글 보기
    def show(Long id) {
        User user = springSecurityService.loadCurrentUser()

        def contentVotes = [], scrapped

        Article article = Article.get(id)

        if (article == null || (!article.enabled && SpringSecurityUtils.ifNotGranted("ROLE_ADMIN"))) {
            notFound()
            return
        }

        if (article.isRecruit) {
            redirect uri: "/recruit/$article.id"
        }

        article.updateViewCount(1)

        if (springSecurityService.loggedIn) {
            Avatar avatar = Avatar.load(springSecurityService.principal.avatarId)
            contentVotes = ContentVote.findAllByArticleAndVoter(article, avatar)
            scrapped = Scrap.findByArticleAndAvatar(article, avatar)
        }

        def category = Category.get(article.categoryId)

        // 권한 확인
        if (!SpringSecurityUtils.ifAllGranted(category.categoryLevel)) {
            notAcceptable()
            return
        }

        def notes = Content.findAllByArticleAndTypeAndEnabled(article, ContentType.NOTE, true)

        def contentBanners = Banner.where {
            type == BannerType.CONTENT && visible == true
        }.list()

        def contentBanner = contentBanners ? randomService.draw(contentBanners) : null

        def changeLogs = ChangeLog.createCriteria().list {
            eq('article', article)
            projections {
                sqlGroupProjection 'article_id as articleId, max(date_created) as dateCreated, content_id as contentId', 'content_id', ['articleId', 'dateCreated', 'contentId'], [StandardBasicTypes.LONG, StandardBasicTypes.TIMESTAMP, StandardBasicTypes.LONG]
            }
        }

        respond article, model: [contentVotes: contentVotes, notes: notes, scrapped: scrapped, contentBanner: contentBanner, changeLogs: changeLogs]
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'job.label', default: 'Job'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }

    protected void notAcceptable() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.Acceptable.message', args: [message(code: 'job.label', default: 'Job'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_ACCEPTABLE }
        }
    }


}
