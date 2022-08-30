const { expect , assert } = require("chai");

describe('Find elements scenarios', () => {
    it('Getting multiple webElements', async () => {
    await browser.url('https://www.darksky.net/')
    await browser.pause(2000)
    const allTempElements = await $$('//span[contains(@class, "-text")]')
    for (const tempElement of allTempElements){
        console.log(await tempElement.getText());
    }
    });

    it('Verify the number of links of facebook-homepage is 46', async () => {
    await browser.url('https://www.facebook.com')
    await browser.pause(2000)
    const allHomePgLinks = await $$('<a>')
    await browser.pause(2000)
    expect(allHomePgLinks.length, 'Number of links is NOT as expected').to.equal(46)    
    });

    it('Pick value from Auto-suggestion', async () => {
        await browser.url('https://www.hotels.com')
        await browser.pause(2000)

        await $("//button[@aria-label='Going to']").click()
        await browser.pause(2000)

        await $('#destination_form_field').setValue('New')
        await browser.pause(2000)

        const autoSuggestionElements = await $$("//div[@class='truncate']//strong");
        

        for (const autoSuggestionElement of autoSuggestionElements) {
            const suggestionText = await autoSuggestionElement.getText();
            console.log(suggestionText);
            if (suggestionText.toLowerCase().localeCompare('manhattaN'.toLowerCase()) === 0) {
                await autoSuggestionElement.click()
                break;
            }
        }
       await browser.pause(5000)
    });

    it('Select September 26 as check in date and October 4th as checkout date', async () => {
        await browser.url('https://www.hotels.com')
        await browser.pause(2000)

        await $('#date_form_field-btn').click();
        await browser.pause(2000);

        const allDateElements = await $$('//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]')
        for (const dateElement of allDateElements) {
            const date = await dateElement.getAttribute('data-day')
            if (date.localeCompare("26") === 0) {
                await dateElement.click()
                break;
            }
        }
        const allSepDateElements = await $$('//h2[text()="October 2022"]/following-sibling::table//button[not(@disabled)]');
        for (const dateElement of allSepDateElements) {
            const date = await dateElement.getAttribute('data-day');
            if (date.localeCompare("4") === 0) {
                await dateElement.click();
                break;
            }
        }
        await browser.pause(2000);

        await $('//button[@data-stid="apply-date-picker"]').click();

        await browser.pause(20000);

    });

});
