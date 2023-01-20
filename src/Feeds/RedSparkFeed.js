import RssFeed from "./Base/RssFeed.js";

class RedSparkFeed extends RssFeed {
    facebook_link = "https://www.facebook.com/Redspark-956948997767833/"

    constructor() {
        super('Red Spark', {
            host: "www.redspark.nu",
            path: "/en/feed/"
        });
    }
}

export default new RedSparkFeed()