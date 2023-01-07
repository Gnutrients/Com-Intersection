import RssFeed from "./RssFeed.js";

class CubanMinistryOfJusticeFeed extends RssFeed {
    constructor() {
        super('Ministerio De Justicia República De Cuba', {
            host : "www.minjus.gob.cu",
            path :  "/en/rss.xml"
        });
    }
}

export default new CubanMinistryOfJusticeFeed()