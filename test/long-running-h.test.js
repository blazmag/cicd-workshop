const assert = require('assert')
const { delay, randomValue } = require('./test-utils')

describe("Long running test file H", function()  {
    this.timeout(0)
    it("Should wait for 4 seconds 1", async () => {

        await delay(randomValue(1000))

        assert.ok(true)
    })
    it("Should wait for 4 seconds 2", async () => {

        await delay(randomValue(1000))

        assert.ok(true)
    })

    it("Should wait for 4 seconds 3", async () => {

        await delay(randomValue(1000))

        assert.ok(true)
    })
    it("Should wait for 4 seconds 4", async () => {

        await delay(randomValue(1000))

        assert.ok(true)
    })
    it("Should wait for 4 seconds 5", async () => {

        await delay(randomValue(1000))

        assert.ok(true)
    })
    it("Should wait for 4 seconds 6", async () => {

        await delay(randomValue(1000))

        assert.ok(true)
    })
    it("Should wait for 4 seconds 7", async () => {

        await delay(randomValue(1000))

        assert.ok(true)
    })
    it("Should wait for 4 seconds 8", async () => {

        await delay(randomValue(1000))

        assert.ok(true)
    })


})




