
class Commands {


    async findWebElement(locator){
        return await $(locator)
    }
    async clickWebElement(locator){
        const element = await this.findWebElement(locator)
        await element.click()
    }
    
    async typeInWebElement(locator, data) {
        const element = await this.findWebElement(locator)
        await element.setValue(data)
        
    }
    
    async isWebElementEnabled(locator) {
        const element = await this.findWebElement(locator)
        return await element.isEnabled()
    }
    async selectFromDropdown(locator, selectThis){
        const dropdownElement = await this.findWebElement(locator)
        await dropdownElement.selectByVisibleText(selectThis)
    }
    async getTextFromWebElement(locator) {
        const element = this.findWebElement(locator);
        return await element.getText();
    }


}
module.exports = Commands