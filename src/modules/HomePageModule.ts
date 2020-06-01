import { HomePage } from "../pages/HomePage";

export class HomePageModule {
    private homePage = new HomePage();

    public async navigateToBankManagerHomePage(){
        await this.homePage.clickBankManagerLoginButton();
    }

    public async navigateToCustomerLoginPage(){
        await this.homePage.clickCustomerLoginButton();
    }
}