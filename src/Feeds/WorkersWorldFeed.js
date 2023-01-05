import AbstractFeed from "./AbstractFeed.js";

/**
 * Feed aggregator service for Workers World
 *
 * Unable to connect to Workers World, though...
 */
class WorkersWorldFeed extends AbstractFeed {
    constructor() {
        super({
            host : "www.workers.org",
            path : "/feed",
            headers : {
                "Accept": "text/html,application/xhtml+xml,application/xml",
                "Accept-Language" : "en-US",
            }
        });
    }

    parse_response(data) {
        return data;
    }
}

export default new WorkersWorldFeed();