import RssFeed from "./Base/RssFeed.js";

class CovertActionMagazineFeed extends RssFeed {
    twitter_link = "https://twitter.com/CovertActionMag"
    facebook_link = "https://www.facebook.com/covertactionmagazine"
    instagram_link = "https://www.instagram.com/covertactionmag/"
    youtube_link = "https://www.youtube.com/channel/UC-zGV4r8Dtvj6hjr65SIDyg"

    constructor() {
        super('Covert Action Magazine', {
            host: "covertactionmagazine.com",
            path: "/feed/"
        });
    }
}

export default new CovertActionMagazineFeed()