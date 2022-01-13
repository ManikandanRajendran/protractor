var ForgottenDetails = function () {
  var common;
  var util;
  var log4js = require('log4js');
  var logger = log4js.getLogger();
  var Util=require('../Utils/FrameworkUtil.js');
  var Loginlink = by.css('div.ukb-head-topnav  a[href*="login"]');var email = by.name('email');
  var logoutLink=by.css('div.ukb-head-topnav  a[href*="logmeout"]');var password = by.name('password');
  var Loginbtn = by.css('button.btn-submit'); var forgottenDetailsLink=by.css('a[href*="forgotten-your-details"]');
  var FDTitle="Forgotten your details | British Gas business";
  var backtoLoginLink=by.xpath('//*[contains(text(),"Back to log in")]');
  var loginTitle="Log in to your business account | British Gas Business";
  var ForgottenDetailsURL="/business/app/forgotten-your-details";
  var loginpageURL="/business/your-account/login";
  var current=by.css('button.active');
  var currentpasstab="Password"; var enterEmail=by.id('forgotPasswordForm-email');
  var clickEmailMe=by.css('button.btn.btn-submit'); var both=by.css('button.btn.btn-secondary:nth-child(3)');
  var Email=by.css('button.btn.btn-secondary:nth-child(2)');
  var resetlinksentText=by.css('div.ukb-confirmation div.text-center h2');
  var emailSentTo=by.css('div.ukb-confirmation div.text-center div:nth-child(2) p'); var emailFromExcel;
  var sendEmailBG=by.css('div.ukb-confirmation div.text-center div:nth-child(1) span');
  var selectTitle=by.xpath('.//ul[@class="ember-power-select-options ember-view"]');var firstName=by.id('forgotBothForm-firstName');
  var lastName=by.id('forgotBothForm-lastName'); var accountNumber=by.id('forgotBothForm-accountNumber');
  var firstEmailName=by.id('forgotEmailForm-firstName');
  var lastEmailName=by.id('forgotEmailForm-lastName'); var accountEmailNumber=by.id('forgotEmailForm-accountNumber');
  var findMyDetails=by.css('button.btn.btn-submit');var titleclick=by.css('div.form-control');
  var titlelabel=by.css('div.row.power-select label');var fnamelabel=by.xpath('//label[@for="forgotBothForm-firstName"]')
  var lnamelabel=by.xpath('//label[@for="forgotBothForm-lastName"]');var acclabel=by.xpath('//label[@for="forgotBothForm-accountNumber"]');
  var fnameEmaillabel=by.xpath('//label[@for="forgotEmailForm-firstName"]')
  var lnameEmaillabel=by.xpath('//label[@for="forgotEmailForm-lastName"]');var accEmaillabel=by.xpath('//label[@for="forgotEmailForm-accountNumber"]');
  var firstlabel="First name";var lastlabel="Last name"; var accountlabel="Account number";var labeltitle="Title";
  var bothconfirmation="We've found your details";var emailtab=by.css('button.btn.btn-secondary:nth-child(2)');
  var emailConfirmation="Your email address";var passerror="Please check your email address, it doesn't seem right.";
  var passworderror=by.css('div.ukb-registration--error-text p'); var passheader=by.css('div.ukb-registration--error-text h5 b');
  var passheaderError="Oops, it looks like something went wrong";var accError="We can't find an account with that information. Please check all your details are correct.";
  var multipleEmailconfText="Multiple matches found";var multipleEmailAccounts=by.css('div.ukb-confirmation div.text-center p:nth-child(1)');
  var backtologinmultiple=by.css('button.btn'); var pageheader=by.css('div.container.forgotten-your-details h1');
  var loginheader=by.css('div.container.ukb-your-account--login h1');
  var confpage=by.css('div.container.ukb-confirmation h2');



  //Declaring Logger
  var log4js = require('log4js');
  var logger = log4js.getLogger();
  this.load = function (url) {
    bot.launchUrl(url);
  };


  this.clickForgottenDetails=async function(){
    let forgottenDetails=await Util.visibilityOfElementLocated(forgottenDetailsLink);
    if(forgottenDetails){
      let forgottenDetailsElement=await Util.waitForExpectedElement(forgottenDetailsLink);
      forgottenDetailsElement.click();
      return true;
    }
    else{
      return false;
    }
  };
  //Clicking on login from Email retrieval page
  this.clickLogin = async function () {
    let login=await Util.visibilityOfElementLocated(findMyDetails);
    if(login){
      let findMyDetailsElement=await Util.waitForExpectedElement(findMyDetails);
      findMyDetailsElement.click();
      return true;
    }
    else{
      return false;
    }
  };

  //Clicking on forgotten details link in the account dashboard page
  this.clickFindDetails = async function () {
    let find=await Util.visibilityOfElementLocated(findMyDetails);
    if(find){
      let findMyDetailsElement=Util.waitForElementToBeClickableAndReturnElement(findMyDetails);
      findMyDetailsElement.click();
      return true;
    }
    else{
      return false;
    }
  };


  //Validating whether appropriate error message is displayed for password error scenario
  this.validatePasswordError = async function () {
    logger.info("***** inside validatePasswordError method");
    let passwordHeader=await Util.visibilityOfElementLocated(passheader);
    if(passwordHeader){
      let passwordHeaderElement=await Util.waitForExpectedElement(passheader);
      let passwordHeaderText=await Util.getText(passwordHeaderElement);
      let passwordHeaderTextCompare=await Util.compareText(passwordHeaderText,passheaderError);
      if(passwordHeaderTextCompare){
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
  };


  //Validating error
  this.validatePasswordErrorMessage = async function () {
    logger.info("***** inside validatePasswordErrorMessage method");
    let passwordHeader=await Util.visibilityOfElementLocated(passheader);
    if(passwordHeader){
      let passwordHeaderElement=await Util.waitForExpectedElement(passworderror);
      let passwordHeaderText=await Util.getText(passwordHeaderElement);
      logger.info("******* "+passwordHeaderText);
      let passwordHeaderTextCompare=await Util.compareText(passwordHeaderText,passerror);
      if(passwordHeaderTextCompare){
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
  };


  //Clicking on forgotten details link in the account dashboard page
  this.validateEmailErrorMessage = async function () {
    logger.info("***** Inside validateEmailErrorMessage method ");
    let emailHeader=await Util.visibilityOfElementLocated(passworderror);
    if(emailHeader){
      let emailHeaderElement=await Util.waitForExpectedElement(passworderror);
      let emailHeaderText=await Util.getText(emailHeaderElement);
      let emailHeaderTextCompare=await Util.compareText(emailHeaderText,accError);
      if(emailHeaderTextCompare){
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
  };


  //Clicking on Both tab in forgotten details tab
  this.clickBoth =async function () {
    logger.info("****** inside clickBoth Method");
    let bothTab=await Util.visibilityOfElementLocated(both);
    if(bothTab){
      let bothTabElement=Util.waitForElementToBeClickableAndReturnElement(both);
      bothTabElement.click();
      return true;
    }
    else{
      return false;
    }
  };


  //Clicking on Email tab
  this.clickEmailTab = async function () {
    logger.info("***** Inside clickEmailTab method");
    let emailTab=await Util.visibilityOfElementLocated(emailtab);
    if(emailTab){
      let emailTabElement=await Util.waitForElementPresent(emailtab);
      emailTabElement.click();
      return true;
    }
    else{
      return false;
    }
  };


  //Validating field level details of both tab
  this.validateBothTabComponents = async function () {
    logger.info("****** inside validateBothTabComponents");
    let findMyDet=await Util.visibilityOfElementLocated(findMyDetails);
    if(findMyDet){
      let titleElement=await Util.waitForElementPresent(titlelabel);
      let titleText=await Util.getText(titleElement);
      let titleTextCompare = await Util.compareText(titleText,labeltitle);
      if(titleTextCompare)
      {
        let firstNameElement=await Util.waitForElementPresent(fnamelabel);
        let firstNameText=await Util.getText(firstNameElement);
        let firstNameTextCompare=await Util.compareText(firstNameText,firstlabel);
        return firstNameTextCompare;
      }
      else{
        return false;
      }
      if(firstNameTextCompare){
        let lastNameElement=await Util.waitForElementPresent(lnamelabel);
        let lastNameText=await Util.getText(lastNameElement);
        let lastNameTextCompare=await Util.compareText(lastNameText,lastlabel);
        return lastNameTextCompare;
      }
      else{
        return false;
      }
      if(lastNameTextCompare){
        let accountLabelElement=await Util.waitForElementPresent(acclabel);
        let accountLabelText=await Util.getText(accountLabelElement);
        let accountLabelTextCompare=await Util.compareText(accountLabelText,accountlabel);
        return accountLabelTextCompare;
      }
      else{
        return false;
      }
      return true;
    }else{
      return false;
    }
  };


  //Validating field level details of both tab
  this.validateEmailTabComponents = async function () {
    logger.info("***** inside validateEmailTabComponents method");
    let findMyDet=await Util.visibilityOfElementLocated(findMyDetails);
    if(findMyDet){
      let titleElement=await Util.waitForElementPresent(titlelabel);
      let titleText=await Util.getText(titleElement);
      let titleTextCompare = await Util.compareText(titleText,labeltitle);
      return titleTextCompare;
      if(titleTextCompare)
      {
        let firstNameElement=await Util.waitForElementPresent(fnameEmaillabel);
        let firstNameText=await Util.getText(firstNameElement);
        let firstNameTextCompare=await Util.compareText(firstNameText,firstlabel);
        return firstNameTextCompare;
      }else{
        return false;
      }
      if(firstNameTextCompare){
        let lastNameElement=await Util.waitForElementPresent(lnameEmaillabel);
        let lastNameText=await Util.getText(lastNameElement);
        let lastNameTextCompare=await Util.compareText(lastNameText,lastlabel);
        return lastNameTextCompare;
      }else{
        return false;
      }
      if(lastNameTextCompare){
        let accountLabelElement=await Util.waitForElementPresent(accEmaillabel);
        let accountLabelText=await Util.getText(accountLabelElement);
        let accountLabelTextCompare=await Util.compareText(accountLabelText,accountlabel);
        return accountLabelTextCompare;
      }else{
        return false;
      }
    }else{
      return false;
    }
  };



  //Validating the current selected tab is password
  this.validateCurrentTabPassword = async function () {
    logger.info("********* Inside validateCurrentTabPassword method ");
    let backToLogin=await Util.visibilityOfElementLocated(backtoLoginLink);
    if(backToLogin){
      let currentElement=await Util.waitForExpectedElement(current);
      let currentText=await Util.getText(currentElement);
      let currentTextCompare=await Util.compareText(currentText,currentpasstab);
      if(currentTextCompare){
        logger.info("Validation successful. Current selected tab is password");
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
  };


  //Validating the current selected tab is password
  this.validateEmailUI = async function (arg) {
    let emailSent=await Util.visibilityOfElementLocated(emailSentTo);
    if(emailSent){
      let emailSentToElement=await Util.waitForElementPresent(emailSentTo);
      let emailSentToText=await Util.getText(emailSentToElement);
      if(emailSentToText.includes(arg)){
        return true;
      }
      else{
        return false;
      }
    }else{
      return false;
    }
  };

  //Validating the current selected tab is password
  this.validateEmailUIMultiple = async function () {
    logger.info("****** Inside validateEmailUIMultiple method");
    let resetLink=await Util.visibilityOfElementLocated(resetlinksentText);
    if(resetLink){
      let resetLinkElement=await Util.waitForExpectedElement(resetlinksentText);
      let resetLinkText=await Util.getText(resetLinkElement);
      let resetLinkTextCompare=await Util.compareText(resetLinkText,multipleEmailconfText)
      if(resetLinkTextCompare)  {
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
  };


  //Validating the title of the forgottendetails pages
  this.clickBackToLogin = async function () {
    let backToLogin=await Util.visibilityOfElementLocated(backtoLoginLink);
    if(backToLogin){
      let backToLoginElement=await Util.waitForElementPresent(backtoLoginLink);
      browser.executeScript('window.scrollTo(0,200);').then(function () {
      });
      backToLoginElement.click();
      return true;
    }
    else{
      return false;
    }

  };



  //Validating the title of the forgottendetails pages
  this.clickBackToLoginMultiple = async function () {
    let backtoLogin=await Util.visibilityOfElementLocated(backtologinmultiple);
    if(backtoLogin){
      browser.executeScript('window.scrollTo(0,200);').then(function () {
      });
      let backLoginMultiple=await Util.waitForExpectedElement(backtologinmultiple);
      backLoginMultiple.click();
      return true;
    }
    else{
      return false;
    }

  };

  //Function to click on email me in forgotten details page
  this.clickEmailMe = async function () {
    logger.info("******** clickEmailMe");
    let clickEmail= await Util.visibilityOfElementLocated(clickEmailMe);
    if(clickEmail){
      let clickEmailElement=Util.waitForElementToBeClickableAndReturnElement(clickEmailMe);
      clickEmailElement.click();
      return true;
    }
    else{
      return false;
    }
  };




  //Function to pass the input value for view bill based on Account Type
  this.validateURL = async function (arg) {
    logger.info("********* Inside validateURL method")
    var that = this;
    switch (arg) {
      case "/business/app/forgotten-your-details":
      let forgottenpageresult=await Util.visibilityOfElementLocated(backtoLoginLink);
      if(forgottenpageresult){
        var forgottentitle="/business/app/forgotten-your-details";
        let urlcheck = await browser.getCurrentUrl();
        if(urlcheck.includes(forgottentitle)){
          return true;}
          else{return false;}
          return urlcheck;}
          else{logger.error("backtoLoginLink could not be found");
          return false;}
          break;


          case "/business/your-account/login":
          let loginpageresult=await Util.visibilityOfElementLocated(forgottenDetailsLink);
          if(loginpageresult)
          {
            var loginPageTitle="/business/your-account/login";
            let urlcheck = await browser.getCurrentUrl();
            if(urlcheck.includes(loginPageTitle))
            {return true;
            }
            else{
              return false;
            }
            return true;
          }
          else{
            logger.error("This is not login page");
            return false;
          }
          break;



          case "/business/app/forgotten-your-details/password-reminder-sent":
          let forgottenPageReminder=await Util.visibilityOfElementLocated(confpage);
          if(forgottenPageReminder){
            var passwordreminderURL="/business/app/forgotten-your-details/password-reminder-sent";
            let passreminderURL = await browser.getCurrentUrl();
            if(passreminderURL.includes(passwordreminderURL)){
              return true;
            }
            else{
              return false;
            }
          }
          else{
            logger.error("This is forgotten password confirmation page");
            return false;
          }
          break;



          case "business/app/forgotten-your-details/email-password-confirmation":
          let forgotbothreminder=await Util.visibilityOfElementLocated(confpage);
          if(forgotbothreminder){
            var bothtitle="business/app/forgotten-your-details/email-password-confirmation";
            let forgotbothURL = await browser.getCurrentUrl();
            if(forgotbothURL.includes(bothtitle)){
              return true;
            }
            else{
              return false;
            }
          }
          else{
            logger.error("This is not forgotten both confirmation page");
            return false;
          }
          break;


          case "/business/app/forgotten-your-details/email-address-confirmation":
          let forgotemail=await Util.visibilityOfElementLocated(confpage);
          if(forgotemail){
            var emailtitle="/business/app/forgotten-your-details/email-address-confirmation";
            let forgotEmailURL = await browser.getCurrentUrl();
            if(forgotEmailURL.includes(emailtitle)){
              return true;
            }
            else{
              return false;
            }
          }
          else{
            logger.error("This is not forgotten Email confirmation page");
            return false;
          }
          break;


          case "/business/app/forgotten-your-details/multiple-addresses-found":
          let mulfound=await Util.visibilityOfElementLocated(confpage);
          if(mulfound){
            var multitle="/business/app/forgotten-your-details/multiple-addresses-found";
            let multiplefoundURL = await browser.getCurrentUrl();
            if(multiplefoundURL.includes(multitle)){
              return true;
            }
            else{
              return false;
            }
          }
          else{
            logger.error("This is not multiple details confirmation page");
            return false;
          }
          break;
          default:
          logger.info("**** URL is not valid");
        }
      };


      //Function to pass the login mail address for view bill journey from excel
      this.enterforgotEmail = async function(arg){
        let enterEmailDetails=await Util.visibilityOfElementLocated(enterEmail);
        if(enterEmailDetails){
          let enterEmailDetailsElement=await Util.waitForElementPresent(enterEmail);
          Util.enterText(enterEmailDetailsElement,arg);
          return true;
        }
        else{
          return false;
        }
      }


      //Function to pass input values for email tab
      this.validateEmail = async function(arg){
        let emailSent=await Util.visibilityOfElementLocated(emailSentTo);
        if(emailSent){
          let emailSentElement=await Util.waitForElementPresent(emailSentTo);
          let emailSentText=await Util.getText(emailSentElement);
          if(emailSentText.includes(arg)){
            return true;
          }
          else{
            return false;
          }
        }else{
          return false;
        }
      }


      //Function to pass input values for multiple accounts
      this.validateEmailMultipleAccount = async function(arg){
        let multipleaccount=await Util.visibilityOfElementLocated(multipleEmailAccounts);
        if(multipleaccount){
          let multipleaccountElement=await Util.waitForExpectedElement(multipleEmailAccounts);
          let multipleaccountText=await Util.getText(multipleaccountElement);
          if(multipleaccountText.includes(arg)){
            logger.info("Validation successful");
            return true;
          }else{
            return false;
          }
          return true;
        }
        else{
          return false;
        }
      }

      //Function to pass the details from excel for forgotten details journey on clicking Both tab
      this.enterInputDetailsBoth = async function(arg1,arg2,arg3,arg4){
        let InputTitle=await Util.visibilityOfElementLocated(titleclick);
        if(InputTitle){
          let InputTitleElement=await Util.waitForElementPresent(titleclick);
          InputTitleElement.click();
          var titleselect=arg1;
          let detailsTitle=Util.waitForUnstableElement(by.xpath(".//li[text()='"+titleselect+"']"));
          detailsTitle.click();
          let firstNameElement=Util.waitForUnstableElement(firstName);
          Util.enterText(firstNameElement,arg2);
          let lastNameElement=Util.waitForUnstableElement(lastName);
          Util.enterText(lastNameElement,arg3);
          let accountNumberElement=Util.waitForUnstableElement(accountNumber);
          Util.enterText(accountNumberElement,arg4);
          browser.executeScript('window.scrollTo(0,200);').then(function () {
          });
          return true;
        }
        else{
          return false;
        }
      }

      //Function to pass the details from excel for forgotten details journey on clicking Email tab
      this.enterInputDetailsEmail = async function(arg1,arg2,arg3,arg4){
        let InputTitle=await Util.visibilityOfElementLocated(titleclick);
        if(InputTitle){
          let InputTitleElement=await Util.waitForElementPresent(titleclick);
          InputTitleElement.click();
          var titleselect=arg1;
          let detailsTitle=Util.waitForUnstableElement(by.xpath(".//li[text()='"+titleselect+"']"));
          detailsTitle.click();
          let firstNameElement=Util.waitForUnstableElement(firstEmailName);
          Util.enterText(firstNameElement,arg2);
          let lastNameElement=Util.waitForUnstableElement(lastEmailName);
          Util.enterText(lastNameElement,arg3);
          let accountNumberElement=Util.waitForUnstableElement(accountEmailNumber);
          Util.enterText(accountNumberElement,arg4);
          return true;
        }
        else{
          return false;
        }
      }


      //Function to validate the page header based on the page
      this.validatePageHeader = async function (arg) {
        logger.info("**validating PageHeader");
        var that = this;
        switch (arg) {
          case "Forgotten your details?":
          var forgotTitle="Forgotten your details?";
          let result=await Util.visibilityOfElementLocated(backtoLoginLink);
          if (result){
            let forgotEmailElement=await Util.waitForExpectedElement(pageheader);
            let text= await Util.getText(forgotEmailElement);
            if(typeof text==='string'){
              return Util.compareText(forgotTitle,text);
            }
            else{
              logger.error("text is not a string");
              return false;
            }
          }
          else{
            logger.error("backtoLoginLink could not be found");
            return false;
          }
          break;


          case "Log in to your business account":
          var logintitle="Log in to your business account";
          let logresult=await Util.visibilityOfElementLocated(forgottenDetailsLink);
          if (logresult){
            let logintext=await Util.waitForExpectedElement(loginheader);
            let logtext= await Util.getText(logintext);
            if(typeof logtext==='string'){
              return Util.compareText(logintitle,logtext);
            }
            else{
              logger.error("text is not a string");
              return false;
            }}
            else{
              logger.error("This is not login page");
              return false;
            }

            break;
            default:
            logger.info("**** Page header is not valid");
            return false;
          }
        };

      };
      module.exports = new ForgottenDetails();
