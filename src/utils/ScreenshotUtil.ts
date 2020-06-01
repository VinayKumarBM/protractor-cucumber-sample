import { browser } from "protractor"
import { createWriteStream } from "fs";
const log = require('log4js').getLogger("ScreeshotUtil");
const screenshotPath = browser.configData.screenshotPath;

export class ScreeshotUtil {

  public static takeScreenshot(fileName: string) {

    browser.takeScreenshot().then(function (png) {
      var stream = createWriteStream(screenshotPath + fileName + "_" + Date.now() + ".png");
      stream.write(new Buffer(png, 'base64'));
      stream.end();
      log.info("Completed taking screenshot " + fileName);
    });
  }
}