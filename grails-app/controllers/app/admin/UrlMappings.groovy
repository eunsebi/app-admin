package app.admin

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/" (controller: "main", action: 'index')

        "/articles/$code/$action?(.$format)?"(controller: "article")
        "/articles/tagged/$tag(.$format)?"(controller: "article", action: "tagged")

        "/article/$id(.$format)?"(controller: "article", action: "show")
        "/article/$action/$id(.$format)?"(controller: "article")
        "/article/$id/$action/$contentId(.$format)?"(controller: "article")

        //"/"(view:"/index")
        "/gr" (view: "index")
        "405"(view:'/error')
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
