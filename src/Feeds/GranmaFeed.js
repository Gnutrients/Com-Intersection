import RssFeed from "./Base/RssFeed.js";

class GranmaFeed extends RssFeed {
    twitter_link = "https://twitter.com/Granma_English"
    facebook_link = "https://www.facebook.com/pages/Granma-English/230559647101175"
    
    constructor() {
        super('Granma', {
            host: "en.granma.cu",
            path: "/feed"
        });
    }
}

export default new GranmaFeed()