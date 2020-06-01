exports.config = {
  directConnect: true,
  //baseUrl: 'http://www.way2automation.com',
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['--start-maximized',
        '--disable-infobars',
        '--disable-gpu']
    },
	shardTestFiles: true
  },
  getPageTimeout: 60000,
  allScriptsTimeout: 30000,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),  
  specs: ['../features/*.feature'],
  SELENIUM_PROMISE_MANAGER: false,
  cucumberOpts: {
    require: [
      '../../out-tsc/stepdefs/*.js', 
    ],
	'dry-run': false, 
  compiler: [],
  format: ['json:./out-tsc/results.json'],
	tags: []
  },
  onPrepare: function () {
    browser.configData = require('../../out-tsc/configs/configData');
    const log4js = require('log4js');
    log4js.configure(browser.configData.log4js);
    const fs = require("fs");    
    if(fs.existsSync(browser.configData.screenshotPath)){
      fs.rmdirSync(browser.configData.screenshotPath, { recursive: true });
      console.log("REMOVED THE FILES/FOLDERS");  
      fs.mkdirSync(browser.configData.screenshotPath);
    } else {
      fs.mkdirSync(browser.configData.screenshotPath);      
    } 
  },
  onComplete: () => {
    var reporter = require('cucumber-html-reporter');
    var options = {
      theme: 'bootstrap',
      jsonDir: './out-tsc',
      //jsonFile: './reports/results.json',
      output: './out-tsc/index.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      ignoreBadJsonFile: true,
      name: "Protractor Automation Test Report",
      brandTitle: "Test Execution Report",
      columnLayout: 1,
      metadata: {
          "App Version":"XYZ_Bank_0.3.2",
          "Test Environment": "QA",
          "Browser": "Chrome",
          "Platform": "Windows 10"
      },
      output: './reports/index.html',
    };
     reporter.generate(options);
   }
};