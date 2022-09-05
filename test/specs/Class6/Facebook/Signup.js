const Homepage = require("../POM/Facebook/Homepage")
const SignupPage = require("../POM/Facebook/SignupPage")





describe('Sign Up', () => {
    it.only('Select Nov 12 1990 as birthdate', async () => {
        const hPage = new Homepage();
        const sPage = new SignupPage();
    
        await browser.url('/')
        await browser.pause(3000)
        await hPage.clickCreateNewAcct()
        await browser.pause(3000)
        await sPage.selectBirthDate('Nov', '12', '1990')
        await browser.pause(2000)
        
    });

});