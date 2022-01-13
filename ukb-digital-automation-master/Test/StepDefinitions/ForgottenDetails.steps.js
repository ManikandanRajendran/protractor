//Declaration of variables
var data = require('../Resources/testdata.json');
var ForgottenDetails = require('../Pages/ForgottenDetailsPage.js');
var util=require('../Utils/FunctionalUtil.js');
var url = data[0].UKB_url_LOGGEDIN_PAYMENT;
var cache = element(by.css('.fa-close'));
var assert=require('assert');
//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger('info');
var Login = require('../Pages/Obj_LoginPage.js');


//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger();

//Step Definitions
module.exports = function () {

  this.setDefaultTimeout(150 * 1000);

  this.When(/^user clicks on I've forgotten my details$/,async function () {
    let result=await ForgottenDetails.clickForgottenDetails();
    assert.equal(result,true,"Forgotten my details is not clickable");
  });

  this.When(/^user clicks on Email me$/, async function () {
    let result=await ForgottenDetails.clickEmailMe();
    assert.equal(result,true,"Email Me is not clickable");
  });

  this.Then(/^verify the header as \"([^\"]*)\"$/,async function(arg) {
  let isTitleVisible=await ForgottenDetails.validatePageHeader(arg);
  assert.equal(isTitleVisible,true,"Page header is not matching");
  });

  this.When(/^user clicks on Back to log in$/, async function () {
    let result=await ForgottenDetails.clickBackToLogin();
    assert.equal(result,true,"Back to login link is not clickable");
    });

  this.When(/^user clicks on Back to log in in multiple matches page$/, async function () {
    let result=await ForgottenDetails.clickBackToLoginMultiple();
    assert.equal(result,true,"Back to login is not clickable");
  });

  this.When(/^user clicks on Both tab$/, async function () {
    let result=await ForgottenDetails.clickBoth();
    assert.equal(result,true,"Both tab is not clickable");
  });

  this.When(/^user clicks on Email tab$/, async function () {
    let result=await ForgottenDetails.clickEmailTab();
    assert.equal(result,true,"Email tab is not clickable");
  });

  this.Then(/^verify all the fields are displayed under both tab$/, async function () {
    let result=await ForgottenDetails.validateBothTabComponents();
    assert.equal(result,true,"Both tab components are not present");
  });

  this.Then(/^user should verify all his details under Email tab$/, async function () {
    let result=await ForgottenDetails.validateEmailTabComponents();
    assert.equal(result,true,"Email tab components are not present");
      });

  this.Then(/^verify the UI of multiple matches found page$/, async function () {
    let result=await ForgottenDetails.validateEmailUIMultiple();
    assert.equal(result,true,"This is not multiple matches page");
  });

  this.Then(/^verify the UI of multiple matches found page for forgotten Both$/, async function () {
    let result=await ForgottenDetails.validateEmailUIMultiple();
    assert.equal(result,true,"This is not confirmation for multiple matches page");
  });

  this.Then(/^verify that URL contains \"([^\"]*)\"$/,async function(arg){
    let URLContains=await ForgottenDetails.validateURL(arg);
    assert.equal(URLContains,true,"This is not the current page as given in argument ");
  });

  this.When(/^user enters email address in login page as \"([^\"]*)\"$/,async function(arg){
    let forgottendetails=await ForgottenDetails.enterforgotEmail(arg);
    assert.equal(forgottendetails,true,"This is not forgotten details page");
  });

  this.Then(/^verify password reminder message for \"([^\"]*)\"$/,async function(arg){
    let forgottenpassconf=await ForgottenDetails.validateEmail(arg);
    assert.equal(forgottenpassconf,true,"This is not forgotten password confirmation page");
  });

  this.When(/^user enters all the email details with title as \"([^\"]*)\" and firstname as \"([^\"]*)\" and lastname as \"([^\"]*)\" and account number as \"([^\"]*)\"$/,async function(arg1,arg2,arg3,arg4){
    let bothresult=await ForgottenDetails.enterInputDetailsBoth(arg1,arg2,arg3,arg4);
    assert.equal(bothresult,true,"This is not the page for both tab");
  });

  this.When(/^user enters all the email details with title as \"([^\"]*)\" and firstname as \"([^\"]*)\" and lastname as \"([^\"]*)\" and account number as \"([^\"]*)\" for Email$/,async function(arg1,arg2,arg3,arg4){
    let bothresult=await ForgottenDetails.enterInputDetailsEmail(arg1,arg2,arg3,arg4);
    assert.equal(bothresult,true,"This is not the page for both tab");
  });

  this.When(/^I enter the details with multiple email address for \"([^\"]*)\"$/,async function(arg){
    let result=await ForgottenDetails.enterCustomerDetails(arg);
    assert.equal(result,true,"This is not the page for entering details");
  });

  this.When(/^I enter the incorrect email details for \"([^\"]*)\"$/,async function(arg){
    let result=await ForgottenDetails.enterCustomerDetails(arg);
    assert.equal(result,true,"This is not the page for entering details");
  });

  this.Then(/^verify default tab selected as Password$/, async function () {
  let deftabpassword=await ForgottenDetails.validateCurrentTabPassword();
  assert.equal(deftabpassword,true,"Current tab selected is not password");

  });

  this.Then(/^verify the UI of email address and password retrieved page for \"([^\"]*)\"$/,async function(arg){
    let res=await ForgottenDetails.validateEmail(arg);
    assert.equal(res,true,"This is not the UI of forgotten details for both ");
  });

  this.Then(/^verify the UI of email address retrieved page for \"([^\"]*)\"$/,async function(arg){
    let res=await ForgottenDetails.validateEmailUI(arg);
    assert.equal(res,true,"This is not the UI of email address retrieved page for email tab");
  });

  this.Then(/^verify error message in login page as Oops, it looks like something went wrong$/, async function () {
    let result=await ForgottenDetails.validatePasswordError();
    assert.equal(result,true,"This is not error page");
  });

  this.Then(/^verify error message in login page as We can't find an account with that information. Please check all your details are correct$/, async function () {
    let result=await ForgottenDetails.validateEmailErrorMessage();
    assert.equal(result,true,"This is not error page");
  });

  this.Then(/^verify error message in login page as Please check your email address$/, async function () {
    let result=await ForgottenDetails.validatePasswordErrorMessage();
    assert.equal(result,true,"This is not error page");
  });

  this.When(/^user clicks on Log in from email address retrieve page$/, async function () {
    let result=await ForgottenDetails.clickLogin();
    assert.equal(result,true,"Login link is not clickable in email address retrieved page");
  });

  this.When(/^user clicks on Find button on forgotten my Details page$/, async function () {
    let result=await ForgottenDetails.clickFindDetails();
    assert.equal(result,true,"Find button could not be clicked")
  });

  this.When(/^verify the multiple matches found page for forgotten Both for \"([^\"]*)\"$/,async function(arg){
    let result=await ForgottenDetails.validateEmailMultipleAccount(arg);
    assert.equal(result,true,"This is not multiple matches confirmation page");
  });


};
