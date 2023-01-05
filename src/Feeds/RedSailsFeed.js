import RssFeed from "./RssFeed.js"

class RedSailsFeed extends RssFeed 
{
    constructor() {
        super("Red Sails", {
            host: "redsails.org",
            path: "/rss.xml",
            headers: {
                "Accept": "text/html,application/xhtml+xml,application/xml",
                "Accept-Language": "en-US",
                "Upgrade-Insecure-Requests" : 1
            }
        })
    }
}

export default new RedSailsFeed()