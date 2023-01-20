import RssFeed from "./Base/RssFeed.js";

class ShadowproofFeed extends RssFeed {
    facebook_link = "https://www.facebook.com/shadowproofcom"
    instagram_link = "https://www.instagram.com/shadowproofcom/"
    twitter_link = "https://twitter.com/shadowproofcom"
    youtube_link = "https://www.youtube.com/c/shadowproofcom"

    constructor() {
        super('Shadowproof', {
            host: "shadowproof.com",
            path: "/feed/"
        });
    }
}

export default new ShadowproofFeed()