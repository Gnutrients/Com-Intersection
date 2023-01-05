import RssFeed from "./RssFeed.js"

class RedSailsFeed extends RssFeed 
{
    constructor() {
        super("Red Sails", {
            host: "redsails.org",
            path: "/rss.xml",
        })
    }
}

export default new RedSailsFeed()