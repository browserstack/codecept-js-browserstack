const browserstack = require("browserstack-local");
const util = require('util');
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
                    "source": "codecept-js:sample-main:v1.0"
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
            //     "browserstack.source": "codecept-js:sample-main:v1.0"
            // }
        }
    },

    bootstrap: async function () {
        console.log("Connecting Local");
        exports.bs_local = new browserstack.Local();
        exports.bs_local.start_async = util.promisify(exports.bs_local.start);
        try {
            await exports.bs_local.start_async({ 'key': BROWSERSTACK_ACCESS_KEY });
            console.log('Connected. Now testing...');
        } catch(er) {
            console.log('Local start failed with error', er);
            return;
        }
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
