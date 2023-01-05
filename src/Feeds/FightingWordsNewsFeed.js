import AbstractFeed from "./AbstractFeed.js";

class FightBackNewsFeed extends AbstractFeed {
    constructor() {
        // super("www.fightbacknews.org");
    }

    parse_response(data) {
        return data;
    }
}

export default new FightBackNewsFeed();