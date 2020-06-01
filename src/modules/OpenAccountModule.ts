import { OpenAccountPage } from "../pages/OpenAccountPage";
const log = require('log4js').getLogger("OpenAccountModule");

export class OpenAccountModule {
    private openAccountPage = new OpenAccountPage();

    public async enterAccountDetails(customer: string, currency: string) {
        await this.openAccountPage.selectCustomer(customer);
        await this.openAccountPage.selectCurrency(currency);
        log.info("Entered account details with customer name as "+customer+" & currency "+currency);
    }

    public async createNewAccount() {
        await this.openAccountPage.clickProcessButton();
    }
}