import AbstractFeed from "./AbstractFeed.js";
import Article from "../Article.js";
import Publisher from "../Publisher.js";
import { XMLParser } from "fast-xml-parser";

/**
 * News feed for Fight Back! News
 */
class FightBackNewsFeed extends AbstractFeed {
    constructor() {
        super({
            host : "www.fightbacknews.org",
            path : "/feed.xml"
        });
    }

    parse_response(data) {
        const parser = new XMLParser();
        const parsed = parser.parse(data);

        const articles = parsed.rss.channel.item.map((value, index) => {
            return new Article(
                value.title,
                value.description,
                value.link,
                value.pubDate
            )
        });

        return new Publisher(articles, {
            description : parsed.rss.channel.description,
            language    : parsed.rss.channel.language,
            link        : parsed.rss.channel.link,
            title       : parsed.rss.channel.title,
        })
    }
}

export default new FightBackNewsFeed();