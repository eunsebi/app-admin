package app.admin

import grails.plugin.springsecurity.annotation.Secured

@Secured(['ROLE_ADMIN'])
class CategoryController {

    static scaffold = Category

}
