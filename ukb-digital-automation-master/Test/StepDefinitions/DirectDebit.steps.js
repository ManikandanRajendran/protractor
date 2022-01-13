
var data = require('../Resources/testdata.json');
var directDebitPage = require('../Pages/Obj_DirectDebitPage.js');
var util=require('../Utils/FunctionalUtil.js');
var assert=require('assert');
//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger('info');

module.exports = function ()
{

this.setDefaultTimeout(120 * 1000);
this.Given(/^the url to perform DirectDebit_payment$/,async function (){
    var url=browser.baseUrl;
    util.launchUrl(url);
    await util.navigateToLogin();
});

this.Then(/^check \"([^\"]*)\" in OAM Dashoard page$/,async function (arg){
     await directDebitPage.verifyMessage(arg);
});

this.Then(/^user clicks DD \"([^\"]*)\"$/,function (arg){
    directDebitPage.clickDDType(arg);
});

this.Then(/^user checks and enter bank details \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$/,function(arg1,arg2,arg3,arg4){
    directDebitPage.clickForAuthorization("yes");
    directDebitPage.enterDetails(arg1,arg2,arg3,arg4);
});

this.Then(/^select the guarantee and submit$/,async function(){
   await directDebitPage.checkGuaranteeForm();
   await directDebitPage.submitDD();
});

this.Then(/^Direct debit is made successfully and navigates to confirmation section, displays \"([^\"]*)\"$/,async function(arg){
    let isConfirmVisible=await directDebitPage.verifyConfirmation();
    assert.equal(isConfirmVisible,true,"confirmation is not visible");
    let isMsgMatching=await directDebitPage.verifyConfirmationMessage(arg);
    assert.equal(isMsgMatching,true,"confirmation message is not matching");
});
this.Then(/^verify \"([^\"]*)\" heading$/,async function(arg){
   let isHeadingMatching=await directDebitPage.verifyDirectDebitHeading(arg);
   assert.equal(isHeadingMatching,true,"heading is not matching");
});
this.Then(/^user clicks No option for authorization question$/,function(){
   directDebitPage.clickForAuthorization("no");
});

this.Then(/^click PDF link$/,function(){
   directDebitPage.clickPDF();
});
this.Then(/^check PDF is opened in next tab$/,async function(){
  isURLMatching=await directDebitPage.checkPDFOpened();
  assert.equal(isURLMatching,true,"URL is not matching");

});
};
