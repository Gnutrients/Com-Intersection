import RssFeed from "./RssFeed.js"

class WorldSocialistWebSiteFeed extends RssFeed 
{
    constructor() {
        super("World Socialist Web Site", {
            host: "www.wsws.org",
            path: "/en/rss.xml",
        })
    }
}

export default new WorldSocialistWebSiteFeed()