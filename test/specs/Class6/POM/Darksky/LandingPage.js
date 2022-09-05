const Commands = require("../Commands")

class LandingPage {
    commands = new Commands()
    feelsLikeTempLocator = '.feels-like-text'
    lowTempocator = '.low-temp-text'
    highTempLocator = '.high-temp-text'
    currentLocFieldLocator = '//div[@id="header"]//form[@id="searchForm"]//input[@type="text"]'
    searchButtonLocator = 'a[class="searchButton"]'
    tempForZipCodeLocator ='//div[@class="center"]//div[@id="title"]//span[@class="currently"]//span[@class="desc swap"]//span[@class="summary swap"]'

    async getTempValue(locator) {
        return await this.commands.getNumberVlueFromString(locator)
    }

    async getFeelsLikwTempValue() {
        return await this.getTempValue(this.feelsLikeTempLocator)
    }
    async getLowTempValue() {
        return await this.getTempValue(this.lowTempocator)
    }
    async getHighTempValue() {
        return await this.getTempValue(this.highTempLocator)
    }
    async setNewLocation(zipCode) {
        await this.commands.typeInWebElement(this.currentLocFieldLocator, zipCode)
        await this.clickSearchLocation()
    }
    async clickSearchLocation() {
        await this.commands.clickWebElement(this.searchButtonLocator)
    }
    async currentTempForThisArea() {
        return await this.commands.getTextFromWebElement(this.tempForZipCodeLocator)
    }
        
}

module.exports = LandingPage