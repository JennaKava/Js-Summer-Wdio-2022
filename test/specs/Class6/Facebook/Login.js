const Homepage = require('../POM/Facebook/Homepage');
const { expect , assert } = require("chai");
const hPage = new Homepage()
describe('Login flow', () => {
    it('Verify user can login', async() => {
        await  browser.url('https://www.facebook.com')
        await browser.pause(2000)
        await hPage.login('abcd@test.com', 'abcd@1234')
        await browser.pause(2000)
    });

    it('Verify loging fields are enabled by default', async () => {
        await  browser.url('https://www.facebook.com')
        await browser.pause(2000)
        expect(await hPage.isLoginEmailFieldEnabled(),'Loging email field is NOT enabled').to.be.true
        expect(await hPage.isLoginPwdFieldEnabled(),'Loging Passowrd field is NOT enabled').to.be.true
        expect(await hPage.isLoginBtnEnabled(),'Loging button is NOT enabled').to.be.true
    });

    it('Verify user gets error message when submit empty login form', async() => {
        await browser.url('https://www.facebook.com')
        await browser.pause(2000)
        await hPage.clickLogingButton()
        await browser.pause(2000)
        const errorMessage = await hPage.loginErrorMsg()
        await browser.pause(2000)
        
        const expectedErrorMsg = 'The email or mobile number you entered isn’t connected to an account. Find your account and log in.'
        expect(errorMessage, 'Error message is NOT as expected').to.be.equal(expectedErrorMsg)
    });   
});