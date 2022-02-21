require('dotenv').config()
const BROWSERSTACK_USERNAME = process.env.BROWSERSTACK_USERNAME
const BROWSERSTACK_ACCESSKEY = process.env.BROWSERSTACK_ACCESSKEY

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://bstackdemo.com',
      user: BROWSERSTACK_USERNAME,
      key: BROWSERSTACK_ACCESSKEY,
      browser: 'Edge',
      capabilities: {
        "os": "Windows",
        "os_version": "10",
        "browser_version": "96.0",
        "build": "Single_Execution",
        "name": "Single Test Edge",
        "browserstack.debug": "true",
        'browserstack.networkLogs': 'true',
      }
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