var AnonymousPaymentPage = function(){
  var bot;
  var common;
  var util;
  var log4js = require('log4js');
  var logger = log4js.getLogger();

  var util=require('../Utils/FrameworkUtil.js');
  var Futil=require('../Utils/FunctionalUtil.js');
  var expect = require('expect');
  var accnum;
  var scenario;
  var email;
  var ExistingBalance="";
  var newBalance;
var AnonymousPay_MAPPaymentButton = by.xpath('//*[@class="loggedin-anonymous"]/div[1]/div[2]//a');
var AnonymousPay_MAPPaymentNavigation = by.xpath('.//*[@id="panel_container_1"]//*[@class="loggedin-anonymous"]//a[@class="accordion-toggle"]');
var AnonymousPay_MAPButton1 =by.xpath('.//*[@class="btn btn-aem   btn-primary float-left"]');
var AnonymousPay_MAPPaymentHeader = by.css('.ukb-non-oam-payment__title');
var AnonymousPay_MAPPaymentSubHeader = by.css('h6[class="m-0"]');
var AnonymousPay_MAPPaymentYourDetails = by.css('#your-details .m-0 strong');
var AnonymousPay_MAPPaymentYourDetailsSub = by.css('#your-details div[class="col-12"] :nth-child(3)');
var AnonymousPay_AccountNumber = by.css(".your-details-form .form-control-label");
var AnonymousPay_PostCode = by.css("label[for='postcode']");
var AnonymousPay_Email = by.css(".your-details-form :nth-child(4) label[class='form-control-label ']");
var AnonymousPay_AccountNumberTextfield =by.css("input[name='contractAccountNumber']");
var AnonymousPay_PostCodeTextfield = by.css("input[name='postcode']");
var AnonymousPay_EmailTextfield = by.css("input[name='email']");
var AnonymousPay_EmailContent = by.css('.mb-0 strong');
var AnonymousPay_NextButton = by.css('.my-0 button[type="button"]');
var AnonymousPay_PaymentSection = by.css('#payment-details .m-0 strong');
var AnonymousPay_PaymentAccountNumber =by.css('p[class="mb-2 account-number"]');
var AnonymousPay_PaymentSiteAddress = by.css('p[class="mb-2 user-address"]');
var AnonymousPay_paymentBalance = by.css('p[class="mb-2 user-account-balance"] span');
//var AnonymousPay_payingamount = element(by.xpath('.//*[@class="float-left mt-1"]/strong'));
var AnonymousPay_PaymentAmountField = by.css('input[name="amountToPay"]');
var AnonymousPay_PaymentContinueButton = by.css('.submit-button');
var AnonymousPay_WorldPayFrame = by.css("#wp-cl-custom-html-iframe");
var AnonymousPay_WorldPayHeader = by.css('#main>div:nth-child(1)');
var AnonymousPay_WorldPayTitle = by.css('.box-title');
var AnonymousPay_WorldPaySubTitle = by.css('.note');
var AnonymousPay_WorldPayCnumber = by.css("#cardNumber");
var AnonymousPay_WorldPayCName = by.css("#cardholderName");
var AnonymousPay_WorldPayScode = by.css("#securityCode");
var AnonymousPay_WorldPayEmonth = by.css('[name="expiryDate.expiryMonth"] option[value="05"]');
var AnonymousPay_WorldPayEyear = by.css('select[name="expiryDate.expiryYear"] option[value="2022"]');
var AnonymousPay_WorldPaySubmit = by.css("input[id='submitButton']");
var AnonymousPay_WorldPayhelp = by.css("#pin-helptxt");
var AnonymousPay_PaymentTitle = by.css('#payment-confirmation h4[class="m-0"]');
var AnonymusPay_PaymentWish = by.css('h3[class="text-primary"]');
var AnonymousPay_paymentConfirmationtext = by.xpath('.//*[@id="payment-confirmation"]/div/div[2]/div/p[1]');
var AnonymousPay_paymentReferencetext = by.css('#payment-confirmation .mt-3 .col-12 :nth-child(3)');
var AnonymousPay_BalanceAmount = by.css('#payment-confirmation .mt-3 .col-12 :nth-child(5)');

//################Error Message validation#######################################

var AnonymousPay_ErrorMessage = by.xpath(".//*[@class='ukb-registration--error-text']/p");
var AnonymousPay_AccountNumberError = by.css(".your-details-form :nth-child(1) .col-lg-4 .ember-view :nth-child(4)");
var AnonymousPay_PostCodeError = by.xpath("//*[text()[contains(.,'Enter a valid UK postcode.')]]");
var AnonymousPay_EmailError = by.xpath("//*[text()[contains(.,'Enter a valid email address')]]");
var AnonymousPay_ChildaccountError = "We can't process your payment online. Please call us on 0800 316 2010.";
var AnonymousPay_DDErrorMessage = "You're already set up on Direct Debit, so you don't need to make a payment.";
var AnonymousPay_ZeroBalance = "Your account is currently in credit, so you don't need to make a payment.";
var AnonymousPay_CreditBalanceError = "Your account is currently in credit, so you don't need to make a payment.";
var AnonymousPay_CIFlagError = "We can't take your payment online, please call us on 0800 316 2010.";
var AnonymousPay_PaymentError = by.css("#payment-details .ember-view form .form-group .form-control-feedback");
var AnonymousPay_PaymentFailureErrorpath = by.xpath(".//*[@class='ukb-registration--error-text']/p");
var AnonymousPay_PaymentFailureError = "We can't process your payment online. Please call us on 0800 316 2010";
var AnonymousPay_PaymentMoreThan2Times = "You've reached the maximum number of online payments you can make. Please call us on 0800 316 2010.";
var AnonymousPay_PaymentSitePostCodeError = "The postcode you entered for this account doesn't match our records. It should match the postcode on your bill. If you are still having problems, you can call 0800 316 2010";


this.navigatetoPaymentPage = function(url){
  util.launchUrl(url+"make-a-payment");
};

this.ClickPaymentLink = function(url){
  util.launchUrl(url+"account/pay");
};

this.checkpageload = async function(){
  let result = await util.waitForElementPresent(AnonymousPay_MAPPaymentHeader);
  return result;
}

//Verify fields in "Your Details" Section
this.VerifyMAPLandingPage = async function(){
  var pagetitle_ele = await util.waitForExpectedElement(AnonymousPay_MAPPaymentHeader);
  //logger.info("inside function");
  var fields = [AnonymousPay_MAPPaymentHeader,AnonymousPay_MAPPaymentSubHeader,AnonymousPay_MAPPaymentYourDetails,AnonymousPay_MAPPaymentYourDetailsSub,AnonymousPay_AccountNumber,AnonymousPay_PostCode,AnonymousPay_Email,AnonymousPay_EmailContent];
  var texts = ["Make a business energy payment","You can make a payment securely online using credit or debit card.","Your business account details","Please enter details for the business energy account you wish to make a payment for.","Enter your business account number","Enter your postcode","Enter your email address (optional)","Would you like us to email your payment confirmation?"];
      for(var i =0;i<fields.length;i++)
      {
        //logger.info("inside for loop : "+i);
        let el= await util.waitForExpectedElement(fields[i]);
        let readtext = await util.getText(el);
        let result = await util.compareText(readtext,texts[i]);
          if(result)
          {
            logger.info("Values are same for : "+readtext+" : "+texts[i]);
          }else
          {
            logger.info("Values are not same for : "+readtext+" : "+texts[i]);
            return false;
          }
      }
      return true;
};

//Feeding data from excel based on the scenarios for "Your Details" section
this.enterPaymentDetails = async function(accnum,postcode,email)
{
  logger.info("Inside function");
  accnum = accnum;
  let result = await util.isElementPresent(AnonymousPay_AccountNumberTextfield);
  //logger.info("Element present : "+result);
  if(result)
  {
    var fields = [AnonymousPay_AccountNumberTextfield,AnonymousPay_PostCodeTextfield,AnonymousPay_EmailTextfield];
    var inputs = [accnum,postcode,email];
    for(var i =0;i<fields.length;i++)
    {
        let acc_ele = await util.waitForExpectedElement(fields[i]);
        util.enterText(acc_ele,inputs[i]);
        logger.info("Input passed : "+inputs[i]);
        //browser.sleep(10000);
    }
    return true;
  }else{logger.info("Element not present : "+result);return false;}
};

//Click [Next] button in your details page
this.clickpaymentdetailscontinue = async function(){
//  let element=util.waitForElementPresent(AnonymousPay_NextButton);
browser.executeScript('window.scrollTo(0,250);');
 let result = await util.waitForExpectedElement(AnonymousPay_NextButton);
  logger.info("Clicking continue after entering account details "+result);
  util.clickEvent(result);
  //browser.sleep(5000);
};


this.clickaccnumfield = async function(){
  let acc_ele = await util.waitForExpectedElement(AnonymousPay_PostCodeTextfield);
  acc_ele.clear();
  util.enterText(acc_ele,"NG9 2LQ");
  //util.clickEvent(AnonymousPay_AccountNumberTextfield);
}

this.checkpriceagain = async function()
{
  util.waitForMoreTime1();
  let ele = await util.waitForExpectedElement(AnonymousPay_paymentBalance);
  let result  = await util.getText(ele);
    Nbalance = result;
    var amount = Nbalance.replace(/£/gi,"");
    Nbalance = amount;
    //bot.SplitText(AnonymousPay_PaymentAccountNumber,accNum,":",1)
    logger.info("New balance is : "+Nbalance);
    if(newBalance.includes(Nbalance)){
      logger.info("Balance updated successfully - existing : "+ExistingBalance+" and NewBalance : "+Nbalance);
      return true;
    }
    else
    {
      logger.info("Balance is not updated successfully - existing : "+ExistingBalance+" and NewBalance : "+Nbalance);
      return false;
    }
}

//Verify the fields in "Payment amount" section
this.VerifyPaymentDetailsSection = async function(){
  util.waitForMoreTime1();
  let ele = await util.waitForExpectedElement(AnonymousPay_paymentBalance);
  // let util
  // until.waitUntilElementToBeClickable(AnonymousPay_paymentBalance);
  let Ebalance  = await util.getText(ele);
    ExistingBalance = Ebalance;
    var amount = ExistingBalance.replace(/£/gi,"");
    ExistingBalance = amount;
    let ele1 = await util.waitForExpectedElement(AnonymousPay_PaymentAccountNumber);
    util.SplitText(ele1,accnum,":",1)
    logger.info("Existing balance is : "+ExistingBalance);

    var fields1 = [AnonymousPay_PaymentSection,AnonymousPay_PaymentAccountNumber,AnonymousPay_PaymentSiteAddress,AnonymousPay_paymentBalance];
    for(var i =0; i<fields1.length;i++)
    {
      let result = await util.visibilityOfElementLocated(fields1[i]);
      if(result)
      {
        logger.info("Element is present : "+result);
        value = result;
      }
      else
      {
        logger.info("Element is not present : "+result);
        return false;
      }
    }
    return value;
};

//To enter amount to pay
this.EnterAmountDetails = async function(val){
  payamount = val;
  logger.info("Paying amount is : "+payamount);
    util.waitForMoreTime1();
    //await util.waitForMoreTime();
    util.waitForMoreTime();
    let isPayfielddisplaying = await util.waitForExpectedElement(AnonymousPay_PaymentAmountField);
    util.clearText(isPayfielddisplaying);
    util.enterText(isPayfielddisplaying,val);
  };

//Enter payable amount more than current
this.EnterAmountDetailsMore = async function(){
  util.waitForMoreTime1();
  let result = await util.waitForExpectedElement(AnonymousPay_paymentBalance);
    result.getText().then(function(text){
      ExistingBalance = text;
      var amount = ExistingBalance.replace(/£/gi,"");
      ExistingBalance = +amount + 1 ;
        let isPayfielddisplaying = util.visibilityOfElementLocated(AnonymousPay_PaymentAmountField);
        util.clearText(isPayfielddisplaying);
        util.enterText(isPayfielddisplaying,ExistingBalance);
        util.clickEvent(result);
    });
    };

//Pass empty value to payment field
this.EnterAmountDetailsEmpty = async function(){
    let isPayfielddisplaying = await util.waitForExpectedElement(AnonymousPay_PaymentAmountField);
    util.clearText(isPayfielddisplaying);
};

//Click [continue] button in "Payment amount" section
this.ClickPaymentContinueButton = async function(){
    let result = await util.waitForExpectedElement(AnonymousPay_PaymentContinueButton);
    logger.info("clikcing payment continue button : "+result);
    util.clickEvent(result);
};

//To verify fields of worldpay section
this.VerifyWorldPayPage = async function(){
//logger.info("*******************Inside VerifyWorldPayPage");
  util.waitForMoreTime1();
  browser.executeScript('window.scrollTo(0,2500);');
  util.waitForMoreTime1();
  try{
      browser.switchTo().frame('wp-cl-custom-html-iframe');//.then(function(){
          var fields2 = [AnonymousPay_WorldPayTitle,AnonymousPay_WorldPaySubTitle,AnonymousPay_WorldPayCnumber,AnonymousPay_WorldPayCName,AnonymousPay_WorldPayScode,AnonymousPay_WorldPayEmonth,AnonymousPay_WorldPayEyear];
          for(var i =0; i<fields2.length;i++){
            //let element = await util.waitForExpectedElement(fields2[i]);
            let result = await util.visibilityOfElementLocated(fields2[i]);
            if(result)
            {
              logger.info("Element is displaying : "+result);
            }
            else
            {
              logger.info(element+" Element is not displaying : "+result);
            }
          }
      //});
    }catch(e)
    {
      logger.info("Worldpay frame is not displaying ");
    }
};

//Enter card details from excel depends on scenarios
this.EnterCardDetails = async function(card,name,month,year,cvv){
  //logger.info("Inside Enter card details");
  util.waitForMoreTime();
      var fields = [AnonymousPay_WorldPayCnumber,AnonymousPay_WorldPayCName,AnonymousPay_WorldPayScode];
      var entries = [card,name,cvv];
      //AnonymousPay_WorldPayEmonth,AnonymousPay_WorldPayEyear,month,year,
      for(i=0;i<fields.length;i++)
      {
        let result = await util.waitForExpectedElement(fields[i]);
        await util.enterText(result,entries[i]);
        //util.waitForMoreTime();
      }
      let selectdate = await util.waitForExpectedElement(by.css('select[name="expiryDate.expiryMonth"] option[value="05"]'));
      util.clickEvent(selectdate);
      let selectmonth = await util.waitForExpectedElement(by.css('select[name="expiryDate.expiryYear"] option[value="2022"]'));
      util.clickEvent(selectmonth);
      let extraclk = await util.waitForExpectedElement(by.css("small[id='pin-helptxt']"));
      util.clickEvent(extraclk);
      let clickbtn = await util.waitForExpectedElement(AnonymousPay_WorldPaySubmit);
      util.clickEvent(clickbtn);
      util.waitForPageLoad();
};

//To Verify fields of Confirmation page
this.VerifyApaymentConfirmationPage = async function(){
  util.waitForMoreTime1();
  //conf_verification = true;

  //until.waitUntilElementToBeClickable(AnonymousPay_BalanceAmount);
  var fields3 = [AnonymousPay_PaymentTitle,AnonymusPay_PaymentWish,AnonymousPay_paymentConfirmationtext,AnonymousPay_paymentReferencetext,AnonymousPay_BalanceAmount];
  for(var i =0; i<fields3.length;i++)
  {
    let result = await util.visibilityOfElementLocated(fields3[i]);
    if(result)
    {
      logger.info("Element "+fields3[i]+" is displaying");
      //return result;
    }else{return false;}
  }
  let ele = await util.waitForExpectedElement(AnonymousPay_BalanceAmount);
  let balamt = await util.getText(ele);
  newBalance = balamt;
  ExistingBalance1 = +ExistingBalance - payamount;
    if(newBalance.includes(ExistingBalance1)){
      logger.info("Balance amount validation success - existing : "+ExistingBalance1+" and NewBalance : "+newBalance);
      return true;
    }
    else
    {
      logger.info("Balance amount validation Failed - existing : "+ExistingBalance1+" and NewBalance : "+newBalance);
      return false;
    }
};

//Negative scenario - to verify error various error messages of payment field
this.paymentfieldvalidations = async function(val){
  let result = await util.waitForExpectedElement(AnonymousPay_PaymentAccountNumber);
  util.clickEvent(result);
        switch(val){
          case "less than 2":
              let error1 = await util.waitForExpectedElement(AnonymousPay_PaymentError);
              //logger.info("element is : "+AnonymousPay_PaymentError);
              let errmsg = await util.getText(error1);
              //logger.info("Get text value is : "+errmsg);
              let compres = await util.compareText(errmsg,"The minimum amount you can pay is £2.00");
              if(compres){logger.info("Error message is as expected : "+errmsg);return true;}
              else{logger.info("Error message is not as expected : "+errmsg);return false;}
          break;
          case "more than current balance":
              let error2 = await util.waitForExpectedElement(AnonymousPay_PaymentError);
              let errmsg1 = await util.getText(error2);
              //util.CompareText(errmsg,"The minimum amount you can pay is £2.00");
              let compres1 = await util.compareText(errmsg1,"The amount you pay can't be more than your current balance");
              if(compres1){logger.info("Error message is as expected : "+errmsg1);return true;}
              else{logger.info("Error message is not as expected : "+errmsg1);return false;}
          break;
          case "empty":
              let error3 = await util.waitForExpectedElement(AnonymousPay_PaymentError);
              let errmsg2 = await util.getText(error3);
              let compres2 =  await util.compareText(errmsg2,"Enter amount you would like to pay");
              if(compres2){logger.info("Error message is as expected : "+errmsg2);return true;}
              else{logger.info("Error message is as expected : "+errmsg2);return false;}
          break;
          default:logger.info("Invalid input for paymentfieldvalidations ");
          return false;
        }
};

//Negative scenarios - error messages validations for all the scenarios
this.validateError = async function(arg1,arg2){
var xval;
var readtext;
that = this;
  switch (arg2)
  {
    case "payment declined":xval= AnonymousPay_PaymentFailureErrorpath;break;
    case "invalid postcode accnum":
              xval = [AnonymousPay_AccountNumberError,AnonymousPay_PostCodeError,AnonymousPay_EmailError];
              error = [arg1,"Enter a valid UK postcode.","Enter a valid email address"];
              for(i=0;i<xval.length;i++)
              {
                let result = await that.fieldvalidation(i,xval[i],error[i]);
                if(result)
                {
                  logger.info("Error message is same for : "+error[i]);
                }
                else
                {
                  logger.info("Error message is not same for : "+error[i]);
                  return false;
                }
              }
                return true;
    case "child account":
    case "SitePost_Code_Error":
    case "DD account":
    case "Zero Balance":
    case "Credit Balance":
    case "CI flag Balance":
    case "More than two payment":xval = AnonymousPay_ErrorMessage;break;
    default: logger.info("invalid input : "+arg2);
  }
  if(arg2 != "invalid postcode accnum")
  {
        if(arg2 != "SitePost_Code_Error")
        {
          util.waitForMoreTime();
          util.waitForMoreTime1();
        }
        else{
          //logger.info("inside else for : "+arg2);
          util.waitForMoreTime1();
          util.waitForMoreTime1();
        }

        //logger.info("Inside validate error "+xval);
        //util.waitForMoreTime();

        let el= await util.waitForExpectedElement(xval);
        let readtext = await util.getText(el);
        logger.info("Read Text is : "+readtext);
        let result = await util.compareText(readtext,arg1);
          if(result)
          {
            logger.info("Error message is same for : "+readtext+" : "+arg1);
            return true;
          }
          else
          {
            logger.info("Error message is not same for : "+readtext+" : "+arg1);
            return false;
          }
  }
  };

  this.fieldvalidation = async function(i,xval,error)
  {
    that = this;
    //logger.info("*******"+xval+"*************"+error+"************ "+i);
      util.waitForMoreTime();
      //let el= await util.waitForExpectedElement(xval);
      if(i===2)
      {
        let el1 = await util.waitForExpectedElement(by.css(".your-details-form .mb-0 p"));
        var el1text = await util.getText(el1);
        //logger.info("Text is : "+el1text);
        util.clickEvent(el1);
        let el2= await util.waitForExpectedElement(xval);
        let readtext = await util.getText(el2);
        //logger.info("inside if : "+readtext);
        let result = await util.compareText(readtext,error);
        return result;
      }
      else
      {
        let el= await util.waitForExpectedElement(xval);
        let readtext = await util.getText(el);
        //logger.info("inside else : "+readtext+" *************");
        let result = await util.compareText(readtext,error);
        return result;
    }

  }

};

module.exports = new AnonymousPaymentPage();
