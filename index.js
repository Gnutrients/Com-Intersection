import express from "express"
import FightBackNewsFeed from "./src/Feeds/FightBackNewsFeed.js"

const app = express()
const port = 80
const feeds = [
    FightBackNewsFeed
]

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`=== Communist Content App === Listening on port ${port}`);
});