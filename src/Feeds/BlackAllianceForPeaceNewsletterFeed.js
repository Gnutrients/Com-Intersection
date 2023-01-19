import RssFeed from "./Base/RssFeed.js";

class BlackAllianceForPeaceNewsletterFeed extends RssFeed {
    twitter_link = "https://twitter.com/blacks4peace"
    facebook_link = "https://facebook.com/blackallianceforpeace"
    instagram_link = "https://www.instagram.com/blackallianceforpeace/"
    youtube_link = "https://www.youtube.com/channel/UCs2jKnOIfnP6-L6k0nDGygw"
    
    constructor() {
        super('Black Alliance For Peace Newsletter', {
            host: "blackallianceforpeace.com",
            path: "/newsletter?format=rss"
        });
    }
}

export default new BlackAllianceForPeaceNewsletterFeed()