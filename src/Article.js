class Article {
    teaser_text_length = 280;
    months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
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
            this.date = new Date(this.date);
        }

        this.teaser_text = this.create_teaser_text(body)
    }

    get_date() {
        return isNaN(this.date) ? "" : `${this.date.getFullYear()}-${this.months[this.date.getMonth()]}-${this.date.getDate()}`
    }

    create_teaser_text(text) {
        return text.substring(0, this.teaser_text_length)
    }
}

export default Article;