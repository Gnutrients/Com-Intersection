import DataStore from "./DataStore.js";

class FeedDataStore extends DataStore
{
    #number_of_hours_to_invalidate = 1;
    #milliseconds_in_an_hour = 1000 * 60 * 60;


    /**
     * Concrete data store specifically for feeds that implements set times to invalidate data
     */
    constructor() 
    {
        super((data, timestamp) => {
            const now = Date.now();
            const time_elapsed = now - timestamp;
            const time_needed = this.#obtain_time_elapsed_needed_to_invalidate();

            if (time_elapsed >= time_needed)
            {
                return false;
            }

            return true;
        });
    }

    #obtain_time_elapsed_needed_to_invalidate()
    {
        return this.#milliseconds_in_an_hour * this.#number_of_hours_to_invalidate;
    }

    /**
     * Sets the number of hours that the data store uses before it invalidates the data in the store
     * 
     * @param {Number} number_of_hours Number of hours before we invalidate the data
     */
    set_number_of_hours_to_invalidate(number_of_hours)
    {
        this.#number_of_hours_to_invalidate = number_of_hours;
    }
}

export default FeedDataStore