import RssFeed from "./Base/RssFeed.js"

/**
 * Feed aggregator service for Workers World
 *
 * Unable to connect to Workers World, though...
 */
class WorkersWorldFeed extends RssFeed {
    facebook_link = "https://www.facebook.com/WorkersWorldParty"
    twitter_link = "https://twitter.com/workersworld"
    youtube_link = "https://www.youtube.com/user/wwpvideo"
    
    constructor() {
        super("Workers World", {
            host : "www.workers.org",
            path : "/feed/",
        });
    }
}

export default new WorkersWorldFeed();