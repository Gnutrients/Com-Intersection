const GoogleFeed = require("./src/Feeds/GoogleFeed");


GoogleFeed.obtain_feed_data()
    .then(
        (data) => {
            console.log("Feed Data " + data);
        },
        (rdata) => {
            console.log("Rejected Data " + rdata);
        }
    )