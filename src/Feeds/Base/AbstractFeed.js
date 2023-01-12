import https from "node:https";
import Publisher from "../../Publisher.js"

/**
 * Base feed that all other feeds extend off of
 * 
 * Concrete feeds extending off of this class must implement the method 
 * "parse_response(data)", and that method must return a Publisher object
 * 
 * This class is primarily used as a data fetcher for information from a website.
 * How the developer interacts with that information with `parse_response` is none
 * of this class' business
 */
class AbstractFeed {
    URL = null
    OPTIONS = null
    name = null
    debug = false

    /**
     * Constructor
     * @param {object} options Must have a "host" option, ex. "www.google.com"
     */
    constructor(name, options = {}) {
        this.name = name
        this.OPTIONS = Object.assign({
            method: "GET",
            headers: {
                // This is here to provide a little signal that our project is obtaining this information
                // May want to provide a hash?
                "User-Agent": "comintersectiondotnet/" + process.env.npm_package_version
            },
        }, options)

        if (!this.OPTIONS.host)
        {
            throw new Error("You must provide the \"host\" option")
        }

        if (!this.parse_response)
        {
            throw new Error("Feeds must implement the parse_response(data) method")
        }

        if (!this.name)
        {
            throw new Error("This feeds needs a name")
        }
    }

    /**
     * Used to create a key based on the name of the feed
     * 
     * @returns {string} A tag name of the feed
     */
    get_tag_name() {
        return this.name.toLowerCase().replace("/[^\w\s]/", "").replace(" ", "-")
    }

    /**
     * Public facing method for this class that gives an interface to requesting and obtaining data
     * for the feed
     * 
     * @throws {Error}
     * @returns {Promise}
     */
    async obtain_feed_data()
    {
        try {
            const response = this.parse_response(await this.#make_request(this.OPTIONS));
            
            if (!Publisher.prototype.isPrototypeOf(response)) {
                throw new Error("Your feed must return a Publisher object")
            }

            return response
        } catch(error) {
            console.error(error);
            return null;
        }
    }

    /**
     * Each Feed will use this method to make a request with the options given.
     *
     * @returns {Promise} Resolves with data from the request. Rejects if there is an issue with the request
     */
   #make_request(options)
    {
        return new Promise((resolve, reject) => {
            https.request(options, (response) => {
                let chunked = ""
                response.setEncoding('utf8');

                if (this.debug)
                {
                    console.log("\x1b[36m%s\x1b[0m", "=== RESPONSE DATA ===")
                    console.log("\x1b[36m%s\x1b[0m", "Status Code: " + response.statusCode)
                    console.log("\x1b[36m%s\x1b[0m", "Headers: " + JSON.stringify(response.headers, null, 4))
                }
                response.on('data', (chunk) => {
                    if (this.debug)
                    {
                        console.log("Data Obtained!");
                    }
                    chunked += chunk
                });

                response.on('end', () => {
                    if (this.debug)
                    {
                        console.log("Resolving request with data")
                        console.log(chunked)
                    }
                    resolve(chunked)
                });

                response.on('error', (e) => {
                    console.log(e)
                })
            }).on('error', (e) => {
                reject(`problem with request: ${e.message}`)
            }).end()
        })
    }
}

export default AbstractFeed