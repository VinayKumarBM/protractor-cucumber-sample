import { SearchCustomerPage } from "../pages/SearchCustomerPage";

export class SearchCustomerModule {
    private searchCustomerpage = new SearchCustomerPage();

    public async enterCustomerDetailsToSearch(customerName: string) {
        await this.searchCustomerpage.searchCustomer(customerName);
    }

    public async getNumberOfSearchResults(){
        return await this.searchCustomerpage.getSearchResultCount();
    }

    public async deleteCustomerInSearchResult() {
        await this.searchCustomerpage.deleteCustomer();
    }
}