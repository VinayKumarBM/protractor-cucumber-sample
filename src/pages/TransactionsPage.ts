import { element, by } from "protractor";
const log = require("log4js").getLogger("TransactionsPage");

export class TransactionsPage {
    private transactionsXpath = "//td[text()='type']/preceding-sibling::td[1]"

    public async getTransactionAmount(transactionType:string) {
        let amount:string = await element(by.xpath(this.transactionsXpath.replace("type", transactionType))).getText();
        log.info(transactionType+" Amount: "+amount);
        return amount;
    }
}