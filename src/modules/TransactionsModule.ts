import { TransactionsPage } from "../pages/TransactionsPage";

export class TransactionsModule {
    private transactionsPage = new TransactionsPage();

    public async getTransactionAmount(TransactionType:string) {
        return await this.transactionsPage.getTransactionAmount(TransactionType);
    }
}