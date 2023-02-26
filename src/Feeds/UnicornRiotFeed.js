import RssFeed from "./Base/RssFeed.js";

class UnicornRiotFeed extends RssFeed {
    facebook_link = "https://facebook.com/unicornriot.ninja"
    twitter_link = "https://twitter.com/ur_ninja"
    youtube_link = "https://www.youtube.com/channel/UCeHbMlHDec5NmJfiQXMYGXQ"
    instagram_link = "https://www.instagram.com/unicorn.riot/"

    constructor() {
        super('Unicorn Riot', {
            host: "unicornriot.ninja",
            path: "/feed/"
        });
    }
}

export default new UnicornRiotFeed()