const browserstack = require("browserstack-local");
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
            // For W3C-based scripts, use the following capabilties:
            capabilities: {
                "bstack:options" : {
                    "os": "Windows",
                    "osVersion": "10",
                    "local": "true",
                    "projectName": "Codecept + WebdriverIO",
                    "buildName": "browserstack-build-1",
                    "sessionName": "BStack local codecept-js",
                    "source": "codecept-js:sample-master-v1.0"
                },
                "browserVersion": "latest",
            }
            // Mentioned below are the capabilities based on JSON Wire Protocol
            // capabilities: {
            //     "os": "Windows",
            //     "os_version": "10",
            //     "browser_version": "latest",
            //     "browserstack.local": "true",
            //     "project": "Codecept + WebdriverIO",
            //     "build": "browserstack-build-1",
            //     "name": "BStack local codecept-js",
            //     "browserstack.source": "codecept-js:sample-master-v1.0"
            // }
        }
    },

    bootstrap: function () {
        console.log("Connecting Local");
        exports.bs_local = new browserstack.Local();
        exports.bs_local.start({ 'key': BROWSERSTACK_ACCESS_KEY }, function (error) {
            if (error) return error;
            console.log('Connected. Now testing...');

        });
    },

    teardown: function () {
        exports.bs_local.stop(() => {
            console.log("Disconnected Local");
        });
    },
    include: {
        I: './steps_file.js'
    },
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
