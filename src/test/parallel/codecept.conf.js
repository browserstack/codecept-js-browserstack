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
            browser: 'chrome',
            desiredCapabilities: {}
        }
    },

    multiple: {
        bstack: {
            browsers: [
                {
                    browser: "Safari",
                    desiredCapabilities: {
                        "os": "OS X",
                        "os_version": "Catalina",
                        "project": "Codecept + WebdriverIO",
                        "build": "Parallel_Execution",
                        "name": "Parallel Test Safari",
                        "browserstack.debug": "true",
                        'browserstack.networkLogs': 'true',
                    },
                },

                {
                    browser: "Firefox",
                    desiredCapabilities: {
                        "os": "Windows",
                        "os_version": "10",
                        "project": "Codecept + WebdriverIO",
                        "build": "Parallel_Execution",
                        "name": "Parallel Test Firefox",
                        "browserstack.debug": "true",
                        'browserstack.networkLogs': 'true',
                    },
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