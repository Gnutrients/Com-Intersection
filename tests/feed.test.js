
import AbstractFeed from "../src/Feeds/AbstractFeed";
import GoogleFeed from "../src/Feeds/GoogleFeed";

class TestFeed extends GoogleFeed {}

describe("Feed Tests", () => {
    test("Abstract feed will error out if you try and construct it", () => {
        expect(() => { new AbstractFeed() }).toThrow();
    })
})