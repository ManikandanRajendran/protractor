var SOA=function(){
  var log4js = require('log4js');
  var logger = log4js.getLogger();
  var util=require('../utils/FrameworkUtil.js')

var billingLink=by.css('div.side-navbar a[href*="billing"]');
var SOALink=by.css('div.link-list a[href*="statements"]');
var viewBillLink=by.css('div.link-list a[href*="view-bill"]');
var SOAView=by.css('div[class*="statement-details"]');
var viewBill=by.css('div[class*="view-bill"]');
var search=by.css('button[data-test-search-btn]');
var download=by.css('button[class*="download-invoice-button"]');


this.clickBilling=function(){
      let element=util.waitForElementToBeClickableAndReturnElement(billingLink);
      util.clickEvent(element);
    };

this.findBillingCategory=function(arg){
    switch(arg){
     case "SOA":
           var element=util.waitForElementToBeClickableAndReturnElement(SOALink);
           return element;
           break;
      case "View your bills":
           var element=util.waitForElementToBeClickableAndReturnElement(viewBillLink);
           return element;
           break;
        default:
           logger.error("No such billing category");
           return null;
      }
};
  this.clickBillingCategory=function(arg){
   var that=this;
   util.waitForMoreTime();
   let element= that.findBillingCategory(arg)
   util.clickEvent(element);
};

this.verifySOADisplay=async function(){
  var isPresent=await util.isElementPresent(SOAView);
  return isPresent;
};

this.selectDate=function(type,range,date){
  var that=this;
  var splitDate=date.split('/');
  console.log("splitDate:"+splitDate);
  var r=1;
  switch(range){
  case 'from':
      var datePick=element(by.css('div[data-test-search-bill-datepicker] div[class*="search-bill__input-group"]:nth-child(1) div input'));
      r=1;
      break;
  case 'to':
      util.waitForMoreTime();
      var datePick=element(by.css('div[data-test-search-bill-datepicker] div[class*="search-bill__input-group"]:nth-child(2) div input'));
      r=2;
      break;
  default:
      logger.error("correct your range");
    }
  util.clickEvent(datePick);
  util.clickEvent(element(by.xpath('(//select[@class="pika-select pika-select-year"])['+r+']')));
  util.clickEvent(element(by.xpath('(//select[@class="pika-select pika-select-year"])['+r+']//option[text()='+splitDate[2]+']')));
  util.waitForMoreTime();
  util.clickEvent(element(by.xpath('(//select[@class="pika-select pika-select-month"])['+r+']')));
  util.clickEvent(element(by.xpath('(//select[@class="pika-select pika-select-month"])['+r+']//option[contains(text(),"'+splitDate[1]+'")]')));
  util.clickEvent(element(by.xpath('(//button[@class="pika-button pika-day" and @data-pika-day='+splitDate[0]+'])['+r+']')));
   if(type==='valid' && range==='to'){
     that.clickSearch();
   }
};

this.clickSearch=function(){
  util.waitForMoreTime();
  let element=util.waitForElementToBeClickableAndReturnElement(search);
  util.clickEvent(element);
};

this.clickDownloadStatement=async function(){
  logger.info("clickDownloadStatement******");
  let element=await util.waitForExpectedElement(download);
  util.clickEvent(element);
  util.waitForMoreTime();
};

this.checkPDFDownload=async function(){
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
let pdfTitle=await util.getText(element);
console.log("pdfTitle:"+pdfTitle);
let result=pdfTitle.includes("BGB_SOA_Report");
console.log("result*****:"+result);
return result;
};

this.expandShadowElement=function(element){
  shadow_root = browser.executeScript('return arguments[0].shadowRoot', element);
  return shadow_root;
  }

}; module.exports = new SOA();
