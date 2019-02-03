package app.admin.jobsboard

class JobTag {

    String name

    Date dateCreated
    Date lastUpdated

    static constraints = {
        name nullable: false, blank: false, unique: true
    }

    static mapping = {
        cache true
    }

    @Override
    public String toString() {
        return name
    }
}
