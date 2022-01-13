var Viewbill=function(){
  var log4js = require('log4js');
  var logger = log4js.getLogger();
  var util=require('../utils/FrameworkUtil.js')
  var LoginPage = require('../Pages/Obj_LoginPage.js')

var billingLink=by.css('div.side-navbar a[href*="billing"]');
var viewbillLink=by.css('div[class*="link-list"] a[href*="view-bill"]');
var viewBill=by.css('div[class*="view-bill"]');
var viewBillselect1=by.xpath('(.//div[@class="check-box fa fa-square-o"])[1]');
var viewBillselect2=by.xpath('(.//div[@class="check-box fa fa-square-o"])[2]')
var multibledownload=by.xpath("(//*[@class='download-bill-link download-invoice-button'])[1]")
var viewbillclose=by.css('[class*="table-panel__close-icon"]');
var OAMdashboard=by.css('div[class*="col your-account__dashboard"]');
var OAMlogout=by.css('a[href="/business/your-account/logmeout"]');
var vieewbilltable=by.xpath('//*[@class="table table-striped table-bordered table-condensed ember-view"]/tbody/tr');
var getviewbillnumber =by.xpath('//*/tbody/tr[i]/td[4]');
var navigatetonextpage =by.css('button.pagination__page-link.enabled');

var i=1 ; var counttest = by.xpath('//*[@class="table table-striped table-bordered table-condensed ember-view"]/tbody/tr['+i+']/td[2]');



// this.navigate = function () {
//     util.clickEvent(Loginlink);
//     browser.sleep(500);
//    // util.waitForMoreTime();
// };
//
// this.clickBillingLHN=async function(){
//       let element=await util.waitForExpectedElement(billingLink);
//       util.clickEvent(element);
//     };
//
// this.findviewbillCategory=async function(arg){
//     switch(arg){
//      case "View your bills":
//            //util.waitForMoreTime();
//            var element5=await util.waitForExpectedElement(viewbillLink);
//            return element5;
//            break;
//         default:
//            logger.error("No such billing category");
//            return null;
//       }
// };
//
//
//
//   this.clickviewBillingCategory=async function(arg){
//    var that=this;
//    util.waitForMoreTime();
//    let element5=await that.findviewbillCategory('viewbillLink')
//    util.clickEvent(element5);
// };

this.verifyViewBillDisplay=async function(){
  var isPresent=await util.isElementPresent(viewBill);
  return isPresent;
};

this.selectbill=async function(){

   let element=await util.waitForExpectedElement(viewBillselect1);
   util.clickEvent(element);
   let element1=await util.waitForExpectedElement(viewBillselect2);
   util.clickEvent(element1);
 };

 this.singleselectbill=async function(){
    util.waitForMoreTime();
    let element=await util.waitForExpectedElement(multibledownload);
    util.clickEvent(element);
  };

 this.downloadmultibill=async function(){
   util.waitForMoreTime();
   let element=await util.waitForExpectedElement(multibledownload);
   util.clickEvent(element);
 };

 this.closebill=async function(){
   util.waitForMoreTime();
   let element=await util.waitForExpectedElement(viewbillclose);
   util.clickEvent(element);
 };

 this.verifyOAMDashboardDisplay=async function(){
   var isPresent=await util.isElementPresent(OAMdashboard);
   logger.info("navigated to OAM dashboard")
   return isPresent;
};

this.logmeout=async function(){
  util.waitForMoreTime();
  let element=await util.waitForExpectedElement(OAMlogout);
  util.clickEvent(element);
};



this.checkViewBillPDFDownload=async function(){
var that=this;
browser.executeScript("return window.open(arguments[0], '_blank')", '');
let windows=await util.getWindowHandle();
util.switchToWindow(windows[1]);
console.log("browser.browserName:"+browser.browserName);
switch(browser.browserName){
  case 'chrome':
   console.log("*********chrome")
   browser.get("chrome://downloads/");
   break;

  case 'firefox':
   browser.get("about:downloads");
   break;

  default:
   browser.get("chrome://downloads/");
}

util.waitForMoreTime();
let element=await util.waitForExpectedElement(by.deepCss('div[id="content"] div[id="details"] div[id="title-area"] a'));
let PDFTitle=await util.getText(element);
console.log("PDFfile:"+PDFTitle);
let result=PDFTitle.includes("Invoice");
console.log("result*****:"+result);
return result;
};


this.billcount= async function(){
util.waitForMoreTime();
util.waitForMoreTime();
util.waitForMoreTime();
var billscount= await util.findElements(vieewbilltable);
var count=billscount.length;
logger.info("Total Number of Bills:"+count)
for(var i=1;i<=count;i++)
{
var billno=element(by.xpath('//*/tbody/tr['+i+']/td[4]'));
let billnumber=await util.getText(billno);
logger.info(+billnumber);

}

};







this.getbillcount = async function(){

//var element1=await util.waitForExpectedElement(counttest);
var y = element(counttest);
//var x= y.isPresent();
//if(x=="True")
//{
//  logger.info("yes");
//}
//logger.info(x);
var x=y.isPresent();
while(x=="True")
{
  logger.info("present");
  i=i+1;
  var counttest = by.xpath('//*[@class="table table-striped table-bordered table-condensed ember-view"]/tbody/tr['+i+']/td[2]');
  logger.info(counttest);
  var y = element(counttest);
  var x=y.isPresent();
}

};

// // this.checkViewBillpdfDownload=async function(){
// // var that=this;
// // browser.executeScript("return window.open(arguments[0], '_blank')", '');
// // let windows=await util.getWindowHandle();
// // util.switchToWindow(windows[1]);
// // console.log("browser.browserName:"+browser.browserName);
// // switch(browser.browserName){
// //   case 'chrome':
// //    console.log("*********chrome")
// //    browser.get("chrome://downloads/");
// //    break;
// //
// //   case 'firefox':
// //    browser.get("about:downloads");
// //    break;
// //
// //   default:
// //    browser.get("chrome://downloads/");
// // }
//
// util.waitForMoreTime();
// let element=await util.waitForExpectedElement(by.deepCss('div[id="content"] div[id="details"] div[id="title-area"] a'));
// let PDFTitle=await util.getText(element);
// console.log("PDFfile:"+PDFTitle);
// let result=PDFTitle.includes("Invoices");
// console.log("result*****:"+result);
// return result;
// }

}; module.exports = new Viewbill();
