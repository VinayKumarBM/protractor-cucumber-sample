import { element, by } from "protractor";
const log = require('log4js').getLogger("LoginPage");

export class LoginPage {
    private loginButton = element(by.buttonText('Login'));
    private hommeButton = element(by.buttonText('Home'));
    private userSelectionDropdown = element(by.model('custId'));

    public async selectCustomer(customerName:string) {
        await element(by.cssContainingText('option',customerName)).click();
        log.info("Selected customer "+customerName);
    }

    public async clickLoginButton() {
        await this.loginButton.click();
        log.info("Clicked on Login button");
    }

    public async clickHomeButton() {
        await this.hommeButton.click();
        log.info("Clicked on Home button");
    }

    public async isUserSelectionDisplayed() {
        let status:boolean = await this.userSelectionDropdown.isDisplayed();
        log.info("Logout Success? "+status);
        return status;
    }
}