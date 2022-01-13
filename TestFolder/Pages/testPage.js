const { browser } = require("protractor");
var assert = require('assert');
const { AssertionError } = require("assert");


var testFunction = function()
{
    this.testing = async function(url)
    {
        await browser.get(url);
        browser.sleep(5000);
        return 'pass';
    }

    this.clickContinue = async function()
    {
        await browser.executeScript('window.scrollTo(0,250);');
        await browser.sleep(5000);
        let element = await browser.findElement(by.css('#continue'));
        element.click();
        await browser.sleep(1000);
    }

    this.checkPostcodePage = async function()
    {
        await browser.sleep(1000);
        let title = await browser.findElement(by.css('#addressFinder')).getText();
        let expected = 'Get a Home Insurance quote';
        console.log(await browser.getCurrentUrl());
        console.log(await browser.getTitle());    
        assert.equal(title, expected, `The title is not matching - expected ${expected} and actual ${title}`);        
    }

}
module.exports=new testFunction();
