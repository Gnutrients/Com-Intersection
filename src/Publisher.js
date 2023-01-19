import Article from "./Article.js";
import SiteContentMixin from "./Feeds/Base/SiteContentMixin.js";

class Publisher extends SiteContentMixin {   
    /**
     * This object contains information about a singular Publisher.
     * 
     * Every Publisher has articles, and a way to configure its base information
     * 
     * @param {array} articles List of articles related to this Publisher
     * @param {object} options Configuration object for this Publisher
     */
    constructor(articles, options = {}) {
        super()
        this.options = Object.assign({
            title: "Publisher",
            link: "",
            description: "Object Containing Articles",
            language: 'en'
        }, options)

        if (!Array.prototype.isPrototypeOf(articles)) 
        {
            throw new Error("You must supply an array of articles to this class");
        }

        if (!this.is_valid_article_list(articles))
        {
            throw new Error("You are not suppling a valid list or articles to this class")
        }

        this.articles = articles
    }

    toString() {
        return JSON.stringify(this.options, null, 4);
    }

    /**
     * Test to see whether or not there is an error with any of the articles that are in this Publisher
     * @param {array} articles 
     */
    is_valid_article_list(articles)
    {
        return articles.reduce((is_valid, article) => {
            // This must be the first condition
            if (! is_valid) 
            {
                return 0;
            }

            if (!Article.prototype.isPrototypeOf(article))
            {
                return 0;
            }

            return is_valid
        }, 1)
    }
}

export default Publisher