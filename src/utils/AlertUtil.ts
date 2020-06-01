import { browser } from "protractor";

const log = require('log4js').getLogger("AlertUtil");

export class AlertUtil {

    public static async getAlertMessageAndAccept() {
        let alert = browser.switchTo().alert();
        let message = await alert.getText();
        log.info("Alert Message: " + message);
        (await alert).accept();
        return message;
    }
}