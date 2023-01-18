import RssFeed from "./Base/RssFeed.js";
/**
 * News feed for Fight Back! News
 */
class FightBackNewsFeed extends RssFeed {
    twitter_link = "https://www.twitter.com/fightbacknews"
    facebook_link = "https://www.facebook.com/pages/Fight-Back-News/119252556964"
    
    constructor() {
        super("Fight Back News", {
            host : "www.fightbacknews.org",
            path : "/feed.xml"
        });
    }
}

export default new FightBackNewsFeed();