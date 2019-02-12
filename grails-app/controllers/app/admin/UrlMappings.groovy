package app.admin

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/login?/$action"(controller: "login")
        "/logout?/$action"(controller: "logout")

        "/" (controller: "main", action: 'index')
        "/flush"(controller: "main", action: 'flush')

        "/user/$action"(controller: "user")
        "/user/info/$id"(controller: "user", action: "index")
        "/user/info/$id/$category?"(controller: "user", action: "index")
        "/user/privacy"(view: '/user/privacy')
        "/user/agreement"(view: '/user/agreement')

        "/articles/$code/$action?(.$format)?"(controller: "article")
        "/articles/tagged/$tag(.$format)?"(controller: "article", action: "tagged")

        "/article/$id(.$format)?"(controller: "article", action: "show")
        "/article/$action/$id(.$format)?"(controller: "article")
        "/article/$id/$action/$contentId(.$format)?"(controller: "article")
        "/seq/$id"(controller: "article", action: "seq")

        "/banner/stats/$id(.$format)?"(controller: "banner", action: "stats")
        "/file/image"(controller: "file", action: "image")

        "/find/user?/$action"(controller: "findUser")

        //"/"(view:"/index")
        "/gr" (view: "index")
        "405"(view:'/error')
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
