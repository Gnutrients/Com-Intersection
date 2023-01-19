import RssFeed from "./Base/RssFeed.js";

class KawsachunNewsFeed extends RssFeed {
    twitter_link = "https://twitter.com/KawsachunNews"
    facebook_link = "https://www.facebook.com/KawsachunNews"
    youtube_link = "https://www.youtube.com/channel/UCWjVWtY_Xxzu__woVPN__pg"

    constructor() {
        super('Kawsachun News', {
            host: "kawsachunnews.com",
            path: "/feed"
        });
    }
}

export default new KawsachunNewsFeed()