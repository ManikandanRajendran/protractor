
var SMRPage = require('../Pages/Obj_LSMRPage.js');
var using = require('jasmine-data-provider');
var LoginPage = require('../Pages/Obj_LoginPage.js')
var data = require('../Resources/testdata.json');
var util = require('../Utils/FunctionalUtil.js');
var assert=require('assert');
var url=data[0].UKB_url;
var lsmrUrl=data[0].UKB_login;
var cache = element(by.css('.fa-close'));
var count=0;




module.exports = function () {
    this.setDefaultTimeout(120 * 1000);

    this.Given(/^the url to perform Login$/, async function () {
        util.launchUrl(browser.baseUrl);
        if(count==0)
        {
            await util.closeCookies();
            count++;
        }

    });

    this.When(/^User navigate to business Login page$/,function() {
        SMRPage.navigateToLogin();
    });
    this.When(/^User navigate to submit meter read page$/,  function() {
        SMRPage.NavigateToSubmitMeterReadPage();
    });
    this.When(/^User should select the "([^"]*)" and search item as "([^"]*)"$/,function (searchBy,searchItem) {
        SMRPage.CollectiveSearchMeterDetails(searchBy,searchItem);
    });


    this.When(/^user should enter the "([^"]*)" and "([^"]*)" for "([^"]*)"$/, function(email,password,userType) {
        util.loginWithCredentials(email,password);

    });



    this.Then(/^User should verify the (.*) error message for (.*)$/, async function (errormessage, accountType) {

        let result= await SMRPage.VerifyLSMRErrorMessage(errormessage,accountType);
        assert.equal(result,true,"Unable to verify"+errormessage+" text"+"for: "+accountType);
    });

    this.Then(/^User should click on logout button$/, async function() {
        util.scrollToLogout();
        await util.clickLogout();
    });


    this.When(/^User should select the (.*) from Multiple account Dash Board Section$/,function(accNo) {

        SMRPage.navigateToAccount(accNo);

    });

    this.When(/^User validates the SMR page$/, async function() {
        let result1= await SMRPage.VerifyMeterDetailsSection();
        assert.equal(result1,true,"Unable to verify meter details section");
        let result2= await SMRPage.VerifyAddressSection();
        assert.equal(result2,true,"Unable to verify address section");
        let result3= await SMRPage.VerifyMeterSerialNumberSection();
        assert.equal(result3,true,"Unable to verify serial number of account");
        let result4= await SMRPage.VerifyYourNewMeterReadSction();
        assert.equal(result4,true,"Unable to verify meter serial num section");
    });

    this.When(/^User get meter reading count, select past date and enter new meter Reading for (.*)$/, async function (type) {

        await SMRPage.retrieveAndFillAccountDetails(type);

    });

    this.When(/^User verifies the absence of the smr link$/, async function () {

        let result = await SMRPage.VerifySmrLinkNotVisible();
        assert.equal(result,false,"smr link is absent");

    });


    this.Then(/^User should verify the confirmation page for (.*) and (.*)$/, async function (accountType,fuelType) {
        let result = await SMRPage.verifyConfirmationPage(accountType,fuelType);
        assert.equal(result,true,"Confirmation page couldn't be validated");
    });

    this.When(/^user should click submit button in page$/, async function () {
        await SMRPage.SubmitMeter();
    });

    this.Then(/^User Should verify On Demand Billing \"([^\"]*)\"$/, async function (confirmationpage) {
        let result1= await SMRPage.VerifyODBSection();
        assert.equal(result1,true,"ODB section is not valid");
        let result3= await SMRPage.VerifyODBBillAmount();
        assert.equal(result3,true,"ODB bill amount is not valid");
        let result2= await SMRPage.VerifyODBBalanceAmount();
        assert.equal(result2,true,"Unable to verify address section");
        let result4= await SMRPage.VerifyODBPaymentButton();
        assert.equal(result4,true,"ODB payment is not valid");
    });

};
