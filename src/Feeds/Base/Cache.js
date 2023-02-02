/**
 * Very simple cache in which we take in data that is fed to it
 * and give it a timestamp value so we can 
 */
class Cache {
    data = null;
    timestamp = null;
    /** @var {} */
    invalidation_operation = () => { return false; }

    constructor() {
        this.timestamp = new Date();
    }

    /**
     * Obtains data found in the cache
     * 
     * Returns false if the data should be invalidated
     * @returns {any|boolean}
     */
    get() {

    }

    /**
     * Puts data in the cache
     * 
     * @returns {boolean}
     */
    put() {

    }

    /**
     * Deletes data in the cache
     * 
     * @returns {boolean}
     */
    delete() {

    }
}