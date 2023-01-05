import express from "express"

// Importing our feeds
import CubanMinistryOfJusticeFeed from "./src/Feeds/CubanMinistryOfJusticeFeed.js"
import FightBackNewsFeed from "./src/Feeds/FightBackNewsFeed.js"
import RedSailsFeed from "./src/Feeds/RedSailsFeed.js"
import WorkersWorldFeed from "./src/Feeds/WorkersWorldFeed.js"

const app = express()
const port = process.env.PORT || 4001;

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res, next) => {
    const feeds = [
        FightBackNewsFeed,
        RedSailsFeed,
        WorkersWorldFeed,
        CubanMinistryOfJusticeFeed
    ]

    const publishers_available = feeds.map((feed) => [feed.name, feed.get_tag_name()])
    
    Promise.all(feeds.map((feed) => {
        return feed.obtain_feed_data()
    })).then((publishers) => {
        res.render('home', {
            // List of feeds that are available to use
            publishers_available,
            // List of publishers
            publishers
        })
    }).catch(reason => next(reason))
});

app.listen(port, () => {
    console.log(`=== Communist Content App === Listening on port ${port}`);
})