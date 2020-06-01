import { element, by } from "protractor";
const log = require('log4js').getLogger("HomePage");

export class HomePage {
    private bankManagerLoginButton = element(by.buttonText("Bank Manager Login"));
    private customerLoginButton = element(by.buttonText("Customer Login"));
    
    public async clickBankManagerLoginButton() {
        await this.bankManagerLoginButton.click();
        log.info("Clicked on Bank Manager Login button");
    }

    public async clickCustomerLoginButton() {
        await this.customerLoginButton.click();
        log.info("Clicked on Customer Login button");
    }
}