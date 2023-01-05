
import AbstractFeed from "../src/Feeds/AbstractFeed";
import Publisher from "../src/Publisher";

class TestFeed extends AbstractFeed {
    constructor() {
        super("Test Feed", {
            host : "www.google.com"
        })
    }

    parse_response(data) {
        return new Publisher([])
    }
}

describe("Feed Tests", () => {
    test("Abstract feed will error out if you try and construct it", () => {
        expect(() => { new AbstractFeed() }).toThrow();
    })

    test("Feed will have a tag name", () => {
        let test_feed = new TestFeed();

        expect(test_feed.get_tag_name()).toBe("test-feed")
    })

})