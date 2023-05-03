const assert = require('assert');
Feature('BrowserStack Local Testing');

Scenario('Local Test', async ({ I }) => {
    I.amOnPage("http://bs-local.com:45454/")
    
    let text = await I.grabTitle()
    console.log(text)
    assert.equal(text, "BrowserStack Local", "Local Instance is not runnning!")
});
