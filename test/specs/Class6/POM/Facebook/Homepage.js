const Commands = require("../Commands")
class Homepage {
loginEmailLocator = '#email';
loginPwdLocator = '#pass';
loginButtonLocator = '<button>'
creatNewAcctLocator = '=Create new account'
errorMsgLocator = '//div[starts-with(text(), "The email or mobile number you entered")]'
commands = new Commands()


async enterLogingEmail(loginEmail){
    await this.commands.typeInWebElement(this.loginEmailLocator, loginEmail)
}

async enterLogingPassword(loginPwd){
    await this.commands.typeInWebElement(this.loginEmailLocator, loginPwd)
}

async clickLogingButton(){
    await this.commands.clickWebElement(this.loginButtonLocator)
}
async isLoginEmailFieldEnabled(){
    return await this.commands.isWebElementEnabled(this.loginEmailLocator)
}
async isLoginPwdFieldEnabled(){
    return await this.commands.isWebElementEnabled(this.loginPwdLocator)
}
async isLoginBtnEnabled(){
    return await this.commands.isWebElementEnabled(this.loginButtonLocator)
}
async login(username, password){
    await this.enterLogingEmail(username);
    await this.enterLogingPassword(password);
    await this.clickLogingButton();
}
async clickCreateNewAcct() {
    await this.commands.clickWebElement(this.creatNewAcctLocator)
}
async loginErrorMsg() {
    return await this.commands.getTextFromWebElement(this.errorMsgLocator)
}


}
module.exports = Homepage