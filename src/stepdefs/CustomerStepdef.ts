import { Given, When, Then } from "cucumber";
import { HomePageModule } from "../modules/HomePageModule";
import { LoginModue } from "../modules/LoginModule";
import { CustomerHomeModule } from "../modules/CustomerHomeModule";
import { AccountModule } from "../modules/AccountModule";
import { TransactionsModule } from "../modules/TransactionsModule";
import { expect } from "chai";
import { ScreeshotUtil } from "../utils/ScreenshotUtil";

let homePageModule = new HomePageModule();
let loginModule = new LoginModue();
let customerHomeModule = new CustomerHomeModule();
let accountModule = new AccountModule();
let transactionsModule = new TransactionsModule();

When('User logs in as customer {string}', async function (customerName:string) {
    await homePageModule.navigateToCustomerLoginPage();
    await loginModule.loginToApplication(customerName);
    expect(await customerHomeModule.getCustomerName()).to.be.equal(customerName);
});

When('User navigates to Deposit page', async function () {
    await customerHomeModule.navigateToDepositPage();
});

When('User makes a transaction of {string} Dollars', async function (amount: string) {
    await accountModule.makeNewTransaction(amount);
});

Then('User verifies that {string}', async function (message: string) {
    expect(await accountModule.getTransactionMessage()).to.be.equal(message);
    ScreeshotUtil.takeScreenshot(message);
});

Then('User balance is {string} Dollars', async function (amount: string) {
    expect(await customerHomeModule.getAccountBalance()).to.be.equal(amount);
});

Then('User logs out of the application', async function () {
    await customerHomeModule.logoutOfApplication();
    expect(await loginModule.isCustomerSelectionDisplayed()).to.be.true;
    await loginModule.navigateToHomePage();
});

When('User navigates to Withdrawal page', async function () {
    await customerHomeModule.navigateToWithdrawlPage();
});

When('User navigates to transactions page', async function () {
    await customerHomeModule.navigateToTransactionsPage();
    ScreeshotUtil.takeScreenshot("TransactionHistory");
});

Then('User verifies the {string} history of {string} Dollars', async function (transactionType: string, amount: string) {
    expect(await transactionsModule.getTransactionAmount(transactionType)).to.be.equal(amount);
});