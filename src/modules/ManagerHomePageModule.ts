import { ManagerHomePage } from "../pages/ManagerHomePage";

export class ManagerHomePageModule {
    private managerHomePage = new ManagerHomePage();

    public async navigateToAddNewCustomerPage(){        
        await this.managerHomePage.clickAddCustomerButton();
    }

    public async navigateToOpenCustomerAccountPage() {
        await this.managerHomePage.clickOpenAccountButton();
    }

    public async navigateToCustomerSearchPage() {
        await this.managerHomePage.clickCustomersButton();
    }

}