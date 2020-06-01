import { element, by } from "protractor";
const log = require('log4js').getLogger("OpenAccountPage");

export class OpenAccountPage {

    private selectCustomerXpath: string = "//option[text()='customer']";
    private selectCurrencyXpath: string = "//option[text()='currency']";
    private processButton = element(by.buttonText("Process"));

    public async selectCustomer(customer: string) {
        await element(by.xpath(this.selectCustomerXpath.replace('customer', customer))).click();        
    }

    public async selectCurrency(currency: string) {
        await element(by.xpath(this.selectCurrencyXpath.replace('currency', currency))).click();        
    }

    public async clickProcessButton() {
        await this.processButton.click();
        log.info("Clicked on Process button.");
    }    
}