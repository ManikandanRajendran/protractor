var testPageFunctions = require('../Pages/testPage.js');
// var baseURL = require('../Config/config.js');
const axios = require('axios');


module.exports = function()
{
    this.setDefaultTimeout(90 * 3000);

    this.Given(/^user is an Insurance home page$/, async function ()
    {
        var url = browser.baseUrl+"home-services/insurance/home-insurance/eligibility-check";
        console.log(url);
        await testPageFunctions.testing(url);
    })

    this.When (/^user clicks continue button$/, async function()
    {
        await testPageFunctions.clickContinue();
    });
    
    this.Then(/^the user should see the next page$/, async function()
    {
        await testPageFunctions.checkPostcodePage();
    })


    
};