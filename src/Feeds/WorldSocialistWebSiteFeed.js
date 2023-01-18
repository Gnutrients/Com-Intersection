import RssFeed from "./Base/RssFeed.js"

class WorldSocialistWebSiteFeed extends RssFeed 
{
    facebook_link = "https://www.facebook.com/wsws.org"
    twitter_link = "https://twitter.com/WSWS_Updates"
    instagram_link = "https://www.instagram.com/worldsocialistwebsite/"
    youtube_link = "https://www.youtube.com/SEPupload"
    
    constructor() {
        super("World Socialist Web Site", {
            host: "www.wsws.org",
            path: "/en/rss.xml",
        })
    }
}

export default new WorldSocialistWebSiteFeed()