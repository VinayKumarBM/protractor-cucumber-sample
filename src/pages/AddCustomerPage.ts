import { element, by } from "protractor";
const log = require('log4js').getLogger("AddCustomerPage");

export class AddCustomerPage {
    private firstNameInputBox = element(by.model("fName"));
    private lastNameInputBox = element(by.model("lName"));
    private zipCodeInputBox = element(by.model("postCd"));
    private createCustomerButton = element(by.css("button[type='submit']"));

    public async enterFirstName(firstName : string) {
        await this.firstNameInputBox.sendKeys(firstName);
    }

    public async enterLastName(lastName : string) {
        await this.lastNameInputBox.sendKeys(lastName);
    }

    public async enterPostalCode(postalCode : string) {
        await this.zipCodeInputBox.sendKeys(postalCode);
    }

    public async clickCreateCustomerButton() {
        await this.createCustomerButton.click();
        log.info("Clicked on Add Customer button");
    }
}