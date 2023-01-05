import http from "node:http";
import Article from "../Article.js";
import Publisher from "../Publisher.js"

class AbstractFeed {
    URL = null;
    #OPTIONS = null;

    /**
     * Constructor
     * @param {*} options Must have a "host" option, ex. "www.google.com"
     */
    constructor(options = {}) {

        this.#OPTIONS = Object.assign(options, {
            method : "GET",
            headers : {
                "User-Agent": "communist-content-aggregator/" + process.env.npm_package_version
            }
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
        const response = this.parse_response(await this.#make_request(this.#OPTIONS));

        if (!Publisher.prototype.isPrototypeOf(response))
        {
            throw new Error("Your feed must return a Publisher object")
        }

        return response;
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

                response.on('error', (e) => {
                    console.log(e)
                })
            }).on('error', (e) => {
                reject(`problem with request: ${e.message}`);
            }).end();
        })
    }
}

export default AbstractFeed;