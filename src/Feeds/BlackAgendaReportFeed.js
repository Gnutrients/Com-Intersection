import RssFeed from "./Base/RssFeed.js";

class BlackAgendaReportFeed extends RssFeed {
    twitter_link = "https://twitter.com/blkagendareport"
    facebook_link = "https://www.facebook.com/blackagendareport"

    constructor() {
        super('Black Agenda Report', {
            host: "blackagendareport.com",
            path: "/feeds-story"
        });
    }
}

export default new BlackAgendaReportFeed()