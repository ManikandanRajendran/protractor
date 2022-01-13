

var data = require('../Resources/testdata.json');
var loggedInPaymentPage = require('../Pages/Obj_LoggedInPaymentPage.js');
var util=require('../Utils/FunctionalUtil.js');
var assert=require('assert');
var count=0;
//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger('info');

module.exports = function ()
{

this.setDefaultTimeout(200 * 1000);
this.Given(/^the url to perform Loggedin_payment$/,async function (){
    var url=browser.baseUrl;
    util.launchUrl(url);
    if(count==0){
     logger.info("closing cookies");
     await util.closeCookies();
     count++;
   }
    await util.navigateToLogin();
});

this.When(/^user should enter the \"([^\"]*)\" and \"([^\"]*)\" for \"([^\"]*)\"$/,  function (emailAddress,password,type){
         util.loginWithCredentials(emailAddress,password);
});
this.Then(/^user clicks \"([^\"]*)\"$/,function (paymentCategory){
    loggedInPaymentPage.clickPayment()
    loggedInPaymentPage.clickPaymentCategory(paymentCategory);
});

this.Then(/^do payment with \"([^\"]*)\" pounds$/, async function(poundType){
    await loggedInPaymentPage.getCurrentBalance();
    await loggedInPaymentPage.clearAndEnterBalance(poundType);
  });

this.Then(/^select the already saved card from card details section$/, function(){
     loggedInPaymentPage.selectSavedCard();
  });


  this.Then(/^click pay button in Review payment section$/,function(){
     loggedInPaymentPage.PayBySavedCard();
  });

  this.Then(/^payment is made successfully and navigates to confirmation section$/,async function (){
  let verifyConfirm=await loggedInPaymentPage.checkConfirm();
  assert.equal(verifyConfirm,true,"could not verify Confirmation");
  });

  this.Then(/^Payment reference number is displayed on Confirmation section$/,async function (){
  let verifyPaymentReference=await loggedInPaymentPage.checkPaymentReference();
  assert.equal(verifyPaymentReference,true,"could not verify PaymentReference");
  });

  this.Then(/^payment link is not available for \"([^\"]*)\"$/,async function (userType){
     let isPresent=await loggedInPaymentPage.verifyPaymentPresent();
     assert.equal(isPresent,false,"Able to verify payment Link for "+ userType);
  });

this.Then(/^click to verify error$/, function (){
    loggedInPaymentPage.clickTogenerateErrorForEnteringBalance();
});

this.Then(/^user clicks pay by new card$/,async function (){
await loggedInPaymentPage.payByNewCard();
});

this.Then(/^user enters all the required values in Payment amount and Card details section with \"([^\"]*)\"$/,function(cardNumber){
 loggedInPaymentPage.enterCardDetails(cardNumber);
});

this.Then(/^user clicks on edit link$/,function(){
   loggedInPaymentPage.clickEdit();
});

this.Then(/^change the expiry date and clicks update button$/,async function(){
  await loggedInPaymentPage.updateExpiryDateOfCard();
});

this.Then(/^check expiry date of card is updated$/,async function(){
  let isUpdated=await loggedInPaymentPage.checkUpdateConfirm();
assert.equal(isUpdated,true,"cannot find update information");
});

this.Then(/^User clicks on Delete link and clicks on Yes Delete button$/,async function (){
  await loggedInPaymentPage.deleteCard();
});

this.Then(/^check selected card is deleted$/,async function (){
  await loggedInPaymentPage.deleteCardConfirm();
});
this.Then(/^user clicks on Add Card button$/,function(){
  loggedInPaymentPage.addCard();
});

this.Then(/^success message is displayed for successfully adding a card$/,async function(){
  let isvalidated=await loggedInPaymentPage.validateSuccessForAddCard();
  assert.equal(isvalidated,true,"cannot find success message after adding card");
});

this.Then(/^check details of cards$/,async function(){
  let isCardTypePresent=await loggedInPaymentPage.checkCardType();
  assert.equal(isCardTypePresent,true,"cardType is not present");
  let isCardNumberPresent=await loggedInPaymentPage.checkLast4DigitOfCard();
  assert.equal(isCardNumberPresent,true,"cardNumber is not present");
  let iscardHolderPresent=await loggedInPaymentPage.checkCardHolder();
  assert.equal(iscardHolderPresent,true,"cardHolder is not present");
  let isExpiryDatePresent=await loggedInPaymentPage.checkExpiryDate();
  assert.equal(isExpiryDatePresent,true,"expiryDate is not present");
});

