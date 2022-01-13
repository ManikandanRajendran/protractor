var FunctionalUtil = function()
{
  var login = require('../Pages/Obj_LoginPage.js');
  var util = require('./FrameworkUtil.js');
  var log4js = require('log4js');
  var logger = log4js.getLogger();

  var errorFeedback="";


  this.launchUrl=function(url) {
     browser.get(url);
  };


  this.navigateToAURL=function(url) {
       browser.get(url);
    };

     this.enterPassword=function(arg){
      login.enterpassword(arg);
    }

  this.navigateToLogin=async function(){
    let isPresent=await login.isLogoutPresent();
    if(isPresent){
      let logOut=login.findLogout();
      logOut.click();
      let logBack=await login.findLogBackIn();
      logBack.click();
    }
    else{
    let element=login.findLogin();
    element.click();
  }
};
  //
  // this.navigateToRegister=async function(){
  //   let isPresent=await login.findRegister();
  //   if(isPresent){
  //   let element=login.findRegister();
  //   element.click();
  // }
  // }

   this.enterEmailAddress=async function(arg){
    await login.enterEmailAddress(arg);
  }

  this.clickLogin=function(){
    let element=login.findLoginSubmit();
    element.click();
  }

 this.clickLogout=async function(){
    let isPresent=await login.isLogoutPresent();
    if(isPresent){
      let logOut=login.findLogout();
      logOut.click();
      let logBack=await login.findLogBackIn();
        return isPresent;
    }
    else{
      return false;
    }
  }

/*Function to scroll to the logout button*/
    this.scrollToLogout = function()
    {
        util.waitForMoreTime();
        var script="arguments[0].scrollIntoView(true);";
        var ele = login.findLogout();
        return util.executeScript(script,ele);

    };

  this.loginWithCredentialsDelay=function(emailAddress,password){
	    login.findEmailAddress().sendKeys(emailAddress);
	    login.findPassword().sendKeys(password);
	    let element=login.findLoginSubmit();
	    element.click();
	    util.waitForMoreTime();
    }

  this.loginWithCredentials= function(emailAddress,password){
    util.waitForMoreTime();
    login.findEmailAddress().sendKeys(emailAddress);
    login.findPassword().sendKeys(password);
    let element= login.findLoginSubmit();
    element.click();
  };

   this.enterCredentials=function(emailAddress,password){
      var that=this;
      util.waitForMoreTime();
      logger.info("emailAddress:"+emailAddress);
      logger.info("password:"+password);
      login.findEmailAddress().sendKeys(emailAddress);
      login.findPassword().sendKeys(password);

      logger.info("enterCredentials");
    //  await that.logRequests();
    };

  this.loginAnonymousWithCredentials=function(emailAddress,accountNumber,postalCode,type){
    var that=this;
    util.waitForMoreTime();
    if(type==="Reminder_Electricity" || type==="MultiMeter"){
       emailAddress=that.emailSplitUp(emailAddress);
       logger.info("Email split up after:"+emailAddress);
    }
    login.findASMREmailAddress().sendKeys(emailAddress);
    login.findASMRAccountNumber().sendKeys(accountNumber);
    login.findASMRSitePostcode().sendKeys(postalCode);
    let element=login.findNextButton();
    element.click();
  };

    this.navigateToRegister=function(){
      logger.info("navigating to register");
      let element=login.findRegister();
      element.click();
    }


    this.verifyError=async function(errorMsg,type){
      switch(type){
        case "invalid-pound":
		case "invalid-credentials":
            errorFeedback = by.css("div[class='form-control-feedback']");
            break;
		case "blacklist":
        case "other":
            errorFeedback=by.css("div[class='ukb-registration--error-text'] p");
            break;
        case "ASMR-invalid":
            errorFeedback=by.css(".tertiary-text");
            break;
        case "email-invalid":
            errorFeedback=by.css("div[data-test-accountdetail-email] div[class='form-control-feedback']");
            break;
        case "account-invalid":
            errorFeedback=by.css("div[data-test-accountdetail-accountnumber] div[class='form-control-feedback']");
            break;
        case "postcode-invalid":
            errorFeedback=by.css("div[data-test-accountdetail-postcode] div[class='form-control-feedback']");
            break;
        case "card-limit":
            browser.executeScript('window.scrollBy(0,1000);');
            errorFeedback=by.css("div[class*=payments-page__section] div[data-test-max-cards-added-info]");
            break;
        case "control-label":
            errorFeedback=by.css("label[class='form-control-label error-color']");
            break;
        case "cardNumber":
            errorFeedback=by.css("fieldset[id='cardDetails'] div:nth-child(2)  p[class='field-wrapper first error'] small");
            break;
        case "cardHolderName":
            errorFeedback=by.css("fieldset[id='cardDetails'] div:nth-child(2)  p[class='field-wrapper last error'] small");
            break;
        case "cardExpiry":
            errorFeedback=by.css("fieldset[id='cardDetails'] div[class='row pair clearfix section-details-bottom']  p[class='field-wrapper first error']  small");
            break;
        case "cardSecurity":
            errorFeedback=by.css("div[id='securityCodeDivId']  p  span[class='pin-wrapper error']  small");
            break;
        case "refused":
            errorFeedback=by.css("div[class='ukb-registration--error-text'] h5 b");
            break;
            case "NoScecurityQuestions":
              errorFeedback=by.css("div[class='add-accounts__error-message order-2'] p");
              break;

        default:
            logger.error("No such error type "+type);
      }
    let errorElement=await util.waitForExpectedElement(errorFeedback);
    let generatedError=await util.getText(errorElement);
    logger.info("generatedError:"+generatedError);
    return await util.compareText(generatedError,errorMsg);
    };

    this.emailSplitUp = function(emailID)
    {
    var temp = emailID.split("@");
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 8; i++){
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    email = temp[0]+ text + "@" + temp[1];
    return email;
    }


    this.clickChildAccount= function(type){
      switch(type){
        case "debit":
           browser.executeScript('window.scrollTo(0, 1000);');
           var i=12;
           break;
        case "closedCredit":
           var i=7;
           break;
        case "normalVDD":
           var i=3;
           break;
        case "normalBill":
           var i=3;
           break;
        case "collectiveVDD":
           var i=3;
           break;
        case "normalAmendVDD":
           var i=4;
           break;
        case "collectiveAmendVDD":
           var i=4;
            break;
        case "normalAmendFDD":
           var i=6;
           break;
        case "inactiveDD":
           var i=2;
           break;
        case "collectiveDDInProgress":
          browser.executeScript('window.scrollTo(0, 1000);');
           var i=4;
           break;
        case "normalDDInProgress":
           var i=9;
           break;
        case "normalVDDblacklist":
          var i=4;
          break;
        case "collectivePayment":
             var i=10;
             break;
        default:
           i=0;
           logger.info("No such child Account");
      }
      if(i!=0){
        if(type.includes('closed')||type.includes('inactive')){
          let element=util.waitForElementToBeClickableAndReturnElement(by.css("div[class='accounts-list__wrapper inactive-list__wrapper'] div:nth-child("+i+") div[class='row account-row__wrapper '] div"));
          util.clickEvent(element);
        }
        else{
        let element=util.waitForElementToBeClickableAndReturnElement(by.css("div[class='accounts-list__wrapper'] div:nth-child("+i+") div[class='row account-row__wrapper '] div"));
        util.clickEvent(element);
      }
       }
      };
this.verifyLinksInConfirmation=async function(type,journey){
        switch(type){
          case 'ASMR-register':
          var i=4;
          var expectedText='Don\'t have an online account? Register now, it only takes a few minutes.';
          var navigatePageLocator=by.css("h1[class='ukb-registration-title']");
          var navigateText='Register your online business account';

          break;

          case 'payment-register':
          var i=1;
          var expectedText='Don\'t have an online account? Register now, it only takes a few minutes.';
          var navigatePageLocator=by.css("h1[class='ukb-registration-title']");
          var navigateText='Register your online business account';
          break;

          case 'ASMR-login':
          var i=5;
          var expectedText='Log in to check your bills, balance, make payments and more.';
          var navigatePageLocator=by.css("div[class*='ukb-your-account--login'] section[class='text-center'] h1");
          var navigateText='Log in to your business account';
          break;

          case 'payment-login':
          var i=2;
          var expectedText='Log in to check your bills, balance, make payments and more.';
          var navigatePageLocator=by.css("div[class*='ukb-your-account--login'] section[class='text-center'] h1");
          var navigateText='Log in to your business account';
          break;

         default:
         logger.error("no such type");

        }
        if(type.includes('ASMR')){
          var oneClickLinkTextInConfirmation=by.css("div[data-test-confirmation-detail] p:nth-child("+i+")");
          var oneClickLinkInConfirmation=by.css("div[data-test-confirmation-detail] p:nth-child("+i+") a");
        }

        if(type.includes('payment')){
          var oneClickLinkTextInConfirmation=by.css("div[id='payment-confirmation'] div[class='ember-view'] div:nth-child(2) div[class='col-12 mt-2'] p:nth-child("+i+")");
          var oneClickLinkInConfirmation=by.css("div[id='payment-confirmation'] div[class='ember-view'] div:nth-child(2) div[class='col-12 mt-2'] p:nth-child("+i+") a");
        }
        let element=await util.waitForExpectedElement(oneClickLinkTextInConfirmation);
        let linkText=await util.getText(element);
        logger.info("linkText:"+linkText);
        let result=await util.compareText(linkText,expectedText);
        if(result){
           let linkElement=await util.waitForExpectedElement(oneClickLinkInConfirmation);
           util.clickEvent(linkElement);
           util.waitForMoreTime();
           let navigatePage=await util.waitForExpectedElement(navigatePageLocator);
           let textCenter=await util.getText(navigatePage);
           result=await util.compareText(textCenter,navigateText);
         }
        return result;

      };

  this.clickToolTip= async function(arg){

  util.waitForMoreTime();

  if(arg.includes('asmr')){
  var clickthis = await util.waitForExpectedElement(by.xpath("//h2['data-test-meter-read-heading']"));
  var textval = await util.getText(clickthis);
  logger.info("Text is : "+textval);
  util.clickEvent(clickthis);
  }
  if(arg.includes('payment')){
  var clickthis = await util.waitForExpectedElement(by.css("h3[class='ukb-non-oam-payment__title']"));
  var textval = await util.getText(clickthis);
  logger.info("Text is : "+textval);
  util.clickEvent(clickthis);
  }
  switch(arg){
     case "asmr-account":
       logger.info("asmr-account")
        var element = await util.waitForExpectedElement(by.xpath("//*[@class='account-detail row container']/div/div[2]//*[@data-test-accountdetail-accountnumber='true']//span/i"));
        break;
    case "asmr-postcode":
        var element = await util.waitForExpectedElement(by.xpath("//*[@class='account-detail row container']/div/div[2]//*[@data-test-accountdetail-postcode='true']//span/i"));
        break;
    case "payment-account":
        logger.info("payment-account")
        var element = await util.waitForExpectedElement(by.xpath("  //*/form[@class='your-details-form']/div[@class='form-group row'][1]/div/div/span[1]"));
        break;
    case "payment-postcode":
        var element = await util.waitForExpectedElement(by.xpath("  //*/form[@class='your-details-form']/div[@class='form-group row'][2]/div/div/span[1]"));
        break;
    default:
       logger.error("no such type");
  }
  util.waitForMoreTime();
  util.retryingClick(element.locator());
  util.waitForMoreTime();
  util.waitForMoreTime();

  };

  this.verifyToolTip=async function(arg){
  util.waitForMoreTime();
  util.waitForMoreTime();
  util.waitForMoreTime();
  util.waitForMoreTime();
  if(arg.includes('asmr')){
    var img1=await util.isElementPresent(by.css("div[class='tooltip-overlay'] img[src*='bill']"));
    var img2=await util.isElementPresent(by.css("div[class='tooltip-overlay'] img[src*='email']"));
  }
  if(arg.includes('payment-account')){
    var img1=await util.isElementPresent(by.css("div[class='payment-tooltip'] img[src*='bill']"));
    var img2=await util.isElementPresent(by.css("div[class='payment-tooltip'] img[src*='email']"));
    }
    if(arg.includes('payment-postcode')){
      var img1=await util.isElementPresent(by.css("div[class='payment-tooltip'] img[src*='site-postcode']"));
      var img2=await util.isElementPresent(by.css("div[class='payment-tooltip'] img[src*='billing-postcode']"));
      }
  let element=await util.waitForExpectedElement(by.css("div[class='btn btn-secondary mt-3 mb-3']"));
  util.clickEvent(element);
  if(img1 && img2){
    return true;
  }
  else {
    return false;
  }
  };
this.closeCookies=async function(){
util.waitForMoreTime();
var element=await util.waitForExpectedElement(by.css("div[class='cookie-warning ember-view'] span")).catch((err) => { logger.info("cookie bar is not visible"); });;
if(element)
{
    util.clickEvent(element);
}
};


this.selectAccount=function(accountNumber){
    let element=util.waitForElementToBeClickableAndReturnElement(by.xpath("//*[@class='row account-row__wrapper ']/div/p/strong[contains(text(),'"+accountNumber+"')]"));
    util.clickEvent(element);
}

}; module.exports = new FunctionalUtil();
