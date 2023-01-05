import http from "node:http";

class AbstractFeed {
    URL = null;
    #OPTIONS = null;

    /**
     * Constructor
     * @param {*} options Must have a "host" option, ex. "www.google.com"
     */
    constructor(options = {}) {

        this.#OPTIONS = Object.assign(options, {
            method : "GET"
        });

        if (!this.#OPTIONS.host)
        {
            throw new Error("You must provide the \"host\" option");
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
        return this.parse_response(await this.#make_request(this.#OPTIONS));
    }

    /**
     * Main request making function of a Feed.
     *
     * @returns {Promise} Resolves with data from the request. Rejects if there is an issue with the request
     */
   #make_request(options)
    {
        return new Promise((resolve, reject) => {
            http.request(options, (response) => {
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

export default AbstractFeed;