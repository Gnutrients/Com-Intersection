import Article from "../Article.js";
import Publisher from "../Publisher.js";
import AbstractFeed from "./AbstractFeed.js";
import { XMLParser } from "fast-xml-parser"

/**
 * Feed that can be extended for RSS feeds.
 * 
 * Because RSS is structured in a certain way we can be fairly ensured that,
 * if given a valid rss file, we can get similar data from everywhere that implements
 * RSS.
 */
class RssFeed extends AbstractFeed {
    constructor(name, options = {}) {
        super(name, options)
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
            description: parsed.rss.channel.description,
            language: parsed.rss.channel.language || "en",
            link: parsed.rss.channel.link,
            title: parsed.rss.channel.title,
        })
    }
}

export default RssFeed