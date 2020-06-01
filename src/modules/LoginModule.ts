import { LoginPage } from "../pages/LoginPage";

export class LoginModue{
    private loginPage = new LoginPage();

    public async loginToApplication(customerName:string) {
        await this.loginPage.selectCustomer(customerName);
        await this.loginPage.clickLoginButton();
    }

    public async navigateToHomePage() {
        await this.loginPage.clickHomeButton();
    }

    public async isCustomerSelectionDisplayed() {
        return await this.loginPage.isUserSelectionDisplayed();
    }
}