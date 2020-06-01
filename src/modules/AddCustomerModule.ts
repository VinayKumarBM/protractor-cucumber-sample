import { AddCustomerPage } from "../pages/AddCustomerPage";
const log = require('log4js').getLogger("Logger");

export class AddCustomerModule {
    private addCustomerPage = new AddCustomerPage();

    public async enterCustomerDetais(firstName : string, lastName : string, postalCode : string) {
        await this.addCustomerPage.enterFirstName(firstName);
        await this.addCustomerPage.enterLastName(lastName);
        await this.addCustomerPage.enterPostalCode(postalCode);
        log.info("Entered Customer details with First Name: "+firstName+
                    ", Last Name: "+lastName+" & Postal Code: "+postalCode);
    }

    public async saveCustomerDetails() {
        await this.addCustomerPage.clickCreateCustomerButton();
    }
}