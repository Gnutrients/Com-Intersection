import RssFeed from "./RssFeed.js";

class BlackAgendaReportFeed extends RssFeed {
    constructor() {
        super('Black Agenda Report', {
            host: "blackagendareport.com",
            path: "/feeds-story"
        });
    }
}

export default new BlackAgendaReportFeed()