package app.admin

class TagSimilarText {

    String text

    static belongsTo = [tag: Tag]

    static constraints = {
    }
}
