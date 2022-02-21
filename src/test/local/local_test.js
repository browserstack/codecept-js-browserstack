Feature('Add to Cart');

Scenario('Local Test', async ({ I }) => {
    I.amOnPage("http://bs-local.com:45691/check")
    
    let text = await I.grabTextFrom('/html/body')
    console.log(text)
    if(text === "Up and running"){
        I.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Local Instance is runnning"}}')
    }
    else{
        I.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Local Instance is not runnning!"}}')
    }   
});