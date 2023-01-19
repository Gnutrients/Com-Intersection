# Comunist Content Aggregator

This project was created because there is not an aggregation website dedicated to providing anti-imperialist content. I hope to change this. I wish to provide a space where people can find new sources of informatiion. 

There is even the possibility that, in using this site, one may see faults within the capitalist system; a system that holds us all back from achieving a future free from oppression

## How to Add a Feed

All feed classes in this project are located in the `/src/Feeds` folder. This folder also has a `Base` folder, which holds all of our base elements that we extend off to make a concrete feed!

Feed naming is in the form of `{FeedName}Feed.js`, where `FeedName` is the name of the publisher that we are connecting to.

Currently, we do not have a feed implementation that allows us to effectively scrape HTML content. But, if the publisher has an RSS feed, then we can use that to implement a concrete `RssFeed`

Below is an example implementation of what an RSS Feed entails

```javascript
import RssFeed from "./Base/RssFeed.js";

class ExampleRssFeed extends RssFeed {
    // OPTIONAL: Put values here to display the corresponding social media icons
    twitter_link = "https://example-twitter.com"
    facebook_link = "https://example-facebook.com"
    instagram_link = "https://example-instagram.com"
    youtube_link = "https://example-youtube.com"
    telegram_link = "https://example-telegram.com"

    // OPTIONAL: Overrides host value being used as link to direct users to publisher home page
    LINK = "example.com";

    constructor() {
        // Name of the feed. This is the name displayed on the front end
        super('Example Feed', {
            // Hostname of the publisher's site
            host: "feed.example.com",
            // Additional path information if necessary can be provided to the query
            path: "/feed"
        });
    }
}

export default new ExampleRssFeed()
```