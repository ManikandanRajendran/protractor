var data = require('../Resources/testdata.json');
var soaPage = require('../Pages/Obj_SOAPage.js');
var util=require('../Utils/FunctionalUtil.js');
var assert=require('assert');

//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger('info');

module.exports = function ()
{

this.setDefaultTimeout(120 * 3000);
this.Given(/^the url to perform SOA$/,async function (){
  var url=browser.baseUrl;
  util.launchUrl(url);
  await util.navigateToLogin();
});

this.When(/^user clicks \"([^\"]*)\" under billing$/,function(billingCategory){
  soaPage.clickBilling()
  soaPage.clickBillingCategory(billingCategory);
});

this.Then(/^verify Statement Of Account view is displayed$/,async function(){
   let result=await soaPage.verifySOADisplay();
   assert.equal(result,true,"SOA view is present");
});

this.When(/^user selects \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$/,function(type,range,date){
soaPage.selectDate(type,range,date);
});

this.When(/^user clicks search option$/,function(){
 soaPage.clickSearch();
});

this.When(/^user clicks download statement$/,async function(){
await soaPage.clickDownloadStatement();
});

this.Then(/^verify statement is downloaded$/,async function(){
let result=await soaPage.checkPDFDownload();
assert.equal(result,true,"SOA statement is not downloaded");
});
};
