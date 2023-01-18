import RssFeed from "./Base/RssFeed.js"

class CommunistPartyUSAFeed extends RssFeed 
{
    facebook_link = "https://www.facebook.com/cpusa"
    twitter_link = "https://twitter.com/communistsusa"
    instagram_link = "https://instagram.com/communistsusa"
    youtube_link = "https://www.youtube.com/user/TheCommunistpartyUSA"
    
    constructor() {
        super("Communist Party USA", {
            host: "www.cpusa.org",
            path: "/feed/?post_type=article",
        })
    }
}

export default new CommunistPartyUSAFeed()