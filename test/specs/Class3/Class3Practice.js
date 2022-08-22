const { expect , assert } = require("chai");
describe('Verify login form', () => {
//finding web element by partial attribute name and see if lelement is enabled
    it.only('Verify login button default state', async() => {
        await browser.url('https://www.facebook.com')
        await browser.pause(2000)

        const loginBtn = await $('button[name*=gin]')
        const isLoginBtnEnabled = await loginBtn.isEnabled();
        expect(isLoginBtnEnabled, 'Login button is NOT enabled').to.be.true

        await loginBtn.click()
        await browser.pause(10000)
    });
//finding we elemet by partial attribute name and get text of the attribute
    it('Verify login button is "Log In"', async() => {
        await browser.url('https://www.facebook.com')
        await browser.pause(2000)

        const loginButton = await $('button[data-testid*=l_l]')
        const loginBtnText = await loginButton.getText();
        expect(loginBtnText, 'Login button test is NOT as expected').to.equal('Log In')

        await browser.pause(5000)
    });
//finding web element by partial attribute and finding the name/text of specific attribute
    it('Verify text on empty emailInput box is "Email or phone number"', async() => {
        await browser.url('https://www.facebook.com')
        const emailInputBox = await $('input[aria-label*=Email]')
        const copyInEmptyEmailInputBox = await emailInputBox.getAttribute('placeholder')
        expect(copyInEmptyEmailInputBox, 'Text in empty email input box is NOT as expected').to.equal('Email or phone number')
    });
//finiding web element by tag name
    it('Verify login button is "Log In" - using tagname to find element', async() => {
        await browser.url('https://www.facebook.com')
        
        const loginButton = await $('<button>')
        const loginBtnText = await loginButton.getText();
        expect(loginBtnText, 'Login button test is NOT as expected').to.equal('Log In')

        await browser.pause(2000)
        
    });

//find web element by attribute value and see if web element(radio button) is not selected, click it if it's not
    it('Verify none of the gender buttons are selected', async() => {
        await browser.url('https://www.facebook.com')
        await $('=Create new account').click()
        await browser.pause(2000)

        const fRadioButton = await $('input[Value="1"]')
        const isFGenderSelected = await fRadioButton.isSelected()

        expect(isFGenderSelected, 'Female radio button is selected').to.be.false;
        if (!isFGenderSelected) {//or (isFGenderSelected == false)
        await fRadioButton.click()
        }

        await browser.pause(2000)

        const isFGenderSelected_afterClick = await $('input[Value="1"]').isSelected()
        expect(isFGenderSelected_afterClick, 'Female radio button is NOT selected').to.be.true;
        
    });
//Select data in dropdown
    it('Select data in dropdown', async() => {
        await browser.url('https://www.facebook.com')
        await $('=Create new account').click()
        await browser.pause(2000)
        await $('#month').selectByIndex(0);
        await $('select[aria-label=Day]').selectByAttribute('value', '2')
        await $('#year').selectByVisibleText('1990')
        await browser.pause(5000)
    });
});