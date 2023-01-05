import AbstractFeed from "./AbstractFeed.js";

class FightingWordsNewsFeed extends AbstractFeed {

    constructor() {
        // super("www.fightbacknews.org");
    }

    parse_response(data) {
        return data;
    }
}

export default new FightingWordsNewsFeed();