this.setDefaultTimeout(240 * 1000);
this.Then(/^user should able to add 16 cards from 0-5 \"([^\"]*)\"$/,async function(cards){
  loggedInPaymentPage.getListOfCards(cards);
 let result=await loggedInPaymentPage.addCards16Times(0,5);
  assert.equal(result,true,"Could not add 16 cards");
});

this.Then(/^user should able to add 16 cards from 5-9$/,async function(){
let result=await loggedInPaymentPage.addCards16Times(5,9);
assert.equal(result,true,"Could not add 16 cards");
});

this.Then(/^user should able to add 16 cards from 9-13$/,async function(){
  let result=await loggedInPaymentPage.addCards16Times(9,13);
  assert.equal(result,true,"Could not add 16 cards");
});

this.Then(/^user should able to add 16 cards from 13-16$/,async function(){
  let result=await loggedInPaymentPage.addCards16Times(13,16);
  assert.equal(result,true,"Could not add 16 cards");
});

this.Then(/^user clicks on edit link and update card for 1-5 times$/,async function(){
    await loggedInPaymentPage.updateCard10Times(1);
});

this.Then(/^user clicks on edit link and update card for 6-10 times$/,async function(){
  await loggedInPaymentPage.updateCard10Times(6);
});

this.Then(/^user clicks on \"([^\"]*)\" account from the list$/,function(accountType){
   util.clickChildAccount(accountType);
});

this.Then(/^user clicks on group link$/,function(){
loggedInPaymentPage.clickGrouplistlink();
});

this.Then(/^check \"([^\"]*)\" link should \"([^\"]*)\" available for this user$/,async function(paymentType,arg){
    let result=await loggedInPaymentPage.verifyPayment(paymentType,arg);
    assert.equal(result,true,"make a payment should "+arg+" available");
});

this.Then(/^check whether any expired card is displayed$/,async function(){
    let result=await loggedInPaymentPage.checkCardIsExpired();
    assert.equal(result,true,"expired card is displayed in make a payment");
});

this.Then(/^check the limit message \"([^\"]*)\"$/,async function(arg){
  let result=await loggedInPaymentPage.checkLimit(arg);
    assert.equal(result,true,"able to do new payment");
});

this.Then(/^keep balance field empty$/,async function(){
  await loggedInPaymentPage.clearBalance();
});

this.Then(/^leave all the card details fields blank$/,function(){
   loggedInPaymentPage.generateErrorForCardDetailsField();
});

this.Then(/^select expired date in worldPay$/,function(){
    loggedInPaymentPage.selectPreviousExpiryDate();
});

this.Then(/^check merchant address is displayed in payment page section for \"([^\"]*)\"$/,async function(type){
   let result=await loggedInPaymentPage.checkMerchantAddress(type);
   assert.equal(result,true,"merchant address is not present");
});

this.Then(/^verify merchant address is present in payment page section for \"([^\"]*)\"$/,async function(type){
  let result=await loggedInPaymentPage.verifyMerchantAddressIsPresent(type);
  assert.equal(result,false,"merchant address is present");
});

this.Then(/^verify whether saved cards are not displayed$/,async function(){
let result=await loggedInPaymentPage.verifyNoSavedCardsPresent();
assert.equal(result,true,"saved cards are present");
});

this.Then(/^verify worldPay iframe is displayed$/,async function(){
let result=await loggedInPaymentPage.verifyWorldPayDisplayed();
  assert.equal(result,true,"World pay iframe is not displayed");
});

this.Then(/^verify pay with new card is not displayed$/,async function(){
let result=await loggedInPaymentPage.verifyPayWithNewCardDisplayed();
  assert.equal(result,false,"pay with new card is present");
});
this.Then(/^click on manage-card in confirmation page$/,function(){
  loggedInPaymentPage.clickManageCard();
});
this.Then(/^verify new card is added at the top of manage payment$/,async function(){
let result=await loggedInPaymentPage.getCardDetailsAfterNewPay();
assert.equal(result,true,"new pay card is not added  at the top of manage payment")
});
};
