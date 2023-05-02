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
      browser: "Chrome"
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
