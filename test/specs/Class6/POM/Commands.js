
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
    
    async isWebElementSelected(locator) {
        const element = await this.findWebElement(locator)
        return element.isSelected()
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
        const element = await this.findWebElement(locator);
        return await element.getText();
    }

    async getNumberVlueFromString(locator) {
        const element = await this.findWebElement(locator)
        return parseFloat(await element.getTex)
    }

    async getAutoSugText(locator, userInput) {
        const autoSuggestions = await $$(locator)
        for(const selectedText of autoSuggestions) {
            const autoSuggestText = await selectedText.getText()
            if (autoSuggestText.toLowerCase().localeCompare(userInput.toLowerCase()) === 0) {
                await selectedText.click()
                break;
            }
        }
    }

    async chooseDate(locator, searchBy, thisDate) {
        const allDates = await $$(locator);
        for(const selectedDate of allDates){
            const date = await selectedDate.getAttribute(searchBy)
            if(date.localeCompare(thisDate) === 0) {
                await selectedDate.click()
                break;
            }
        }
    }
}
module.exports = Commands