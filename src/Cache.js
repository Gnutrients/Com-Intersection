/**
 * Very simple cache in which we take in data that is fed to it
 * and give it a timestamp value so we can 
 */
class Cache {
    /** @var {any} #data Data cached in our object */
    #data;
    #invalidation_operation;

    /** @var {string} timestamp Date of last "put" operation */
    timestamp;

    /**
     * @param {object} invalidation_operation Possibly user-supplied method that returns a boolean indicating if data is still valid
     *                                        This method is given data and timestamp parameters, in that order.
     *                                        If no operation is given, then the default behavior is that data is always invalid.
     */
    constructor(invalidation_operation)
    {
        this.#invalidation_operation = invalidation_operation ?? ((data, timestamp) => { return true; })
        this.#data = null;
        this.timestamp = null;
    }
    
    is_data_valid()
    {
        return this.#invalidation_operation(this.#data, this.timestamp)
    }

    /**
     * Obtains data found in the cache
     * 
     * If the data should be invalidated then we return false and delete current data in the system.
     * @returns {any|boolean}
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
     * Puts data in the cache
     * 
     * @returns {boolean}
     */
    put(data) {
        this.data = data;
        this.timestamp = new Date().getTime();
        return true;
    }

    /**
     * Deletes data in the cache
     * 
     * @returns {boolean}
     */
    delete() {
        this.data = null;
        this.timestamp = null;
    }
}

export default Cache