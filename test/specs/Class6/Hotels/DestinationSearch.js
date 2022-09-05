const { expect } = require("chai");
const DestinationSearch = require("../POM/Hotels/DestinationSearch")
const dPage = new DestinationSearch()
describe('Destination dates verification on hotels website', () => {
    it.only('Verify destination and check-in/ and check-out dates are as user selected', async () => {
        await browser.url('https://www.hotels.com/')
        await browser.pause(2000)
        await dPage.clickInDestField()
        await browser.pause(1000)
        await dPage.typeInDestField('Man')
        await browser.pause(1000)
        await dPage.selectDestination('Manila')
        await browser.pause(2000)
        
        await dPage.clikDatePicker()
        await browser.pause(2000)

        await dPage.selectSepDates('22')
        await browser.pause(1000)

        await dPage.selectOctDates('2')
        await browser.pause(1000)
        
        await dPage.clickCalendarDone()
        await browser.pause(1000)
        
        await dPage.clickSearcDestBttn()
        await browser.pause(2000)

        const locationCheck = await dPage.locationDisplayed()
        await browser.pause(1000)
        
        expect(locationCheck.includes('Manila'), 'Locations check is NOT as expected').to.be.true
        const checkInDate = await dPage.checkInDate()
        console.log(`\n${checkInDate}\n`);
        await browser.pause(1000)
        const checkOutDate =await dPage.checkOutDate()
        console.log(`\n${checkOutDate}\n`);
        await browser.pause(1000)
        
    });
});