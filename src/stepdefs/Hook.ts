import { After, Before, BeforeAll } from "cucumber";
import { browser } from "protractor";
const log = require('log4js').getLogger("Hook");

Before (async function(scenario) {
    logger(scenario.pickle.name, "STARTED");
});

After (async function(scenario) {
    if (scenario.result.status === 'failed') {
        log.error("Test Scenario failed:",scenario.result.exception);
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
    logger(scenario.pickle.name, scenario.result.status);
}); 

function logger (testCaseName:string, status:string) {
    log.info("================================================================================");
    log.info("\t\t\t <--{ "+testCaseName+" "+status.toUpperCase()+" }-->");
    log.info("================================================================================");
}