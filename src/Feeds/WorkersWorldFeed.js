import RssFeed from "./Base/RssFeed.js"

/**
 * Feed aggregator service for Workers World
 *
 * Unable to connect to Workers World, though...
 */
class WorkersWorldFeed extends RssFeed {
    constructor() {
        super("Workers World", {
            host : "www.workers.org",
            path : "/feed/",
        });
    }
}

export default new WorkersWorldFeed();