var DirectDebit = function()
{

var log4js = require('log4js');
var logger = log4js.getLogger();

var util=require('../utils/FrameworkUtil.js')

var ddInProgress=by.css('div[class*="payments-page"] ul li div[class="link-list__text"]');
var setupVDDButton = by.css(".d-inline-block>div:nth-child(1) button");
var setupFDDButton = by.css(".d-inline-block>div:nth-child(2) button");
var selectAuthYesButton=by.css("button[data-test-authorisation-yes-button]");
var selectAuthNoButton=by.css("button[data-test-authorisation-no-button]");
var accountHolder=by.css("input[name='model.accountHolderName']");
var sortCode=by.css("input[name='model.sortCode1']");
var bankNumber=by.css("input[name='model.bankAccountNumber']");
var continueButton=by.css("button[data-test-continue-button]");
var guaranteeCheckbox= by.css(".check-box-check");
var submitButton=by.css("button[type='submit']");
var confirmation=by.css("div[class*='payments-page'] div div div[class*='payments-page__section'] div:nth-child(2) div:nth-child(6) h5");
var confirmMessage=by.css("div[class*='confirmation'] p span");
var directDebitHeading=by.css("div[class*='payments-page'] div div div[class*='table-panel'] div div strong");
var dropDownDay=by.css("div[data-test-select-dropdown] div div[class*='ember-basic-dropdown-trigger']");
var pdfLink=by.css("a[data-test-details-setup-vdd-pdf]");

this.verifyMessage=async function(arg){
  let element=await util.waitForExpectedElement(ddInProgress);
  let ddInProgressText=await util.getText(element);
  let result=ddInProgressText.includes(arg);
  return result;
};

this.clickDDType=function(arg){
  switch(arg){
    case 'variable':
       util.waitForMoreTime();
       var element=util.waitForElementToBeClickableAndReturnElement(setupVDDButton);
       util.clickEvent(element);
      break;
    case 'fixed':
      util.waitForMoreTime();
      var element=util.waitForElementToBeClickableAndReturnElement(setupFDDButton);
      util.clickEvent(element);
      break;
    default:
      logger.error("Not a proper type of DD");
  }
};

this.clickForAuthorization=function(type){
  if(type==='yes'){
  var element=util.waitForElementToBeClickableAndReturnElement(selectAuthYesButton);
}
else{
  var element=util.waitForElementToBeClickableAndReturnElement(selectAuthNoButton);
 }
  util.clickEvent(element);
};

this.enterDetails=function(holderName,code,number,type){
  util.waitForMoreTime();
  if(type==='fixed'){
      let dropDown=util.waitForElementToBeClickableAndReturnElement(dropDownDay);
      var split_new_date=util.retrieveNextDate(new Date());
      var day=split_new_date[2];
      if(day.length==2 && day.charAt(0)=="0"){
        day=day.slice(1);
      }
      logger.info("day: "+day);
      util.clickEvent(dropDown);
      let selectDay=util.waitForElementPresent(by.css("div[class*='ember-basic-dropdown'] ul li[data-option-index=\""+day+"\"]"));
      util.clickEvent(selectDay);
      util.waitForMoreTime();
  }
  let holderField=util.waitForElementPresent(accountHolder);
  util.enterText(holderField,holderName)
  let codeField=util.waitForElementPresent(sortCode);
  util.enterText(codeField,code)
  let bankNumberField=util.waitForElementPresent(bankNumber);
  util.enterText(bankNumberField,number);
  browser.executeScript('window.scrollBy(0,1000);');
  let element=util.waitForElementToBeClickableAndReturnElement(continueButton);
  util.clickEvent(element);
};

this.checkGuaranteeForm=async function(){
  let element=await util.waitForExpectedElement(guaranteeCheckbox);
   util.clickEvent(element);
};

this.submitDD=async function(){
  let element=await util.waitForExpectedElement(submitButton);
  util.clickEvent(element);
};

this.verifyConfirmation =async function()
{
  let element=await util.waitForExpectedElement(confirmation);
  let text= await util.getText(element);
  let isMatching=await util.compareText(text,"Confirmation");
  return isMatching;
};


this.verifyConfirmationMessage =async function(message)
{
  let element=await util.waitForExpectedElement(confirmMessage);
  let text= await util.getText(element);
  let isMatching=await util.compareText(text,message);
  return isMatching;
};

this.verifyDirectDebitHeading=async function(arg){
  let element=await util.waitForExpectedElement(directDebitHeading);
  let text= await util.getText(element);
  let isMatching=await util.compareText(text,arg);
  return isMatching;
};

this.clickPDF=function(){
  let element=util.waitForElementPresent(pdfLink);
  util.clickEvent(element);
};
this.checkPDFOpened=async function(){
  console.log("check pdf opened");
  let windows=await util.getWindowHandle();
  util.switchToWindow(windows[1]);
  let url=await util.getUrl();
  return url.includes('content/dam/bgbusiness/documents/Direct-debit-mandate-July.PDF');
};
}; module.exports = new DirectDebit();
