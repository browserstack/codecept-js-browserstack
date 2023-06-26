const assert = require('assert');
Feature('Add to Cart');

Scenario('BStack Sample Test', async ({ I }) => {
    I.amOnPage("https://bstackdemo.com")
    let expectedProductName = await I.grabTextFrom('//*[@id="1"]/p')
    I.click('//*[@id="1"]/div[4]')
    let productName = await I.grabTextFrom('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]')
    assert.equal(productName, expectedProductName, "Product Did Not Match!")
});
