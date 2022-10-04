require('dotenv').config()
const BROWSERSTACK_USERNAME = process.env.BROWSERSTACK_USERNAME
const BROWSERSTACK_ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://bstackdemo.com',
      user: BROWSERSTACK_USERNAME,
      key: BROWSERSTACK_ACCESS_KEY,
      browser: 'Edge',
      //Mentioned below are the capabilities based on JSON Wire Protocol
      capabilities: {
        "os": "Windows",
        "os_version": "10",
        "browser_version": "latest",
        "project": "Codecept + WebdriverIO",
        "build": "Single_Execution",
        "name": "Single Test Edge",
        "browserstack.debug": "true",
        'browserstack.networkLogs': 'true',
      }
      //For W3C-based scripts, use the following capabilties:
      /* 
      capabilities: {
       "bstack:options" : {
         "os": "Windows",
         "osVersion": "10",
         "projectName": "Codecept + WebdriverIO",
         "buildName": "Single_Execution",
         "sessionName": "Single Test Edge",
         "debug" : "true",
         "networkLogs" : "true",
       },
       "browserVersion": "latest",
      }
      */
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJS-BrowserStack',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
