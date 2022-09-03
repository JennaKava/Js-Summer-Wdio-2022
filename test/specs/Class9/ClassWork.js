const { expect } = require("chai");

describe('', () => {
    it('Close all windows except Facebook Pay', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Click on Instagram
         * 3. Click on Portal
         * 4. Click on Oculus
         * 5. Click on Facebook Pay
         * 6. Close all pages except Facebook Pay page
         */
        await browser.url('https://wwww.facebook.com')
        await browser.pause(2000)
        await $('=Instagram').click()
        await $('=Portal').click()
        await $('=Oculus').click()
        await $('=Facebook Pay').click()

    });
    it('Verify Church Chairs menu has 7 options', () => {
        
    });
});