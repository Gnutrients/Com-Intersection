const http = require('node:http');

class AbstractFeed {
    URL = null;

    constructor(URL) {
        this.URL = URL;

        if (!this.URL)
        {
            throw new Error("A Feed must have a URL defined as a class variable");
        }

        if (!this.parse_response)
        {
            throw new Error("Feeds must implement the parse_response(data) method");
        }
    }

    /**
     * Main public class used to initiate feed data collection procedures
     */
    async obtain_feed_data()
    {
        return this.parse_response(await this.#make_request());
    }

   #make_request()
    {
        return new Promise((resolve, reject) => {
            http.request({
                "hostname" : this.URL,
                "method" : "GET"
            }, (response) => {
                let chunked = "";
                response.setEncoding('utf8');

                response.on('data', (chunk) => {
                    chunked += chunk;
                });

                response.on('end', () => {
                    resolve(chunked);
                });
            }).on('error', (e) => {
                reject(`problem with request: ${e.message}`);
            }).end();
        })
    }
}

module.exports = AbstractFeed;