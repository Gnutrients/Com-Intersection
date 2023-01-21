import RssFeed from "./Base/RssFeed.js"

class CommunistPartyOfSwazilandFeed extends RssFeed 
{
    constructor() {
        super("Communist Party of Swaziland", {
            host: "cp-swa.org",
            path: "/feed/",
        })
    }
}

export default new CommunistPartyOfSwazilandFeed()