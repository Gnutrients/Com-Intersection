import AbstractFeed from "./AbstractFeed.js";
import { load, CheerioAPI } from "cheerio";

/**
 * Base class that provides classes that extend this class with inherited 
 * methods that allow for easier scraping of data
 * 
 * Instead of raw data coming through to the 
 */
class WebScraperFeed extends AbstractFeed
{
    /**
     * Loads HTML into Cheerio and returns the Cheerio API
     * 
     * @param {string} html_string Any string of HTML
     * @returns {CheerioAPI}
     */
    _load_html(html_string) {
        return load(html_string);
    }

    _make_request(options) {
        return super(options)
                .then(data => this._load_html(data));
    }
}

export default WebScraperFeed