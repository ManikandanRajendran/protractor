var LoggedInPayment = function()
{

var bot;
var common;
var util;
var log4js = require('log4js');
var logger = log4js.getLogger();
var util=require('../utils/FrameworkUtil.js')

var paymentLink=by.css('div.side-navbar a[href*="payments"]');
var makeAPaymentLink=by.css('div.link-list a[href*="card-payment"]');
var managePaymentLink=by.css('div.link-list a[href*="manage-cards"]');
var directDebitLink=by.css('div.link-list a[href*="direct-debit"]');
var balance=by.css('div.your-account__balance-plan h4 strong');
//var amountInputBox=by.css('input[name="amountToPay"]');
var amountInputBox=by.xpath("//*/div[@class='payments-page__section background-white mb-5']/div/div[@class='m-3 step-amount']/div[@class='form-group py-2']/div['data-test-amount-to-pay']/div/div/input")
//var paymentDetailsContinue=by.css('div[class*="payments-page"] button[type="button"]');
var paymentDetailsContinue=by.xpath("//*/div[@class='payments-page__section background-white mb-5']/div/div[@class='m-3 step-amount']/div[@class='my-4']/button");
var cardDetailsContinue=by.css('div[class*="payments-page"] button[data-test-continue-button]');
var listofCard=by.css('div[class="payments-page__saved-cards-table"] ul li');
var savedCardSelector=by.css("div.payments-page__saved-cards-table ul li:nth-child(2)");
var payLink=by.css('div[class*="payments-page"] button[data-test-pay-button]');
var confirm=by.css("div[class*='payments-page__section'] h5");
var referenceNumber=by.xpath("//p[text()=' Payment reference: ']/strong");
var divOfAmountToPay=by.css("div[class='form-group py-2']");
var payNewCard=by.css("div button[data-test-pay-with-new-card-link]");
var cardNumberFieldSelector=by.css("input[id='cardNumber']");
var cardHolderFieldSelector=by.css("input[id='cardholderName']");
var securityCodeFieldSelector=by.css("input[id='securityCode']");
var monthExpirySelector=by.css("div p select[name='expiryDate.expiryMonth']");
var yearExpirySelector=by.css("div p select[name='expiryDate.expiryYear']");
var paySubmit=by.css("input[type='submit']");
var edit=by.css("div.payments-page__saved-cards-table li:nth-child(2) div.row div:nth-child(4) button");
var editExpiryMonth=by.css("div[data-test-month-dropdown] div:nth-child(1)");
var editExpiryYear=by.css("div[data-test-year-dropdown] div:nth-child(1)");
var updateExpiryDate=by.css("div[data-test-edit-section] button.btn.btn-secondary");
var updateConfirmation=by.xpath("//div/span[contains(.,'Your payment card') and contains(.,'has been updated')]");
var deleteSelector=by.css("div.payments-page__saved-cards-table li:nth-child(2) div.row div:nth-child(5) button");
var yesDeleteSelector=by.css("div.payments-page__saved-cards-table li:nth-child(2) div[data-test-delete-section] button[data-test-delete-card-button]");
var deleteCardConfirmation=by.xpath("//div/p[contains(text(),'Your payment card ') and contains(.,' has been deleted.')]");
var addCardSelector=by.css("div[class*='payments-page__section'] button[data-test-add-card-button]");
var addCardValidation=by.xpath("//div/p[contains(.,'Your payment card has been successfully validated.')]");
var cardNumberValidation=by.css("div.payments-page__saved-cards-table ul li:nth-child(2) div:nth-child(2) strong:nth-child(3)");
var cardHolderValidation=by.xpath("//div[@class='payments-page__saved-cards-table']/ul/li[2]//div[@class='row']/div[2]");
var expiryDateValidation=by.xpath("//div[@class='payments-page__saved-cards-table']/ul/li[2]//div[@class='row']/div[3]/div[2]");
var debitChildAccountGroupLinkSelector=by.css("a[href*='collective-account-list']");
var limitInfo=by.css("div[data-test-max-cards-added-info]");
var limitbutton=by.css("div[data-test-max-cards-added-info] button");
var cardTypeValidation=by.css("div.payments-page__saved-cards-table ul li:nth-child(2) div:nth-child(2) strong:nth-child(1)");
var worldPayIframe=by.css("iframe[class='wp-cl-iframe']");
var manageCardLink=by.css("div[data-test-manage-cards-info] button");

cardHolderName="Test";
securityCode=123;
month="04";
year="2022";
accountNumber="";
currentBalance="";
errorFeedback="";



this.clickPayment=function(){
      let element=util.waitForElementToBeClickableAndReturnElement(paymentLink);
      util.clickEvent(element);
    };

this.findPaymentCategory=function(arg){
    switch(arg){
     case "make-payment":
           var element=util.waitForElementToBeClickableAndReturnElement(makeAPaymentLink);
           return element;
           break;
     case "manage-payment":
           var element=util.waitForElementToBeClickableAndReturnElement(managePaymentLink);
           return element;
           break;
      case "Direct-Debit":
           var element=util.waitForElementToBeClickableAndReturnElement(directDebitLink);
           return element;
           break;
      default:
           logger.error("No such account");
           return null;
      }
};
  this.clickPaymentCategory=function(arg){
   var that=this;
   util.waitForMoreTime();
   let element= that.findPaymentCategory(arg)
   util.clickEvent(element);
};


this.getCurrentBalance=async function(){
  util.waitForMoreTime();
  let element=await util.waitForExpectedElement(balance);
  let balanceText=await util.getText(element);
    balanceText=await util.sliceText(balanceText,1);
    currentBalance=Number(balanceText);

}


this.clearAndEnterBalance=async function(poundType)
{
  logger.info("clear And Enter Balance");
  var payBox=await util.waitForExpectedElement(amountInputBox);
  await util.clearText(payBox);
         switch(poundType){
           case 'valid':
               //util.waitForMoreTime();
                util.enterText(payBox,2);

                var eleContinue=await util.waitForExpectedElement(paymentDetailsContinue);
              //  util.waitForMoreTime();
                eleContinue.click();
                //util.clickEvent(eleContinue);
                break;
           case 'invalid-low':
                util.enterText(payBox,1);
                break;
           case 'invalid-high':
                 currentBalance=Number(currentBalance) + 1;
                 util.enterText(payBox,currentBalance);
                 break;
            case 'less-than-2':
                  util.enterText(payBox,1);
                  var eleContinue=await util.waitForExpectedElement(paymentDetailsContinue);
                  util.clickEvent(eleContinue);
                  break;
            case 'less-than-1':
                  util.enterText(payBox,0.1);
                  //var eleContinue=element(paymentDetailsContinue);
                    var eleContinue=await util.waitForExpectedElement(paymentDetailsContinue);
                  eleContinue.click();
                  break;
            case 'refused':
                  util.enterText(payBox,2);
                  //var eleContinue=element(paymentDetailsContinue);
                    var eleContinue=await util.waitForExpectedElement(paymentDetailsContinue);
                  eleContinue.click();
                  cardHolderName="Refused";
                  break;
            case 'more-than-99999':
                  util.enterText(payBox,100000);
                  break;
            default:
                logger.error("Not a proper type for entering amount");

         }
  };


this.setCardList= function(){
  var cardList=util.waitForElementsPresent(listofCard);
  return cardList
};

this.selectSavedCard= function(){
  var that=this;
  browser.executeScript('window.scrollBy(0,1000);');
  util.retryingClick(cardDetailsContinue);
};

this.PayBySavedCard=function(){
  let element=util.waitForElementToBeClickableAndReturnElement(payLink);
  util.clickEvent(element);
  util.waitForMoreTime();
  };

this.checkConfirm=async function(){
   let element=await util.waitForExpectedElement(confirm);
   let confirmText=await util.getText(element);
   let result=await util.compareText(confirmText,'Confirmation');
   return result;
};

this.checkPaymentReference=async function(){
   let result=await util.isElementPresent(referenceNumber);
   return result;
};

this.verifyPaymentPresent=async function(){
  let result=await util.isElementPresent(paymentLink);
  return result;
};

this.clickTogenerateErrorForEnteringBalance=function(){
  let element=util.waitForElementPresent(divOfAmountToPay);
  util.clickEvent(element);
}



this.payByNewCard=async function(){
//  let element=util.waitForElementToBeClickableAndReturnElement(payNewCard);
 let element=await util.waitForExpectedElement(payNewCard);
  util.clickEvent(element);
};

this.enterCardDetails=function(cardNumber)
{
  util.waitForMoreTime();
  util.switchToFrame('wp-cl-custom-html-iframe');
  let cardNumberField=util.waitForElementPresent(cardNumberFieldSelector);
  util.enterText(cardNumberField,cardNumber);
  let cardHolderField=util.waitForElementPresent(cardHolderFieldSelector);
  util.enterText(cardHolderField,cardHolderName);
  let monthExpiryField=util.waitForElementPresent(monthExpirySelector);
  util.enterText(monthExpiryField,month);
  let yearExpiryField=util.waitForElementPresent(yearExpirySelector);
  util.enterText(yearExpiryField,year);
  let securityCodeField=util.waitForElementPresent(securityCodeFieldSelector);
  util.enterText(securityCodeField,securityCode);
  let pay=util.waitForElementToBeClickableAndReturnElement(paySubmit);
  util.clickEvent(pay);
};

this.clickEdit= function(){
  util.waitForPageLoad();
  browser.executeScript('window.scrollBy(0,1000);');
  let element= util.waitForElementPresent(edit);
  util.clickEvent(element);
};

this.updateExpiryDateOfCard=async function(){
  let month=await util.waitForExpectedElement(editExpiryMonth);
  let editMonthText=await util.getText(month);
  editMonthText=Number(editMonthText);
  if(editMonthText==12){
    editMonthText=1;
  }
  else{editMonthText=editMonthText+1;
  }
  util.enterText(month,editMonthText.toString());

  let year=await util.waitForExpectedElement(editExpiryYear);
  let editYearText=await util.getText(year);
  editYearText=Number(editYearText);
  if(editYearText==2067){
    editYearText=2067;
  }
  else{
  editYearText=editYearText+1;
  };
  util.enterText(year,editYearText.toString());

  let update=await util.waitForExpectedElement(updateExpiryDate);
  util.clickEvent(update);
};

this.checkUpdateConfirm=async function(){
logger.info("check Update Confirmation");
util.waitForPageLoad();
let result=await util.isElementPresent(updateConfirmation);
return result;
};

this.getCardToDelete=function(cardType){
  browser.executeScript('window.scrollBy(0,300);');
  switch(cardType){
    case "default":
         var element=util.waitForElementPresent(deleteDefaultSelector)
         errorFeedback = by.css("div[class='form-control-feedback']");
         return element;
         break;
    case "regular":
         var element=util.waitForElementPresent(deleteRegularSelector)
         return element;
         break;
    default:
        logger.error("invalid card type");
  }

};

this.getCardList=async function(){
  var listOfCardsDisplayed=await util.findElements(by.css("div[data-test-saved-cards-table] ul li"));
  logger.info("listOfCardsDisplayed: "+listOfCardsDisplayed.length);
  return listOfCardsDisplayed.length;
};
this.deleteCard=async function(){
browser.executeScript('window.scrollBy(0,300);');
let result=await util.isElementPresent(by.css("div[data-test-saved-cards-table] ul li"));
while(result){
let deleteCard=await util.waitForExpectedElement(deleteSelector);
util.clickEvent(deleteCard);
let yesDelete=await util.waitForExpectedElement(yesDeleteSelector);
util.clickEvent(yesDelete);
result=await util.isElementPresent(deleteSelector);
}
};



this.deleteCardConfirm=async function(){
  let result=await util.isElementPresent(deleteCardConfirmation);
  return result;
};

this.addCard=async function(i){
browser.executeScript('window.scrollBy(0,1000);');
util.waitForMoreTime();
let addCard=await util.waitForExpectedElement(addCardSelector);
  util.clickEvent(addCard);
};

this.validateSuccessForAddCard=async function(i){
   util.waitForMoreTime();
  let result=await util.isElementPresent(addCardValidation);
  return result;

};

this.checkCardType=async function(){
  let result=await util.isElementPresent(cardTypeValidation);
   return result;
};

this.checkLast4DigitOfCard=async function(){
  let result=await util.isElementPresent(cardNumberValidation);
   return result;
};

this.checkCardHolder=async function(){
  let result=await util.isElementPresent(cardHolderValidation);
   return result;
};

this.checkExpiryDate=async function(){
  let result=await util.isElementPresent(expiryDateValidation);
   return result;
};

this.getListOfCards=function(cards){
  listCards=cards.split(',');
};

this.addCards16Times=async function(initValue,endValue){
  var that=this;
  logger.info("list Of cards length:"+ listCards.length);
  for(let i=initValue;i<endValue;i++){
    await that.addCard(i);
    logger.info("card:"+ listCards[i]);
    that.enterCardDetails(listCards[i]);
    var result=await that.validateSuccessForAddCard(i);
    if(!result){
      logger.info("breaking...");
     break;
    }
  }
  return result;
};


this.addcards16=function(initValue,endValue)
{
  var that=this;

  browser.controlFlow().execute(
      function () {
          logger.info("list Of cards length:"+ listCards.length);
        for(let i=initValue;i<endValue;i++){
          if(i>=8){
            util.waitForMoreTime();
            logger.info("scrolling.....")
            browser.executeScript('window.scrollTo(0, 3000);');
          }
          logger.info("adding card");
          util.waitForMoreTime();
          let addCard=element(addCardSelector);
          util.clickEvent(addCard);
          logger.info("card:"+ listCards[i]);
          logger.info("entering card details:");
          that.enterCardDetails(listCards[i]);
          logger.info("entered card details:");
        }
      });
};

this.updateCard10Times=async function(initValue){
  var that=this;
  for(let i=initValue;i<=initValue+4;i++){
    logger.info("updateCard10Times: "+i);
    util.waitForMoreTime();
    that.clickEdit();
    await that.updateExpiryDateOfCard();
     if(i==10)
       break;
     await that.checkUpdateConfirm();
}
};

this.clickGrouplistlink= function(){
  let element=util.waitForElementToBeClickableAndReturnElement(debitChildAccountGroupLinkSelector);
  util.clickEvent(element);
};

this.verifyPayment=async function(paymentType,arg){
  switch(paymentType){
  case "payment":
        var result=await util.isElementPresent(paymentLink);
        break;
  case "make-payment":
        var result=await util.isElementPresent(makeAPaymentLink);
        break;
  case "manage-payment":
        var result=await util.isElementPresent(managePaymentLink);
        break;
  case "direct-debit":
        var result=await util.isElementPresent(directDebitLink);
        break;
   default:
        logger.error("No such link");
        return false;
      }
   if((result==true && arg === "be") || (result==false && arg === "not be")){
       return true;
   }
   else {
      return false;
   }
};

this.checkCardIsExpired=async function(){
  var that=this;
  var listOfCardsDisplayed=await util.waitForElementsPresent(by.css("div[data-test-saved-cards-table] ul li"));
  for(let i=1;i<=listOfCardsDisplayed.length - 1;i++){
    if(i>=6){
      browser.executeScript('window.scrollBy(0,1000);');
    }
  var expiry=await util.waitForExpectedElement(by.css("div[data-test-saved-cards-table] ul li:nth-child("+(i+1)+") div div div div:nth-child(2)"));
  let expiryText=await util.getText(expiry);
  var split_expiry=expiryText.split('/');
  var result=that.calculateExpiry(Number(split_expiry[0]),Number(split_expiry[1]));
  if(!result){
    logger.info("breaking...");
    break;
  }
}
  return result;
}

this.calculateExpiry=function(month,year){
  var date = new Date();
   var currentYear = date.getFullYear();
   var currentMonth = date.getMonth();
   util.waitForMoreTime();
   if(!(year<Number(currentYear))){
       if(year==Number(currentYear)){
           if(!(month<Number(currentMonth)+1)){
             return true;
           }
          else{
            return false;
          }
       }
      else{
        return true;
      }
   }
   else{
     return false;
   }

};

this.checkLimit=async function(arg){
  let element1=await util.waitForExpectedElement(limitInfo);
  let text1=await util.getText(element1);
 let match=await util.compareText(text1,arg)
 return match;

};

this.clearBalance=async function(){
  var element=await util.waitForExpectedElement(amountInputBox);
  await util.clearText(element);
};

this.generateErrorForCardDetailsField=function(){
  util.waitForMoreTime();
  util.switchToFrame('wp-cl-custom-html-iframe');
  let cardHolderField=util.waitForElementPresent(cardHolderFieldSelector);
  util.clickEvent(cardHolderField);
  let monthExpiryField=util.waitForElementPresent(monthExpirySelector);
  util.enterText(monthExpiryField,"Month");
  let yearExpiryField=util.waitForElementPresent(yearExpirySelector);
  util.enterText(yearExpiryField,"Year");
  let securityCodeField=util.waitForElementPresent(securityCodeFieldSelector);
  util.clickEvent(securityCodeField);
  util.clickEvent(element(by.css("fieldset[id='cardDetails']")));
};

this.selectPreviousExpiryDate=function(){
    var date=new Date();
    var expired_month=date.getMonth();
    expired_month=expired_month.toString();
    if(expired_month.length==1){
      expired_month="0"+expired_month;
    }
    var expired_year=date.getFullYear();
    expired_year=expired_year.toString();
    util.waitForMoreTime();
    util.switchToFrame('wp-cl-custom-html-iframe');
    let monthExpiryField=util.waitForElementPresent(monthExpirySelector);
    util.enterText(monthExpiryField,expired_month);
    let yearExpiryField=util.waitForElementPresent(yearExpirySelector);
    util.enterText(yearExpiryField,expired_year);
    util.clickEvent(element(by.css("fieldset[id='cardDetails']")));
};

this.checkMerchantAddress=async function(type){
  switch(type){
    case "saved-pay":
      merchantAddress=by.css("div[class='m-3'] div[class='my-5'] p");
      break;
    case "new-pay":
      merchantAddress=by.css("div[class*='payments-page__section'] div div[class*='m-3 step-card-dtail'] div[class='ember-view'] div:nth-child(3) p");
      break;
    default:
      logger.error("No such type");

  }
  util.waitForMoreTime();
  let address=await util.getText(element(merchantAddress));
  logger.info("Address:"+address);
  return await address.includes('British Gas Business merchant address');
};

this.verifyMerchantAddressIsPresent=async function(type){
merchantAddress=by.css("div[class*='payments-page__section'] div div[class*='m-3 step-card-dtail'] div[class='ember-view'] div:nth-child(3) p");
let isPresent=await util.isElementPresent(merchantAddress);
return isPresent;
};

this.verifyNoSavedCardsPresent=async function(){
  var isNoSavedCardPresent=await util.isElementPresent(by.css("div[data-test-no-saved-cards-info]"));
  return isNoSavedCardPresent;
};

this.verifyWorldPayDisplayed=async function(){
  let isPresent=await util.isElementPresent(worldPayIframe);
  return isPresent;
};

this.verifyPayWithNewCardDisplayed=async function(){
  let isPresent=await util.isElementPresent(payNewCard);
  return isPresent;
};

this.clickManageCard=function(){
 util.waitForMoreTime();
 var element=util.waitForElementToBeClickableAndReturnElement(manageCardLink);
 util.clickEvent(element);
};

this.getCardDetailsAfterNewPay=async function(){
  let element=await util.waitForExpectedElement(by.css("div.payments-page__saved-cards-table ul li:nth-child(2) div:nth-child(2) strong:nth-child(3)"));
  let cardNumber=await util.getText(element);
  logger.info("cardNumber:"+cardNumber);
  let result=await util.compareText(cardNumber,'4444');
  return result;
};



}; module.exports = new LoggedInPayment();
