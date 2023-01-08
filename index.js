import express from "express"

// Importing our feeds
import BlackAgendaReportFeed from "./src/Feeds/BlackAgendaReportFeed.js"
import CommunistPartyUSAFeed from "./src/Feeds/CommunistPartyUSAFeed.js"
import CubanMinistryOfJusticeFeed from "./src/Feeds/CubanMinistryOfJusticeFeed.js"
import FightBackNewsFeed from "./src/Feeds/FightBackNewsFeed.js"
import LiberationNewsFeed from "./src/Feeds/LiberationNewsFeed.js"
import RedSailsFeed from "./src/Feeds/RedSailsFeed.js"
import WorkersWorldFeed from "./src/Feeds/WorkersWorldFeed.js"
import WorldSocialistWebSiteFeed from "./src/Feeds/WorldSocialistWebSiteFeed.js"

const app = express()
const port = process.env.PORT || 4001;

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res, next) => {
    const feeds = [
        FightBackNewsFeed,
        WorkersWorldFeed,
        BlackAgendaReportFeed,
        CubanMinistryOfJusticeFeed,
        RedSailsFeed,
        LiberationNewsFeed,
        CommunistPartyUSAFeed,
        WorldSocialistWebSiteFeed
    ]

    const publishers_available = feeds.map((feed) => [feed.name, feed.get_tag_name()])
    
    Promise.all(feeds.map((feed) => {
        return feed.obtain_feed_data()
    })).then( publishers => publishers.filter( value => {
        return value;
    })).then( filtered_publishers => {
        res.render('home', {
            // List of feeds that are available to use
            publishers_available,
            // List of publishers
            publishers : filtered_publishers
        })
    }).catch(reason => next(reason))
});

app.listen(port, () => {
    console.log(`=== Server listening on port ${port} ===`);
})