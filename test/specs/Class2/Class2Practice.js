const { expect , assert } = require("chai");
describe('Verify login form', () => {
    it('Verify Email and password fields', async() => {
        await browser.url('https://www.facebook.com')
        await browser.pause(2000)
        
        const emailInputBox = await $('#email')
        const isEmailInputEnabled = await emailInputBox.isEnabled()
        expect(isEmailInputEnabled, 'Email input box is NOT enalbled').to.be.true
        
        const pwdInputBox = await $('#pass')
        const isPwdInputEnabled = await pwdInputBox.isEnabled()
        expect(isPwdInputEnabled, 'Password input box is NOT enabled').to.be.true;
        
        await emailInputBox.setValue('deepak@abc.com')
        await browser.pause(2000)

        await pwdInputBox.setValue('abcd@1234')
        await browser.pause(10000)
    });

    it.only('Verify login button default state', async() => {
        await browser.url('https://www.facebook.com')
        await browser.pause(2000)

        const loginBtn = await $('button[name=login]')
        const isLoginBtnEnabled = await loginBtn.isEnabled();
        expect(isLoginBtnEnabled, 'Login button is NOT enabled').to.be.true

        await loginBtn.click()
        await browser.pause(10000)
    });
    
    it('Veryfy Create New Account default sate', async () => {
        await browser.url('https://www.facebook.com')
        await browser.pause(2000)
        const createBewAccountBtn = await $('=Create new account')
        const isCreateNewAccountDisplayed = await createBewAccountBtn.isDisplayed()
        expect(isCreateNewAccountDisplayed, 'Create New Account button is NOT displayed').to.be.true

        await createBewAccountBtn.click()
        await browser.pause(8000)
    });

     
});
