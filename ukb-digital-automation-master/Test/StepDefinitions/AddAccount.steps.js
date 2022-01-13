var data = require('../Resources/testdata.json');
var addAccountPage = require('../Pages/Obj_AddAccountPage.js');
var util=require('../Utils/FunctionalUtil.js');
var assert=require('assert');
var count = 0;
var loginURL = data[0].UKB_LoginPageurl;

//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger('info');

module.exports = function ()
{

this.setDefaultTimeout(120 * 3000);
this.When(/^selects the \"([^\"]*)\"$/,function(organization){
  addAccountPage.selectOrganization(organization);

});

this.setDefaultTimeout(120 * 3000);
this.Given(/^the user lands on business Login page$/,async function (){
  var url=browser.baseUrl+loginURL;
  await util.launchUrl(url);
  //await util.navigateToLogin();
  if(count==0){
   logger.info("closing cookies");
   await util.closeCookies();
   count++;
 }
});


this.When(/^clicks on logout$/,async function(){
    await addAccountPage.clickslogout();
});


this.setDefaultTimeout(120 * 3000);
this.Given(/^the user lands on UKB Login page$/,async function (){
  var url=browser.baseUrl;
  util.launchUrl(url);
  await util.navigateToLogin();
  if(count==0){
   logger.info("closing cookies");
   await util.closeCookies();
   count++;
 }
});

this.When(/^enters the \"([^\"]*)\" and \"([^\"]*)\" for \"([^\"]*)\"$/, function(emailAddress,password,usertype){
        util.loginWithCredentials(emailAddress,password);
});

this.When(/^clicks on AddAccount option$/,async function(){
await addAccountPage.clickAddAccount();
});

this.When(/^enters the account details \"([^\"]*)\" and \"([^\"]*)\"$/,async function(accountNumber,postcode){
await addAccountPage.enterAccountDetails(accountNumber,postcode);
await addAccountPage.submitAccountDetails();
});

this.When(/^enters security answer \"([^\"]*)\"$/,async function(secAns){
  await addAccountPage.enterSecurityAnswer(secAns);
  await addAccountPage.submitAccountDetails();
});

this.Then(/^click view organizations$/,async function(){
   await addAccountPage.clickViewOrganization();
});

this.Then(/^user should able to view organizations$/,async function(){
let result=  await addAccountPage.checkNumberOfOrganization();
assert.equal(result,true,'no two org');
});

  this.When(/^user selects \"([^\"]*)\" from multiple account dashboard$/,function(accountNumber){
  util.selectAccount(accountNumber);
});

  this.Then(/^verify Header of error message displayed as \"([^\"]*)\" for \"([^\"]*)\"$/,async function(error,type){
  var result1= await addAccountPage.verifyErrorheader(error,type);
  assert.equal(result1,true,'error message header not matching');
  });

 this.Then(/^verify Add Accounts link is not available to \"([^\"]*)\"$/,async function(userType){
  var result = await addAccountPage.verifyAddAccountPresent();
  assert.equal(result,true,"AddAccounts link is available" + userType);

 });

 this.Then(/^clicks on the account from the list and verify the account navigation through dropdown in OAM page$/,async function(){
   await addAccountPage.clickaccount();
   var result1 = await addAccountPage.verifyOamPage();
   assert.equal(result1,true,"Not navigated to OAM Page");
   var result2 = await addAccountPage.clickAccountInDropDown();
   assert.equal(result2,true,"Not navigated to selected account OAM Page");
});

  this.Then(/^verify on clicking the other organisation from dropdown navigates to the second organisation$/,async function(){
    var result = await addAccountPage.clickdropdown();
    assert.equal(result,true,"Not navigated to organisation Page");

  });




  this.Then(/^verify the error message \"([^\"]*)\" is displayed for \"([^\"]*)\"$/, async function(errorLocked,scenario){
    let result = await addAccountPage.verifyerrormessages(errorLocked,scenario);
    assert.equal(result,true,"Error message is not displaying as expected");
  });

  this.Then(/^verify whether the \"([^\"]*)\" message is displayed for \"([^\"]*)\" accounts$/, async function(error,usertype){
  let result = await addAccountPage.verifyerrormessages_Exist();
  assert.equal(result,true,"Error message is not displaying as expected");
  });

  this.When(/^user enter the account details \"([^\"]*)\" and \"([^\"]*)\"$/,async function(accountNumber,postcode){
  await addAccountPage.enterAccountDetails(accountNumber,postcode);
  await addAccountPage.clickout();
  });

  this.Then(/^verify whether the \"([^\"]*)\" and \"([^\"]*)\" error messages is displayed for \"([^\"]*)\" accounts$/, async function(error1,error2,usertype){
  let result = await addAccountPage.verifyerrormessageinvalidAccPost();
  assert.equal(result,true,"Error message is not displaying as expected");
  });




};
