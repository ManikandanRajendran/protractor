//Declaration of variables
var data = require('../Resources/testdata.json');
var Registration = require('../Pages/RegistrationPage.js');
var util=require('../Utils/FunctionalUtil.js');
var url = data[0].UKB_url_LOGGEDIN_PAYMENT;
var cache = element(by.css('.fa-close'));
var assert=require('assert');
//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger('info');
var Login = require('../Pages/Obj_LoginPage.js');
var SingleAccDashboard=require('../Pages/SingleAccDashboardPage.js');


//Step Definitions
module.exports = function () {

  this.setDefaultTimeout(90 * 1000);

  this.When(/^verify the actively selected item for all selected items are displayed$/, async function () {
    let result=await SingleAccDashboard.validateActiveSelect();
    assert.equal(result,true,"Validation failed for active select");
  });

  this.When(/^verify Group account balance in the header$/, async function () {
    let result=await SingleAccDashboard.validateGroupBalance();
    assert.equal(result,true,"Validation failed for group account balance");
  });

  this.When(/^verify Group account details with billing address$/, async function () {
    let result=await SingleAccDashboard.validateGroupAccDetails();
    assert.equal(result,true,"Validation failed for group account billing address");
  });

  this.When(/^the payment module should not be displayed$/, async function () {
    let result=await SingleAccDashboard.validateCIFlagEnabled();
    assert.equal(result,true,"Validation failed for payment module validation");
  });

  this.When(/^informative message should be displayed for customer with complex meter$/,async function () {
    let result=await SingleAccDashboard.validateComplexMeterInfo();
    assert.equal(result,true,"Validation failed for complex meter");
  });


this.When(/^verify renewals link in account overview dashboard page$/, async function () {
  let result=await SingleAccDashboard.clickRenewalsLink();
  assert.equal(result,true,"Validation failed for presence of renewals link in account dashboard");
});

this.When(/^verify renewals banner in account overview dashboard page$/, async function () {
  let result=await SingleAccDashboard.validateRenewalsBanner();
  assert.equal(result,true,"Validation failed for presence of renewals link in account dashboard");
});



this.When(/^verify user is able to navigate to Renewals page$/, async function () {
  let result=await SingleAccDashboard.validateRenewalsPage();
  assert.equal(result,true,"Validation failed for Renewals page");
});


this.When(/^the user logs out of the account by clicking on the logout button from renewals page$/, async function () {
  let result=await SingleAccDashboard.clickRenLogout();
  assert.equal(result,true,"Validation failed for Clicking on logout link from renewals page");
});

this.When(/^user clicks on the links in account dashboard page$/, async function () {
  let result=await SingleAccDashboard.clickAddAccount();
  assert.equal(result,true,"Validation failed for Clicking on logout link from renewals page");
});

this.When(/^verify the suppression of renewal banner$/, async function () {
  let result=await SingleAccDashboard.verifyRenewalNotPresent();
  assert.equal(result,true,"Validation failed for Renewals Banner");
});


  this.When(/^user clicks on submit a meter reading$/, async function () {
    let result=await SingleAccDashboard.clickSMRLink();
    assert.equal(result,true,"Validation failed for clicking on submit meter read link");
  });

  this.When(/^verify global submit meter read page is displayed$/, async function () {
    let result=await SingleAccDashboard.validateglobalSMRURL();
    assert.equal(result,true,"Validation failed for global SMR page");
  });

  this.When(/^verify the last login time stamp$/,async function () {
    let result=await SingleAccDashboard.validatelastLogin();
    assert.equal(result,true,"Validation failed for last login time stamp");
  });

  this.When(/^informative message should be displayed for customer with tvi or edi billing account$/, async function () {
    let result=await SingleAccDashboard.validatemessageTVI();
    assert.equal(result,true,"Validation failed for TVI & EDI customers");
  });

  this.When(/^next bill due message should be displayed for customer without collective account$/,async function () {
    let result=await SingleAccDashboard.validateNextBillDetail();
    assert.equal(result,true,"Validation unsuccessful for next bill due message");
  });

  this.Then(/^Next meter read due message should be displayed$/,async function () {
    let result=await SingleAccDashboard.validateNextMeterReadDate();
    assert.equal(result,true,"Validation unsuccessful for next meter read due message");
  });

  this.Then(/^user clicks on the link text sites in your group$/, async function () {
    let result=await SingleAccDashboard.clickSitesGroup();
    assert.equal(result,true,"Validation failed for clicking on sites link");
  });


  this.Then(/^verify the site addresses is displayed$/, async function () {
    let result=await SingleAccDashboard.verifySiteAddress();
    assert.equal(result,true,"Validation failed for site address");
  });

  this.Then(/^user clicks on close icon in sites in your group window$/, async function () {
    let result=await SingleAccDashboard.clickSiteIconClose();
    assert.equal(result,true,"Validation failed for clicking on the close icon in site address page");
  });


  this.Then(/^user is taken to my accounts page$/, async function () {
    let result=await SingleAccDashboard.validateAccDashboard();
    assert.equal(result,true,"Validation failed for account dashboard page");
  });

  this.Then(/^user lands on my accounts Overview page for global SMR$/, function () {
    SingleAccDashboard.AccOverViewLandingValidationGSMR();
  });

  this.Then(/^verify user lands on my accounts Overview page$/, async function () {
    let result=await SingleAccDashboard.AccOverViewLandingValidation();
    assert.equal(result,true,"Validation failed for account overview page");
  });

  this.When(/^verify the elements \"([^\"]*)\" in Left Hand Navigation$/,async function(arg){
    let result=await SingleAccDashboard.validateLHNElements(arg);
    assert.equal(result,true,"Validation failed in viewing account dashboard elements");
  });

  this.When(/^verify \"([^\"]*)\" component for \"([^\"]*)\" is not displayed$/, async function (arg1, arg2){
    let result=await SingleAccDashboard.componentValidation(arg1,arg2);
    assert.equal(result,true,"Validation failed for links in the pages");
  });

};
