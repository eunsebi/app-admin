package app.admin.jobsboard

import grails.plugin.springsecurity.annotation.Secured

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
@Secured(['ROLE_ADMIN'])
class TagController {

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond JobTag.list(params), model:[tagCount: JobTag.count()]
    }

    def show(JobTag tag) {
        respond tag
    }

    def create() {
        respond new JobTag(params)
    }

    @Transactional
    def save(JobTag tag) {
        if (tag == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (tag.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond tag.errors, view:'create'
            return
        }

        tag.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'tag.label', default: 'JobTag'), tag.id])
                redirect tag
            }
            '*' { respond tag, [status: CREATED] }
        }
    }

    def edit(JobTag tag) {
        respond tag
    }

    @Transactional
    def update(JobTag tag) {
        if (tag == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (tag.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond tag.errors, view:'edit'
            return
        }

        tag.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'tag.label', default: 'JobTag'), tag.id])
                redirect tag
            }
            '*'{ respond tag, [status: OK] }
        }
    }

    @Transactional
    def delete(JobTag tag) {

        if (tag == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        tag.delete flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'tag.label', default: 'JobTag'), tag.id])
                redirect action:"index", method:"GET"
            }
            '*'{ render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'tag.label', default: 'JobTag'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }
}
