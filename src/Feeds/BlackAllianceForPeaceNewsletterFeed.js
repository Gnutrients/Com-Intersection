import RssFeed from "./Base/RssFeed.js";

class BlackAllianceForPeaceNewsletterFeed extends RssFeed {
    constructor() {
        super('Black Alliance For Peace Newsletter', {
            host: "blackallianceforpeace.com",
            path: "/newsletter?format=rss"
        });
    }
}

export default new BlackAllianceForPeaceNewsletterFeed()