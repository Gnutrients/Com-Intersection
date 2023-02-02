import Cache from "../src/Cache";

const data_always_valid_validator = (data, timestamp) => { return true };
const data_always_invalid_validator = (data, timestamp) => { return false };

describe("Cache Tests", () => {
    /** @var {Cache} cache */
    var cache;

    beforeEach(() => {
        cache = new Cache(data_always_valid_validator);
    })

    // Get operation tests

    test("Get operation successfully obtains data in put operation", () => {
        var test_data = "This is test data";

        cache.put(test_data);

        expect(cache.get()).toBe(test_data);
    });


    test("Get operation returns Falsy value if data is not valid", () => {
        cache = new Cache(data_always_invalid_validator)
        var test_data = "This is test data";

        cache.put(test_data);

        expect(cache.get()).toBe(false);
    });

    // Put operation tests
    test("Timestamp value is the value of when last put operation is performed", () => {
        var test_data = "This is test data";
        var now = new Date();

        cache.put(test_data);

        expect(cache.timestamp).toBe(now.getTime());
    });

    // Delete operation tests
    test("Data is successfully deleted from Cache", () => {
        var test_data = "This is test data";

        cache.put(test_data);
        cache.delete();

        expect(cache.get()).toBe(null);
    });

    test("Timestamp removed when data is deleted from Cache", () => {
        var test_data = "This is test data";

        cache.put(test_data);
        cache.delete();

        expect(cache.timestamp).toBe(null);
    });
});