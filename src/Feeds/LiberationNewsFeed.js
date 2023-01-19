import RssFeed from "./Base/RssFeed.js"

class LiberationNewsFeed extends RssFeed 
{
    facebook_link = "https://facebook.com/pslweb"
    twitter_link = "https://twitter.com/pslnational"
    youtube_link = "https://www.youtube.com/user/LiberationNews"
    instagram_link = "https://instagram.com/pslweb"
    
    constructor() {
        super("Liberation News", {
            host: "www.liberationnews.org",
            path: "/feed/",
        })
    }
}

export default new LiberationNewsFeed()