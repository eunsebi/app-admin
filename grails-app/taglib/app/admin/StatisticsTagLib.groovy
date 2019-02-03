package app.admin


import app.admin.jobsboard.Publisher
import app.admin.jobsboard.JobTag
import app.admin.jobsboard.Type

class StatisticsTagLib {
    static defaultEncodeAs = [taglib:'raw']
    def statisticsService
    static namespace = 's'

    def top = { attrs, body ->
        def type = attrs.type
        def result = []
        def counter = 0
        switch (type) {
            case "tags":
                result = statisticsService.getTopTags()
                counter = JobTag.count()
                break
            case "types":
                result = statisticsService.getTopTypes()
                counter = Type.count()
                break
            case "publishers":
                result = statisticsService.getTopPublishers()
                counter = Publisher.count()
                break
            default:
                result = []
                break
        }
        if(result?.size()) {
            out << "<strong>${type.capitalize()} (${counter})</strong> <ul>" + result.each { "<li>" + it + "</li>"} + "</ul>"
        } else {
            out << ""
        }
    }
}
