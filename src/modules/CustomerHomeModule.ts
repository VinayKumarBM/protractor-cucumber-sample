import { CustomerHomePage } from "../pages/CustomerHomePage";

export class CustomerHomeModule { 
    private customerHomePage = new CustomerHomePage();

    public async navigateToDepositPage() {
        await this.customerHomePage.clickDepositButton();
    }

    public async navigateToWithdrawlPage() {
        await this.customerHomePage.clickWithdrawlButton();
    }

    public async navigateToTransactionsPage() {
        await this.customerHomePage.clickTransactionsButton();
    }

    public async logoutOfApplication() {
        await this.customerHomePage.clickLogoutButton();
    }

    public async getCustomerName() {
        return await this.customerHomePage.getCustomeName();
    }

    public async getAccountBalance() {
        return await this.customerHomePage.getAccountBalance();
    }
}