class Article {
    /**
     * This class contains information about a single Article
     * 
     * @param {string} title Title of the article
     * @param {string} body Body of the article
     * @param {string} link Link to the article
     * @param {string|Date} date Date the article was written
     */
    constructor(
        title,
        body,
        link = "",
        date = null,

    )
    {
        this.body  = body
        this.date  = date
        this.link  = link
        this.title = title

        if (!Date.prototype.isPrototypeOf(this.date))
        {
            this.date = new Date(this.date)
        }
    }
}

export default Article;