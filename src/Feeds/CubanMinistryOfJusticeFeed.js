import RssFeed from "./RssFeed.js";

class CubanMinistryOfJusticeFeed extends RssFeed {
    use_name_for_title = true

    constructor() {
        super('Ministerio De Justicia República De Cuba', {
            host : "www.minjus.gob.cu",
            path :  "/en/rss.xml"
        });
    }
}

export default new CubanMinistryOfJusticeFeed()