/**
 * Used as a mixin to hold in one place all of the paraeters that Feeds and Publishers can share to
 * show content defined in our Feeds on the website
 */
class SiteContentMixin {
    /** @property {string} twitter_link */
    twitter_link = null

    /** @property {string} facebook_link */
    facebook_link = null

    /** @property {string} instagram_link */
    instagram_link = null

    /** @property {string} youtube_link */
    youtube_link = null
    
    /** @property {string} telegram_link */
    telegram_link = null
}

export default SiteContentMixin