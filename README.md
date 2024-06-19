# CodeceptJS-Browserstack

# Integrating CodeceptJS <a href="https://codecept.io/"><img src="https://codecept.io/logo.svg" alt="Node.js" height="22" /></a> with BrowserStack <a href="https://browserstack.com"><img src="https://www.browserstack.com/blog/favicon.png" alt="BrowserStack" height="22" /></a>
## Prerequisite
* [Node.js](https://nodejs.org/en/download/) version 12 or higher is installed on your machine.

## Setup
* Clone the repo
* Install dependencies `npm install`
* Update `.env` file with your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings). 

## Running your tests
* To run tests, run `npm run sample-test`
* To run local tests, run `npm run sample-local-test`

 Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)

## Notes
* You can view your test results on the [BrowserStack Automate dashboard](https://www.browserstack.com/automate)
* You can export the environment variables for the Username and Access Key of your BrowserStack account. 

  ```
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```

## Addtional Resources
* [Documentation for writing Automate test scripts in CodeceptJS](https://codecept.io/helpers/WebDriver/#webdriver)
* [Customizing your tests on BrowserStack](https://www.browserstack.com/automate/capabilities)
* [Browsers & mobile devices for selenium testing on BrowserStack](https://www.browserstack.com/list-of-browsers-and-platforms?product=automate)
* [Using REST API to access information about your tests via the command-line interface](https://www.browserstack.com/automate/rest-api)
