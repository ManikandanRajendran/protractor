var Login = function () {

    var log4js = require('log4js');
    var logger = log4js.getLogger();
    var util=require('../Utils/FrameworkUtil.js');
    var expect = require('expect');
    var loginLink = by.css('div.ukb-head-topnav  a[href*="login"]');
    var email = by.name('email');
    var password = by.name('password');
    var loginSubmit = by.css("button[type='submit']");
    var logoutLink = by.css('#quickLinks a[href*="logmeout"]');
    var LogOutButtonPosition = by.css('div.row.logout-panel button');
    var registerlink=by.css('div.ukb-head-topnav a[href*="register"]');
    var asmrEmail = by.name("model.email");
    var asmrAccountNumber = by.name("model.accountNumber");
    var asmrSitePostcode = by.name("model.postcode");
    var nextButton = by.css(".account-detail button");


    this.findRegister = function () {
    let element=util.waitForElementToBeClickableAndReturnElement(registerlink);
    return element;
  };

    this.findLogin = function () {
        let element=util.waitForElementToBeClickableAndReturnElement(loginLink);
        return element;
    };

    this.findLogBackIn=async function(){
      let element=await util.waitForExpectedElement(LogOutButtonPosition);
      return element;
    };

    this.enterEmailAddress=async function(arg){
      let element=await util.waitForExpectedElement(email);
      util.clearText(element);
      util.enterText(element,arg);
      let element1=await util.waitForExpectedElement(password);
      element1.click();
    }

    this.enterpassword=function(arg){
      util.waitForMoreTime();
      let element=util.waitForUnstableElement(password);
      util.clearText(element);
      util.enterText(element,arg);
      let element1=util.waitForUnstableElement(email);
      element1.click();
    }

    this.isLogoutPresent=async function(){
      browser.executeScript('window.scrollTo(0,0);');
      let result=await util.isElementPresent(logoutLink);
      logger.info("Logout present : "+result);
      return result;
    };

    // this.isLogoutPresent=function(){
    //   let result=util.isElementPresent(logoutLink);
    //   return result;
    // };

    this.findLogout = function () {
        let element=util.waitForElementToBeClickableAndReturnElement(logoutLink);
        return element;
    };


    this.findEmailAddress= function(){
        let element= util.waitForUnstableElement(email);
        return element;
    };

    this.findPassword=function(){
          let element= util.waitForUnstableElement(password);
          return element;
    };

    this.findLoginSubmit= function(){
        let element=util.waitForElementToBeClickableAndReturnElement(loginSubmit);
        return element;

    };

this.findASMREmailAddress=function(){
  let element= util.waitForUnstableElement(asmrEmail);
  return element;
};

this.findASMRAccountNumber=function(){
  let element= util.waitForUnstableElement(asmrAccountNumber);
  return element;
};

this.findASMRSitePostcode=function(){
  let element= util.waitForUnstableElement(asmrSitePostcode);
  return element;
};

this.findNextButton= function(){
     let element= util.waitForUnstableElement(nextButton);
     return element;
};
};
module.exports = new Login();
