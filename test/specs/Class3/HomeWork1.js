const { expect , assert } = require("chai");


describe('Test functions of darksky website', () => {
    it('Verify feelsLikeTempValue is between lowTempValue and highTempValue', async() => {
        await browser.url('https://darksky.net')
        await browser.pause(2000)
        const feelsLikeField = parseFloat(await $('.feels-like-text').getText())
        const lowTempField = parseFloat(await $('.low-temp-text').getText())
        const highTempField = parseFloat(await $('.high-temp-text').getText())
       

        expect (feelsLikeField, 'Feels like temp is NOT above min temp').to.be.above(lowTempField)
        expect (feelsLikeField, 'Feels like temp is NOT below max temp').to.be.below(highTempField)
        await browser.pause(2000)
    }); 

    it('Verify user can get temperature based on zipcode', async() => {
        await browser.url('https://darksky.net')
        await browser.pause(2000)
        await $('//div[@id="header"]//form[@id="searchForm"]//input[@type="text"]').setValue('08831')
        await browser.pause(2000)
        await $('a[class="searchButton"]').click()
        await $('//div[@class="center"]//div[@id="title"]//span[@class="currently"]//span[@class="desc swap"]//span[@class="summary swap"]').getText()
        await browser.pause(2000)
    });

    it('Verify user gets error message when submit empty login form', async() => {
        await browser.url('https://www.facebook.com')
        await browser.pause(2000)
        await $('button[data-testid=royal_login_button]').click()
        await browser.pause(2000)
        const errorMessage = await $('//div[starts-with(text(), "The email or mobile number you entered")]').getText()
        await browser.pause(2000)
        
        const expectedErrorMsg = 'The email or mobile number you entered isn’t connected to an account. Find your account and log in.'
        expect(errorMessage, 'Error message is NOT as expected').to.be.equal(expectedErrorMsg)
    });

    it.only('Verify empty messenger login flow', async() => {
        await browser.url('https://www.facebook.com')
        await browser.pause(2000)  
        await $('a=Messenger').click()
        await browser.pause(2000)
        await $('#close').click()
        const keepMeSignIn = await $('input[name=persistent]')
        const signInSelected = await keepMeSignIn.isSelected()
        expect(signInSelected, 'Keep me signed in IS selcted').to.be.false
        await browser.pause(2000)

        await $('#loginbutton').click()
        await browser.pause(2000)

        const linkText = await $('=Find your account and log in.').getText()
        const expectLinkText = 'Find your account and log in.'
        expect(linkText, 'Link text is NOT as expected').to.be.equal(expectLinkText)
        await browser.pause(2000)

        const continueBtnEnabled = await $('button=Continue').isEnabled()
        expect(continueBtnEnabled, 'Continue button is NOT enabled').to.be.true

        const staySignedInBox = await $('input[type="checkbox"]').isSelected()
        expect(staySignedInBox, 'Stay Signed In box is selected').to.be.false

        await $('//span[@class=""]').click()
        await browser.pause(2000)

        const selectedSignInBox = await $('input[type="checkbox"]').isSelected()
        expect(selectedSignInBox, 'Stay Signed In box is NOT selected').to.be.true

    });
});

