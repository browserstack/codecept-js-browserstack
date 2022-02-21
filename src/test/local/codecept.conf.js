const browserstack = require("browserstack-local");
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
            capabilities: {
                "os": "Windows",
                "os_version": "10",
                "browser_version": "96.0",
                "browserstack.local": "true",
                "project": "Codecept + WebdriverIO",
                "build": "Local_Execution",
                "name": "Local Test",
            }
        }
    },

    bootstrap: function () {
        console.log("Connecting Local");
        exports.bs_local = new browserstack.Local();
        exports.bs_local.start({ 'key': BROWSERSTACK_ACCESSKEY }, function (error) {
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