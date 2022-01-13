var LoginLogout = function (){
  var common;
  var util;
  var log4js = require('log4js');
  var login = require('../Pages/Obj_LoginPage.js');
  var logger = log4js.getLogger();
  var funcUtil=require('../utils/FunctionalUtil.js');
  var Util=require('../utils/FrameworkUtil.js');
  var renewalelem=by.css('div.renewal__title');
  var renewalBuy=by.css('div.d-flex.justify-content-end button.btn.btn-submit');
  var accOverViewTitleCQ="Account overview";
  var cqpageyouracc=by.xpath('div.displaynone div.text.parbase h3');
  var loginroundel=by.css('div.row.pos-relative.hidden-sm-down div.roundaljumbotron a[href*="Login"]');
  var regroundel=by.css('div.row.pos-relative.hidden-sm-down div.roundaljumbotron a[href*="Register"]')
  var logoutcq=by.css('div.topnavbar a[href*="Logout"]');
  var youraccmegamenu=element(by.css('header.mega-menu__wrapper div.mega-menu__grid ul li:nth-child(5)'));
  var Loginlink = by.css('div.ukb-head-topnav  a[href*="login"]');var email = by.name('email');
  var logoutLink=by.css('div.ukb-head-topnav  a[href*="logmeout"]');var password = by.name('password');
  var Loginbtn = by.css('button.btn-submit'); var globsmrtext="Submit meter read";
  var emailErrorMessage=by.css('div.ukb-your-account--login--username div.form-control-feedback'); var emailError="Please enter a valid email address";
  var eError="Email address field can't be blank";
  var passwordErrorMessage=by.css('div.ukb-your-account--login--password div.form-control-feedback'); var passwordError="Password must contain letters and numbers";
  var passtooltip=by.xpath('//div[@class="ukb-registration-password-component"]//div[@class="ukb-registration-password-component-tip popover popover-right"]');
  var alreadyRegisteredMessage=by.css('div.ukb-registration--error-text p');var errorHeader=by.css('div.ukb-registration--error-text b');
  var blackListed=by.css('div.ukb-registration--error-text p');
  var billingLink = by.css('a[href*="view-bill"]');var vbtext="View your bills";
  var smrsection=by.css('button.btn.btn-secondary');
  var globalsmr="/business/global-submit-meter-read";var searchgsmr=by.css('div.submit button.fleft');
  var viewErrorMessage=by.css('div.view-bill div.pull-left b');  var viewBillErrorMessage="View your bills";
  var waittext=by.css('div.ukb-registration--error-text p');
  var paymentsmessage=by.css('div.payments-page div.row div.pull-left b'); var paytext="Make a payment";
  var oamregistrationErrorHeader=by.css('div.ukb-registration--error-text b');
  var oamregistrationErrorText=by.css('div.ukb-registration--error-text p');var logbackIn=by.css('button.btn.btn-submit');
  var logoutpage=by.css('div.row.logout-panel h1');var logoutText="You've been logged out";
  var closeButton=by.css('div.payments-page div.pull-right i'); var boilerText=by.css('div.text-center a[href*="business-care"]');
  var boiltext="Boiler maintenance"; var smartlinktext=by.css('div.text-center a[href*="smart"]'); var smarttext="Get a smart meter";
  var hiveLinkText=by.css('div.text-center a[href*="commercial"]'); var hivetext="New commercial boiler";
  var disabledtext="disabled"; var renewaltext="Renew online today and save"; var renewalele=by.css('div.content-wrapper div.title h1');
  var globalSMRel=by.css('div.title h1');
  var youraccountlink=by.xpath('//li[@class="trail-page last-trail-page"] //a[contains(text(),"Your account")]')
  var youraccountlinkSMR=by.css('div.text.parbase.canel-link a');
  var mpd=by.css('div.account-nav__wrapper a[href*="MPD"]'); var dashboard=by.css('.col.your-account__dashboard');
  var lastlogin=by.css('p.your-account__last-login'); var payclose=by.css('div.your-account div.pull-right');
  var errtexts="We can't find your energy account(s).";
  var yourAccount=new Array();
  yourAccount=['/business/your-account','/business/MPD','/business/your-account/logmeout'];
  var logougmegamenu=by.css('header.mega-menu__wrapper div.wrapper.mega-menu__navigation-wrapper div:nth-child(5)  div div div div div a[href*="logmeout"]');
  var BGIconLogo=by.css('header.mega-menu__wrapper  a.navbar-brand'); var BGHomePage="Business Energy | Business Energy Suppliers | British Gas Business";
  var MegaMenuMPD=by.css('header.mega-menu__wrapper div.wrapper.mega-menu__navigation-wrapper a[href*="MPD"]');
  var MegaMenuviewbill=by.css('header.mega-menu__wrapper div.wrapper.mega-menu__navigation-wrapper a[href*="your-account"]');
  var MegaMenuLogout=by.css('header.mega-menu__wrapper div.wrapper.mega-menu__navigation-wrapper a[href*="logmeout"]');
  var MegaMenuSMR=by.css('header.mega-menu__wrapper div.wrapper.mega-menu__navigation-wrapper a[href*="submit-meter-read"]');
  var MegaMenuPayment=by.css('header.mega-menu__wrapper div.wrapper.mega-menu__navigation-wrapper a[href*="make-a-payment"]');
  var MegaMenuSetUpDD=by.css('header.mega-menu__wrapper div.wrapper.mega-menu__navigation-wrapper a[href*="direct-debit-setup"]');
  var MegaMenuReqCopy=by.css('header.mega-menu__wrapper div.wrapper.mega-menu__navigation-wrapper a[href*="request-copy"]');
  var MegaMenuMovingPremises=by.css('header.mega-menu__wrapper div.wrapper.mega-menu__navigation-wrapper a[href*="moving-premises"]');
  var MegaMenuReadBill=by.css('header.mega-menu__wrapper div.wrapper.mega-menu__navigation-wrapper a[href*="how-to-read"]');
  var MegaMenuLogin=by.css('header.mega-menu__wrapper div.wrapper.mega-menu__navigation-wrapper a[href*="login"]');
  var registermegamenu=by.css('header.mega-menu__wrapper div.wrapper.mega-menu__navigation-wrapper a[href*="register"]');
  var businesspagetitle = by.xpath('/html/body/div[4]/div/div/div[1]/div[1]/div/div[1]/div[1]/div[1]/div/div[2]/div/div/div[1]/h1/span');
  var businesspagetitle3 = "British Gas for Business Energy";
  var settingsclk = by.xpath('//*[@class="item"]/span/i');
  var account15 = by.xpath ('//*[@class="accounts-list__totals"]');
  var accountoverview = by.xpath ('//*[@class="slate your-account__balance-plan__balance-copy"]')



  //Declaring Logger
  var log4js = require('log4js');
  var logger = log4js.getLogger();
  this.load = function (url) {
    bot.launchUrl(url);
  };


this.validateEmailTextBoxErrorMessage=async function(arg){
   logger.info("Inside validateEmailTextBoxErrorMessage method");
   let result=await Util.visibilityOfElementLocated(emailErrorMessage);
   if(result){
     let text=await Util.getText(emailErrorMessage);
     let result1=await Util.CompareText(text,arg);
     if(result1){
       logger.info("Validation of error message is successful "+result);
       return true;
     }
     else{
       logger.info("Validation of email error message is not successful ");
       return false;
     }
   }else{
     logger.info("Result is unsuccessful. Element is not present");
     return false;}
   return result;
};
  //Validating if the error message when invalid email is entered during Login
this.validateEmailErrorMessage=async function(arg){
    logger.info("Inside validateEmailErrorMessage method");
    let emailError=await Util.visibilityOfElementLocated(emailErrorMessage);
    if(emailError)
    {
      let emailErrorElement=Util.waitForUnstableElement(emailErrorMessage);
      let emailErrortext=await Util.getText(emailErrorElement);
      let emailErrorResult=await Util.compareText(emailErrortext,arg);
        if(emailErrorResult)
        {
          logger.info("Validation of error message is successful "+emailErrorResult);
          return true;
        }
        else
        {
          logger.info("Validation of error message for Email is not successful ");
          return false;
        }
    }
    else
    {
      logger.info("Result is unsuccessful. Element is not present");
      return false;
    }
    return result;
};

    //Validating if the error message when blank password is entered during Login
this.validatePasswordErrorMessage=async function(arg)
{
    logger.info("Inside validatePasswordErrorMessage method");
    let passwordError=await Util.visibilityOfElementLocated(passwordErrorMessage)
    if(passwordError){
      let passwordErrorElement=Util.waitForUnstableElement(passwordErrorMessage);
      let passwordErrorText=await Util.getText(passwordErrorElement);
      if(passwordErrorText.includes(arg)){
        logger.info("Validation for password error message is successful for ******"+arg);
        return true;
      }else{
        logger.info("Validation of password error message is not successful");
        return false;}
    }else{
      logger.info("Result is unsuccessful. Element is not present");
      return false;}
    return result;
};

  //Function to click on the British Gas Icon from account dashboard page$
this.clickBGIcon=function()
{
    let bglogo=Util.waitForElementToBeClickableAndReturnElement(BGIconLogo);
    bglogo.click();
};


this.validateBusinessHomePage1=async function()   //Function to validate the business home page$
{
  Util.waitForMoreTime();
  var businesspagetitle1=await Util.waitForExpectedElement(businesspagetitle);
  var businesspagetitle2 =await Util.getText(businesspagetitle1);
  Util.waitForMoreTime();
    if(businesspagetitle2.includes(businesspagetitle3))
    {
    logger.info(businesspagetitle1+" error message is displaying");
    return true;
    }
    else
    {
       return false;
    }
};
  //Function to validate the links under mega menu$
this.validateMegaMenuLinksLogIn=async function()
{
  let isPresent=await Util.waitForExpectedElement(billingLink);
  if(isPresent){
    browser.actions().
    mouseMove(youraccmegamenu).
    perform();
    Util.waitForMoreTime();
    let megamenumpdLink=await Util.waitForExpectedElement(MegaMenuMPD);
    if(megamenumpdLink){
      let megamenuviewbillLink=await Util.waitForExpectedElement(MegaMenuviewbill);
      if(megamenuviewbillLink){
        let megamenulogoutlink=await Util.waitForExpectedElement(MegaMenuLogout);
        if(megamenulogoutlink){
          megamenulogoutlink.click();
          Util.waitForMoreTime();
          let logBack=await login.findLogBackIn();
          return true;
        }
        else{
          return false;
        }
        return true;
      }
      else{
        return false;
      }
      return true;
    }
    else{
      return false;
    }
    return true;
  }
  else{
    logger.info("Validation failed for link under your account mega menu");
    return false;
  }
};


  //Function to validate if the links are present under your account mega menu in login page
  this.validateMegaMenuLinksBeforeLogIn=async function(){
    let isPresent=await Util.waitForExpectedElement(Loginlink);
    if(isPresent){
      browser.actions().
      mouseMove(youraccmegamenu).
      perform();
      Util.waitForMoreTime();
      let megamenusmrlink=await Util.waitForExpectedElement(MegaMenuSMR);
      if(megamenusmrlink){
        let megamenumaplink=await Util.waitForExpectedElement(MegaMenuPayment);
        if(megamenumaplink){
          let megamenuddlink=await Util.waitForExpectedElement(MegaMenuSetUpDD);
          if(megamenuddlink){
            let megamenucopylink=await Util.waitForExpectedElement(MegaMenuReqCopy);
            if(megamenucopylink){
                let megamenuloginlink=await Util.waitForExpectedElement(MegaMenuLogin);
                if(megamenuloginlink){
                  return true;
                }
                else{return false;}


              return true;
            }
            else{
              return false;}
            return true;
          }
          else{return false;}
          return true;
        }
        else{
          return false;}
        return true;}
      else{
        return false;}
        return true;}
    else{return false;}
  }


  //Function to validate if the roundel is not present in business home page after logbackIn
  this.validateLoginRoundel=async function(){
    let logroundel=await Util.waitForExpectedElement(loginroundel)
    if(logroundel){
      logger.info("Element present in the page");
      return false;
    }
    else{
      let registerroundel=await Util.waitForExpectedElement(regroundel);
      if(registerroundel){
        logger.info("Validation failed");
        return false;
      }
      else{
        logger.info("Login & Register roundel not present");
        return true;
      }
    }

  }


//Function to hover over your account mega menu$
this.clickYourAccountMegaMenu=async function(){
  let isPresent=await Util.visibilityOfElementLocated(logoutLink);
  if(isPresent){
    browser.actions().
    mouseMove(youraccmegamenu).
    perform();
    Util.waitForMoreTime();
    return true;
  }
  else{
    return false;
  }
}


//Function to validate the account overview page for CQ page$
this.AccOverViewCQ=async function(){
  Util.waitForMoreTime();
  Util.waitForMoreTime();
  Util.waitForMoreTime();
let CQLogout=await Util.waitForExpectedElement(account15);
if(CQLogout){
  let pagetitle=await Util.validatePageTitle();
  logger.info("////***** "+pagetitle);
  if(pagetitle.includes("You have more than 15 energy accounts")){
    logger.info("Success");
    return true;
  }
  else{
    return false;
  }
  return true;
}
else{
  logger.info("Failed");
  return false;
}
};

this.AccOverViewember=async function(){
  Util.waitForMoreTime();
  Util.waitForMoreTime();
  Util.waitForMoreTime();
let accountember=await Util.waitForExpectedElement(accountoverview);
var accountember2 =await Util.getText(accountember);
  if(accountember2.includes("Balance")){
    logger.info("Success");
    return true;
  }
  else{
    return false;
  }

};


//Function to click on logout link from the account overview page$
this.clickLogoutCQ=async function(){
  Util.waitForMoreTime();
  let CQLogout=await Util.waitForExpectedElement(logoutcq);
  if(CQLogout){
    CQLogout.click();
    return true;
  }
  else{
    return false;
  }
}


//Function to validate the links under your account mega menu
this.verifyLinksMegaMenu=async function(){
  for(let i=0;i<2;i++){
  var accountHover=by.css('header.mega-menu__wrapper div.wrapper.mega-menu__navigation-wrapper div:nth-child(5)  div div div div div a[href*="'+yourAccount[i]+'"]');
  var isPresent=await Util.isElementPresent(accountHover);
  if(isPresent==false){
    break;
  }
}
let samp=await Util.visibilityOfElementLocated(logougmegamenu);
if(samp){
  let es=Util.waitForElementToBeClickableAndReturnElement(logougmegamenu);
  es.click();
  Util.waitForMoreTime();
  return true;
}
else{
  Util.waitForMoreTime();
  return false;
}
Util.waitForMoreTime();
return isPresent;
}

  //Validating of logout page
  this.validateLogoutPage=async function(){
    let logbackInElement=Util.waitForElementToBeClickableAndReturnElement(logbackIn);
    if(logbackInElement){
      logger.info("Inside validation for log out page");
      let boilerElement=await Util.visibilityOfElementLocated(boilerText);
      if(boilerElement){
        let boilerElementText=Util.waitForUnstableElement(boilerText);
      let boitext=await Util.getText(boilerElementText);
      if(boitext.includes(boiltext)){
        logger.info("Validation successful for boilers");
        let smartlinkele=await Util.visibilityOfElementLocated(smartlinktext);
        if(smartlinkele){
          let smartlinkElement=Util.waitForUnstableElement(smartlinktext);
        let smartlitext=await Util.getText(smartlinkElement);
        if(smartlitext.includes(smarttext)){
          logger.info("Validation successful for smart ");
          let hiveElement=await Util.visibilityOfElementLocated(hiveLinkText);
          if(hiveElement){
            let hiveLinkElement=Util.waitForUnstableElement(hiveLinkText);
          let hivelitext=await Util.getText(hiveLinkElement);
          if(hivelitext.includes(hivetext)){
            logger.info("Validation successful for hive");
            return true;
          }else{
            logger.info("Validation unsuccessful for text comparison for hive");
            return false;
          }
          return true;
        }else{
          logger.info("Validation unsuccessful in text comparison for smart");
          return false;
        }
        return true;
      }
        else{
          return false;
        }
        return true;
      }else{
        logger.info("Validation unsuccessful in text comparison for boiler");
        return false;
      }
      return true;
    }
    else{
      return false;
    }
      return true;
    }
    else{
      return false;
        }
      return true;
    }else{
      logger.info("Validation unsuccessful for logout page");
      return false;
    }
  };


  //Validating if the error message when invalid email is entered during Login
  this.validateErrortextNotPresent=async function(arg){
    logger.info("Inside validateErrortextNotPresent method");
    var that=this;
    switch(arg){
      case "Please enter a valid email address":
      logger.info("Inside case: Please enter a valid email address");
    let validEmailError=await Util.visibilityOfElementLocated(email);
    if(validEmailError){
    let text=await browser.getPageSource();
    if(text.includes(arg)){
      logger.info("********** Failure ");
      return false;
    }else{
      logger.info("******* Text is not present");
      return true;}
  }else{
    return false;
  }
    break;

    case "Email address field can't be blank":
    logger.info("Inside case: Email address field can't be blank:")
    let emailaddressblank=await Util.visibilityOfElementLocated(email);
    if(emailaddressblank){
      let emailaddressblanktext=await browser.getPageSource();
      if(emailaddressblanktext.includes(arg)){
        logger.info("********** Failure ");
        return false;
      }else{
        logger.info("******* Text is not present");
        return true;
      }
  }else{
    return false;
  }
    break;
    default:
    logger.info("**** The option is not valid for error message validation");
    break;
    return false;
  }
  };



  //check whether logout link is displaying
  this.checklogoutlinkispresent = async function()
{
  let logoutlinkElement = await bot.elePresent(logoutLink);
  if(result){
    bot.clickAction(logoutLink);
    logger.info("returning false");
    check=false;
  }else{
  logger.info("No logout link is present");
  logger.info("returning true");
  check=true;
}
return check;
}


  //Function to click on Logout link
  this.clickLogOut=async function(){
    logger.info("Inside clickLogout method");
    browser.executeScript('window.scrollTo(0,0);').then(function () {
    });
    let logoutlinkElement=await Util.visibilityOfElementLocated(logoutLink);
    if(logoutlinkElement){
      let logoutlinksElement=Util.waitForElementToBeClickableAndReturnElement(logoutLink);
      logoutlinksElement.click();
    }else{
      logger.info("Validation unsuccessful. Logout link is not clickabled");
      return false;
    }
    return result;
  }


  //Function to validate tool tip for password
  this.passwordtooltip=async function(){
    logger.info("Inside passwordtooltip method");
    let passwordtooltipelement=await Util.visibilityOfElementLocated(password);
    if(passwordtooltipelement){
      let passwordtool=await Util.isElementPresent(passtooltip);
      if(passwordtool){
        logger.info("Result is successful. Password tool tip is present");
        return true;
      }else{
        logger.info("Result is unsuccessful. Password tooltip is not present");
        return false;
      }
    }
    else{
    logger.info("Result is unsuccessful. Password field is not present");
    return result;}
  };


  //Validation of landing page after login
  this.landingValidation=async function(arg){
    logger.info("Inside landingvalidation method");
    var that=this;
    switch(arg){
      case "Submit meter read page":
      logger.info("Inside Submit meter read page section");
      let submitMeterReadElement=await Util.visibilityOfElementLocated(smrsection);
      if(submitMeterReadElement){
      let smrElement=Util.waitForUnstableElement(smrsection);
      if(smrElement){
        logger.info("Validation for SMR section is successful");
        return true;
      }
      else{
        logger.info("Validation for SMR section failed");
        return false;
      }
      return true;
    }
    else{
      return false;
    }      break;

    case "renewal quote page":
    logger.info("Inside renewal quote page");
    let renelem=await Util.waitForExpectedElement(renewalelem);
    if(renelem){
      browser.executeScript('window.scrollTo(0,250);').then(function () {
      });
      let renbuy=await Util.waitForExpectedElement(renewalBuy);
      if(renbuy){
        return true;
      }
      else{
        return false;
      }
      return true;
    }
    else{
      return false;
    }



      case "View bill page":
      Util.waitForMoreTime();
      let viewBillElement=await Util.isElementPresent(viewErrorMessage);
      if(viewBillElement){
        let viewBillErrorElement=Util.waitForUnstableElement(viewErrorMessage);
        let viewBillErrorText=await Util.getText(viewBillErrorElement);
        let ViewBillErrorCompare=await Util.compareText(viewBillErrorText,viewBillErrorMessage);
        if(ViewBillErrorCompare){
          logger.info("Text validation for view bill landing page successful "+ViewBillErrorCompare);
          return true;
        }else{
          logger.info("Text validation for view bill landing page failed.")
          return false;
        }
        return true;
      }else{
        logger.info("Validation for view bill page failed");
        return false;
      }
      break;


      case "Payment details page":
      Util.waitForMoreTime();
      logger.info("Inside case: Payment details page");
      let paymentpageElement=await Util.visibilityOfElementLocated(paymentsmessage);
      if(paymentpageElement){
        logger.info("Inside validation for payments page "+paymentpageElement);
      let paymentMessageElement=Util.waitForUnstableElement(paymentsmessage);
        let paymenttextMessage=await Util.getText(paymentMessageElement);
        let paymentTextCompare=Util.compareText(paymenttextMessage,paytext);
        if(paymentTextCompare){
          logger.info("Validating payments page")
        browser.executeScript('window.scrollTo(0,0);').then(function () {
        });
        let paymentIconClose=await Util.waitForExpectedElement(payclose);
        paymentIconClose.click();
        logger.info("Payment page validation successful");
        return true;
      }
      else{
        logger.info("Validation failed. This is not payments page")
        return false;
      }
      return true;
      }else{
        logger.info("Validation failed for payment details page");
        return false;
      }
      break;

      case "Global SMR Page":
      logger.info("inside global SMR Page");
      var globalurl="global-submit-meter-read";
      let globalSMR=await Util.waitForExpectedElement(globalSMRel);
      if(globalSMR){
        let globalsmrtext=Util.waitForUnstableElement(globalSMRel);
        let globalsmrtextt=await Util.getText(globalsmrtext);
        let globalSMRTextCompare=await Util.compareText(globalsmrtextt,globsmrtext);
        if(globalSMRTextCompare){
          let urlcheck = await browser.getCurrentUrl();
          if(urlcheck.includes(globalurl)){
            let cancelLink=await Util.waitForExpectedElement(youraccountlinkSMR);
            cancelLink.click();
            Util.waitForMoreTime();
            return true;
          }
          else{
            return false;
          }
          return true;
        }
        else{
          return false;
        }
        return true;
      }
      else{return false;}
      break;

      case "Account Dashboard":
      logger.info("Inside case: Account Dashboard");
      let AccDashboardElement=await Util.visibilityOfElementLocated(billingLink);
      if(AccDashboardElement){
        let AccDashboardBillingLink=Util.waitForUnstableElement(billingLink);
        let AccountDashboardBillingText=await Util.getText(AccDashboardBillingLink);
        logger.info("***** "+AccountDashboardBillingText);
        let AccountDashboardTextComparison=Util.compareText(AccountDashboardBillingText,vbtext);
        if(AccountDashboardTextComparison){
          logger.info("Successful validation for account dashboard");
          return true;
        return true;
      }else{
        logger.info("Validation failed in text comparison for account dashboard page");
          return false;
        }
      return true;
    }else{
      logger.info("Validation for account dashboard failed");
      return false;
    }
      break;
    }
  }


//Validating the error message when registration in progress account is used for login
this.validateInProgress=async function(arg){
  logger.info("Inside validateInProgress method");
var that=this;
switch(arg){

  case "Our records show that you've already used this email address to start the":
  logger.info("Inside case: Our records show that you've already used this email address to start the");
  let emailAlreadyUsed=await Util.visibilityOfElementLocated(alreadyRegisteredMessage);
  if(emailAlreadyUsed){
    let emailAlreadyUsedElement=Util.waitForUnstableElement(alreadyRegisteredMessage);
    let emailAlreadyUsedText=await Util.getText(emailAlreadyUsedElement);
    if(emailAlreadyUsedText.includes(arg)){
      logger.info("Input text "+ arg+ "is present in the page. Text is  "+emailAlreadyUsedText);
      return true;
    }else{
      logger.info("Text is not present. Validation unsuccessful");
      return false;
    }
  }else{
    logger.info("Validation unsuccessful. Message not present");
    return false;
  }
  break;

  case "registration process but haven't activated your account.":
  logger.info("Inside case: registration process but haven't activated your account");
  let registrationNotActivated=await Util.visibilityOfElementLocated(alreadyRegisteredMessage);
  if(registrationNotActivated){
    let regNotActivatedElement=Util.waitForUnstableElement(alreadyRegisteredMessage);
    let regNotActivatedText=await Util.getText(regNotActivatedElement);
    if(regNotActivatedText.includes(arg)){
      logger.info("Input text "+ arg+ "is present in the page. Text is  "+regNotActivatedText);
      return true;
    }else{
      logger.info("Text is not present. Validation unsuccessful");
      return false;
    }
  }else{
    logger.info("Validation unsuccessful. Message not present");
    return false;
  }
  break;

  case "Please check your email account for an activation email we have sent you and click on":
  logger.info("Inside case: Please check your email account for an activation email we have sent you and click on");
  let checkEmailAddress=await Util.visibilityOfElementLocated(alreadyRegisteredMessage);
  if(checkEmailAddress){
    let checkEmailAddressElement=Util.waitForUnstableElement(alreadyRegisteredMessage);
    let CheckEmailAddressText=await Util.getText(checkEmailAddressElement);
    if(CheckEmailAddressText.includes(arg)){
      logger.info("Input text "+ arg+ "is present in the page. Text is  "+CheckEmailAddressText);
      return true;
    }else{
      logger.info("Text is not present. Validation unsuccessful");
      return false;
    }
  }else{
    logger.info("Validation unsuccessful. Message not present");
    return false;
  }
  break;


  case "the 'Complete registration' link to continue.":
  logger.info("Inside case: the 'Complete registration' link to continue.");
  let completeRegistration=await Util.visibilityOfElementLocated(alreadyRegisteredMessage);
  if(completeRegistration){
    let completeRegistrationElement=Util.waitForUnstableElement(alreadyRegisteredMessage);
    let completeRegistrationText=await Util.getText(completeRegistrationElement);
    if(completeRegistrationText.includes(arg)){
      logger.info("Input text "+ arg+ "is present in the page. Text is  "+completeRegistrationText);
      return true;
    }else{
      logger.info("Text is not present. Validation unsuccessful");
      return false;
    }
  }else{
    logger.info("Validation unsuccessful. Message not present");
    return false;
  }
  break;

  case "Oops, it looks like something went wrong":
  logger.info("Inside case: Oops, it looks like something went wrong");
  let oopsWrong=await Util.visibilityOfElementLocated(errorHeader);
  if(oopsWrong){
    let oopsWrongElement=Util.waitForUnstableElement(errorHeader);
    let oopsWrongText=await Util.getText(oopsWrongElement);
    if(oopsWrongText.includes(arg)){
      logger.info("Input text "+ arg+ "is present in the page. Text is  "+oopsWrongText);
      return true;
    }else{
      logger.info("Text is not present. Validation unsuccessful");
      return false;
    }
  }else{
    logger.info("Validation unsuccessful. Message not present");
    return false;
  }
  break;

  case "We don't recognise the details you've entered.":
  logger.info("Inside case: We don't recognise the details you've entered.");
  let recognizeDetails=await Util.visibilityOfElementLocated(blackListed);
  if(recognizeDetails){
    let recognizeDetailsElement=Util.waitForUnstableElement(blackListed);
    let recognizeDetailsText=await Util.getText(recognizeDetailsElement);
    if(recognizeDetailsText.includes(arg)){
      logger.info("Input text "+ arg+ "is present in the page. Text is  "+recognizeDetailsText);
      return true;
    }else{
      logger.info("Text is not present. Validation unsuccessful");
      return false;
    }
  }else{
    logger.info("Validation unsuccessful. Message not present");
    return false;
  }
  break;

  case "Forgotten your details?":
  logger.info("Inside case: Forgotten your details?");
  let ForgottenDetails=await Util.visibilityOfElementLocated(blackListed);
  if(ForgottenDetails){
    let ForgottenDetailsElement=Util.waitForUnstableElement(blackListed);
    let ForgottenDetailsText=await Util.getText(ForgottenDetailsElement);
    if(ForgottenDetailsText.includes(arg)){
      logger.info("Input text "+ arg+ "is present in the page. Text is  "+ForgottenDetailsText);
      return true;
    }else{
      logger.info("Text is not present. Validation unsuccessful");
      return false;
    }
  }else{
    logger.info("Validation unsuccessful. Message not present");
    return false;
  }
  break;


  case "Retrieve your details":
  logger.info("Inside case: Retrieve your details");
  let retrieveDetails=await Util.visibilityOfElementLocated(blackListed);
  if(retrieveDetails){
    let retrieveDetailsElement=Util.waitForUnstableElement(blackListed);
    let retrieveDetailsText=await Util.getText(retrieveDetailsElement);
    if(retrieveDetailsText.includes(arg)){
      logger.info("Input text "+ arg+ "is present in the page. Text is  "+retrieveDetailsText);
      return true;
    }else{
      logger.info("Text is not present. Validation unsuccessful");
      return false;
    }
  }else{
    logger.info("Validation unsuccessful. Message not present");
    return false;
  }
  break;

  case "If you're a British Gas Lite customer, please go to the":
  logger.info("Inside case: If you're a British Gas Lite customer, please go to the");
  let BritishGasLite=await Util.visibilityOfElementLocated(blackListed);
  if(BritishGasLite){
    let BritishGasLiteElement=Util.waitForUnstableElement(blackListed);
    let BritishGasLiteText=await Util.getText(BritishGasLiteElement);
    if(BritishGasLiteText.includes(arg)){
      logger.info("Input text "+ arg+ "is present in the page. Text is  "+BritishGasLiteText);
      return true;
    }else{
      logger.info("Text is not present. Validation unsuccessful");
      return false;
    }
  }else{
    logger.info("Validation unsuccessful. Message not present");
    return false;
  }
  break;

  case "British Gas Lite":
  logger.info("Inside case: British Gas Lite");
  let BGLite=await Util.visibilityOfElementLocated(blackListed);
  if(BGLite){
    let BGLiteElement=Util.waitForUnstableElement(blackListed);
    let BGLiteText=await Util.getText(BGLiteElement);
    if(BGLiteText.includes(arg)){
      logger.info("Input text "+ arg+ "is present in the page. Text is  "+BGLiteText);
      return true;
    }else{
      logger.info("Text is not present. Validation unsuccessful");
      return false;
    }
  }else{
    logger.info("Validation unsuccessful. Message not present");
    return false;
  }
  break;

  case "If you're a British Gas Home customer, please go to our":
  logger.info("Inside case: If you're a British Gas Home customer, please go to our");
  let BritishGasHome=await Util.visibilityOfElementLocated(blackListed);
  if(BritishGasHome){
    let BritishGasHomeElement=Util.waitForUnstableElement(blackListed);
    let BritishGasHomeText=await Util.getText(BritishGasHomeElement);
    if(BritishGasHomeText.includes(arg)){
      logger.info("Input text "+ arg+ "is present in the page. Text is  "+BritishGasHomeText);
      return true;
    }else{
      logger.info("Text is not present. Validation unsuccessful");
      return false;
    }
  }else{
    logger.info("Validation unsuccessful. Message not present");
    return false;
  }
  break;

  case "home":
  logger.info("Inside case: home");
  let BGHome=await Util.visibilityOfElementLocated(blackListed);
  if(BGHome){
    let BGHomeElement=Util.waitForUnstableElement(blackListed);
    let BGHomeText=await Util.getText(BGHomeElement);
    if(BGHomeText.includes(arg)){
      logger.info("Input text "+ arg+ "is present in the page. Text is  "+BGHomeText);
      return true;
    }else{
      logger.info("Text is not present. Validation unsuccessful");
      return false;
    }
  }else{
    logger.info("Validation unsuccessful. Message not present");
    return false;
  }
  break;

  default:
  logger.info("This is not a valid option");
  break;
  }
}


//Validating the error message when registration in progress account is used for login
this.validateLogInSucess=async function(arg){
  logger.info("Inside validateLogInSucess method");
  var that=this;
  switch(arg){
   case "Oops, it looks like something went wrong":
    logger.info("Inside case:Oops, it looks like something went wrong");
    let oopsWrong=await Util.visibilityOfElementLocated(lastlogin);
    if(oopsWrong){
      let oopsWrongElement=await Util.visibilityOfElementLocated(billingLink);
      if(oopsWrongElement){
        let oopsWrongEl=Util.waitForUnstableElement(billingLink);
        let oopsWrongText=await Util.getText(oopsWrongEl);
        if(oopsWrongText.includes(vbtext)){
          logger.info("Input text "+ vbtext+ "is present in the page. Text is  "+oopsWrongText);
          return true;
        }else{
          logger.info("Text is not present. Validation unsuccessful");
          return false;
        }
        return true;
      }
      else{
        return false;
      }
      return true;
    }else{
      logger.info("Validation unsuccessful. Message not present");
      return false;
    }
      break;
  }
};

//Validating the error message when registration in progress account is used for login
this.validateErroMessageLogin=async function(arg){
  logger.info("Inside validateErroMessageLogin method");
var that=this;
switch(arg){
  case "We can't find your energy account(s). Please call us on 0800 316 2010  and we'll get you back online." :
  logger.info("Inside case:We can't find your energy account(s). Please call us on 0800 316 2010 and we'll get you back online.");
  let cantFindAccount=await Util.visibilityOfElementLocated(oamregistrationErrorText);
  if(cantFindAccount){
    let cantFindAccountElement=Util.waitForUnstableElement(oamregistrationErrorText);
    logger.info("Inside validation method for login error message");
    let cantFindAccountText=await Util.getText(cantFindAccountElement);
    let cantFindAccountTextCompare=await Util.comparePartialText(cantFindAccountText,errtexts);
    if(cantFindAccountTextCompare){
      logger.info("Validation is successful for error message comparison");
      return true;
    }else{
      logger.info("Validation unsuccessful for login error comparison");
      return false;
    }
    return true;
  }
  else{
    logger.info("Validation unsuccessful for text comparison for login error message");
    return false;
  }
  break;


  case "Oops, it looks like something went wrong":
  logger.info("Inside case:Oops, it looks like something went wrong");
  let oopsWrong=await Util.visibilityOfElementLocated(oamregistrationErrorHeader);
  if(oopsWrong){
    logger.info("Inside validation method for login error message");
    let oopsWrongElement=Util.waitForUnstableElement(oamregistrationErrorHeader);
    let oopsWrongText=await Util.getText(oopsWrongElement);
    let oopsWrongCompareText=await Util.compareText(oopsWrongText,arg);
    if(oopsWrongCompareText){
      logger.info("Validation is successful for error message comparison");
      return true;
    }else{
      logger.info("Validation unsuccessful for login error comparison");
      return false;
    }
    return true;
  }
  else{
    logger.info("Validation unsuccessful for text comparison for login error message");
    return false;
  }
  break;

 default:
  logger.info("This is not a valid option");
  break;
  }
}




  //Validating if the login button is disabled
  this.validateLoginDisabled=async function(){
    logger.info("Inside validateLoginDisabled method");
    let loginDisabled=await Util.visibilityOfElementLocated(password);
    if(loginDisabled){
      let loginDisabledText=await browser.getPageSource();
      if(loginDisabledText.includes(disabledtext)){
        logger.info("Validation successful. Login button is disabled");
        return true;
      }else{
        logger.info("Validation unsuccessful. Login button is not disabled");
        return false;
      }
    }else{
      logger.info("Validation unsuccessful. password field is not present");
      return false;
    }
  };


  //Validating if the login button is enabled
  this.validateLoginEnabled=async function(){
    logger.info("inside validateLoginEnabled method");
    let loginEnabled=await Util.visibilityOfElementLocated(password);
    if(loginEnabled){
      let loginEnabledText=await browser.getPageSource();
      if(loginEnabledText.includes(disabledtext)){
        logger.info("Validation Unsuccessful. Login button is disabled");
        return false;
      }else{
        logger.info("Validation successful. Login button is enabled");
        return true;
      }
    }else{
      logger.info("Validation unsuccessful. password field is not present");
      return false;
    }
  };

  //Validating if the error message when invalid email is entered during Login
  this.PasswordErrorTextNotPresent=async function(arg){
    logger.info("Inside PasswordErrorTextNotPresent method");
      let passwordError=await Util.visibilityOfElementLocated(password);
    if(passwordError){
      logger.info("Validating the error message not present");
      let passErrorText=await browser.getPageSource();
      if(passErrorText.includes(arg)){
        logger.info("*********** Validation is failed ");
        return false;
      }else{
        logger.info("***/********* Validation successful ");
        return true;
      }
    }else{return false;}
    return result;
  };


this.clicksettings = async function(){
  let settingsclk1=await Util.waitForElementToBeClickableAndReturnElement(settingsclk);
  settingsclk1.click();
};


this.megamenulogout11=async function(){
  let isPresent=await Util.visibilityOfElementLocated(logoutLink);
  if(isPresent){
    browser.actions().
    mouseMove(youraccmegamenu).
    perform();
    Util.waitForMoreTime1();
    let megamenulogoutlink = await Util.waitForExpectedElement(MegaMenuLogout);
    megamenulogoutlink.click();
    Util.waitForMoreTime1();
    return true;
  }
  else{
    return false;
  }
};

this.megamenulogout1=async function()
{
  let isPresent=await Util.waitForExpectedElement(billingLink);
  if(isPresent)
  {
    browser.actions().
    mouseMove(youraccmegamenu).
    perform();
    Util.waitForMoreTime();
    let megamenumpdLink=await Util.waitForExpectedElement(MegaMenuMPD);
    if(megamenumpdLink){
      let megamenuviewbillLink=await Util.waitForExpectedElement(MegaMenuviewbill);
      if(megamenuviewbillLink){
        let megamenulogoutlink=await Util.waitForExpectedElement(MegaMenuLogout);
        if(megamenulogoutlink){
          megamenulogoutlink.click();
          Util.waitForMoreTime();
          return true;
        }
        else{
          return false;
        }
        return true;
      }
      else{
        return false;
      }
      return true;
    }
    else
    {
      return false;
    }
    return true;
  }
  else
    {
    logger.info("Validation failed for link under your account mega menu");
    return false;
    }
};
};

module.exports = new LoginLogout();
