import RssFeed from "./Base/RssFeed.js";

class BreakthroughNewsFeed extends RssFeed {
    twitter_link = "https://twitter.com/btnewsroom"
    youtube_link = "https://www.youtube.com/breakthroughnews"
    instagram_link = "https://www.instagram.com/btnewsroom/"

    constructor() {
        super('Breakthrough News', {
            host: "breakthroughnews.org",
            path: "/feed/"
        });
    }
}

export default new BreakthroughNewsFeed()