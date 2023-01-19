import RssFeed from "./Base/RssFeed.js"

class RedSailsFeed extends RssFeed 
{
    twitter_link = "https://twitter.com/RedSailsOrg"
    
    constructor() {
        super("Red Sails", {
            host: "redsails.org",
            path: "/rss.xml",
        })
    }
}

export default new RedSailsFeed()