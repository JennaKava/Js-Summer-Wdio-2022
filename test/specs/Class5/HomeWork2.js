const { expect , assert } = require("chai");


describe('Find and print array of webelements from darksky website', () => {
    it('Print out all the timeline wed elements', async() => {
        await browser.url('https://darksky.net/')
        await browser.pause(2000)
        const timeLineHours = await $$('//div[@class="hours"]//span[@class="hour"]')
        for (const timeLineHour of timeLineHours ){
            console.log(await timeLineHour.getText());
        }
    });
});

/**
 * Verify destination and check-in/ and check-out dates are as user selected
 * 
 * 1. Launch hotels.com
 * 2. Type "man" in destination
 * 3. Select "Manila" from auto-suggestion
 * 4. Select Aug 20 to Sep-5 as check-in and check-out respectively
 * 5. Click Search button
 * 6. Verify destination has Manila
 * 7. Verify check-in date in Aug-20
 * 8. Verify check-out date in Sep-5
 */

describe('Destination dates verification on hotels website', () => {
    it.only('Verify destination and check-in/ and check-out dates are as user selected', async () => {
        await browser.url('https://www.hotels.com/')
        await browser.pause(2000)
        await $('//button[contains(@data-stid, "destination_form_field")]').click()
        await browser.pause(2000)
        await $('//*[@id="destination_form_field"]').setValue('Man')
        await browser.pause(2000)
        const autoSuggestions = await $$('//div[@class="truncate"]//strong')
        for(const selectManila of autoSuggestions){
            const autoSuggestText = await selectManila.getText()
            if (autoSuggestText.toLowerCase().localeCompare('Manila'.toLowerCase()) === 0){
                await selectManila.click()
                break;
            }
        }

        await browser.pause(2000)
        await $('//button[@data-stid="open-date-picker"]').click()
        await browser.pause(2000)
        const allSepDates = await $$('//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]');
            for(const selectedDate of allSepDates){
                const date = await selectedDate.getAttribute('data-day')
                if(date.localeCompare('22') === 0){
                    await selectedDate.click()
                    break;
                }
            }
        await browser.pause(2000)
        const allOctDates = await $$('//h2[text()="October 2022"]/following-sibling::table//button[not(@disabled)]');
            for(const selectedDate of allOctDates){
                const date = await selectedDate.getAttribute('data-day')
                if(date.localeCompare('2') === 0){
                    await selectedDate.click()
                    break;
                }
            }
        await browser.pause(2000)
        await $('//button[@data-stid="apply-date-picker"]').click()
        
        await $('//button[@id="submit_button"]').click()
        await browser.pause(3000)
        const locationCheck = await $('//button[@class="uitk-fake-input uitk-form-field-trigger"]').getText()
        await browser.pause(1000)
        
        expect(locationCheck.includes('Manila'), 'Locations check is NOT as expected').to.be.true
        const checkInDate = await $('//button[@id="hotels-check-in-btn"]').getText()
        console.log(`\n${checkInDate}\n`);
        await browser.pause(1000)
        const checkOutDate =await $('//button[@id="hotels-check-out-btn"]').getText()
        console.log(`\n${checkOutDate}\n`);
        await browser.pause(1000)
        
    });
});









 describe('', () => {
    it('Verify destination and check-in/check-out dates are selected', async () => {
        // Verify destination and check-in/ and check-out dates are as user selected
        // 1. Launch hotels.com
        await browser.url('https://www.hotels.com/');
        await browser.pause(6000);
        //2. Type "man" in destination
        await $("//button[@aria-label='Going to']").click();
        //goingToButton.click();
        await browser.pause(3000);
        await $('#destination_form_field').setValue('man');
        
        // 3. Select "Manila" from auto-suggestion
        const autoSuggestions = await $$("//div[@class = 'truncate']//strong");
        for (const selectManila of autoSuggestions) {
            const suggestionText = await selectManila.getText();
            if (suggestionText.toLowerCase().localeCompare('manila'.toLowerCase()) === 0) {
                await selectManila.click();
                break;
            }
        }
        // 4. Select Aug 20 to Sep-5 as check-in and check-out respectively
        await $('#date_form_field-btn').click();
        await browser.pause(3000);
        const allSeptDates = await $$('//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]');
            for (const dateSelected of allSeptDates){
                const date = await dateSelected.getAttribute('data-day')
                if(date.localeCompare('5') === 0){
                    await dateSelected.click();
                    break;
                }
            }
        await browser.pause(2000);
        const allSeptDates2 = await $$('//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]');
            for (const dateSelected of allSeptDates2){
                const date = await dateSelected.getAttribute('data-day');
                if(date.localeCompare('7') === 0){
                    await dateSelected.click();
                    break;
                }
            }
        await browser.pause(3000);
        await $('//button[@data-stid="apply-date-picker"]').click();
        await browser.pause(3000);
        // 5. Click Search button
        await $('//button[@id="submit_button"]').click();
        // 6. Verify destination has Manila
        const locationCheck = await $('//button[@data-stid= "hotels-destination-menu-trigger"]').getText();
        expect(locationCheck.includes('Hawaii'), 'Location is NOT as expected').to.be.true;
        console.log(`\n\n${locationCheck}\n\n`);
        // 7. Verify check-in date in Sep-5
        const checkInDate = await $('#hotels-check-in-btn').getText();
        console.log(`\n\n${checkInDate}\n\n`);
        // 8. Verify check-out date in Sep-20
        const checkOutDate = await $('#hotels-check-out-btn').getText();
        console.log(`\n\n${checkOutDate}\n\n`);
    });
});