import RssFeed from "./Base/RssFeed.js";

class GeopoliticalEconomyReportFeed extends RssFeed {
    twitter_link = "https://twitter.com/GeopoliticaEcon"
    facebook_link = "https://facebook.com/GeopoliticalEconomyReport"
    instagram_link = "https://instagram.com/geopoliticaleconomy"
    youtube_link = "https://youtube.com/@GeopoliticalEconomyReport"

    constructor() {
        super('Geopolitical Economy Report', {
            host: "geopoliticaleconomy.com",
            path: "/feed/"
        });
    }
}

export default new GeopoliticalEconomyReportFeed()