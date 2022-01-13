var Registration = function () {
  var common;
  var util;
  var log4js = require('log4js');
  var logger = log4js.getLogger();
  var manageUsers=by.css('div.side-navbar__secondary a[href*="landingpage"]'); var standardFullAccess=by.id('RP02');
  var Util=require('../Utils/FrameworkUtil.js'); var updateuserpageback=by.css('a[href*="agent-screen/agent"]:nth-child(2)');
  var adduser=by.css('span.tertiary-link a[href*="firstpage"]');var superusrcont=by.css('div.parsys.buttonWithLinks.confirm-btn button');
  var popupclose=by.css('span.tertiary-link a.overlaycloselink');var supuserBack=by.id('Back'); var rolechangeemail=by.id('email');
  var supusrerrormsg=by.id('ui-dialog-title-minSuperuserStatusChange');
  var reglinkk=by.css('div.container-fluid a[href*="Register"]'); var agentlookup=by.css('a[href*="agent/login"]');
  var superuserno=by.id('no');var supusercontinue=by.id('continue-btn'); var finduseragent=by.css('div.submit.genericButton span');
  var suplockerrormsg=by.css('span.error-nxtline.error-field span');
  var supuseremail=by.id('emailId');var supuserconfirmemail=by.id('retypeEmailId');var superuserterms=by.id('termsAndConditions');
  var baseUrl="/business/app/accounts/";
  var youraccmegamenu=element(by.css('header.mega-menu__wrapper div.mega-menu__grid ul li:nth-child(5)'));
  var registermegamenu=by.css('header.mega-menu__wrapper div.wrapper.mega-menu__navigation-wrapper div:nth-child(5)  div  div.col:nth-child(2) a');
  var loginpagetitle="Log in to your business account | British Gas Business";
  cardNumber=by.name('creditCard'); csaregContinue=by.id('CSARegisterButton'); var agentEmailLocked=by.css('div.CSAEmailTextBox span.error-nxtline.error-field span');
  Loginlink = by.css('div.ukb-head-topnav  a[href*="login"]');email =by.name('email');agentregaccounNumber=by.name('contractAccountNumber');
  emailconfirm=by.name('emailConfirmation'); var superUserInvite=by.css('div.parsys.reginprogresstext h2');
  regnextbutton=by.css('button.btn.btn-outline-primary.submit-button'); var superuserInv="Your super user has invited you to register";
  regsubmitbutton=by.css('button.btn.btn-submit'); var agentInProgresstext=by.css('div.parsys.reginprogresstext p');
  logoutLink=by.css('div.ukb-head-topnav  a[href*="logmeout"]'); var regstart=by.css('div.text.parbase.section h2');
  password = by.name('password'); var agenrRegInProgress=by.css('div.title h1');
  Loginbtn = by.css('button.btn-submit'); var activationPending="Your online account's waiting to be activated. Please check your inbox for an email from business@britishgas.co.uk.";
  registerlink=by.css('div.ukb-head-topnav a[href*="register"]');
  var regtitletext="Register for an online account | British Gas business";
  beforestartele=by.css('div.ukb-registration b'); var superrormsg="Our records show that this email address is already in use. Please can you use another email address."
  regerror=by.css('div.ukb-registration--error-text b');
  var alreadyregtext="You've already registered. Please log in.";
  alreadyregerrorelem=by.css('div.ukb-registration--error-text p');
  var regerrorheader="Oops, it looks like something went wrong";
  reginProg=by.css('div.ukb-registration h3');
  var reginprogtext="Your registration is in progress";
  regglob=by.css('div.parsys.hero-panel h1');
  reggloberror=by.css('div.parsys.hero-panel p:nth-child(1)');
  var regserviceunavtext="Our service is temporarily unavailable";
  var regunable="We are unable to register your online account.";
  var reggloberrortext="We're carrying out essential maintenance work, but we'll back up and running shortly.";
  var regaccno=by.id('registerForm-accountNo'); var regpostcode=by.id('registerForm-postcode');
  ddAccountNumber=by.name('paymentCard'); var regDDNoError="It appears the information entered does not match our records.";
  var regDDNoError1="To continue registration and to ensure your account is correctly validated, please enter the required information again.";
  var reg2attempts="You have 2 more attempts before the account is locked"; var reg1attempt="You have 1 more attempt before the account is locked";
  regpayAmount=by.id('registerForm-paymentAmount'); titleclick=by.css('div.ukb-registration div.form-group.row:nth-child(1) a');
  selectmrtitle=by.xpath('//ul[@class="select2-results"] //a //span[text()="Mr"]');
  regfirstname=by.id('registerForm-firstName'); reglastname=by.id('registerForm-lastName'); regphone=by.id('registerForm-phoneNumber');
  var supuserfname=by.id('firstName');var supuserlname=by.id('surName');
  regpassword=by.id('registerForm-password'); regcheckbox=by.css('div.check-box-check');
  regactemailsent=by.css('div.ukb-registration h3'); var emailsent="We've sent you an activation email"
  emailsentto=by.css('div.ukb-registration h5 b'); regconfirm=by.css('h2.cyan');
  var regconftext="You're now registered";
  sitePostCodeErrorMessage="Your site postcode has not been recognised"; accountNoErrorMessage=by.css('div.form-control-feedback');
  accNumErrorMessage="Please enter a valid account number starting with 60 or 67."; var agentreg=by.css('span.primary-link a[href*="register"]');




  //Declaring Logger
  var log4js = require('log4js');
  var logger = log4js.getLogger();
  this.load = function (url) {
    bot.launchUrl(url);
  };

  //Validating if the error message when invalid email is entered during Login
  this.clickOnLink=function(arg){
    logger.info("Inside clickOnLink method");
    var that=this;
    switch(arg){
      case "Register":
      logger.info("Inside case: Register");
      Util.navigateToRegister();
      break;
    }
  };


  //Function to click on the registration link from agent registration page
  this.clickAgentRegister=async function(){
    let element=await Util.isElementPresent(agentreg);
    logger.info("element is : "+element);
    if(element){
      Util.waitForPageLoad();
      let elem=await Util.waitForExpectedElement(agentreg);
      logger.info("element1 is : "+elem);
      elem.click();
      return true;
    }
    else{
      return false;
    }
  }


  //Function to click on the look up user link from the agent home page
  this.clickAgentLookUp=async function(){
    let element=await Util.waitForExpectedElement(agentlookup);
    if(element){
      element.click();
      return true;
    }
    else{
      return false;
    }
  }

  //function to click on manage users in the account dashboard page$
  this.clickManageUsers=async function(){
    let manageuserlink=await Util.waitForExpectedElement(manageUsers);
    if(manageuserlink){
      manageuserlink.click();
      return true;
    }
    else{
      return false;
    }
  }

  //Function to validate if the user lands on update user details page$
  this.navigateUpdateUser=async function(){
    let element=await Util.waitForExpectedElement(updateuserpageback);
    if(element){
      return true;
    }
    else{
      return false;
    }
  }


//Function to validate Error message for super user role changes
this.verifyRoleErrorMessage=async function(){
  let errormessagetext="You cannot change status for this Super user";
  let element=await Util.waitForExpectedElement(updateuserpageback);
    if(element){
      let standarduseraccess=await Util.waitForExpectedElement(standardFullAccess);
      standarduseraccess.click();
      let errormessage=await Util.waitForExpectedElement(supusrerrormsg);
      let text=await Util.getText(errormessage);
      let textcompare=await Util.compareText(text,errormessagetext);
      if(textcompare){
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
}

  //Function to click on add user link
  this.clickAddUser=async function(){
    let adduserlink=await Util.waitForExpectedElement(popupclose);
    if(adduserlink){
      adduserlink.click();
      let adduserel=await Util.waitForExpectedElement(adduser);
      adduserel.click();
      return true;
    }
    else{
      let addusrel=await Util.waitForExpectedElement(adduser);
      if(addusrel){
        addusrel.click();
        return true;
      }
      else{
        return false;
      }

    }
  }

  //Function to click on super user access
  this.clickSuperUser=async function(){
    let superuserelem=await Util.waitForExpectedElement(superuserno);
    if(superuserelem){
      superuserelem.click();
      Util.waitForMoreTime();
      let superusercont=await Util.waitForExpectedElement(supusercontinue);
      if(superusercont){
        superusercont.click();
        let supcontinue=await Util.waitForExpectedElement(supusercontinue);
        if(supcontinue){
          supcontinue.click();
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
  }

  //Function to enter the details for Registration
  this.enterDetailsForRegis=async function(arg){
      browser.executeScript('window.scrollTo(0,350);');
    let confirmButton=await Util.waitForExpectedElement(supuserBack);
    if(confirmButton){
      var desiredOption = element(by.id('title'));
      desiredOption.$('[value="Mr"]').click();
      let superuserfname=await Util.waitForExpectedElement(supuserfname);
      Util.enterText(superuserfname,"Sample");
        let superuserlname=await Util.waitForExpectedElement(supuserlname);
        Util.enterText(superuserlname,"Sampe");
        let superuseremail=await Util.waitForExpectedElement(supuseremail);
        Util.enterText(superuseremail,arg);
        let superuserconfirmEmail=await Util.waitForExpectedElement(supuserconfirmemail);
        Util.enterText(superuserconfirmEmail,arg);
        let supuserterms=await Util.waitForExpectedElement(superuserterms);
        supuserterms.click();
        let supcont=await Util.waitForExpectedElement(superusrcont);
        supcont.click();
      return true;
    }
    else{
      return false;
    }
  }

  //Function to enter the details for super user role changes
  this.enterdetailsRoleChange=async function(arg){
    let element=await Util.waitForExpectedElement(rolechangeemail);
    if(element){
      Util.enterText(element,arg);
      let finduser=await Util.waitForExpectedElement(finduseragent);
      finduser.click();
      return true;
    }
    else{
      return false;
    }
  }


  //Function to verify super user locked messages
  this.verifySupUserLockedMessage=async function(){
    let errormessage=await Util.waitForExpectedElement(suplockerrormsg);
    let errortext=await Util.getText(errormessage);
    if(errortext==superrormsg){
      return true;
    }
    else{
      return false;
    }
  }


  //Function to enter the account number for registration
  this.enterAgentRegDetails=async function(arg1,arg2){
    let element=await Util.isElementPresent(email);
    if(element){
      let elem=await Util.waitForExpectedElement(email);
      Util.enterText(elem,arg1);
      let accountnumberelem=await Util.waitForExpectedElement(agentregaccounNumber);
      Util.enterText(accountnumberelem,arg2);
      let registerContinue=await Util.waitForExpectedElement(csaregContinue);
      registerContinue.click();
      return true;
    }
    else{
      return false;
    }
  }




  //Function to click on the registration button$
  this.navigateToRegisterPage=async function(){
    let element=await Util.visibilityOfElementLocated(reglinkk);
    if(element){
      let elem=Util.waitForElementToBeClickableAndReturnElement(reglinkk);
      elem.click();
      return true;
    }
    else{
      return false;
    }
  }

  //Function to click on the registration button$
  this.navigateToRegisterFromHeader=async function(){
    let element=await Util.visibilityOfElementLocated(registerlink);
    if(element){
      let elem=Util.waitForElementToBeClickableAndReturnElement(registerlink);
      elem.click();
      return true;
    }
    else{
      return false;
    }
  }

  this.navigateToRegisterMegaMenu=async function(){
    let isPresent=await Util.visibilityOfElementLocated(Loginlink);
    if(isPresent){
      browser.actions().
      mouseMove(youraccmegamenu).
      perform();
      Util.waitForMoreTime();
      let samp=await Util.visibilityOfElementLocated(registermegamenu);
      if(samp){
        let es=Util.waitForElementToBeClickableAndReturnElement(registermegamenu);
        es.click();
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
  }



  //Function to validate registration landing page
  this.validateRegLandingPage=async function(){
    logger.info("inside validateRegLandingPage");
    let elem=await Util.visibilityOfElementLocated(beforestartele);
    if (elem){
      let result=Util.waitForExpectedElement(beforestartele);
      if(result){
        logger.info("////// Inside registration validation");
        let res1=await Util.validatePageTitle();
        logger.info("********* Page title is "+res1);
        if(res1===regtitletext){
          logger.info("Validation successful for regsitration landing page "+res1)
        }else{
          logger.info("Validation for page title failed. Title does not match "+res1);
          return false;
        }
        return true;
      }else{
        logger.info("Result is unsuccessful. Element before you start is not present in registration landing page");
        return false;}
        return result;
      }
      else{
        return false;    }

      }


      //Function to validate registration landing page
      this.validateRegConfirmationPage=async function(){
        logger.info("inside validateRegConfirmationPage");
        let elem=await Util.visibilityOfElementLocated(regconfirm);
        if(elem){
          let result=Util.waitForElementPresent(regconfirm);
          if(result){
            let text=await Util.getText(result);
            let res=await Util.compareText(text,regconftext);
            if(res){
              logger.info("Validation Successful. Text Matches")
              return true;
            }
            else{
              logger.info("Validation Unsuccessful. You are registered text is not present");
              return true;
            }

            return true;
          }
          else{
            logger.info("Validation Unsuccessful. This is not registration confirmation page");
            return false;
          }
          return true;
        }
        else{
          return false;
        }

      }


      //Function to validate registration activation email sent page
      this.validateRegActivationSentPage=async function(){
        logger.info("inside validateRegActivationSentPage method");
        let result=await Util.visibilityOfElementLocated(regactemailsent);
        if(result){
          let elam=await Util.waitForExpectedElement(regactemailsent);
          let text=await Util.getText(elam);
          let res=await Util.compareText(text,emailsent);
          if(res){
            var temp="@test.co.uk";
            logger.info("Activation email sent sucessful validation");
            let ele1=Util.waitForElementPresent(emailsentto);
            let text1=await Util.getText(ele1);
            if(text1.includes(temp)){
              logger.info("Validation successful for email sent to");
              return true;
            }else{
              return false;
            }
            return true;
          }
          else{
            logger.info("Validation unsuccessful");
            return false;
          }
          return true;
        }
        else{
          logger.info("Validation unsuccessful for registration activation page");
          return false;
        }
      }



      //Function to vaildate the registration in progress page$
      this.verifyRegInProgressPage=async function(){
        logger.info("insdie verifyRegInProgressPage method");
        let result=await Util.visibilityOfElementLocated(reginProg);
        logger.info("/*/*/*/*/*/ "+result);
        if(result){
          let el=Util.waitForUnstableElement(reginProg);
          let text=await Util.getText(el);
          let res1=await Util.compareText(text,reginprogtext);
          if(res1){
            logger.info("Validation successful for registration in progress.");
            return true;
          }
          else{
            logger.info("Validation unsuccessful for registration in progress. text does not match");
            return false;
          }
          return true;
        }
        else{
          logger.info("Validation un-successful for registration in progress");
          return false;
        }
      }


      //Function to validate if the customer is navigated to registration global maintenance page$
      this.verifyRegGlobalMaintenance=async function(){
        logger.info("Inside verifyRegGlobalMaintenance method");
        let result=await Util.visibilityOfElementLocated(regglob);
        if(result){
          logger.info("Inside validating the error message");
          let el=Util.waitForUnstableElement(regglob);
          let text=await Util.getText(el);
          let res1=await Util.compareText(text,regserviceunavtext);
          if(res1){
            let result1=await Util.waitForExpectedElement(reggloberror);
            logger.info("Inside validate global maintenance page");
            let text1=await Util.getText(result1);
            let res2=await Util.compareText(text1,reggloberrortext);
            if(res2){
              logger.info("Validation successful for global maintenance page");
              return true;
            }
            else{
              logger.info("Validation failed for text comparison in global maintenance page");
              return false;
            }
            return true;
          }
          else{
            logger.info("This is not registration global maintenance page");
            return false;
          }
          return true;
        }
        else{
          logger.info("Validation unsuccessful for registration global maintenance");
          return false;
        }
      }


      this.clickLoginLink=function(){
        let res=Util.waitForElementToBeClickableAndReturnElement(Loginlink);
        res.click();
      }


      this.validateLoginLandingPage=async function(){
        let res=Util.visibilityOfElementLocated(email);
        if(res){
          let text=await Util.validatePageTitle();
          logger.info("Page title is "+text);
          if(text==loginpagetitle){
            logger.info("Page title matches");
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



      //Function to validate registration message
      this.verifyRegErrorMessage=async function(arg){
        logger.info("inside verifyRegErrorMessage method");
        var that=this;
        switch(arg){
          case "Oops, it looks like something went wrong,You've already registered. Please,log in":
          logger.info("Inside case: Oops, it looks like something went wrong,You've already registered. Please,log in");
          let element=await Util.visibilityOfElementLocated(regerror);
          if(element){
            let el=Util.waitForUnstableElement(regerror);
            let oopstext=await Util.getText(el);
            logger.info("///////////// "+ oopstext);
            let result1=await Util.compareText(oopstext,regerrorheader);
            if(result1){
              logger.info("Inside validation of error text ");
              element=Util.waitForUnstableElement(alreadyregerrorelem);
              let text=await Util.getText(element);
              let res1=await Util.compareText(text,alreadyregtext);
              if(res1){
                logger.info("Validation successful for text comparison "+res1);
                return true;
              }else{
                return false;
              }
              return true;
            }else{
              logger.info("Validation for registration error failure")
              return false;
            }
            return true;
          }
          else{
            return false;
          }
          break;


          case "Oops, it looks like something went wrong,We are unable to register your online account.":
          logger.info("inside case Oops, it looks like something went wrong,We are unable to register your online account.");
          let result12=await Util.visibilityOfElementLocated(regerror);
          if(result12){
            let elem=Util.waitForUnstableElement(regerror);
            let oopstext1=await Util.getText(elem);
            let result13=await Util.compareText(oopstext1,regerrorheader);
            if(result13){
              logger.info("Inside validation of error text ");
              result13=await Util.visibilityOfElementLocated(alreadyregerrorelem);
              if(result13){
                let ress=await Util.waitForExpectedElement(alreadyregerrorelem);
                let text1=await Util.getText(ress);
                let res12=await Util.compareText(text1,regunable);
                if(res12){
                  logger.info("Validation successful for text comparison "+res12);
                  return true;
                }else{
                  return false;
                }
              }
              else{
                return false;
              }
              return true;
            }else{
              logger.info("Validation for registration error failure")
              return false;
            }
            return true;
          }
          else{
            return false;
          }
          break;



          case "Oops, it looks like something went wrong,It appears the information entered does not match our records.":
          logger.info("Oops, it looks like something went wrong,It appears the information entered does not match our records.");
          let elam=await Util.visibilityOfElementLocated(regerror);
          if(elam){
            let result14=await Util.waitForExpectedElement(regerror);
            let oopstext11=await Util.getText(result14);
            let result15=await Util.compareText(oopstext11,regerrorheader);
            if(result15){
              logger.info("Inside validation of error text ");
              result14=await Util.waitForExpectedElement(alreadyregerrorelem);
              let text2=await Util.getText(result14);
              let res13=await Util.comparePartialText(text2,regDDNoError);
              if(res13){
                logger.info("Validation successful for text comparison "+res13);
                return true;
              }else{
                return false;
              }
              return true;
            }else{
              logger.info("Validation for registration error failure")
              return false;
            }
            return true;
          }
          else{
            return false;
          }
          break;



          case "To continue registration and to ensure your account is correctly validated,please enter the required information again.":
          logger.info("To continue registration and to ensure your account is correctly validated,please enter the required information again.");
          let elamn=await Util.visibilityOfElementLocated(regerror);
          if(elamn){
            let result16=await Util.waitForExpectedElement(regerror);
            let oopstext2=await Util.getText(result16);
            let result17=await Util.compareText(oopstext2,regerrorheader);
            if(result17){
              logger.info("Inside validation of error text ");
              result16=await Util.waitForExpectedElement(alreadyregerrorelem);
              let text3=await Util.getText(result16);
              let res14=await Util.comparePartialText(text3,regDDNoError1);
              if(res14){
                logger.info("Validation successful for text comparison "+res14);
                return true;
              }else{
                return false;
              }
              return true;
            }else{
              logger.info("Validation for registration error failure")
              return false;
            }
            return true;
          }
          else{
            return false;
          }
          break;



          case "You have 2 more attempts before the account is locked":
          logger.info("You have 2 more attempts before the account is locked");
          let result18=Util.waitForElementPresent(regerror);
          let oopstext3=await Util.getText(result18);
          let result19=await Util.compareText(oopstext3,regerrorheader);
          if(result19){
            logger.info("Inside validation of error text ");
            result18=Util.waitForElementPresent(alreadyregerrorelem);
            let text3=await Util.getText(result18);
            let res14=await Util.comparePartialText(text3,reg2attempts);
            if(res14){
              logger.info("Validation successful for text comparison "+res14);
              return true;
            }else{
              return false;
            }
            return true;
          }else{
            logger.info("Validation for registration error failure")
            return false;
          }
          break;


          case "You have 1 more attempt before the account is locked":
          logger.info("You have 1 more attempt before the account is locked");
          let result20=Util.waitForElementPresent(regerror);
          let oopstext4=await Util.getText(result20);
          let result21=await Util.compareText(oopstext4,regerrorheader);
          if(result21){
            logger.info("Inside validation of error text ");
            result20=Util.waitForElementPresent(alreadyregerrorelem);
            let text4=await Util.getText(result20);
            let res15=await Util.comparePartialText(text4,reg1attempt);
            if(res15){
              logger.info("Validation successful for text comparison "+res15);
              return true;
            }else{
              return false;
            }
            return true;
          }else{
            logger.info("Validation for registration error failure")
            return false;
          }
          break;


          case "Oops, it looks like something went wrong,Your site postcode has not been recognized":
          logger.info("Inside case Oops, it looks like something went wrong,Your site postcode has not been recognized");
          Util.waitForMoreTime();
          let result22=Util.waitForElementPresent(regerror);
          let oopstext5=await Util.getText(result22);
          let result23=await Util.compareText(oopstext5,regerrorheader);
          if(result23){
            logger.info("Inside validation of error text ");
            regresult=Util.waitForElementPresent(alreadyregerrorelem);
            let regpostcodeErrorText=await Util.getText(regresult);
            let res17=await Util.comparePartialText(regpostcodeErrorText,sitePostCodeErrorMessage);
            if(res17){
              logger.info("Validation successful for text comparison "+res17);
              return true;
            }else{
              return false;
            }
            return true;
          }else{
            logger.info("Validation for registration error failure")
            return false;
          }
          break;

          case "Please enter a valid account number starting with 60 or 67":
          logger.info("Inside case Please enter a valid account number starting with 60 or 67");
          Util.waitForMoreTime();
          browser.actions().
          sendKeys(protractor.Key.TAB).
          perform();
          let result34=Util.waitForElementPresent(accountNoErrorMessage);
          let accountError=await Util.getText(result34);
          let result40=await Util.compareText(accountError,accNumErrorMessage);
          if(result40){
            logger.info("Validation successful for text comparison "+result40);
            return true;
          }
          else{
            return false;
          }
          break;



          case "Your registration is in progress":
          logger.info("Inside case Your registration is in progress");
          Util.waitForMoreTime();
          let agentregInProg=Util.waitForElementPresent(agenrRegInProgress);
          if(agentregInProg){
            let agentInRegText=Util.waitForUnstableElement(agenrRegInProgress);
            let agentInProgtext=await Util.getText(agentInRegText);
            let reginprogcompare=await Util.compareText(agentInProgtext,reginprogtext);
            if(reginprogcompare){
              logger.info("Text comparison is successful");
              return true;
            }
            else{
              logger.info("Comparison is unsuccessful");
              return false;
            }
            return true;
          }
          else{
            return false;
          }
          break;


          case "Your super user has invited you to register":
          logger.info("Inside case Your super user has invited you to register");
          Util.waitForPageLoad();
          let InProgSuper=Util.waitForElementPresent(superUserInvite);
          if(InProgSuper){
            let InProgressTextSuperUser=Util.waitForUnstableElement(superUserInvite);
            let superUserText=await Util.getText(InProgressTextSuperUser);
            let supInvite=await Util.compareText(superUserText,superuserInv);
            if(supInvite){
              logger.info("Text comparison is successful");
              return true;

            }
            else{
              logger.info("Text comparison is Unsuccessful");
              return false;
            }
            return true;
          }
          else{
            return false;
          }
          break;


          case "Your super user invited you by email to register to manage your energy account online. All you need to do is activate your account.":
          logger.info("Inside case Your super user invited you by email to register to manage your energy account online. All you need to do is activate your account.");
          Util.waitForPageLoad();
          var agentregister="Your super user invited you by email to register to manage your energy account online. All you need to do is activate your account.";
          let supUserInvite=Util.waitForElementPresent(superUserInvite);
          if(supUserInvite){
            let agentInvite=Util.waitForUnstableElement(agentInProgresstext);
            let agentIn=await Util.getText(agentInvite);
            if(agentIn.includes(agentregister)){
              logger.info("Text is present in in progress page");
              return true;
            }
            else{
              logger.info("Text is not present in the page");
              return false;
            }
            return true;
          }
          else{
            return false;
          }
          break;


          case "If you haven’t got an activation email, you can either request a new one or check your spam/junk folders if it’s not showing in your inbox.":
          logger.info("Inside case If you haven’t got an activation email, you can either request a new one or check your spam/junk folders if it’s not showing in your inbox.");
          Util.waitForPageLoad();
          var agentregister1="If you haven’t got an activation email, you can either request a new one or check your spam/junk folders if it’s not showing in your inbox.";
          let supUserInvite1=Util.waitForElementPresent(superUserInvite);
          if(supUserInvite1){
            let agentInvite1=Util.waitForUnstableElement(agentInProgresstext);
            let agentIn1=await Util.getText(agentInvite1);
            if(agentIn1.includes(agentregister1)){
              logger.info("Text is present in in progress page");
              return true;
            }
            else{
              logger.info("Text is not present in the page");
              return false;
            }
            return true;
          }
          else{
            return false;
          }
          break;


          case "You've already registered. Please log in":
          logger.info("Inside case You've already registered. Please log in");
          Util.waitForPageLoad();
          var lockedEmailErrorMessageAgent="Please note the email address you have entered is already registered.";
          let agentEmailLockedReg=Util.waitForExpectedElement(agentEmailLocked);
          if(agentEmailLockedReg){
            let agentEmailLock=Util.waitForUnstableElement(agentEmailLocked);
            let agentEmailLockText=await Util.getText(agentEmailLock);
            let agentEmailLockTextCompare=await Util.compareText(agentEmailLockText,lockedEmailErrorMessageAgent);
            if(agentEmailLockTextCompare){
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
          break;

          case "Oops, it looks like something went wrong,Your online account's waiting to be activated. Please check your inbox for an email from business@britishgas.co.uk.":
          logger.info("Inside case Oops, it looks like something went wrong,Your online account's waiting to be activated. Please check your inbox for an email from business@britishgas.co.uk.");
          let waitingError=await Util.waitForExpectedElement(regerror);
          if(waitingError){
            let waitErrorElement=Util.waitForUnstableElement(regerror);
            let waitErrorText=await Util.getText(waitErrorElement);
            let waitErrorTextCompare=await Util.compareText(waitErrorText,regerrorheader);
            if(waitErrorTextCompare){
              let waitErrorMsg=await Util.waitForExpectedElement(alreadyregerrorelem);
              if(waitErrorMsg){
                let waitErrorMessage=Util.waitForUnstableElement(alreadyregerrorelem);
                let waitErrorMessageText=await Util.getText(waitErrorMessage);
                let waitErrorMessageTextCompare=await Util.compareText(waitErrorMessageText,activationPending);
                if(waitErrorMessageTextCompare){
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
            return false;
          }
          break;

          case "Your registration is pending activation":
          logger.info("Inside Your registration is pending activation");
          Util.waitForMoreTime();
          var regPending="The customer has already started to register";
          let pendingAct=await Util.waitForExpectedElement(agenrRegInProgress);
          if(pendingAct){
            let pendingActElement=Util.waitForUnstableElement(agenrRegInProgress);
            let pendingActText=await Util.getText(pendingActElement);
            let pendingActTextCompare=await Util.compareText(pendingActText,arg);
            if(pendingActTextCompare){
              let regisStart=await Util.waitForExpectedElement(regstart);
              if(regisStart){
                let regStartElement=Util.waitForUnstableElement(regstart);
                let regStartText=await Util.getText(regStartElement);
                let regStartTextCompare=await Util.compareText(regStartText,regPending);
                if(regStartTextCompare){
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
            }
            else{
              return false;
            }
            return true;
          }
          else{
            return false;
          }
          break;




        }
      }


      //Function to pass the input value for the email address field
      this.enterDetailsForRegistration = async function (arg1,arg2,arg3,arg4) {
        browser.executeScript('window.scrollTo(0,350);');
        logger.info("Inside enterAccNumberAndPostcode method");
        var that = this;
        switch (arg4) {
          case "Registration_05":
          logger.info("Inside case Registration_05");
          var sample=arg1;
          var temp = sample.split("@");
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          for (var i = 0; i < 8; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          }
          var Nemail = temp[0]+ text + "@" + temp[1];
          let element=Util.waitForUnstableElement(email);
          Util.enterText(element, Nemail);
          element=Util.waitForUnstableElement(emailconfirm);
          Util.enterText(element,Nemail);
          browser.actions().sendKeys(protractor.Key.TAB).perform();
          browser.actions().sendKeys(protractor.Key.ENTER).perform();
          let element1=await Util.visibilityOfElementLocated(regaccno);
          if(element1){
            let el=Util.waitForUnstableElement(regaccno);
            Util.enterText(el,arg2);
            let element2=Util.waitForUnstableElement(regpostcode);
            Util.enterText(element2,arg3);
            let element3=Util.waitForElementToBeClickableAndReturnElement(regnextbutton);
            element3.click();
            return true;
          }
          else{
            return false;
          }
          break;
        }
      };


      //Function to pass the input value for the email address field
      this.enterDetailsForRegistrationAcc = async function (arg1,arg2,arg3,arg4,arg5) {
        browser.executeScript('window.scrollTo(0,350);');
        logger.info("Inside enterAccNumberAndPostcodeAcc method");
        var that = this;
        switch (arg5) {
          case "Registration_06":
          case "Registration_07":
          case "Registration_10":
          logger.info("Inside case Registration");
          var sample=arg1;
          var temp = sample.split("@");
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          for (var i = 0; i < 8; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          }
          var Nemail = temp[0]+ text + "@" + temp[1];
          let el=await Util.visibilityOfElementLocated(email);
          if(el)
          {
            let element=await Util.waitForExpectedElement(email);
            Util.enterText(element,Nemail);
            element11=await Util.waitForExpectedElement(emailconfirm);
            Util.enterText(element11,Nemail);
            browser.executeScript('window.scrollTo(0,350);');
            element12=Util.waitForElementToBeClickableAndReturnElement(regnextbutton);
            element12.click();
            let element1=await Util.waitForExpectedElement(regaccno);
            Util.enterText(element1,arg2);
            let element2=await Util.waitForExpectedElement(regpostcode);
            Util.enterText(element2,arg3);
            let element3=Util.waitForElementToBeClickableAndReturnElement(regnextbutton);
            element3.click();
            let element4=await Util.visibilityOfElementLocated(ddAccountNumber);
            if(element4)
            {
              let elem=await Util.waitForExpectedElement(ddAccountNumber);
              Util.enterText(elem,arg4);
              let element5=Util.waitForElementToBeClickableAndReturnElement(regnextbutton);
              element5.click();
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
          break;
        }
      };


      //Function to pass the input value for the email address field
      this.enterDetailsForRegistrationPersonalDetails = async function (arg1,arg2,arg3,arg4,arg5) {
        logger.info("Inside enterDetailsForRegistrationPersonalDetails method");
        //Util.waitForPageLoad();
        let element=await Util.waitForExpectedElement(by.css("div[class='ember-power-select-trigger ember-basic-dropdown-trigger ember-view']"));
       //if(element){
          element.click();
          let elam=await Util.waitForExpectedElement(by.css("ul[class*='ember-power-select-options'] li:nth-child(2)"));
          elam.click();
          logger.info("Clicked on the title");
        //  var sample=arg1;
        //  let element1=Util.waitForElementPresent(by.xpath('//ul[@class="select2-results"] //li //div[text()="' +sample+'"]'));
        //  element1.click();
          let element2=Util.waitForUnstableElement(regfirstname);
          Util.enterText(element2,arg2);
          let element3=Util.waitForUnstableElement(reglastname);
          Util.enterText(element3,arg3);
          let element4=Util.waitForUnstableElement(regphone);
          Util.enterText(element4,arg4);
          let element5=Util.waitForUnstableElement(regpassword);
          Util.enterText(element5,arg5);
          browser.executeScript('window.scrollTo(0,600);');
          let element6=Util.waitForElementToBeClickableAndReturnElement(regcheckbox);
          element6.click();
          let element7=Util.waitForElementToBeClickableAndReturnElement(regsubmitbutton);
          element7.click();
          // return true;
        // }
        // else{
        //   return false;
        // }
      };


      //Function to pass the input value for the email address field
      this.enterPersonalDetailsWithoutPhone = async function (arg1,arg2,arg3,arg4) {
        logger.info("Inside enterPersonalDetailsWithoutPhone method");
        Util.waitForMoreTime();
      //   let element=await Util.visibilityOfElementLocated(titleclick);
      // //  if(element){
      //     let elam=await Util.waitForExpectedElement(titleclick);
      //     elam.click();
      //     logger.info("Clicked on the title");
      //     var sample=arg1;
      //     let element1=Util.waitForElementPresent(by.xpath('//ul[@class="select2-results"] //li //div[text()="' +sample+'"]'));
      //     element1.click();

      let element=await Util.waitForExpectedElement(by.css("div[class='ember-power-select-trigger ember-basic-dropdown-trigger ember-view']"));
     //if(element){
        element.click();
        let elam=await Util.waitForExpectedElement(by.css("ul[class*='ember-power-select-options'] li:nth-child(2)"));
        elam.click();
        logger.info("Clicked on the title");
          let element2=Util.waitForUnstableElement(regfirstname);
          Util.enterText(element2,arg2);
          let element3=Util.waitForUnstableElement(reglastname);
          Util.enterText(element3,arg3);
          let element5=Util.waitForUnstableElement(regpassword);
          Util.enterText(element5,arg4);
          browser.executeScript('window.scrollTo(0,600);');
          let element6=Util.waitForElementToBeClickableAndReturnElement(regcheckbox);
          element6.click();
          let element7=Util.waitForElementToBeClickableAndReturnElement(regsubmitbutton);
          element7.click();
        //   return true;
        // }
        // else{
        //   return false;
        // }
      };



      //Function to pass the input value for the email address field
      this.enterDetailsForRegistrationAccount = async function (arg1,arg2,arg3,arg4,arg5) {
          browser.executeScript('window.scrollTo(0,400);');
        logger.info("Inside enterDetailsForRegistrationAccount method");
        var that = this;
        switch (arg5) {
          case "Registration_08":
          case "Registration_11":
          logger.info("Inside case Registration");
          var sample=arg1;
          var temp = sample.split("@");
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          for (var i = 0; i < 8; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          }
          var Nemail = temp[0]+ text + "@" + temp[1];
          let el=await Util.visibilityOfElementLocated(email);
          if(el)
          {
            let element=await Util.waitForExpectedElement(email);
            Util.enterText(element,Nemail);
            element11=await Util.waitForExpectedElement(emailconfirm);
            Util.enterText(element11,Nemail);
              browser.executeScript('window.scrollTo(0,400);');
            element12=Util.waitForElementToBeClickableAndReturnElement(regnextbutton);
            element12.click();
            let element1=await Util.waitForExpectedElement(regaccno);
            Util.enterText(element1,arg2);
            let element2=await Util.waitForExpectedElement(regpostcode);
            Util.enterText(element2,arg3);
            let element3=Util.waitForElementToBeClickableAndReturnElement(regnextbutton);
            element3.click();
            let element4=await Util.visibilityOfElementLocated(regpayAmount);
            if(element4){
              let elem=await Util.waitForExpectedElement(regpayAmount);
              Util.enterText(elem,arg4);
              let element5=Util.waitForElementToBeClickableAndReturnElement(regnextbutton);
              element5.click();
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
          break;
        }
      };


      //Function to pass the input value for the email address field
      this.enterDetailsForRegistrationAccountcard = async function (arg1,arg2,arg3,arg4,arg5) {
        browser.executeScript('window.scrollTo(0,400);');
        logger.info("Inside enterDetailsForRegistrationAccountcard method");
        var that = this;
        switch (arg5) {
          case "Registration_09":
          logger.info("Inside case Registration_09");
          var sample=arg1;
          var temp = sample.split("@");
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          for (var i = 0; i < 8; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          }
          var Nemail = temp[0]+ text + "@" + temp[1];
          let el=await Util.visibilityOfElementLocated(email);
          if(el)
          {
            let element=await Util.waitForExpectedElement(email);
            Util.enterText(element,Nemail);
            element11=await Util.waitForExpectedElement(emailconfirm);
            Util.enterText(element11,Nemail);
            browser.executeScript('window.scrollTo(0,400);');
            element12=Util.waitForElementToBeClickableAndReturnElement(regnextbutton);
            element12.click();
            let element1=await Util.waitForExpectedElement(regaccno);
            Util.enterText(element1,arg2);
            let element2=await Util.waitForExpectedElement(regpostcode);
            Util.enterText(element2,arg3);
            let element3=Util.waitForElementToBeClickableAndReturnElement(regnextbutton);
            element3.click();
            let element4=await Util.visibilityOfElementLocated(cardNumber);
            if(element4){
              let elem=await Util.waitForExpectedElement(cardNumber);
              Util.enterText(elem,arg4);
              let element5=Util.waitForElementToBeClickableAndReturnElement(regnextbutton);
              element5.click();
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
          break;
        }
      };


      //Function to pass the input value for the email address field
      this.enterpostcodeDetailsRegistration = async function (arg1,arg2,arg3,arg4) {
        browser.executeScript('window.scrollTo(0,400);');
        logger.info("Inside enterDetailsForRegistrationAccountcard method");
        var that = this;
        switch (arg4) {
          case "Registration_28":
          logger.info("Inside case Registration_28");
          var sample=arg1;
          var temp = sample.split("@");
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          for (var i = 0; i < 8; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          }
          var Nemail = temp[0]+ text + "@" + temp[1];
          let el=await Util.visibilityOfElementLocated(email);
          if(el)
          {
            let element=await Util.waitForExpectedElement(email);
            Util.enterText(element,Nemail);
            element11=await Util.waitForExpectedElement(emailconfirm);
            Util.enterText(element11,Nemail);
            browser.executeScript('window.scrollTo(0,400);');
            element12=Util.waitForElementToBeClickableAndReturnElement(regnextbutton);
            element12.click();
            let element1=await Util.waitForExpectedElement(regaccno);
            Util.enterText(element1,arg2);
            let element2=await Util.waitForExpectedElement(regpostcode);
            Util.enterText(element2,arg3);
            element14=await Util.waitForExpectedElement(regnextbutton);
            element14.click();
            return true;
          }
          else
          {
            return false;
          }
          break;
        }
      };



      //Function to pass the input value for the email address field
      this.enterAccNumberDetails = async function (arg1,arg2,arg3) {
        browser.executeScript('window.scrollTo(0,400);');
        logger.info("Inside enterDetailsForRegistrationAccountcard method");
        var that = this;
        switch (arg3) {
          case "Registration_29":
          logger.info("Inside case Registration_29");
          var sample=arg1;
          var temp = sample.split("@");
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          for (var i = 0; i < 8; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          }
          var Nemail = temp[0]+ text + "@" + temp[1];
          let el=await Util.visibilityOfElementLocated(email);
          if(el)
          {
            let element=await Util.waitForExpectedElement(email);
            Util.enterText(element,Nemail);
            element11=await Util.waitForExpectedElement(emailconfirm);
            Util.enterText(element11,Nemail);
            browser.executeScript('window.scrollTo(0,400);');
            element12=Util.waitForElementToBeClickableAndReturnElement(regnextbutton);
            element12.click();
            let element1=await Util.waitForExpectedElement(regaccno);
            Util.enterText(element1,arg2);
            logger.info("Clicked ");
            return true;
          }
          else
          {
            return false;
          }
          break;
        }
      };




      this.enterSecurityAnswer = async function (arg1) {
        logger.info("Inside enterSecurityAnswer");
        let element=await Util.visibilityOfElementLocated(ddAccountNumber);
        if(element){
          let elem=await Util.waitForExpectedElement(ddAccountNumber);
          Util.enterText(element, arg1);
          element=Util.waitForElementToBeClickableAndReturnElement(regnextbutton);
          element.click();
          return true;
        }
        else{
          return false;
        }
      };




      //Function to pass the input value for the email address field
      this.enterDetailsForReg = function (arg1,arg2) {
        browser.executeScript('window.scrollTo(0,400);');
        logger.info("Inside enterDetailsForReg method");
        var that = this;
        switch (arg2) {
          case "Registration_02":
          case "Registration_03":
          case "Registration_04":
          case "Registration_06":
          case "Registration_35":
          logger.info("Inside case Registration_02");
          let element=Util.waitForUnstableElement(email);
          Util.enterText(element, arg1);
          element=Util.waitForUnstableElement(emailconfirm);
          Util.enterText(element,arg1);
          browser.executeScript('window.scrollTo(0,400);');
          element=Util.waitForElementToBeClickableAndReturnElement(regnextbutton);
          element.click();
          break;

          default:
          logger.info("No Match found");
        }
      };




    };
    module.exports = new Registration();
