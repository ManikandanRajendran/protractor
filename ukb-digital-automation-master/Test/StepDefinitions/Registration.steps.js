//Declaration of variables
var data = require('../Resources/testdata.json');
var Registration = require('../Pages/RegistrationPage.js');
var util=require('../Utils/FunctionalUtil.js');
var subUrlReg = data[0].UKB_RegPageurl;
//var homepageurl = data[0].UKB_BusinessHomePage;
var cache = element(by.css('.fa-close'));
var assert=require('assert');
var agentURL1=data[0].UKB_CsaAgenturl1;
var agentURL2=data[0].UKB_CsaAgenturl2;
//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger('info');
var Login = require('../Pages/Obj_LoginPage.js');


//Step Definitions
module.exports = function () {

  this.setDefaultTimeout(200 * 1000);

  this.When(/^user clicks on \"([^\"]*)\"$/,function(arg) {
    util.navigateToRegister();
    //assert.equal(result,true,"Unable to click on the registration link");
  });

  this.When(/^user enters \"([^\"]*)\" and \"([^\"]*)\" which is previously added by the super user but not yet activated$/,async function(arg1,arg2) {
    let result=await Registration.enterAgentRegDetails(arg1,arg2);
    assert.equal(result,true,"Unable to enter details for agent registration");
  });

  this.When(/^user enters \"([^\"]*)\" and \"([^\"]*)\" which is locked$/,async function(arg1,arg2) {
    let result=await Registration.enterAgentRegDetails(arg1,arg2);
    assert.equal(result,true,"Unable to enter details for agent registration");
  });

  this.When(/^user enters \"([^\"]*)\" and \"([^\"]*)\" which is already in PENDING ACTIVATION status$/,async function(arg1,arg2) {
    let result=await Registration.enterAgentRegDetails(arg1,arg2);
    assert.equal(result,true,"Unable to enter details for agent registration");
  });


  this.When(/^user lands on agent registration page$/,function() {
    var url=browser.baseUrl;
    var subUrl = url.slice(8);
    var agentURL=agentURL1+subUrl+agentURL2;
    logger.info("agentURL:"+agentURL);
    util.launchUrl(agentURL);
  });

  this.When(/^user clicks on Register a User$/,async function() {
    let result=await Registration.clickAgentRegister();
    assert.equal(result,true,"Unable to click on the registration link from agent home page");
  });


  this.When(/^user clicks on Lookup User$/,async function() {
    let result=await Registration.clickAgentLookUp();
    assert.equal(result,true,"Unable to click on the Lookup user link from agent home page");
  });

  this.When(/^user clicks on Manage Users$/,async function() {
    let result=await Registration.clickManageUsers();
    assert.equal(result,true,"Unable to click on the manage user");
  });

  this.When(/^user clicks on Add new user$/,async function() {
    let result=await Registration.clickAddUser();
    assert.equal(result,true,"Unable to click on the add user");
  });

  this.When(/^user should navigate to Update User details page$/,async function() {
    let result=await Registration.navigateUpdateUser();
    assert.equal(result,true,"This is not update user details page");
  });

  this.When(/^user selects any role other than super user, verify that error message in popup$/,async function() {
    let result=await Registration.verifyRoleErrorMessage();
    assert.equal(result,true,"Unable to click on the add user");
  });

  this.When(/^verify the message as Our records show that this email address is already in use. Please can you use another email address$/,async function() {
    let result=await Registration.verifySupUserLockedMessage();
    assert.equal(result,true,"Unable to click on the add user");
  });

  this.When(/^user clicks on the option for Super User$/,async function() {
    let result=await Registration.clickSuperUser();
    assert.equal(result,true,"Unable to click on the add user");
  });

  this.When(/^user tries to add the \"([^\"]*)\" via manage user which is in Locked status$/,async function(arg) {
    let result=await Registration.enterDetailsForRegis(arg);
    assert.equal(result,true,"Unable to click on the add user");
  });

  this.When(/^user enters the \"([^\"]*)\" in the agent look up page$/,async function(arg) {
    let result=await Registration.enterdetailsRoleChange(arg);
    assert.equal(result,true,"Unable to click on the add user");
  });

  this.When(/^user clicks on \"([^\"]*)\" button from the header$/,async function(arg) {
    let result=await Registration.navigateToRegisterFromHeader();
    assert.equal(result,true,"Unable to click on the registration link");
  });

  this.When(/^user clicks on \"([^\"]*)\" button from business home page$/,async function(arg) {
    let result=await Registration.navigateToRegisterPage();
    assert.equal(result,true,"Unable to click on the register link");
  });

  this.When(/^user clicks on Your Account button from the megamenu and click on register$/,async function() {
    let result=await Registration.navigateToRegisterMegaMenu();
    assert.equal(result,true,"Unable to hover on your account mega menu");
  });

  this.When(/^user directly lands on \"([^\"]*)\"$/,function(arg) {
    util.navigateToAURL(arg);
  });

  this.When(/^user enters \"([^\"]*)\" for \"([^\"]*)\"$/,function(arg1,arg2) {
    Registration.enterDetailsForReg(arg1,arg2);
  });

  this.When(/^user enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" for \"([^\"]*)\"$/,async function(arg1,arg2,arg3,arg4) {
    let result=await Registration.enterDetailsForRegistration(arg1,arg2,arg3,arg4);
    assert.equal(result,true,"Unable to enter details for registration");
  });

  this.When(/^user enters email address as \"([^\"]*)\" and account number as \"([^\"]*)\" and postcode as \"([^\"]*)\" and security answer as \"([^\"]*)\" for \"([^\"]*)\"$/,async function(arg1,arg2,arg3,arg4,arg5) {
    let result=await Registration.enterDetailsForRegistrationAcc(arg1,arg2,arg3,arg4,arg5);
    assert.equal(result,true,"Validation failed in entering details for registration");
  });

  this.When(/^user enters email address as \"([^\"]*)\" and account number as \"([^\"]*)\" and postcode as \"([^\"]*)\" and last Payment Amount as \"([^\"]*)\" for \"([^\"]*)\"$/,async function(arg1,arg2,arg3,arg4,arg5) {
    let result=await Registration.enterDetailsForRegistrationAccount(arg1,arg2,arg3,arg4,arg5);
    assert.equal(result,true,"Validation failed in entering details for registration");
  });

  this.When(/^user enters email address as \"([^\"]*)\" and account number as \"([^\"]*)\" and postcode as \"([^\"]*)\" and card number as \"([^\"]*)\" for \"([^\"]*)\"$/,async function(arg1,arg2,arg3,arg4,arg5) {
    let result=await Registration.enterDetailsForRegistrationAccountcard(arg1,arg2,arg3,arg4,arg5);
    assert.equal(result,true,"Validation failed in entering details for registration");
  });

  this.When(/^user enters email address as \"([^\"]*)\" and account number as \"([^\"]*)\" and postcode as \"([^\"]*)\" for \"([^\"]*)\"$/,async function(arg1,arg2,arg3,arg4) {
    let result=await Registration.enterpostcodeDetailsRegistration(arg1,arg2,arg3,arg4);
    assert.equal(result,true,"Validation failed in entering details for registration");
  });

  this.When(/^user enters email address as \"([^\"]*)\" and account number as \"([^\"]*)\" for \"([^\"]*)\"$/,async function(arg1,arg2,arg3) {
    let result=await Registration.enterAccNumberDetails(arg1,arg2,arg3);
    assert.equal(result,true,"Validation failed in entering details for registration");
  });

  this.When(/^user selects title as \"([^\"]*)\" and enter first name as \"([^\"]*)\" and lastname as \"([^\"]*)\" and phone number as \"([^\"]*)\" and password as \"([^\"]*)\" for registration journey$/,async function(arg1,arg2,arg3,arg4,arg5) {
    //let result=
    await Registration.enterDetailsForRegistrationPersonalDetails(arg1,arg2,arg3,arg4,arg5);
    //assert.equal(result,true,"Validation failed for entering details for registration");
  });

  this.When(/^user selects title as \"([^\"]*)\" and enter first name as \"([^\"]*)\" and lastname as \"([^\"]*)\" and password as \"([^\"]*)\"$/,async function(arg1,arg2,arg3,arg4) {
  //  let result=
    await Registration.enterPersonalDetailsWithoutPhone(arg1,arg2,arg3,arg4);
  //  assert.equal(result,true,"Validation failed for entering details for registration");
  });

  this.When(/^user enters security answer as \"([^\"]*)\"$/,async function(arg1) {
    let result=await Registration.enterSecurityAnswer(arg1);
    assert.equal(resutl,true,"Validation failed in entering security details in registration");
  });

  this.When(/^user enters account number and post code for \"([^\"]*)\"$/,async function(arg) {
    let result=await Registration.enterAccNumberAndPostcode(arg);
    assert.equal(result,true,"Unable to enter details in the field as given in the argument");
  });

  this.Then(/^validate the activation email sent message$/, async function () {
    let result=await Registration.validateRegActivationSentPage();
    assert.equal(result,true,"Validation is unsuccessful. This is not registration activation page");
  });

  this.Then(/^user lands on business home page for registration$/,function () {
    var regUrl=browser.baseUrl+subUrlReg;
    util.launchUrl(regUrl);
  });

  this.Then(/^verify error messages in registration page as \"([^\"]*)\"$/,async function(arg) {
    let result=await Registration.verifyRegErrorMessage(arg);
    assert.equal(result,true,"Unable to validate registration message");
  });

  this.Then(/^user clicks on Log in to my account$/, function () {
    Registration.clickLoginLink();
  });

  this.Then(/^verify loginpage is displayed$/, async function () {
    let result=await Registration.validateLoginLandingPage();
    assert.equal(result,true,"Result Unsuccessful, This is not login landing page")
  });

  this.Then(/^verify Registration page is displayed$/, async function () {
    let result=await Registration.validateRegLandingPage();
    assert.equal(result,true,"Validation is unsuccessful. This is not registration landing page");
  });

  this.Then(/^verify registration page for normal user$/, async function () {
    let result=await Registration.validateRegConfirmationPage();
    assert.equal(result,true,"Validation is unsuccessful. This is not registration confirmation page");
  });

  this.Then(/^verify registration in progress page$/, async function () {
    let result=await Registration.verifyRegInProgressPage();
    assert.equal(result,true,"Validation is unsuccessful. This is not registration in progress page");
  });

  this.Then(/^verify global maintenance page$/, async function () {
    let result=await Registration.verifyRegGlobalMaintenance();
    assert.equal(result,true,"Validation is unsuccessful. This is not global maintenance page");
  });


};
