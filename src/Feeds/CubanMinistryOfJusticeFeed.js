import RssFeed from "./RssFeed.js";

class CubanMinistryOfJusticeFeed extends RssFeed {
    constructor() {
        super('Cuban Ministry of Justice (SPA)', {
            host : "www.minjus.gob.cu",
            path :  "/en/rss.xml"
        });
    }
}

export default new CubanMinistryOfJusticeFeed()