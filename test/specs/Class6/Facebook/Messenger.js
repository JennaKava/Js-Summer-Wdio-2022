const Messenger = require('../POM/Facebook/Messenger');
const { expect , assert } = require("chai");
const msngrPage = new Messenger()
describe('Messenger flow', () => {
    it.only('Verify empty messenger login flow', async() => {
        await browser.url('https://www.facebook.com')
        await browser.pause(3000)  
        await msngrPage.clickMsngrLink()
        await browser.pause(2000)
       
        const keepMeSignInNotSelected = await msngrPage.isKeepMeSignInSelected()
        expect(keepMeSignInNotSelected, 'Keep me signed in IS selcted').to.be.false
        await browser.pause(2000)

        await msngrPage.clickLogInBttn()
        await browser.pause(2000)

        const linkText = await msngrPage.errorMsgLogIn()
        const expectLinkText = 'Find your account and log in.'
        expect(linkText, 'Link text is NOT as expected').to.be.equal(expectLinkText)
        await browser.pause(2000)

        const continueBtnEnabled = await msngrPage.continBttnIsEnabled()
        expect(continueBtnEnabled, 'Continue button is NOT enabled').to.be.true

        const staySignedInBox = await msngrPage.isStaySignSelected()
        expect(staySignedInBox, 'Stay Signed In box is selected').to.be.false

        await msngrPage.clickCheckBox()
        await browser.pause(2000)

        const selectedSignInBox = await msngrPage.isStaySignSelected()
        expect(selectedSignInBox, 'Stay Signed In box is NOT selected').to.be.true

    });
    
});