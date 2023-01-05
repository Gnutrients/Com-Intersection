import Publisher from "../Publisher.js";
import AbstractFeed from "./AbstractFeed.js";

/**
 * Feed aggregator service for Workers World
 *
 * Unable to connect to Workers World, though...
 */
class WorkersWorldFeed extends AbstractFeed {
    constructor() {
        super("Workers World", {
            host : "www.workers.org",
            path : "/feed",
            headers : {
                "Accept": "text/html,application/xhtml+xml,application/xml",
                "Accept-Language" : "en-US",
            }
        });
    }

    parse_response(data) {
        return new Publisher([]);
    }
}

export default new WorkersWorldFeed();