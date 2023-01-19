import RssFeed from "./Base/RssFeed.js";

class CubanMinistryOfJusticeFeed extends RssFeed {
    facebook_link = "https://www.facebook.com/MinisterioJusticiaCuba"
    twitter_link = "https://www.twitter.com/CubaMinjus"
    youtube_link = "https://www.youtube.com/channel/UCXcWC-XHA1l0uzQ-va8bVfw"
    
    constructor() {
        super('Cuban Ministry of Justice (SPA)', {
            host : "www.minjus.gob.cu",
            path :  "/en/rss.xml"
        });
    }
}

export default new CubanMinistryOfJusticeFeed()