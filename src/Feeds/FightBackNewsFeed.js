import RssFeed from "./RssFeed.js";
/**
 * News feed for Fight Back! News
 */
class FightBackNewsFeed extends RssFeed {
    constructor() {
        super("Fight Back News", {
            host : "www.fightbacknews.org",
            path : "/feed.xml"
        });
    }
}

export default new FightBackNewsFeed();