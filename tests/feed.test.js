const AbstractFeed = require('../src/Feeds/AbstractFeed')

describe("Feed Tests", () => {
    test("Abstract feed will error out if you try and construct it", () => {
        expect(() => { new AbstractFeed() }).toThrow();
    })
})