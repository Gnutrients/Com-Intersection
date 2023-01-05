import express from "express"

// Importing our feeds
import FightBackNewsFeed from "./src/Feeds/FightBackNewsFeed.js"

const app = express()
const port = 80

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const feeds = [
        FightBackNewsFeed,
    ]

    const publishers_available = feeds.map((feed) => feed.name)

    Promise.all(feeds.map((feed) => {
        return feed.obtain_feed_data()
    })).then((publishers) => {
        res.render('home', {
            // List of feeds that are available to use
            publishers_available,
            // List of publishers
            publishers
        })
    })
});

app.listen(port, () => {
    console.log(`=== Communist Content App === Listening on port ${port}`);
});