const { expect , assert } = require("chai");

describe('Login', () => {
    it('Verify the page title', async () => {
        await browser.url('https://www.facebook.com/');
        // await browser.pause(7000);
        const pageTitle = await browser.getTitle();
        // await browser.pause(7000);
        console.log(pageTitle);
        expectedLogin = 'LoG In';
        console.log(pageTitle);
        expect(pageTitle.toLowerCase(), 'Facebook title is not as expected').to.contain(expectedLogin.toLowerCase()); 
    })
});