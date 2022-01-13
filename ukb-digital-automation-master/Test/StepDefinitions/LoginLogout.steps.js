var data = require('../Resources/testdata.json');
var LoginLogout = require('../Pages/LoginLogoutPage.js');
var util=require('../Utils/FunctionalUtil.js');
var subUrlLogin = data[0].UKB_LoginPageurl;
var subUrlViewBill=data[0].UKB_Deeplink_ViewBill;
var subUrlRenewal=data[0].UKB_Deeplink_Renewals;
var subUrlSMR = data[0].UKB_Deeplink_SMR;
var subUrlGSMR = data[0].UKB_Deeplink_GSMR;
var subUrlPayments = data[0].UKB_Deeplink_payments;
var assert=require('assert');
//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger('info');
var Login = require('../Pages/Obj_LoginPage.js');
var subUrlReg = data[0].UKB_RegPageurl;



//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger();

//Step Definitions
module.exports = function () {

  this.setDefaultTimeout(200 * 1000);

  this.Then(/^verify error message around email as \"([^\"]*)\"$/,async function(arg) {
    let result=await LoginLogout.validateEmailErrorMessage(arg);
    assert.equal(result,true,"Validation of error message is not successful");
  });


  this.Then(/^Click on British Gas Icon$/,function() {
    LoginLogout.clickBGIcon();
  });

  this.Given(/^user lands on business home page$/,function (){
       var url=browser.baseUrl+subUrlLogin;
      util.launchUrl(url);
      util.navigateToLogin();

    });

      this.Given(/^user lands on login page$/,function (){
      var url=browser.baseUrl+subUrlLogin;
       util.launchUrl(url);
      util.navigateToLogin();
    });

    this.Given(/^user lands on business login page$/,async function (){
      await util.clickLogout();
      var url=browser.baseUrl+subUrlLogin;
     util.launchUrl(url);
  });

    this.Given(/^user lands on business registration page$/,function (){
      var url=browser.baseUrl+subUrlReg;
      util.launchUrl(url);
    });


  this.Then(/^user clicks on your account mega menu and should be able to see View Accounts, Update your details and Logout links and clicks on logout$/,async function() {
    let result=await LoginLogout.validateMegaMenuLinksLogIn();
    //assert.equal(result,true,"Validation of links under mega menu section failed");
  });

  this.Then(/^user clicks on your account mega menu and should be able to see the links available under your account mega menu$/,async function() {
    let result=await LoginLogout.validateMegaMenuLinksBeforeLogIn();
    assert.equal(result,true,"Validation of links under mega menu section failed");
  });


  this.Then(/^verify user is navigated to Business Home Page$/,async function() {
    let result= await LoginLogout.validateBusinessHomePage1();
    assert.equal(result,true,"Validation of business home page is not successful");
  });

  this.Then(/^verify roundel for login and register is not displayed$/,async function() {
    let result=await LoginLogout.validateLoginRoundel();
    assert.equal(result,true,"Validation of business home page is not successful");
  });

  this.Then(/^user clicks on logout from header of CQ page$/,async function() {
    let result=await LoginLogout.clickLogoutCQ();
    assert.equal(result,true,"Validation of business home page is not successful");
  });


this.Then(/^user clicks on Your Account Mega menu$/,async function() {
  let result=await LoginLogout.clickYourAccountMegaMenu();
  assert.equal(result,true,"Validation of your account mega menu is not successful");
});

this.Then(/^verify user should navigate to accounts page$/,async function() {
  let result=await LoginLogout.AccOverViewCQ();
  //assert.equal(result,true,"Validation of account overview page for CQ");
});

this.Then(/^user click on settings link$/,async function() {
  let result=await LoginLogout.clicksettings();
  //assert.equal(result,true,"Click settings Failure");



});



this.Then(/^the user click on Log out link from the header for CQ page$/,async function() {
  let result=await LoginLogout.clickLogoutCQ();
  assert.equal(result,true,"Validation of account overview page for CQ");
});


