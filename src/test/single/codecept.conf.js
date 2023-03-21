require('dotenv').config()
const BROWSERSTACK_USERNAME = process.env.BROWSERSTACK_USERNAME
const BROWSERSTACK_ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY

exports.config = {
  tests: './*_test.js',
  output: './output',
  timeout: 120,
  helpers: {
    WebDriver: {
      url: 'https://bstackdemo.com',
      user: BROWSERSTACK_USERNAME,
      key: BROWSERSTACK_ACCESS_KEY,
      browser: 'Edge',
      //For W3C-based scripts, use the following capabilties: 
      capabilities: {
        "bstack:options" : {
          "os": "Windows",
          "osVersion": "10",
          "projectName": "Codecept + WebdriverIO",
          "buildName": "browserstack-build-1",
          "sessionName": "BStack single codecept-js",
          "debug" : "true",
          "networkLogs" : "true",
          "source": "codecept-js:sample-main:v1.0"
        },
        "browserVersion": "latest",
      }

      //Mentioned below are the capabilities based on JSON Wire Protocol
      /*
      capabilities: {
        "os": "Windows",
        "os_version": "10",
        "browser_version": "latest",
        "project": "Codecept + WebdriverIO",
        "build": "browserstack-build-1",
        "name": "BStack single codecept-js",
        "browserstack.debug": "true",
        'browserstack.networkLogs': 'true',
        "browserstack.source": "codecept-js:sample-main:v1.0"
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
