import { Given, When, Then } from "cucumber";
import { browser } from "protractor";
import { HomePageModule } from "../modules/HomePageModule";
import { ManagerHomePageModule } from "../modules/ManagerHomePageModule";
import { AddCustomerModule } from "../modules/AddCustomerModule";
import { OpenAccountModule } from "../modules/OpenAccountModule";
import { SearchCustomerModule } from "../modules/SearchCustomerModule";
import { AlertUtil } from "../utils/AlertUtil";
import { ScreeshotUtil } from "../utils/ScreenshotUtil";
import { expect } from "chai";

let homePageModule = new HomePageModule();
let managerHomePageModule = new ManagerHomePageModule();
let addCustomerModule = new AddCustomerModule();
let openAccountModule = new OpenAccountModule();
let searchCustomerModule = new SearchCustomerModule();

Given('User is on XYZ Bank page', async function () {
    await browser.get(browser.configData.url);
});

When('User is logged in as Bank Manager', async function () {
    await homePageModule.navigateToBankManagerHomePage();
});

When('User adds new Customer with all the details', async function (dataTable) {
    let data = dataTable.hashes()[0];
    await managerHomePageModule.navigateToAddNewCustomerPage();
    await addCustomerModule.enterCustomerDetais(data.firstName, data.lastName, data.postalCode);
    ScreeshotUtil.takeScreenshot("CreateCustomer")
    await addCustomerModule.saveCustomerDetails();
});

When('User opens a New Account for the customer', async function (dataTable) {
    let data = dataTable.hashes()[0];
    await managerHomePageModule.navigateToOpenCustomerAccountPage();
    await openAccountModule.enterAccountDetails(data.customerName, data.currency);
    ScreeshotUtil.takeScreenshot("OpenAccount");
    await openAccountModule.createNewAccount();
});

Then('User should see the message {string}', async function (msg: string) {
    expect(await AlertUtil.getAlertMessageAndAccept()).to.be.contains(msg);
});

When('User searchs for Cusomter {string}', async function (name: string) {
    await managerHomePageModule.navigateToCustomerSearchPage();
    await searchCustomerModule.enterCustomerDetailsToSearch(name);
    await searchCustomerModule.getNumberOfSearchResults();
    ScreeshotUtil.takeScreenshot("CustomerSearch");
});

Then('User deletes the customer that was searched', async function () {
    await searchCustomerModule.deleteCustomerInSearchResult();
});

Then('User should see {int} customer with name {string}', 
    async function (rexpectedResult: number, name: string) {    
    await searchCustomerModule.enterCustomerDetailsToSearch(name);
    ScreeshotUtil.takeScreenshot("SearchDeletedCustomer");
    expect(await searchCustomerModule.getNumberOfSearchResults()).to.be.equal(rexpectedResult);
});