const Homepage = require('../POM/Facebook/Homepage');
const { expect , assert } = require("chai");
const hPage = new Homepage()
describe('POM Demo', () => {
    it('Verify user can login', async() => {
        await  browser.url('https://www.facebook.com')
        await browser.pause(2000)
        await hPage.login('abcd@test.com', 'abcd@1234')
        await browser.pause(2000)
    });

    it.only('Verify loging fields are enabled by default', async () => {
        await  browser.url('https://www.facebook.com')
        await browser.pause(2000)
        expect(await hPage.isLoginEmailFieldEnabled(),'Loging email field is NOT enabled').to.be.true
        expect(await hPage.isLoginPwdFieldEnabled(),'Loging Passowrd field is NOT enabled').to.be.true
        expect(await hPage.isLoginBtnEnabled(),'Loging button is NOT enabled').to.be.true
    });
    
});