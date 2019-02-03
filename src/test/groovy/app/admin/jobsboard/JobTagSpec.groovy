package app.admin.jobsboard

import grails.test.mixin.TestFor
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.domain.DomainClassUnitTestMixin} for usage instructions
 */
@TestFor(JobTag)
class JobTagSpec extends Specification {

    def setup() {
    }

    def cleanup() {
    }

    void "completed tag creation"() {
        given: "a complete new tag"
            def tag = new JobTag(name: "Remote")
        expect: "we can save a complete job tag"
            true == tag.validate()
    }

    void "can't save a tag without a name"() {
        given: "a job tag tag without a name"
            def tag = new JobTag(name: "")
        expect: "we can't save the tag"
            false == tag.validate()
    }
}
