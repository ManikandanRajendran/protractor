const { browser } = require("protractor");
 

module.exports = function()
{
    this.setDefaultTimeout(120 * 3000);
    this.given(/^testing step/,function()
    {
        console.log('inside '+browser.baseUrl);
        browser.get(browser.baseUrl);
    });
}