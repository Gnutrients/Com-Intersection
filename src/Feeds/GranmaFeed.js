import RssFeed from "./Base/RssFeed.js";

class GranmaFeed extends RssFeed {
    constructor() {
        super('Granma', {
            host: "en.granma.cu",
            path: "/feed"
        });
    }
}

export default new GranmaFeed()