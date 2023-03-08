import RssFeed from "./Base/RssFeed.js";

class GingerRiverReview extends RssFeed {
    constructor() {
        super('Ginger River Review', {
            host: "www.gingerriver.com",
            path: "/feed"
        });
    }
}

export default new GingerRiverReview()