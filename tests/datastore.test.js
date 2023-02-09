import DataStore from "../src/DataStore/DataStore";
import FeedDataStore from "../src/DataStore/FeedDataStore";

const data_always_valid_validator = (data, timestamp) => { return true };
const data_always_invalid_validator = (data, timestamp) => { return false };

describe("Data Store Tests", () => {
    /** @var {DataStore} data_store */
    var data_store;

    beforeEach(() => {
        data_store = new DataStore(data_always_valid_validator);
    })

    // Get operation tests

    test("Get operation successfully obtains data in put operation", () => {
        var test_data = "This is test data";

        data_store.put(test_data);

        expect(data_store.get()).toBe(test_data);
    });


    test("Get operation returns Falsy value if data is not valid", () => {
        data_store = new DataStore(data_always_invalid_validator)
        var test_data = "This is test data";

        data_store.put(test_data);

        expect(data_store.get()).toBe(false);
    });

    // Put operation tests
    test("Timestamp value is the value of when last put operation is performed", () => {
        var test_data = "This is test data";
        var now = new Date();

        data_store.put(test_data);

        expect(data_store.timestamp).toBe(now.getTime());
    });

    // Delete operation tests
    test("Data is successfully deleted from data_store", () => {
        var test_data = "This is test data";

        data_store.put(test_data);
        data_store.delete();

        expect(data_store.get()).toBe(null);
    });

    test("Timestamp removed when data is deleted from data_store", () => {
        var test_data = "This is test data";

        data_store.put(test_data);
        data_store.delete();

        expect(data_store.timestamp).toBe(null);
    });

    test("FeedDataStore invalidates data after one hour", () => {
        var test_data = "This is test data";
        data_store = new FeedDataStore();
        data_store.put(test_data);

        const mock = jest.spyOn(Date, 'now').mockImplementation(() => {
            let hour_after = new Date(data_store.timestamp);
            hour_after.setHours(hour_after.getHours() + 1);
            return hour_after.getTime();
        });

        var next_store_hit = data_store.get();

        mock.mockClear();

        expect(next_store_hit).toBe(false);
    });

    test("FeedDataStore does not invalidate after one hour when being set to invaliate after three hours", () => {
        var test_data = "This is test data";
        data_store = new FeedDataStore();
        data_store.set_number_of_hours_to_invalidate(3);
        data_store.put(test_data);

        const mock = jest.spyOn(Date, 'now').mockImplementation(() => {
            let hour_after = new Date(data_store.timestamp);
            hour_after.setHours(hour_after.getHours() + 1);
        return hour_after.getTime();
    });

        var next_store_hit = data_store.get();

        mock.mockClear();

        expect(next_store_hit).toBe(test_data);
    });
});