var AddAccount = function()
{

var bot;
var common;
var util;
var log4js = require('log4js');
var logger = log4js.getLogger();
var util=require('../utils/FrameworkUtil.js');

var addAccount=by.xpath("//*[@class='side-navbar__secondary']/ul/li[2]/span/a/div");
var accountNumberField=by.css("form[class='add-accounts__account-postcode-form'] input[name='accountNumber']");
var postcodeField=by.css("form[class='add-accounts__account-postcode-form'] input[name='postcode']");
var submitButton=by.css("button[type='submit']");
//var securityField=by.css("input[type='tel']");
var securityField=by.xpath("//input[@name='cardPayment']");
var viewOrganization=by.css("div[class*='oam-card-confirmation__right-column'] a[href*='app/organisations']");
var organizationList=by.css("div[class='my-organisations__wrapper row'] div");
var NoScecurityQuestions_header=by.xpath("//*[@class='add-accounts__error-message order-2']/span");
var selectaccount = by.xpath("//*[@class='accounts-list__wrapper']/div[2]//*[@class='account-row__account-number']/strong");
var ClickOrgDropdown = by.xpath("//*[@class='account-nav__wrapper ember-view']//*[@class='account-nav__selected-option']//*[@class='account-nav__org-name']");
var ClickOrgInDropdown = by.xpath("//*[@class='account-nav__options']//*[@class='account-nav__org-name']");
var secondOrgNavigated = by.xpath("//*[@class='side-navbar__account']/span[2]/p");
var ClickAccDropdown = by.xpath("//*[@class='account-nav__wrapper ember-view']//*[@class='account-nav__search-box account-nav__search-box--two-line ember-view']//*[@class='account-nav__selected-option']");
var ClickAccInDropdown = by.xpath("//*[@class='account-nav__dropdown']//*[@class='account-nav__options']");
var secondAccNavigated = by.xpath("//*[@class='side-navbar__account']/span[2]");



var errorpath="",error1="",error0="",error2="";
var errorexist = by.css("p[class='tertiary-text m-0']");
//var errorexist = by.xpath("//*[@class='form-control-feedback']");

var errorexistmsg = "You already have access to this account";
var invalidAccerror = by.xpath("//*[@class='add-accounts__account-postcode-form']/div[1]/div[1]/div[2]");
var invalidPostcodeerror = by.xpath("//*[@class='add-accounts__account-postcode-form']/div[2]/div[1]/div[2]");
var clickme = by.css("div[class='add-accounts__card-wrapper']");
var invalidAccerror1 = "Please enter a valid account number starting with 60 or 67.";
var invalidposterror1 = "Please enter a valid postcode";


this.selectOrganization=function(organization){
  switch(organization){
    case "First-Organization":
      var element=util.waitForElementToBeClickableAndReturnElement(by.css("div[class='my-organisations__wrapper row'] div:nth-child(1)"));
        util.clickEvent(element);
        util.waitForMoreTime1();
        break;
    case "Second-Organization":
      var element=util.waitForElementToBeClickableAndReturnElement(by.css("div[class='my-organisations__wrapper row'] div:nth-child(2)"));
        util.clickEvent(element);
        util.waitForMoreTime1();
        break;
    default:
      logger.error("No more organization");
  }
};

this.clickAddAccount=async function(){
  util.waitForMoreTime();
   var element=await util.waitForExpectedElement(addAccount);
   util.clickEvent(element);
};

this.enterAccountDetails=async function(accountNumber,postcodeNumber){
  var account=await util.waitForExpectedElement(accountNumberField);
  util.enterText(account,accountNumber);
  var postcode=await util.waitForExpectedElement(postcodeField);
    util.enterText(postcode,postcodeNumber);
};

this.submitAccountDetails=async function(){
    var submit=await util.waitForExpectedElement(submitButton);
        util.clickEvent(submit);
};

this.enterSecurityAnswer=async function(securityAns){
      var element=await util.waitForExpectedElement(securityField);
      util.enterText(element,securityAns);
};

this.clickViewOrganization= function(){
  util.waitForMoreTime();
  var view=element(viewOrganization);
   view.click();
    //util.clickEvent(element);
};


this.checkNumberOfOrganization=async function(){
//  var listOfOrg=await util.findElements(organizationList);
  util.waitForMoreTime();
  var listOfOrg=await util.waitForElementsPresent(organizationList);
  util.waitForMoreTime();
  logger.info("list of org:"+listOfOrg.length);
  if(listOfOrg.length==2)
    return true;
  else {
     return false;
  }
};


this.verifyErrorheader= async function(errorMsg,type){
util.waitForMoreTime();
let errorElement=await util.waitForExpectedElement(NoScecurityQuestions_header);
let generatedError=await util.getText(errorElement);
logger.info("generatedError:"+generatedError);
return await util.compareText(generatedError,errorMsg);
};


this.verifyAddAccountPresent = async function(){
//util.waitForMoreTime1();
var result = await util.isElementPresent(addAccount);
//logger.info("Add Account link not available");
return result;

};


this.clickaccount= async function(){
  util.waitForMoreTime1();
  //var view = await util.waitForExpectedElement(selectaccount);
  //var view1 = element(view);
   //view1.click();
   let element = await util.waitForExpectedElement(selectaccount);
   var text = await util.getText(element);
   logger.info("********************* : "+text);
   util.clickEvent(element);
   logger.info("**********************Account number clicked");
   //util.clickEvent(element);
};

this.verifyOamPage = async function(){
util.waitForMoreTime1();
var result = await util.isElementPresent(by.xpath("//*[@class='side-navbar__account']/span[2]"));
//logger.info("Add Account link not available");
return result;
};


this.clickdropdown = async function(){
      util.waitForMoreTime1();
      let element = await util.waitForExpectedElement(ClickOrgDropdown);
      var text = await util.getText(element);
      logger.info("********************* : "+text);
      util.clickEvent(element);
      logger.info("**********************Dropdown clicked");
      util.waitForMoreTime1();
      let element1 = await util.waitForExpectedElement(ClickOrgInDropdown);
      var text1 = await util.getText(element1);
      logger.info("********************* : "+text1);
      util.clickEvent(element1);
      util.waitForMoreTime1();
        var result = await util.isElementPresent(secondOrgNavigated);
        logger.info("********************* : "+result);
        return result;

};

this.clickslogout = async function(){
  var result = await util.waitForExpectedElement(by.css('#quickLinks a[href*="logmeout"]'));
  result.click();
};


this.clickAccountInDropDown = async function(){
      util.waitForMoreTime1();
      let element = await util.waitForExpectedElement(ClickAccDropdown);
      var text = await util.getText(element);
      logger.info("********************* : "+text);
      util.clickEvent(element);
      logger.info("**********************Dropdown clicked");
      util.waitForMoreTime1();
      let element1 = await util.waitForExpectedElement(ClickAccInDropdown);
      var text1 = await util.getText(element1);
      logger.info("********************* : "+text1);
      util.clickEvent(element1);
      util.waitForMoreTime1();
        let result = await util.isElementPresent(secondAccNavigated);
      //  var result1 = await util.getText(result);
        logger.info("********************* : "+result);
          //  util.waitForMoreTime1();
          //         if(result1.includes("Electricity"))
          //         {
          //           logger.info(result1+" navigated to expected account");
          //           return true;
          //         }
          //         else
          //         {
          //           logger.info(result1+" navigated to wrong account");
          //           return false;
          //         }
        return result;

};




this.verifyerrormessages= async function(errorLocked,scenario)
{
that = this;
  switch(scenario)
  {
    case "MoreThan15":
    case "GreyList":
            errorpath = by.css("div[class='add-accounts__error-message order-2']");
            error0 = "There have been too many failed attempts";
            error1 = "This organisation has been locked for 24 hours";
            error2 = "Go back to my accounts";
    break;



    default: logger.info("invalid input");
  }
  var result = await that.checkerrorMessageLocked();
  return result;
};

this.checkerrorMessageLocked=async function()
{
  util.waitForMoreTime1();
  var Lockerror=await util.waitForExpectedElement(errorpath);
  logger.info("element is  : "+Lockerror);
  var text = await util.getText(Lockerror);
  var text1 = text.split(".");
  text1[1]=text1[1].trim();
  if(text1[0].includes(error0) && text1[0].includes(error1))
  {
    logger.info(error0+" error message is displaying");
      if(text1[1].includes(error2))
      {
        logger.info(error2+" link is displaying");
        return true;
      }
      else
      {
        logger.info(error2+" link is not displaying");
        return false;
      }
  }
  else
  {
    logger.info(error1+" Error message is not displaying");
    return false;
  }
};

this.verifyerrormessages_Exist=async function()
{
  util.waitForMoreTime();
  var errorexistaccount=await util.waitForExpectedElement(errorexist);
  var errorexistaccount1 =await util.getText(errorexistaccount);
  if(errorexistaccount1.includes(errorexistmsg))
  {
  logger.info(errorexistaccount1+" error message is displaying");
  return true;
  }
  else
  {
     return false;
  }
};

this.verifyerrormessageinvalidAccPost=async function()
{
  util.waitForMoreTime();
  var errorinvalidaccount=await util.waitForExpectedElement(invalidAccerror);
  var errorinvalidaccount1 =await util.getText(errorinvalidaccount);
  var errorinvalidpost=await util.waitForExpectedElement(invalidPostcodeerror);
  var errorinvalidpost1 =await util.getText(errorinvalidpost);

  util.waitForMoreTime();
  if(errorinvalidaccount1.includes(invalidAccerror1) && errorinvalidpost1.includes(invalidposterror1))
  {
  logger.info("Error message is displaying");
  return true;
  }
  else
  {
     return false;
  }
};

this.clickout=async function()
{
    var clicks=await util.waitForExpectedElement(clickme);
    util.clickEvent(clicks);
};




}; module.exports = new AddAccount();
