import RssFeed from "./Base/RssFeed.js";

class MintPressNewsFeed extends RssFeed {
    facebook_link = "http://www.facebook.com/pages/MintPress/277613075615568"
    instagram_link = "https://www.instagram.com/explore/tags/mintpressnews"
    twitter_link = "https://twitter.com/#!/MintPressNews"
    youtube_link = "https://www.youtube.com/user/MintPressNews"
    telegram_link = "https://t.me/mintpress_news"

    constructor() {
        super('MintPress News', {
            host: "www.mintpressnews.com",
            path: "/feed/"
        });
    }
}

export default new MintPressNewsFeed()