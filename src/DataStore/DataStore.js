class DataStore {
    /** @var {any} - Data cached in our object */
    #data;
    #invalidation_operation;

    /** @var {string} timestamp Date of last "put" operation */
    timestamp;

    /**
     * Class with public methods used to persist data in memory.
     * 
     * Supply this class with a custom invalidation operation to customize how Data is stored
     * and if we need to obtain new data.
     * 
     * @param {object} invalidation_operation Closure supplied cache data and timestamp of data. Returns a boolean indicating if the value should be invalidated
     * @returns {void}
     */
    constructor(invalidation_operation)
    {
        this.#invalidation_operation = invalidation_operation ?? ((data, timestamp) => { return true; })
        this.#data = null;
        this.timestamp = null;
    }
    
    /**
     * Predicate function that indicates whether data is valid
     * 
     * @returns {boolean}
     */
    is_data_valid()
    {
        return this.#invalidation_operation(this.#data, this.timestamp)
    }

    /**
     * Method to obtain the data that was put in the cache.
     * 
     * @returns {any} Persistent data found in the cache, `null` if there is no data, or `false` if the data in the cache is not valid
     */
    get() {
        if (!this.is_data_valid())
        {
            this.delete();
            return false;
        }

        return this.data;
    }

    /**
     * Method to put data into the cache so that it persists
     * 
     * @returns {boolean}
     */
    put(data) {
        this.data = data;
        this.timestamp = Date.now();
        return true;
    }

    /**
     * Method to delete the data in the cache
     * 
     * @returns {boolean}
     */
    delete() {
        this.data = null;
        this.timestamp = null;
    }
}

export default DataStore