const Commands = require("../Commands")
const MyStringFunctions = require("../../Utils/MyStringFunctions")
class SignupPage {
    commands = new Commands()
    myStringFunctions = new MyStringFunctions()
    dateLocator = '#day'
    monthLocator = '#month'
    yearLocator = '#year'

    async selectBirthDate(month, date, year) {
        await this.commands.selectFromDropdown(this.dateLocator, month)
        await this.commands.selectFromDropdown(this.monthLocator, date)
        await this.commands.selectFromDropdown(this.yearLocator, year)
    }
    // async selectBirthDate(birthDate) {
    //     const birthDateValues = birthDate.split(' ')
    //     birthDateValues[1] = MyStringFunctions.toTitleCase(birthDateValues[1])
    //     await this.commands.selectFromDropdown(this.dateLocator, birthDateValues[0])
    //     await this.commands.selectFromDropdown(this.monthLocator, birthDateValues[1])
    //     await this.commands.selectFromDropdown(this.yearLocator, birthDateValues[2])
    // }


}
module.exports = SignupPage
