var data = require('../Resources/testdata.json');
var Viewbillpage = require('../Pages/Obj_Viewbillpage.js');
var login = require('../Pages/Obj_LoginPage.js');
var util=require('../Utils/FunctionalUtil.js');
var assert=require('assert');

//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger('info');
var count=0;
module.exports = function ()
{

this.setDefaultTimeout(3000 * 3000);

this.Given(/^the url to perform viewbill page$/,async function (){
  var url=browser.baseUrl;
  util.launchUrl(url);
  if(count==0){

   util.closeCookies();
   count++;
 }
 await util.navigateToLogin();
  });


  this.Then(/^verify view bill is displayed$/,async function(){
     let result=await Viewbillpage.verifyViewBillDisplay();
     assert.equal(result,true,"Viewbill is not present");
  });

  this.When(/^user clicks download Viewbill$/,async function(){
  await Viewbillpage.singleselectbill();
  await Viewbillpage.billcount();
  
  await Viewbillpage.closebill();
  logger.info("code completed")
  });

  this.When(/^user clicks download single bill$/,async function(){
  await Viewbillpage.selectbill();
  await Viewbillpage.downloadmultibill();
  await Viewbillpage.closebill();
  logger.info("code completed")
  });


  this.When(/^user should click close link$/,async function(){

await Viewbillpage.closebill();
  });

this.When(/^user should get all the bills displayed for the selected date$/,async function(){

await Viewbillpage.billcount();
await Viewbillpage.closebill();

logger.info("Viewbill displayed completed")
    });

  this.Then(/^user should be navigated to OAM dashboard page$/,async function(){
     let result=await Viewbillpage.verifyOAMDashboardDisplay();
     assert.equal(result,true,"OAM Dashboard is not present");
  });

  this.Then(/^verify bills is downloaded as PDF file$/,async function(){
  let result=await Viewbillpage.checkViewBillPDFDownload();
  assert.equal(result,true,"View Bill Zip file is not downloaded");
  });

  this.Then(/^the user logs out of the account by clicking on the logout button$/,async function(){
await Viewbillpage.logmeout();
     });

this.When(/^user selects \"([^\"]*)\" from multiple account dashboard$/,function(accountNumber){
  util.selectAccount(accountNumber);
});


};
