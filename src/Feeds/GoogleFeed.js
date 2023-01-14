import AbstractFeed from "./AbstractFeed.js";

class GoogleFeed extends AbstractFeed {
    constructor() {
        super("Google Feed", { host : "www.google.com" });
    }

    handle_response(data) {
        return data;
    }
}

export default new GoogleFeed();