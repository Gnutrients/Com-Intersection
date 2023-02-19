import RssFeed from "./Base/RssFeed.js";

class TheGrayzoneFeed extends RssFeed {
    facebook_link = "http://www.facebook.com/thegrayzone"
    instagram_link = "http://www.instagram.com/thegrayzonenews"
    twitter_link = "http://www.twitter.com/thegrayzonenews"
    telegram_link = "https://t.me/thegrayzonenews"

    // The link to the site generated by the RSS feed should not be used to send people to
    LINK = "thecradle.co";
    constructor() {
        super('The Grayzone', {
            host: "thegrayzone.com",
            path: "/feed/"
        });
    }
}

export default new TheGrayzoneFeed()