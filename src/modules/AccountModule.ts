import { AccountPage } from "../pages/AccountPage";

export class AccountModule {
    private accountPage = new AccountPage();

    public async makeNewTransaction(amount:string) {
        await this.accountPage.enterAmount(amount);
        await this.accountPage.clickTransactionButton();        
    }

    public async getTransactionMessage() {
        return await this.accountPage.getTransactionMessage();
    }
}