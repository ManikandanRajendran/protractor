//var Login = require('../../jasmine_POM/pages/LoginPage.js');
var Apayment = require('../Pages/obj_AnonymousPaymentPage.js');
var data = require('../Resources/testdata.json');
var util=require('../Utils/FunctionalUtil.js');
var cache = element(by.css('.fa-close'));
var log4js = require('log4js');
var logger = log4js.getLogger();
var assert = require('assert');
var url = data[0].UKB_url_APayment;

module.exports = function () {
  this.setDefaultTimeout(1000 * 1000);

//Nacigate to business home page
this.Given(/^User should navigate to the business page$/,async function(){
    var url1 = browser.baseUrl+url;
    await util.launchUrl(url1);
});

//to navigate payment page and validate fields of your details section
this.Given(/^User should navigate to Anonymous Payments Page$/,async function(){
    var url1 = browser.baseUrl+url;
    await util.launchUrl(url1);
});

this.Then(/^verify the fields in payment landing page$/,async function(){
    let result = await Apayment.VerifyMAPLandingPage();
    assert.equal(result,true,"Unable to verify the fields in payment landing page");
})

this.When(/^user is navigating back to payment journey$/,async function(){
  var url1 = browser.baseUrl+url;
  await util.launchUrl(url1);
});

this.Then(/^user should see the updated price$/,async function(){
  let result2 = await Apayment.checkpriceagain();
  assert.equal(result2,true,"unable to validate the updated balance");
});


// this.When(/^user should see the updated price amount when he is navigating to payment section again \"([^\"]*)\"$/,async function(arg){
//   let result = await Apayment.enterPaymentDetails(arg);
//   assert.equal(result,true,"Unable to enter account details");
//   let result1 = await Apayment.clickpaymentdetailscontinue();
//   assert.equal(result1,true,"Unable to click continue after entering account details");
//   let result2 = await Apayment.checkpriceagain();
//   assert.equal(result2,true,"unable to validate the updated balance");
// });

this.When(/^User enters details of \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and click Next for \"([^\"]*)\"$/, async function (accnum,postcode,email,scenario){
  let result = await Apayment.enterPaymentDetails(accnum,postcode,email);
  assert.equal(result,true,"Unable to enter account details");
  await Apayment.clickpaymentdetailscontinue();
});

this.When(/^click next button$/,async function(){
  await Apayment.clickpaymentdetailscontinue();
});

this.When(/^User enters payment deatils \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and click Next for \"([^\"]*)\"$/,async function(accnum,postcode,email){
  await Apayment.enterPaymentDetails(accnum,postcode,email);
  // let result1 = await Apayment.clickpaymentdetailscontinue();
  // assert.equal(result1,true,"Unable to click continue after entering account details");
});

//enter account number and details
this.When(/^User should enter declined payment details AccountNumber,postcode and email and click Next for  \"([^\"]*)\"$/,async function(arg){
  await Apayment.enterPaymentDetails(arg);
  await Apayment.clickpaymentdetailscontinue();
  //let result = await Apayment.clickpaymentdetailscontinue1();
  //assert.equal(result,true,"Unable to clickpaymentdetailscontinue button");
});

this.When(/^User should enter invalid payment details AccountNumber,postcode and email and click Next for \"([^\"]*)\"$/,async function(arg){
  await Apayment.enterPaymentDetails(arg);
  //Apayment.clickaccnumfield();
});

//Verify fields of payment amount section, Feed pay amount, verify fields of worldpay section, enter card details and verify confirmation page
this.Then(/^User should enter pay amount and click continue button$/,async function(){
  //browser.sleep(10000);
  await Apayment.EnterAmountDetails(2);
  await Apayment.ClickPaymentContinueButton();
  await Apayment.EnterCardDetails();
});

this.Then(/^user should able to see the payment section$/,async function(){
  let result = await Apayment.VerifyPaymentDetailsSection();
  assert.equal(result,true,"Validation of payment details section is failing");
});



// this.Then(/^user enters amount to pay and clicking next button$/,async function(){
//   await Apayment.EnterAmountDetails(2);
//   await Apayment.ClickPaymentContinueButton();
//   await Apayment.VerifyWorldPayPage();
//   //assert.equal(result1,true,"Unable to validate worldpay frame");
//   //Apayment.EnterCardDetails();
// });

this.Then(/^user enters amount as \"([^\"]*)\" to pay and clicking next button$/,async function(arg){
  //logger.info("Arg is "+arg);
  await Apayment.EnterAmountDetails(arg);
  await Apayment.ClickPaymentContinueButton();
  await Apayment.VerifyWorldPayPage();

});

this.When(/^user should enter \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and click pay button$/,async function(card,name,month,year,cvv){
  await Apayment.EnterCardDetails(card,name,month,year,cvv);
})

this.Then(/^User should see the payment confirmation message$/,async function(){
  let result = await Apayment.VerifyApaymentConfirmationPage();
  assert.equal(result,true,"Validation fails for Payment confirmation section");
});

//Error message validation for amount field
this.When(/^user should enter payment amount as 1 pound$/,async function(){
  await Apayment.EnterAmountDetails(1);
});

this.When(/^user should enter payment amount as more than current balance$/,async function(){
  await Apayment.EnterAmountDetailsMore();
});

this.When(/^user should not enter payment amount and click continue button$/,async function(){
  await Apayment.EnterAmountDetailsEmpty();
});

this.Then(/^user should see the error message as \"([^\"]*)\" when paying 1 pound$/,async function(arg){
  let result = await Apayment.paymentfieldvalidations("less than 2");
  assert.equal(result,true,"Unable to validate for less than 1 pound");
});

this.Then(/^user should see the error message as \"([^\"]*)\"$/,async function(arg){
  let result1 = await Apayment.paymentfieldvalidations("more than current balance");
  assert.equal(result1,true,"Unable to validate for more than current balance");
});

this.Then(/^user should see the error message as \"([^\"]*)\" when not giving amount$/,async function(arg){
  let result2 = await Apayment.paymentfieldvalidations("empty");
  assert.equal(result2,true,"Unable to validate for 0 paying");
});

//Error messages validation for negative scenarios
this.Then(/^User should see the error message as \"([^\"]*)\" for \"([^\"]*)\"$/,async function(arg1,arg2){
  let result = await Apayment.validateError(arg1,arg2);
  assert.equal(result,true,"Unable to validate error message");
});

//Verify whether able to do payment for below 2 pounds and 1 pound
this.Then(/^User should able to pay debit balance as \"([^\"]*)\" pounds$/,async function(arg){
  await Apayment.EnterAmountDetails(arg);
  await Apayment.ClickPaymentContinueButton();
  await Apayment.EnterCardDetails();
  await Apayment.VerifyApaymentConfirmationPage();
});

// this.Then(/^User should verify the amount in payment section whether new payment is updated or not for \"([^\"]*)\"$/,function(){
//   Login.load(url);
//   Apayment.ClickPaymentLink(url);
//   Apayment.enterPaymentDetails(arg);
//   Apayment.clickpaymentdetailscontinue();
//   Apayment.VerifyPaymentDetailsSection();
// })


};
