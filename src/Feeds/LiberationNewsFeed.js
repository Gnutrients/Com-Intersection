import RssFeed from "./RssFeed.js"

class LiberationNewsFeed extends RssFeed 
{
    constructor() {
        super("Liberation News", {
            host: "www.liberationnews.org",
            path: "/feed/",
        })
    }
}

export default new LiberationNewsFeed()