this.Then(/^I should be able to see the View Accounts, Update your details and Logout links$/,async function() {
  let result=await LoginLogout.verifyLinksMegaMenu();
  assert.equal(result,true,"Validation of links under your account mega menu is not successful");
});


  this.Then(/^user directly lands on View Bill$/,async function() {
    var url=browser.baseUrl;
    //+subUrlLogin;
   //util.launchUrl(url);
  //  await util.clickLogout();
    var viewBillUrl=browser.baseUrl+subUrlViewBill;
    util.launchUrl(viewBillUrl);
  });

  this.Then(/^user directly lands on Renewals$/,async function() {
  //  var url=browser.baseUrl+subUrlLogin;
  // util.launchUrl(url);
  //  await util.clickLogout();
    var renewalurl=browser.baseUrl+subUrlRenewal;
    util.launchUrl(renewalurl);
  });

  this.Then(/^user directly lands on SMR/,async function() {
  //  var url=browser.baseUrl+subUrlLogin;
  // util.launchUrl(url);
  //  await util.clickLogout();
    var SMRUrl=browser.baseUrl+subUrlSMR;
    util.launchUrl(SMRUrl);
  });

  this.Then(/^user directly lands on GSMR/,async function() {
  //  var url=browser.baseUrl+subUrlLogin;
  // util.launchUrl(url);
  //  await util.clickLogout();
    var GSMRUrl=browser.baseUrl+subUrlGSMR;
    util.launchUrl(GSMRUrl);
  });

  this.Then(/^user directly lands on Payments/,async function() {
    var url=browser.baseUrl+subUrlLogin;
   util.launchUrl(url);
    await util.clickLogout();
    var paymentUrl=browser.baseUrl+subUrlPayments;
    util.launchUrl(paymentUrl);
  });

  this.Then(/^verify error message around email textbox as \"([^\"]*)\"$/,async function(arg) {
    let result=await LoginLogout.validateEmailTextBoxErrorMessage(arg);
    assert.equal(result,true,"Validation of error message is not successful");
  });

  this.Then(/^verify error message around password textbox as \"([^\"]*)\" is not displayed$/,async function(arg) {
    let result=await LoginLogout.PasswordErrorTextNotPresent(arg);
    assert.equal(result,true,"Validation for password error message failed ");
  });

  this.Then(/^verify error message around password textbox as \"([^\"]*)\"$/,async function(arg) {
    let result=await LoginLogout.validatePasswordErrorMessage(arg);
    assert.equal(result,true,"Validation for password error message failed");
  });

  this.Then(/^verify error message around email textbox as \"([^\"]*)\" is not displayed$/,async function(arg) {
    let result=await LoginLogout.validateErrortextNotPresent(arg);
    assert.equal(result,true,"Validation failed for error not present");
  });


  this.When(/^user enters password as \"([^\"]*)\"$/,function(arg) {
  util.enterPassword(arg);
  });

  this.When(/^user enters email address as \"([^\"]*)\"$/,function(arg) {
  util.enterEmailAddress(arg);
  });

  this.Then(/^verify the landed page is \"([^\"]*)\"$/,async function(arg) {
    let result=await LoginLogout.landingValidation(arg);
    assert.equal(result,true,"Validation for landing page failed.");
  });

  this.Then(/^verify visual feedback is provided next to each line of criteria$/, async function () {
    let result=await LoginLogout.passwordtooltip();
    assert.equal(result,true,"Validation is unsuccessful. Visual details are not present");
  });

  this.Then(/^the user logs out of the account by clicking on the logout button$/,async function () {
    let result=await util.clickLogout();
    assert.equal(result,true,"Click Logout Failure");

  });

  this.Then(/^verify the login button disabled$/,async function () {
    let result=await LoginLogout.validateLoginDisabled();
    assert.equal(result,true,"Result is unsuccessful. Login button is not disabled");
  });

  this.Then(/^verify the login button enabled/, async function () {
    let result=await LoginLogout.validateLoginEnabled();
    assert.equal(result,true,"Validation unsuccessful. Login button is not enabled");
  });

  this.Then(/^user is able to view the log out page$/,async function () {
    let result=await LoginLogout.validateLogoutPage();
    assert.equal(result,true,"Validation is not successful for logout page");
  });

  this.Then(/^user should able to access the Boiler maintenance, Upgrade to smart meter, Hive active heating and logback in links$/, async function () {
    let result=await LoginLogout.validateLogoutPage();
    assert.equal(result,true,"Validation unsuccessful for logout page");
  });


  this.Then(/^user clicks on login button$/, function () {
    util.clickLogin();
  });

  this.Then(/^verify error message in login page as \"([^\"]*)\"$/,async function(arg) {
    let result=await LoginLogout.validateInProgress(arg);
    assert.equal(result,true,"Validation unsuccessful. Message could not be seen in login page");
  });

  this.Then(/^verify error message in page as \"([^\"]*)\"$/,async function(arg) {
    let result=await LoginLogout.validateErroMessageLogin(arg);
    assert.equal(result,true,"Validation unsuccessful for error message after login");
  });

  this.Then(/^verify error message as \"([^\"]*)\" is not displayed in login page$/,async function(arg) {
    let result=await LoginLogout.validateLogInSucess(arg);
    assert.equal(result,true,"Validation unsuccessful. Message not displayed");
  });

  this.Then(/^click logout from megamenu$/,async function() {
    let result=await LoginLogout.megamenulogout1();
    assert.equal(result,true,"Validation unsuccessful. Megamenu logout not clickable");

  });

  this.Then(/^verify user should navigate to accounts ember page$/,async function() {
    let result=await LoginLogout.AccOverViewember();
    assert.equal(result,true,"Validation unsuccessful. account overview fail");
  });

};
