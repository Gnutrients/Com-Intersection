import RssFeed from "./Base/RssFeed.js"

class CommunistPartyUSAFeed extends RssFeed 
{
    constructor() {
        super("Communist Party USA", {
            host: "www.cpusa.org",
            path: "/feed/?post_type=article",
        })
    }
}

export default new CommunistPartyUSAFeed()