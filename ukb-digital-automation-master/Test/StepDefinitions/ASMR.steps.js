

var data = require('../Resources/testdata.json');
var asmrPage = require('../Pages/Obj_ASMRPage.js');
var util=require('../Utils/FunctionalUtil.js');
var utill=require('../Utils/FrameworkUtil.js')
var subUrl = data[0].subUrl_ASMR;
var assert=require('assert');
//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger('info');
var count=0;
module.exports = function ()
{

this.setDefaultTimeout(400 * 1000);

  this.Given(/^the url to perform ASMR$/,async function (){
      var url=browser.baseUrl+subUrl;
     util.launchUrl(url);
     if(count==0){
      logger.info("closing cookies");
      await util.closeCookies();
      count++;
    }
    });

  this.When(/^user navigate to the SMR page for \"([^\"]*)\"$/,async function (fuelType){

      asmrPage.clickASMRButton(fuelType);
      let isTitleVisible=await asmrPage.VerifySMRTitleVisible();
      assert.equal(isTitleVisible,true,"SMRTitle is not visible");
  });


this.Then(/^user enter the \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" for \"([^\"]*)\"$/,function (emailAddress,accountNumber,postalCode,type){
      util.loginAnonymousWithCredentials(emailAddress,accountNumber,postalCode,type);
});

this.Then(/^click to generate error$/,function(){
      asmrPage.clickTogenerateError();
});

this.Then(/^user should verify Account Number, Fuel Type and Meter serial number from meter details page$/,async function(){
    let isFuelTypeVisible=await asmrPage.verifyFuelType();
    assert.equal(isFuelTypeVisible,true,"FuelType is not visible");
    let isAccountNoVisible=await asmrPage.verifyAccountnumber();
    assert.equal(isAccountNoVisible,true,"AccountNo. is not matching");
    let isMeterSerialNoVisible=await asmrPage.verifyMeterSerialNumber();
    assert.equal(isMeterSerialNoVisible,true,"iMeterSerialNo is not Visible");

});

this.Then(/^Read meter readings for \"([^\"]*)\"$/,async function(type){
//  await asmrPage.readMeter(type);
    await asmrPage.readActualMeter(type);
    await asmrPage.readActualDate();

});

this.Then(/^Write meter readings for \"([^\"]*)\"$/,async function(type){
    await asmrPage.writeMeter(type);
});

this.Then(/^user should click submit button in page$/,function(){
    asmrPage.clickSubmit();
});

this.Then(/^user should verify implusible and click submit button$/,async function () {
    let isImplausibleSubmitbuttonVisible=await asmrPage.verifyImplusibleAndSubmit();
    assert.equal(isImplausibleSubmitbuttonVisible,true,"Implausible Submit button is not visible");
});

this.Then(/^user verify the \"([^\"]*)\" page title as well as \"([^\"]*)\" and Updated meter read values$/,async function (confirmation,message) {
    let isConfirmPageTitleMatching=await asmrPage.verifyConfirmation(confirmation);
    assert.equal(isConfirmPageTitleMatching,true,"Confirmation pageTitle is not matching");
    let isConfirmMessageMatching=await asmrPage.verifyConfirmationMessage(message);
    assert.equal(isConfirmMessageMatching,true,"Confirmation message is not matching");
    let verifyConfirmMeterRead=await asmrPage.confirmationMeterReadVerification();
    assert.equal(verifyConfirmMeterRead,true,"could not verify ConfirmationMeterRead");
});


this.Then(/^user should submit a meter read reminder \"([^\"]*)\"$/,async function (arg) {
      let isReminder=await asmrPage.verifyRemider(arg);
      assert.equal(isReminder,true,"could not find and compare the meter read reminder");
      await asmrPage.checkReminderForm();
      await asmrPage.submitReminderForm();

  });

this.Then(/^verify the reminder \"([^\"]*)\"$/,async function(arg){
      let verifyReminderSubmit=await asmrPage.verifyReminderSubmission(arg);
      assert.equal(verifyReminderSubmit,true,"Error in VerifyingReminderSubmission");
  });

this.Then(/^user should able to see the message that customer already opted for reminders \"([^\"]*)\" and \"([^\"]*)\"$/,async function (arg1,arg2) {
      let result=await asmrPage.verifyReminderAlreadySubmitted(arg1,arg2);
      assert.equal(result,true,"Could not verify ReminderAlreadySubmitted");

  });

this.Then(/^user verify \"([^\"]*)\" link message in confirmation$/,async function(type){
    let result=await util.verifyLinksInConfirmation(type);
    assert.equal(result,true,"no links in confirmation page");
});

this.Then(/^click on the tool tip for \"([^\"]*)\"$/,async function (arg){
    await util.clickToolTip(arg);
    let result=await util.verifyToolTip(arg);
    assert.equal(result,true,"tool tip is not present for bill and email");
});

};
