import AbstractFeed from "./AbstractFeed.js";

/**
 * News feed for Fight Back! News
 *
 *
 */
class FightBackNewsFeed extends AbstractFeed {
    constructor() {
        super({
            host : "www.fightbacknews.org",
            path : "/feed.xml"
        });
    }

    parse_response(data) {
        return data;
    }
}

export default new FightBackNewsFeed();