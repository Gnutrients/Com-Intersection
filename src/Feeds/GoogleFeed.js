const AbstractFeed = require('./AbstractFeed');

class GoogleFeed extends AbstractFeed {
    constructor() {
        super("www.google.com");
    }

    parse_response(data) {
        return data;
    }
}

module.exports = new GoogleFeed();