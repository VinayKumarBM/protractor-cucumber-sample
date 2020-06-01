import { element, by, browser } from "protractor";
import { protractor } from "protractor/built/ptor";
const log = require('log4js').getLogger("ManagerHomePage");

export class ManagerHomePage {

    private addCustomerButton = element(by.partialButtonText("Add Customer"));
    private openAccountButton = element(by.partialButtonText("Open Account"));
    private customersButton = element(by.partialButtonText("Customers"));

    public async clickAddCustomerButton() {
        await this.addCustomerButton.click();
        log.info("Clicked on Add Customer button");
    }

    public async clickOpenAccountButton() {
        await this.openAccountButton.click();
        log.info("Clicked on Open Account button");
    }

    public async clickCustomersButton() {
        await this.customersButton.click();
        log.info("Clicked on Customers button");
    }
}