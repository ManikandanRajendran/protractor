var SingleAccDashboard = function () {
 var common;
  var util;
  var login = require('../Pages/Obj_LoginPage.js');
  var log4js = require('log4js');
  var logger = log4js.getLogger();
  var Util=require('../Utils/FrameworkUtil.js');
  var Loginlink = by.css('div.ukb-head-topnav  a[href*="login"]');var email = by.name('email');
  var logoutLink=by.css('div.ukb-head-topnav  a[href*="logmeout"]');var password = by.name('password');
  var Loginbtn = by.css('button.btn-submit'); var renewalLink=by.css('button.btn.btn-danger');
  var forgottenDetailsLink=by.css('a[href*="forgotten-your-details"]'); var renpopupcontinue=by.id('multipleContinue');
  var FDTitle="Forgotten your details | British Gas business";
  var backtoLoginLink=by.xpath('//*[contains(text(),"Back to log in")]');
  var loginTitle="Log in to your business account | British Gas Business";
  var ForgottenDetailsURL="/business/app/forgotten-your-details";
  var accdashPaylink=by.css('div.col.your-account__dashboard a[href*="card-payment"]');
  var loginpageURL="/business/your-account/login"; var activeselected="active ember-view";
  var smrlink=by.css('a[href*="meter-readings"]'); var readingslink=by.css('div.list-indicator a[href*="readings"]');
  var LHNbillinglink=by.css('div.list-indicator a[href*="billing"]');
  var dashboardbill=by.css('div.col.your-account__dashboard a[href*="bill"]');
  var LHNPaymentslink=by.css('div.list-indicator a[href*="payments"]');
  var LHNMPDlink=by.css('div.side-navbar a[href*="MPD"]');
  var LHNAddAcclink=by.css('a[href*="add-account"]');
  var LHNMulUserlink=by.css('div.side-navbar a[href*="multiuser"]');
  var groupaccelement=by.css('div.your-account__balance-plan p:nth-child(1)');
  var groupbalancelement=by.css('div.your-account__balance-plan h4');
  var groupaddresselement=by.xpath("//label[contains(text(),'Group')]");
  var groupbilladdresselement=by.css('div.col.your-account__dashboard ul.your-account__site-address li strong');
  var grpbalance="Group account balance"; var accbal="£"; var grpacc="Group account details";
  var grpbilldet="Billing address:"; var meterreadlink=by.css("div.col.your-account__dashboard a[href*='readings']");
  var SMRCloseLink=by.css('div.col.your-account__dashboard a'); var accountNumcoll=by.css('div.side-navbar__account p');
  var lastloginelement=by.css('p.your-account__last-login'); var lastlogin="Last login";
  var billdueElement=by.css('div.row div.link-list:nth-child(2) p:nth-child(1)'); var billdue="Your next bill is due on or around";
  var mtrdueEl=by.css('div.row div.link-list:nth-child(1) p:nth-child(1)'); var mtrdue="Next reading due between";
  var collaccsitelink=by.css('a[href*="collective-account-list"]');
  var collaccsiteaddclose=by.css('div.row.table-panel div.pull-right i');var viewBillLink=by.css('li.text-link div');
  var siteaddsize=by.css('ul.pagination-table li:nth-child(2)'); var sitesgroupele=by.css('div.col.your-account__dashboard b');
  var sitesgroup="Sites in your group"; var totalcount=""; var accdashURL="business/your-account";var viewBillLink=by.css('li.text-link div');
  var collbillText="You can't view your bill online";var complexinfoelement=by.css('p.tertiary-text');
  var complexinfo="We can't find your energy account(s). Please call us on 0800 316 2010 and we'll get you back online";
  var accbalance=by.xpath('//div[@class="your-account__balance-plan"]//div[starts-with(@class,"col")][1]//p[2]');
  var accbalancepound=by.xpath('//div[@class="your-account__balance-plan"]//div[starts-with(@class,"col")][1]//h4'); var logoutren=by.css('div.logout.fright a[href*="Logout"]');
  var renpageheader=by.css("div.bgbusiness div.title h1"); var rencompare="Renew online today and save";
  var status=""; var stat=""; var sym="£"; var spl=".";





  //Declaring Logger
  var log4js = require('log4js');
  var logger = log4js.getLogger();
  this.load = function (url) {
    bot.launchUrl(url);
  };


//Function to click on the renewals link in the account dashboard pages
this.clickRenewalsLink=async function(){
  let renewalsElement=await Util.visibilityOfElementLocated(renewalLink);
  if(renewalsElement){
    let renElement=await Util.waitForExpectedElement(renewalLink);
    renElement.click();
    return true;
  }
  else{
    logger.info("Element not available for renewals link in the account dashboard page");
    return false;
  }
};


//Function to click on the renewals link in the account dashboard pages
this.validateRenewalsBanner=async function(){
  let renewalsBanner=await Util.visibilityOfElementLocated(renewalLink);
  if(renewalsBanner){
    logger.info("Element present for renewals banner");
    return true;
  }
  else{
    logger.info("Element not available for renewals link in the account dashboard page");
    return false;
  }
};

//Function to click on the Add accounts link in the account dashboard page
this.clickAddAccount=async function(){
  let addAccount=await Util.visibilityOfElementLocated(LHNAddAcclink);
  if(addAccount){
    let addAccountElement=await Util.waitForExpectedElement(LHNAddAcclink);
    addAccountElement.click();
    logger.info("Clicked on add account link");
    return true;
  }
  else{
    logger.info("Element not available for clicking on add account in account dashboard page");
    return false;
  }
};


//Function to click on the logout link from renewals pages
this.clickRenLogout=async function(){
let RenewalLogout=await Util.visibilityOfElementLocated(logoutren);
if(RenewalLogout){
  let RenewalLogoutElement=await Util.waitForExpectedElement(logoutren);
  RenewalLogoutElement.click();
  let logBack=await login.findLogBackIn();
  return true;
}
else{
  logger.info("Element not available to click on logout");
  return false;
}

};


//Function to click on the continue popup
this.validateRenewalsPage=async function(){
  Util.waitForMoreTime();
let renewalsPage=await Util.isElementPresent(renpopupcontinue);
if(renewalsPage){
let renewalsPageElement=await Util.waitForExpectedElement(renpopupcontinue);
renewalsPageElement.click();
let renewalspageheader=await Util.visibilityOfElementLocated(renpageheader);
if(renewalspageheader){
let renewalspageheaderElement=await Util.waitForExpectedElement(renpageheader);
let renewalspagetext=await Util.getText(renewalspageheaderElement);
let renewalspagetextcompare=await Util.compareText(renewalspagetext,rencompare);
if(renewalspagetextcompare){
  logger.info("Validation successful for renewals page");
  return true;
}
else{
  return false;
}
return true;
}
else{
  logger.info("This is not renewals page");
  return false;
}
}
else{
  let renewalPage=await Util.visibilityOfElementLocated(renpageheader);
  if(renewalPage){
  let renewalpageElement=await Util.waitForExpectedElement(renpageheader);
  let renewalPageText=await Util.getText(renewalpageElement);
  let renewalpagetextcompare=await Util.compareText(renewalPageText,rencompare);
  if(renewalpagetextcompare){
    logger.info("Validation successful for renewals page");
    return true;
  }
  else{
    return false;
  }
  return true;
  }
  else{
    logger.info("This is not renewals page");
    return false;
  }
}
};


//Validating the elements present in LHN
this.validateLHNreadingslink = async function () {
  let LHNreadingElement=await Util.visibilityOfElementLocated(readingslink);
  if(LHNreadingElement){
    logger.info("SMR link is displayed ************ Success");
    return true;
  }
  else{
    logger.info("SMR link is not displayed **************** Failure");
    return false;
  }
  return element;
};

//Function to validate the billing link is displayed in LHN
this.validateLHNbillingslink = async function () {
  let LHNBillingElement=await Util.visibilityOfElementLocated(LHNbillinglink);
  if(LHNBillingElement){
    logger.info("Billing link is displayed in LHN ************ Success");
    return true;
  }
  else{
    logger.info("Billing link is not displayed in LHN ************ Failure");
    return false;
  }
  return element;
};

//Function to validate the LHN payments link is displayed
this.validateLHNPaymentslink = async function () {
  let LHNPaymentElement=await Util.visibilityOfElementLocated(LHNPaymentslink);
  if(LHNPaymentElement){
    logger.info("Payments link is displayed in LHN ************ Success");
    return true;
  }
  else{
    logger.info("Payments link is not displayed in LHN ************ Failure");
    return false;
  }
  return element;
};


//Function to validate if the payment option is not enabled for CI flag enabled customers
this.validateCIFlagEnabled = async function () {
  let CIFlagElement=await Util.isElementPresent(LHNPaymentslink);
  if(CIFlagElement){
    logger.info("Payments link is displayed in LHN ************ Failure");
    return false;
  }
  else{
    logger.info("Payments link is not displayed in LHN ************ Success");
    return true;
  }
  return element;
};

//Function to validate if the setting link is displayed in LHN
this.validateLHNMPDlink = async function () {
  let LHNMpdElement=await Util.visibilityOfElementLocated(LHNMPDlink);
  if(LHNMpdElement){
    logger.info("MPD link is displayed in LHN ************ Success");
    return true;
  }
  else{
    logger.info("MPD link is not displayed in LHN ************ Failure");
    return false;
  }
  return element;
};


//Function to validate if the add account link is displayed in the LHN
this.validateLHNAddAccountlink = async function () {
  let LHNAddAccountElement=await Util.visibilityOfElementLocated(LHNAddAcclink);
  if(LHNAddAccountElement){
    logger.info("Add Account link is displayed in LHN ************ Success");
    return true;
  }
  else{
    logger.info("Add Account link is not displayed in LHN ************ Failure");
    return false;
  }
  return element;
};

//Function to validate if the manageuser link is displayed in the LHN
this.validateLHNmultiUserlink = async function () {
  let LHNMultiUserElement=await Util.visibilityOfElementLocated(LHNMulUserlink);
  if(LHNMultiUserElement){
    logger.info("Multi User link is displayed in LHN************ Success");
    return true;
  }
  else{
    logger.info("Multi User link is not displayed in LHN ************ Failure");
    return false;
  }
  return element;
};


//Function to validate the group balance
this.validateGroupBalance = async function () {
  let GroupAccount=await Util.visibilityOfElementLocated(groupaccelement);
  if(GroupAccount){
    let GroupAccountElement=await Util.waitForExpectedElement(groupaccelement);
    let GroupAccountText=await Util.getText(GroupAccountElement);
    let GroupAccountTextCompare=await Util.compareText(GroupAccountText,grpbalance);
    if(GroupAccountTextCompare){
      let groupbalelement=await Util.waitForExpectedElement(groupbalancelement);
      let groupbaltext=await Util.getText(groupbalelement);
      let groupbaltextcompare=await Util.comparePartialText(groupbaltext,accbal);
      if(groupbaltextcompare){
        logger.info("Validation successful for account balance");
        return true;
      }
      else{
        logger.info("Validation failed for account balance");
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
};


//Function to validate the group account site address details
this.validateGroupAccDetails =async function () {
  let groupacc=await Util.visibilityOfElementLocated(groupaddresselement);
  if(groupacc){
    let groupaccelement=await Util.waitForExpectedElement(groupaddresselement);
    let groupacctext=await Util.getText(groupaccelement);
    let groupacctextcompare=await Util.compareText(groupacctext,grpacc);
    if(groupacctextcompare){
      let groupbill=await Util.waitForExpectedElement(groupbilladdresselement);
      let groupbilltext=await Util.getText(groupbill);
      let groupbilltextcompare=await Util.compareText(groupbilltext,grpbilldet);
      if(groupbilltextcompare){
        logger.info("Validation successful for group account details");
        return true;
      }
      else{
        logger.info("Validation failed for group account details");
      }
      return true;
    }
    else{
      return false;
    }
    return true;
  }
  else{
    logger.info("Element not present for group account details");
    return false;
  }
};


//Function to click on the SMR link in the account dashboard
this.clickSMRLink = async function () {
  let SMRElement=await Util.waitForExpectedElement(meterreadlink);
  if(SMRElement){
    let SMRLinkElement=await Util.waitForExpectedElement(meterreadlink);
    SMRLinkElement.click();
    Util.waitForPageLoad();
    return true;
  }
  else{
    Util.waitForPageLoad();
    logger.info("Element unavailable for clicking on SMR link");
    return false;
  }

};


//Function to validate if the login time stamp is displayed after login
this.validatelastLogin = async function () {
  let SMRLinkElement=await Util.visibilityOfElementLocated(meterreadlink);
  if(SMRLinkElement){
    let lastlogintimeElement=await Util.waitForExpectedElement(lastloginelement);
    let lastlogintimeText=await Util.getText(lastlogintimeElement);
    let lastlogintimeTextCompare=await Util.comparePartialText(lastlogintimeText,lastlogin);
    if(lastlogintimeTextCompare){
      logger.info("Validation successful for last login time stamp");
      return true;
    }
    else{
      return false;
    }
    return true;
  }
  else{
    logger.info("Validation Unsuccessful for last login time stamp");
    return false;
  }
};


//Function to validate if the next bill date and detail is displayed
this.validateNextBillDetail = async function () {
  let SMRLinkElement=await Util.visibilityOfElementLocated(meterreadlink);
  if(SMRLinkElement){
    let lastBillDueElement=await Util.waitForExpectedElement(billdueElement);
    let lastBillDueText=await Util.getText(lastBillDueElement);
    let lastBillDueTextCompare=await Util.comparePartialText(lastBillDueText,billdue);
    if(lastBillDueTextCompare){
      logger.info("Validation succcessful for bill due message");
      return true;
    }
    else{
      logger.info("Validation failed for bill due message");
      return false;
    }
    return true;
  }

  else{
    logger.info("Element not present for bill due");
    return false;
  }
};


//Function to validate if the next meter read date is displayed
this.validateNextMeterReadDate = async function () {
  let SMRLinkElement=await Util.visibilityOfElementLocated(meterreadlink);
  if(SMRLinkElement){
    let nextmeterreadElement=await Util.waitForExpectedElement(mtrdueEl);
    let nextmeterreadText=await Util.getText(nextmeterreadElement);
    let nextmeterreadTextCompare=await Util.comparePartialText(nextmeterreadText,mtrdue);
    if(nextmeterreadTextCompare){
      logger.info("Validation successful for meter read due message");
      return true;
    }
    else{
      logger.info("Validation failed for meter read due message");
      return false;
    }
    return true;
  }
  else{
    logger.info("Element not present for meter read due message");
    return false;
  }
};

//Function to click on sites group in the account dashboard
this.clickSitesGroup = async function () {
    Util.waitForPageLoad();
  let collectivesiteaccount=await Util.visibilityOfElementLocated(collaccsitelink);
  if (collectivesiteaccount){
    let collectivesiteaccountElement=await Util.waitForExpectedElement(collaccsitelink);
    collectivesiteaccountElement.click();
    return true;
  }
  else{
    logger.info("Validation failed for site address");
    return false;
  }
};

//Function to click on close sites group
this.clickSiteIconClose = async function () {
  Util.waitForMoreTime();
  let siteIconClose=await Util.visibilityOfElementLocated(collaccsiteaddclose);
  if(siteIconClose){
    let siteIconCloseElement=await Util.waitForExpectedElement(collaccsiteaddclose);
    siteIconCloseElement.click();
    return true;
  }
  else{
    logger.info("Unable to close site address");
    return false;
  }
};


//Function to validate if customer is navigated back to account dashboard page after clicking close in site address
this.validateAccDashboard = async function () {
  let SMRLinkElement=await Util.visibilityOfElementLocated(meterreadlink);
  if(SMRLinkElement){
    let lastlogintimeElement=await Util.waitForExpectedElement(lastloginelement);
    let lastlogintimeText=await Util.getText(lastlogintimeElement);
    let lastlogintimeTextCompare=await Util.comparePartialText(lastlogintimeText,lastlogin);
    if(lastlogintimeTextCompare){
      logger.info("Validation successful for account dashboard validation");
      return true;
    }
    else{
      logger.info("Validation failed for account dashboard validation")
      return false;
    }
    return true;
  }
  else{
    logger.info("Element not available for account dashboard validation");
    return false;
  }
};

//Function to validate if customer is displayed with information for complex meter
this.validateComplexMeterInfo = async function () {
  let complexmeterInfo=await Util.visibilityOfElementLocated(complexinfoelement);
  if(complexmeterInfo){
    let complexmeterInfoElement=await Util.waitForExpectedElement(complexinfoelement);
    let complexmeterInfoText=await Util.getText(complexmeterInfoElement);
    let complexmeterInfoTextCompare=await Util.comparePartialText(complexmeterInfoText,complexinfo);
    if(complexmeterInfoTextCompare){
      logger.info("Validation successful for complex meter information validation");
      return true;
    }
    else{
      logger.info("Validation failed for complex meter information");
      return false;
    }
    return true;
  }
  else{
    logger.info("Element not available for complex meter information");
    return false;
  }
bot.comparePartialText(complexinfoelement,complexinfo);
};



//Function to validate if customer is displayed with information for EDI & TVI Customer
this.validatemessageTVI = async function () {
  let billLink=await Util.visibilityOfElementLocated(viewBillLink);
  if(billLink){
    let viewBillLinkElement=await Util.waitForExpectedElement(viewBillLink);
    let viewBillLinkText=await Util.getText(viewBillLinkElement);
    let viewBillLinkTextCompare=await Util.compareText(viewBillLinkText,collbillText);
    if(viewBillLinkTextCompare){
      logger.info("Validation successful for comparison of EDI message");
      return true;
    }
    else{
      logger.info("Validation failed for EDI message");
      return false;
    }
    return true;
  }
  else{
    logger.info("Element not present for EDI message validation");
    return false;
  }
  };


//Function to validate if customer is navigated to account dashboard page
this.AccOverViewLandingValidation = async function () {
  let accdashboardBill=await Util.visibilityOfElementLocated(dashboardbill);
  if(accdashboardBill){
    let dashboardBillElement=await Util.waitForElementToBeClickableAndReturnElement(dashboardbill);
    var URlAcc="/business/app/accounts/";
    var url=await browser.getCurrentUrl();
    if(url.includes(URlAcc)){
      logger.info("URL contains given input and customer is on account dashboard page");
      return true;
    }
    else{
      logger.info("URL does not contain given input and customer is not on account dashboard page");
      return false;
    }
    return true;
  }
  else{
    logger.info("Element not available for clicking in dashboard");
    return false;
  }
};


//Function to validate if multiple sites are displayed in the site address page
this.verifySiteAddress = async function () {
  Util.waitForMoreTime();
  Util.waitForMoreTime();
  let siteaddressSize=await Util.visibilityOfElementLocated(siteaddsize);
  if(siteaddressSize){
    logger.info("Site address is displayed");
    let collectivesiteaddresscloseElement=await Util.waitForExpectedElement(collaccsiteaddclose);
    collectivesiteaddresscloseElement.click();
    return true;
  }
  else{
    logger.info("Site address is not displayed");
    return false;
  }
};


//Function to check the URL of the SMR page
this.validateglobalSMRURL = async function () {
  Util.waitForMoreTime();
  Util.waitForMoreTime();
  let SMRIconClose=await Util.visibilityOfElementLocated(SMRCloseLink);
  if(SMRIconClose){
    let SMRIconCloseElement=await Util.waitForElementToBeClickableAndReturnElement(SMRCloseLink);
    let accountNumberCollElement=await Util.waitForExpectedElement(accountNumcoll);
    let accountNumberCollText=await Util.getText(accountNumberCollElement);
    var temp=accountNumberCollText;
    var URlSMRglobal="/business/app/accounts/"+temp+"/meter-readings";
    let url=await browser.getCurrentUrl();
    if(url.includes(URlSMRglobal)){
      logger.info("Validation successful for global SMR page");
      return true;
    }
    else{
      logger.info("Validation failed for global SMR page");
      return false;
    }
    return true;
  }
  else{
    logger.info("Element not present for clicking on close in SMR");
    return false;
  }
}


//Function to pass the input value for view bill based on Account Type
this.validateLHNElements = async function (arg) {
  var that = this;
  switch (arg) {
    case "Readings,Billing,Payments,Settings,Add account,Manage users":
    await that.validateLHNreadingslink();
    await that.validateLHNbillingslink();
    await that.validateLHNPaymentslink();
    await that.validateLHNMPDlink();
    await that.validateLHNAddAccountlink();
    await that.validateLHNmultiUserlink();
    var x=await that.validateLHNmultiUserlink();
    return x;
    break;
    case "Readings,Billing,Payments,Settings":
    await that.validateLHNreadingslink();
    await that.validateLHNbillingslink();
    await that.validateLHNPaymentslink();
    await that.validateLHNMPDlink();
    var rbps=await that.validateLHNMPDlink();
    return rbps;
    break;
    case "Readings,Billing,Payments,Settings":
    await that.validateLHNreadingslink();
    await that.validateLHNbillingslink();
    await that.validateLHNPaymentslink();
    await that.validateLHNMPDlink();
    var rbp=await that.validateLHNMPDlink();
    return rbp;
    break;
    case "Readings,Billing,Settings":
    await that.validateLHNreadingslink();
    await that.validateLHNbillingslink();
    await that.validateLHNMPDlink();
    var rbs=await that.validateLHNMPDlink();
    return rbs;
    break;
    default:
    logger.info("**** Option for validation is not valid");
  }
};


//Function to validate if the SMR link is not present for closed accounts
this.validateSMRLinkNotPresent = async function () {
  Util.waitForPageLoad();
  let SMRLinkElement=await Util.isElementPresent(smrlink)
      if(SMRLinkElement){
    logger.info("Validation unsuccessful for smrlink");
    return false;
  }
  else{
    logger.info("Validation successful for smrlink");
    return true;
  }
  return element;
};


//Function to validate if the SMR link is not present for closed accounts
this.verifyRenewalNotPresent = async function () {
  Util.waitForMoreTime();
    var renewalElement= await Util.isElementPresent(renewalLink);
    if(renewalElement){
    logger.info("Validation unsuccessful for renewal message : "+element);
    return false;
  }
  else{
    logger.info("Validation successful for renewal message");
    return true;
  }
};

//Function to validate if the payment link is not present for closed accounts
this.validatePaymentNotPresent = async function () {
  let accountdashboardPayment=await Util.isElementPresent(accdashPaylink)
      if(accountdashboardPayment){
    logger.info("Validation unsuccessful for payment link");
    return false;
  }
  else{
    logger.info("Validation successful for payment link");
    return true;
  }
};


//Function to validate if the payments/meter reading component is not present for the closed accounts based on account types
this.componentValidation = async function (arg1,arg2) {
  var that = this;
  switch(arg2){
    case "Super user":
    switch(arg1){
      case "Submit a meter reading":
      var smrsuperuser=await that.validateSMRLinkNotPresent();
      if(smrsuperuser=="true"){
        smr=false;
      }
      else{
        smr=true;
      }
      return smr;
      break;
    case "Make a payment":
    var paysuperuser=await that.validatePaymentNotPresent();
    if(paysuperuser=="true"){
      pay=false;
    }
    else{
      pay=true;
    }
    return pay;
    break;
    default:logger.info("The option is not valid");break;
    }
    break;
    case "RBP User":
    switch(arg1){
    case "Submit a meter reading":
    var smrrbpuser=await that.validateSMRLinkNotPresent();
    if(smrrbpuser=="true"){
      smrrbp=false;
    }
    else{
      smrrbp=true;
    }
    return smrrbp;
    break;
    case "Make a payment":
    var payrbpuser=await that.validatePaymentNotPresent();
    if(payrbpuser=="true"){
      payrbp=false;
    }
    else{
      payrbp=true;
    }
    return payrbp;
    break;
    default:logger.info("The option is not valid");break;
    }
    break;
    case "RB User":
    switch(arg1){
    case "Submit a meter reading":
    var smrrbuser=await that.validateSMRLinkNotPresent();
    if(smrrbuser=="true"){
      smrrb=false;
    }
    else{
      smrrb=true;
    }
    return smrrb;
    break;
    case "Make a payment":
    var payrbuser=await that.validatePaymentNotPresent();
    if(payrbuser=="true"){
      payrb=false;
    }
    else{
      payrb=true;
    }
    return payrb;
    break;
    default:logger.info("The option is not valid");break;
    }
    break;
    case "Full access User":
    switch(arg1){
    case "Submit a meter reading":
    var smrfulluser=await that.validateSMRLinkNotPresent();
    if(smrfulluser=="true"){
      smrfulluse=false;
    }
    else{
      smrfulluse=true;
    }
    return smrfulluse;
    break;
    case "Make a payment":
    var payfulluser=await that.validatePaymentNotPresent();
    if(payfulluser=="true"){
      payfull=false;
    }
    else{
      payfull=true;
    }
    return payfull;
    break;
    default:logger.info("The option is not valid");break;
    }
    break;
    default:logger.info("The user type is not valid");break;
      }
};


//Clicking on readings link in the LHN
this.validateActiveSelect = async function () {
  let readingLink=await Util.visibilityOfElementLocated(readingslink);
  if(readingLink){
    let readingElement=await Util.waitForExpectedElement(readingslink);
    readingElement.click();
    var sample=await browser.getPageSource();
    if(sample.includes(activeselected)){
      logger.info("************** Success..! The element is present and active");
      let result=await Util.visibilityOfElementLocated(smrlink);
      if(result){
        logger.info("Validation successful ");
        return true;
      }
      else{
        return false;
      }
      }
      else{
        logger.info("Readings link is not present");
        return false;
      }
  }

  else{
    return false;
  }
};


};
module.exports = new SingleAccDashboard();
