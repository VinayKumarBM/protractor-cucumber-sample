import { element, by, protractor, browser } from "protractor";
const log = require('log4js').getLogger("SearchCustomerPage");

export class SearchCustomerPage {
    private searchCustomerInputBox = element(by.model("searchCustomer"));
    private firstNameResult = element.all(by.xpath("//tbody/tr/td[1]"));
    private deleteButton = element.all(by.xpath("//button[text()='Delete']"));

    public async searchCustomer(customerName: string) {
        await this.searchCustomerInputBox.clear();
        await this.searchCustomerInputBox.sendKeys(customerName);
        log.info("Searched for Customer: "+customerName);        
    }

    public async getSearchResultCount() {
        let results: number = (await this.deleteButton).length;
        log.info("Number of results found: "+results);        
        return results;
    }

    public async deleteCustomer() {
        let deleteButtonCount: number = (await this.deleteButton).length;
        log.info("Number of Delete Button: "+deleteButtonCount);
        
        for (let index = deleteButtonCount-1; index >= 0; index--) {
            log.info((index+1)+") "+await this.firstNameResult.get(index).getText());            
            await this.deleteButton.get(index).click();
        }
    }
    
}