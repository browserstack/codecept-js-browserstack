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
            browser: 'chrome',
            desiredCapabilities: {}
        }
    },

    multiple: {
        bstack: {
            browsers: [
                {
                    browser: "Safari",
                    //Mentioned below are the capabilities based on JSON Wire Protocol
                    desiredCapabilities: {
                        "os": "OS X",
                        "os_version": "Catalina",
                        "browser_version": "latest",
                        "project": "Codecept + WebdriverIO",
                        "build": "browserstack-build-1",
                        "name": "Bstack parallel codecept-js 1",
                        "browserstack.source": "codecept-js:sample-selenium-3-v1.0",
                        "browserstack.debug": "true",
                        'browserstack.networkLogs': 'true',
                    },
                    //For W3C-based scripts, use the following capabilties:
                    /*
                    desiredCapabilities: {
                     "bstack:options" : {
                       "os": "OS X",
                       "osVersion": "Catalina",
                       "projectName": "Codecept + WebdriverIO",
                       "buildName": "browserstack-build-1",
                       "sessionName": "Bstack parallel codecept-js 1",
                       "source": "codecept-js:sample-selenium-3-v1.0"
                       "debug" : "true",
                       "networkLogs" : "true",
                     },
                     "browserVersion": "latest",
                    },
                    */
                },

                {
                    browser: "Firefox",
                    //Mentioned below are the capabilities based on JSON Wire Protocol
                    desiredCapabilities: {
                        "os": "Windows",
                        "os_version": "10",
                        "browser_version": "latest",
                        "project": "Codecept + WebdriverIO",
                        "build": "browserstack-build-1",
                        "name": "Bstack parallel codecept-js 2",
                        "browserstack.source": "codecept-js:sample-selenium-3-v1.0",
                        "browserstack.debug": "true",
                        'browserstack.networkLogs': 'true',
                    },
                    //For W3C-based scripts, use the following capabilties:
                    /*
                    desiredCapabilities: {
                     "bstack:options" : {
                       "os": "Windows",
                       "osVersion": "10",
                       "projectName": "Codecept + WebdriverIO",
                       "buildName": "browserstack-build-1",
                       "sessionName": "Bstack parallel codecept-js 2",
                       "source": "codecept-js:sample-selenium-3-v1.0"
                       "debug" : "true",
                       "networkLogs" : "true",
                     },
                     "browserVersion": "latest",
                    },
                    */
                },
            ],
        },
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
