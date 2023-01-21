import RssFeed from "./Base/RssFeed.js"

class CommunistPartyOfSwazilandFeed extends RssFeed 
{  
    twitter_link = "https://twitter.com/CPSwaziland"
    facebook_link = "https://www.facebook.com/CPSwaziland/"
    
    constructor() {
        super("Communist Party of Swaziland", {
            host: "cp-swa.org",
            path: "/feed/",
        })
    }
}

export default new CommunistPartyOfSwazilandFeed()