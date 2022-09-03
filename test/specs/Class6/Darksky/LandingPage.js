const { expect , assert } = require("chai");
const LandingPage = require("../POM/Darksky/LandingPage")
const lPage = new LandingPage() 
describe('Test functions of darksky website', () => {
    it('Verify feelsLikeTempValue is between lowTempValue and highTempValue', async() => {
        await browser.url('https://darksky.net')
        await browser.pause(2000)
        const feelsLikeField = await lPage.getFeelsLikwTempValue()
        const lowTempField = await lPage.getLowTempValue()
        const highTempField = await lPage.getHighTempValue()

        expect (feelsLikeField, 'Feels like temp is NOT above min temp').to.be.above(lowTempField)
        expect (feelsLikeField, 'Feels like temp is NOT below max temp').to.be.below(highTempField)
        await browser.pause(2000)
    }); 

    it('Verify user can get temperature based on zipcode', async() => {
        await browser.url('https://darksky.net')
        await browser.pause(2000)
        const tempForDefaultLoc = await lPage.currentTempForThisArea()
        await lPage.setNewLocation('07087')
        await browser.pause(2000)
        const tempForEnteredLoc = await lPage.currentTempForThisArea()
        expect(tempForEnteredLoc, 'Temperature value is NOT as expected').to.not.equal(tempForDefaultLoc)
        await browser.pause(2000)
    });
})