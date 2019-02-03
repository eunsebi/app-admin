package app.admin

import app.admin.jobsboard.Job
import app.admin.jobsboard.Publisher
import app.admin.jobsboard.JobTag
import app.admin.jobsboard.Type
import grails.buildtestdata.mixin.Build
import grails.test.mixin.Mock
import grails.test.mixin.TestFor
import spock.lang.Specification

@TestFor(StatisticsTagLib)
@Mock([Job, JobTag])
@Build([Job, JobTag, Type, Publisher])
class StatisticsJobTagLibSpec extends Specification {

    def setup() {
        def statisticsService = new StatisticsService()
        tagLib.statisticsService = statisticsService
    }

    def cleanup() {
    }

    void "top for no publishers"() {
        expect:
        applyTemplate('<s:top type="publishers" />') == ""
    }

    void "top for multiple publishers, tags and types"() {
        given:
            def tag = JobTag.build()
            def type = Type.build()
            def publisher = Publisher.build()
            Job.build(publisher: publisher, type: type, tags: [tag])
            Job.build(publisher: publisher, type: type, tags: [tag])
        expect:
            applyTemplate('<s:top type="publishers" />') == "<strong>Publishers (1)</strong> <ul>[name:2]</ul>"
            applyTemplate('<s:top type="types" />') == "<strong>Types (1)</strong> <ul>[name:2]</ul>"
            applyTemplate('<s:top type="tags" />') == "<strong>Tags (1)</strong> <ul>[[name]:2]</ul>"
    }
}
