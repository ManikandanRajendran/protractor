GetAQuotePage = function(){
var util;
var log4js = require('log4js');
var logger = log4js.getLogger();
var util=require('../Utils/FrameworkUtil.js');
var Futil=require('../Utils/FunctionalUtil.js');
var expect = require('expect');
var gaq_postcode = by.css("input[name='postcode']");
var skipaddress = by.css('[data-test-skip-address-link]');
var Elecconsumption_skipaddress = "at 20000 kwh per year";
var Gasconsumption_skipaddress = "at 30000 kwh per year";
var skipmpxn = by.css('.card-block>p:nth-child(4) a');
var gaq_findaddress = by.css("button[type='submit']");
var gaq_addressfield = by.css("div[role='button']");
var conf_startdate = by.xpath("//*[text()[contains(.,'Contract Start Date')]]");
var spendinpound = by.xpath("//*[@class='ukb-consumption-detail ember-view']/div/div[2]/div/div[2]//button");
var findconsumption = by.xpath("//*[@class='row justify-content-center']/div[1]/div//h4");
var gaq_ElecConsumption = by.xpath("//*[@class='ukb-consumption ember-view']/div[3]/div[1]//*[@type='text']");////*[@class='ukb-consumption ember-view']/div[2]/div[1]//*[@type='text']
var gaq_ElecDuration = by.xpath("//*[@class='ukb-consumption ember-view']/div[3]/div[1]//*[@role='button']");//*[@class='ukb-consumption ember-view']/div[2]/div[1]//*[@role='button']
var gaq_GasConsumption = by.xpath(" //*[@class='ukb-consumption ember-view']/div[3]/div[2]//*[@type='text']");//*[@class='ukb-consumption ember-view']/div[2]/div[2]//*[@type='text']
var gaq_GasDuration = by.xpath("//*[@class='ukb-consumption ember-view']/div[3]/div[2]//*[@role='button']");//*[@class='ukb-consumption ember-view']/div[2]/div[2]//*[@role='button']
var gaq_NextButtonAfterConsumption = by.css('.btn-submit');
var gaq_nextpersonaldetails = by.css("button[type='submit']");
var elecrowcount = by.xpath("//*[@class='price-summary ember-view']/div[3]//*[@class='price-description ember-view']/div[contains(@class,'ember-view')]");
var gasrowcount = by.xpath("//*[@class='price-summary ember-view']/div[4]//*[@class='price-description ember-view']/div[contains(@class,'ember-view')]");
var elecrowcount_skipaddress = by.xpath("//*[@class='price-summary ember-view']/div[4]//*[@class='price-description ember-view']/div[contains(@class,'ember-view')]");
var gasrowcount_skipaddress = by.xpath("//*[@class='price-summary ember-view']/div[5]//*[@class='price-description ember-view']/div[contains(@class,'ember-view')]");
var elecrowcountdd = by.xpath("//*[@class='price-summary ember-view']/div[3]//*[@class='price-description ember-view']/div[contains(@class,'ember-view')]");
var gasrowcountdd = by.xpath("//*[@class='price-summary ember-view']/div[4]//*[@class='price-description ember-view']/div[contains(@class,'ember-view')]");
var DirectDebitText = by.xpath("//p[text()='Pay by Direct Debit']");
var DirectDebitCheckbox = by.css("label[for='dd-discount']");
var quote_ddcheckbox= by.css(".quotation__details--position .col-md-5 .check-box-check");
var validUntilPrice = by.xpath("//p[contains(text(),'Price')]");
var validUntilQuote = by.xpath("//p[contains(text(),'Quote')]");
var ContractLength = by.css(".col-lg-2 div[tabindex='0']");
var PricePlan = by.xpath(".//*[contains(@class,'price-summary__filter-body')]/div/div[3]//*[@tabindex='0']");
var ProductType = by.xpath(".//*[contains(@class,'price-summary__filter-body')]/div/div[4]//*[@tabindex='0']");
var SummaryPageHeader = by.xpath('//h1');
var Quote_ReferenceNumber = by.xpath("//div[@class='quotation__value'][contains(text(),'0')]");
var ReferenceNumber = by.xpath(".//*[@class='price-summary__detail d-flex p-2']/div[1]//h2");
var MoreDetails = by.css(".hidden-sm-down a[href='#']");
var address_moredetails = by.xpath(".//*[@class='price-summary__address-detail price-summary__address-detail--collapse-out']//strong");
var address_moredetailsnoncma = by.css("p[id='quote-summary-address']");
var elecconsumption_moredetails = by.css("#price-summary-meter-electricity span");
var gasconsumption_moredetails = by.css("#price-summary-meter-gas span");
var elecconsumption_moredetailsnoncma = by.css("#quote-summary-meter-electricity strong");
var gasconsumption_moredetailsnoncma = by.css("#quote-summary-meter-gas strong");
//tester:'Testing';
var ClickBuy = by.xpath("//*[@class='quotation']/div[3]/div[1]//ul/li[9]/div//*[@class='btn btn-submit product-grid__buy ember-view']");
var fname = by.css("input[name='firstName']");
var lname = by.css("input[name='surname']");
var bname = by.css("input[name='business']");
var pnumber = by.css("input[name='phone']");
var email = by.css("input[name='email']");
var detailsnext = by.css("button[type='submit']");
var confpageheader = by.xpath("//h1[text()='Complete your purchase']");
var amount_confirmpage = by.css(".annualestimatedprice h2");
var gasfuel = by.css("button[type='button'] .ukb-icon-gas");
var elecfuel = by.css("button[type='button'] .ukb-icon-electricity");
var conf_startdate = by.xpath("//*[text()[contains(.,'Contract Start Date')]]");
var confstartdate = by.css("button[type='submit']");
var largebusinessoverlay = by.css(".lead-theme h4");
var largebusinessoverlaymessage = by.css(".lead-theme p[data-test-contact-subtitle]");
var largebusinessoverlaymessage1 = by.css(".lead-theme p[data-test-contact-description]");
var largeconfpage = by.css(".card-block h4");
var largeconfpagemsg = by.css(".card-block .card-text");
var sitedetails_address = by.css(".mt-4 .text-center span");
var dualgasmprnmsg = "Meter number ending : MPRN : ******1703";
var dualelecmpanmsg = "Meter number ending : MPAN : ******3618811";
var singlemetergasmsgelecDE = "Meter number ending : MPRN : *****2904";
var singlemetergasmsgelecHH = "Meter number ending : MPRN : *****8903";
var dualelecmpan = by.xpath("//*[@class='container energy-quote']//*[@class='ember-view']/div[2]//span");
var dualgasmprn = by.xpath("//*[@class='container energy-quote']//*[@class='ember-view']/div[3]//span");
var singlemeterdetails = by.xpath("//*[@class='container energy-quote']//*[@class='ember-view']/div[2]//span");
var headerofDEelec = by.css("h3.pb-3");
var elecDEpathmsg1 = by.css("p.card-text.m-0");
var elecDEpathmsg2 = by.css("p.m-0.mt-3");
var headerofDEelecmsg = "We've found two meters at this address";
var singlemeterdetailsmsg1 = "We can't give you a quote for your business electricity as your meter isn't connected to the network.";
var singlemeterdetailsmsg1HH = "We can't give you a quote for your business electricity meter at this time.";
var singlemeterdetailsmsg2 = "However, we can give you a quote for your business gas.";
var conf_reference = by.css('.quoterferencerte p');
var conf_price = by.css('.annualestimatedprice h2');
var gaqtitle = by.css('h1.mb-4');
var mpanbox = by.css('#m1');
var mpan_findmymeter = by.css("button[type='submit']");
var mprnbox = by.css('input[name="mprn"]');
var scrol,gas_div=0,elec_div=0;
var calVal=0;
var PostCode,tariffname="",energytype="",yearpricetocomp="",rowpath="",rowpath1="",Firstname="",eleclength ="",gaslength = "",scenario="",lencheck="";
var GasProductscma = ['1 Year Online Saver','1 Year Direct','1 Year Direct','2 Year Direct','2 Year Direct','3 Year Direct','3 Year Direct','1 Year Broker Site Safety Check','2 Year Broker Site Safety Check','3 Year Broker Site Safety Check','6 Months Landlord tariff'];
var GasProductscmawoDD = ['1 Year Direct','1 Year Direct','2 Year Direct','2 Year Direct','3 Year Direct','3 Year Direct','1 Year Broker Site Safety Check','2 Year Broker Site Safety Check','3 Year Broker Site Safety Check','6 Months Landlord tariff'];
var GasProductsnoncma = ['1 Year Fixed rate','1 Year Fixed rate','2 Year Fixed rate','2 Year Fixed rate','3 Year Fixed rate','3 Year Fixed rate','1 Year Broker Site Safety Check','2 Year Broker Site Safety Check','3 Year Broker Site Safety Check','6 Months Landlord tariff'];
var GasProductsnoncmawoDD = ['1 Year Fixed rate','1 Year Fixed rate','2 Year Fixed rate','2 Year Fixed rate','3 Year Fixed rate','3 Year Fixed rate','1 Year Broker Site Safety Check','2 Year Broker Site Safety Check','3 Year Broker Site Safety Check','6 Months Landlord tariff'];
var GasProductsbothnoncma = ['1 Year Fixed rate','2 Year Fixed rate','3 Year Fixed rate'];
var GasProductsbothnoncmawoDD = ['1 Year Fixed rate','2 Year Fixed rate','3 Year Fixed rate'];
var ElecProductscma = ['1 Year Online Saver','1 Year Direct','1 Year Direct','2 Year Direct','2 Year Direct','3 Year Direct','3 Year Direct','1 Year British Gas Lite','2 Year British Gas Lite','3 Year British Gas Lite','4 Year British Gas Lite','5 Year British Gas Lite','6 Months Landlord tariff'];
//var ElecProductslarge = ['1 Year Online Saver','1 Year Direct','1 Year Direct','2 Year Direct','2 Year Direct','3 Year Direct','3 Year Direct','6 Months Landlord tariff'];
var ElecProductscmawoDD = ['1 Year Direct','1 Year Direct','2 Year Direct','2 Year Direct','3 Year Direct','3 Year Direct','6 Months Landlord tariff'];
var ElecProductsnoncma = ['1 Year Fixed rate','1 Year Fixed rate','2 Year Fixed rate','2 Year Fixed rate','3 Year Fixed rate','3 Year Fixed rate','1 Year British Gas Lite','2 Year British Gas Lite','3 Year British Gas Lite','4 Year British Gas Lite','5 Year British Gas Lite','6 Months Landlord tariff']
var ElecProductsnoncmawoDD = ['1 Year Fixed rate','1 Year Fixed rate','2 Year Fixed rate','2 Year Fixed rate','3 Year Fixed rate','3 Year Fixed rate','6 Months Landlord tariff'];
var ElecProductsbothnoncma = ['1 Year Fixed rate','2 Year Fixed rate','3 Year Fixed rate'];
var ElecProductsbothnoncmawoDD = ['1 Year Fixed rate','2 Year Fixed rate','3 Year Fixed rate'];



this.comparetitleofthepage = async function(arg)
{
  var title = arg;
  util.waitForMoreTime();
  let result = await util.visibilityOfElementLocated(gaqtitle);
  if(result)
  {
    var pagetitle_ele = await util.waitForExpectedElement(gaqtitle);
    var pagetitle = await util.getText(pagetitle_ele)
    var result1 = await util.compareText(pagetitle,title);
    if(result1)
    {
      //logger.info("Title is same : "+result1+" : "+title);
      return true;
    }
    else
    {
      logger.info("Title is not same : "+result1+" : "+title);
      return false;
    }
  }
  else
  {
      window.location.reload();
      util.waitForMoreTime1();
      util.waitForMoreTime1();
      var pagetitle_ele = await util.waitForExpectedElement(gaqtitle);
      var pagetitle = await util.getText(pagetitle_ele)
      var result1 = await util.compareText(pagetitle,title);
      if(result1)
      {
        //logger.info("Title is same : "+result1+" : "+title);
        return true;
      }
      else
      {
        logger.info("Title is not same : "+result1+" : "+title);
        return false;
      }
  }
};

//Enter the postcode and select address
this.EnterPostcodeandAddress = async function(postcode,address)
{
  //To save address which is using to compare the addresses in quote result page
    str = address;
    var lastIndex = str.lastIndexOf(" ");
    str = str.substring(0, lastIndex);
    lastIndex = str.lastIndexOf(" ");
    str = str.substring(0, lastIndex);
    trimAddress = str;
    //logger.info("%%%%%%%%%%%%%"+postcode+" : "+address+"*******************************");

  PostCode = postcode;
  util.waitForMoreTime();
  let postcode_element = await util.waitForExpectedElement(gaq_postcode);
  util.enterText(postcode_element,postcode);
  //postcode_element.sendKeys("TW18 9JJ");
  let findaddress_element = await util.waitForExpectedElement(gaq_findaddress);
  util.clickEvent(findaddress_element);
  let addressfield_element = await util.waitForExpectedElement(gaq_addressfield);
  util.clickEvent(addressfield_element);
  let result = await util.visibilityOfElementLocated(by.xpath('//li[text()="'+address+'"]'));
  if(result)
  {
  util.clickEvent(element(by.xpath('//li[text()="'+address+'"]')));
  let findaddress1_element = await util.waitForExpectedElement(gaq_findaddress);
  util.clickEvent(findaddress1_element);
  return true;
  }
  else
  {
    logger.info("unable to select address from drop down");
    return false;
  }

};

this.EnterPostcode = async function(postcode)
{
  PostCode = postcode;
  logger.info("Postcode is  : "+PostCode);
  util.waitForMoreTime();
  let postcode_element = await util.waitForExpectedElement(gaq_postcode);
  util.enterText(postcode_element,postcode);
  let findaddress_element = await util.waitForExpectedElement(gaq_findaddress);
  util.clickEvent(findaddress_element);
  let addressfield_element = await util.visibilityOfElementLocated(gaq_addressfield);
  if(addressfield_element){return true;}else{return false;}
};

this.clickskipaddress = async function()
{
  let elemenet = await util.waitForExpectedElement(skipaddress);
  util.clickEvent(elemenet);
  util.waitForMoreTime1();
}

this.clickskipmpxn = async function()
{
  let elemenet = await util.waitForExpectedElement(skipmpxn);
  util.clickEvent(elemenet);
  util.waitForMoreTime1();
}

//To find Elec and Gas consumption field
this.findconsumptiondetails= async function()
{
  let ele = await util.waitForExpectedElement(findconsumption);
  var readtext = await util.getText(ele);
  //logger.info("readtext is : "+readtext);
  if(readtext.includes("gas"))
  {
    gaq_GasConsumption = by.xpath(" //*[@class='ukb-consumption ember-view']/div[3]/div[1]//*[@type='text']");
    gaq_GasDuration = by.xpath("//*[@class='ukb-consumption ember-view']/div[3]/div[1]//*[@role='button']");
    gaq_ElecConsumption = by.xpath("//*[@class='ukb-consumption ember-view']/div[3]/div[2]//*[@type='text']");
    gaq_ElecDuration = by.xpath("//*[@class='ukb-consumption ember-view']/div[3]/div[2]//*[@role='button']");
    //logger.info("Inside gas "+gaq_GasConsumption+" : "+gaq_ElecConsumption);
  }
  else if(readtext.includes("electricity"))
  {
      gaq_GasConsumption = by.xpath(" //*[@class='ukb-consumption ember-view']/div[3]/div[2]//*[@type='text']");
      gaq_GasDuration = by.xpath("//*[@class='ukb-consumption ember-view']/div[3]/div[2]//*[@role='button']");
      gaq_ElecConsumption = by.xpath("//*[@class='ukb-consumption ember-view']/div[3]/div[1]//*[@type='text']");
      gaq_ElecDuration = by.xpath("//*[@class='ukb-consumption ember-view']/div[3]/div[1]//*[@role='button']");
      //logger.info("Inside electricity "+gaq_GasConsumption+" : "+gaq_ElecConsumption);
  }
};

this.EnterGasCMAConsumptionAndDuration =async function(econ,edur)
{
  util.waitForPageLoad();
  //logger.info(econ+" : "+edur);
  let ElecCon_element = await util.waitForExpectedElement(gaq_ElecConsumption);
  util.enterText(ElecCon_element,econ);
  let ElecDur_element= await util.waitForExpectedElement(gaq_ElecDuration);
  util.clickEvent(ElecDur_element);
  GasConsumption = 0;
     switch(edur)
     {
      case "Year":
            path= by.xpath("//*[@role='listbox']/li[4]");
            browser.executeScript('window.scrollTo(0,500);');
            //logger.info("year ***");
            GasConsumption = econ ;
            break;
      case "6 Months":
            path= by.xpath("//*[@role='listbox']/li[3]");
            GasConsumption = econ * 2;
            break;
      case "Quarter":
            path= by.xpath("//*[@role='listbox']/li[2]");
            GasConsumption = econ * 4;
            break;
      case "Month":
            path= by.xpath("//*[@role='listbox']/li[1]");
            GasConsumption = econ * 12;
            break;
      default:logger.error("No such Duration option");
    }
    let result= await util.visibilityOfElementLocated(path);
    //logger.info("Element is present : "+result);
    //logger.info("Selecting value from drop down for Elec account : "+result);
    let select_dur= await util.waitForExpectedElement(path);
    util.clickEvent(select_dur);
};

this.EnterGasConsumptionAndDuration_onemeterfound =async function(econ,edur)
{
  util.waitForPageLoad();
  //logger.info(econ+" : "+edur);
  let ElecCon_element = await util.waitForExpectedElement(gaq_ElecConsumption);
  util.enterText(ElecCon_element,econ);
  let ElecDur_element= await util.waitForExpectedElement(gaq_ElecDuration);
  util.clickEvent(ElecDur_element);
  GasConsumption = 0;
     switch(edur)
     {
      case "Year":
            path= by.xpath("//*[@role='listbox']/li[4]");
            browser.executeScript('window.scrollTo(0,500);');
            //logger.info("year ***");
            GasConsumption = econ ;
            break;
      case "6 Months":
            path= by.xpath("//*[@role='listbox']/li[3]");
            GasConsumption = econ * 2;
            break;
      case "Quarter":
            path= by.xpath("//*[@role='listbox']/li[2]");
            GasConsumption = econ * 4;
            break;
      case "Month":
            path= by.xpath("//*[@role='listbox']/li[1]");
            GasConsumption = econ * 12;
            break;
      default:logger.error("No such Duration option");
    }
    let result= await util.visibilityOfElementLocated(path);
    //logger.info("Element is present : "+result);
    //logger.info("Selecting value from drop down for Elec account : "+result);
    let select_dur= await util.waitForExpectedElement(path);
    util.clickEvent(select_dur);
};


this.EnterElectricityConsumptionAndDuration =async function(econ,edur)
{
  util.waitForPageLoad();
  //logger.info(econ+" : "+edur);
  let ElecCon_element = await util.waitForExpectedElement(gaq_ElecConsumption);
  util.enterText(ElecCon_element,econ);
  let ElecDur_element= await util.waitForExpectedElement(gaq_ElecDuration);
  util.clickEvent(ElecDur_element);
  ElecConsumption = 0;
     switch(edur)
     {
      case "Year":
            path= by.xpath("//*[@role='listbox']/li[4]");
            browser.executeScript('window.scrollTo(0,500);');
            //logger.info("year ***");
            ElecConsumption = econ ;
            break;
      case "6 Months":
            path= by.xpath("//*[@role='listbox']/li[3]");
            ElecConsumption = econ * 2;
            break;
      case "Quarter":
            path= by.xpath("//*[@role='listbox']/li[2]");
            ElecConsumption = econ * 4;
            break;
      case "Month":
            path= by.xpath("//*[@role='listbox']/li[1]");
            ElecConsumption = econ * 12;
            break;
      default:logger.error("No such Duration option");
    }
    let result= await util.visibilityOfElementLocated(path);
    // logger.info("Element is present : "+result);
    // logger.info("Selecting value from drop down for Elec account : "+result);
    let select_dur= await util.waitForExpectedElement(path);
    util.clickEvent(select_dur);
};

this.EnterElectricitySpendAndDuration = async function(econ,edur)
{
  util.waitForPageLoad();
  util.waitForPageLoad();
  let ele_spendinpound= await util.waitForExpectedElement(spendinpound);
  util.clickEvent(ele_spendinpound);
  //logger.info(econ+" : "+edur);
  let ElecCon_element = await util.waitForExpectedElement(gaq_ElecConsumption);
  util.enterText(ElecCon_element,econ);
  let ElecDur_element= await util.waitForExpectedElement(gaq_ElecDuration);
  util.clickEvent(ElecDur_element);
  ElecConsumption = 0;
     switch(edur)
     {
      case "Year":
            path= by.xpath("//*[@role='listbox']/li[4]");
            browser.executeScript('window.scrollTo(0,500);');
            //logger.info("year ***");
            ElecConsumption = econ ;
            break;
      case "6 Months":
            path= by.xpath("//*[@role='listbox']/li[3]");
            ElecConsumption = econ * 2;
            break;
      case "Quarter":
            path= by.xpath("//*[@role='listbox']/li[2]");
            ElecConsumption = econ * 4;
            break;
      case "Month":
            path= by.xpath("//*[@role='listbox']/li[1]");
            ElecConsumption = econ * 12;
            break;
      default:logger.error("No such Duration option");
    }
    let result= await util.visibilityOfElementLocated(path);
    // logger.info("Element is present : "+result);
    // logger.info("Selecting value from drop down for Elec account : "+result);
    let select_dur= await util.waitForExpectedElement(path);
    util.clickEvent(select_dur);
};


this.EnterGasConsumptionAndDuration =async function(gcon,gdur)
{
  util.waitForPageLoad();
  //logger.info(gcon+" : "+gdur);
  let GasCon_element = await util.waitForExpectedElement(gaq_GasConsumption);
  util.enterText(GasCon_element,gcon);
  let GasDur_element= await util.waitForExpectedElement(gaq_GasDuration);
  util.clickEvent(GasDur_element);
  GasConsumption = 0;
     switch(gdur)
     {
      case "Year":
            path= by.xpath("//*[@role='listbox']/li[4]");
            browser.executeScript('window.scrollTo(0,500);');
            //logger.info("year ***");
            GasConsumption = gcon;
            break;
      case "6 Months":
            path= by.xpath("//*[@role='listbox']/li[3]");
            GasConsumption = gcon * 2;
            break;
      case "Quarter":
            path= by.xpath("//*[@role='listbox']/li[2]");
            GasConsumption = gcon * 4;
            break;
      case "Month":
            path= by.xpath("//*[@role='listbox']/li[1]");
            GasConsumption = gcon * 12;
            break;
      default:logger.error("No such Duration option");
    }
    let result= await util.visibilityOfElementLocated(path);
    //logger.info("Selecting value from drop down for Gas account : "+result);
    let select_dur= await util.waitForExpectedElement(path);
    util.clickEvent(select_dur);
};

this.ClickNextafterConsumption = async function(){
  browser.executeScript('window.scrollTo(0,300);');
  let NxtaftCon= await util.waitForExpectedElement(gaq_NextButtonAfterConsumption);
  util.clickEvent(NxtaftCon);
  util.waitForMoreTime();
};

this.VerifySummaryPageHeader = async function(header){
  util.waitForMoreTime1();
  util.waitForMoreTime1();
  util.waitForMoreTime1();
  if(Firstname == "NoncmaElec")
  {
    logger.info("Inside if loop to wait for "+Firstname);
    util.waitForMoreTime1();
    util.waitForMoreTime1();
    util.waitForMoreTime1();
    util.waitForMoreTime1();
    util.waitForMoreTime1();
  }
  // util.waitForMoreTime1();
  // util.waitForMoreTime1();
  // util.waitForMoreTime1();
  let header_element = await util.waitForExpectedElement(SummaryPageHeader);
  let result= await util.getText(header_element);
  let result1 = await util.compareText(result,header);
  if(result1)
  {
    //logger.info("values matching for VerifySummaryPageHeader  : "+result+" : "+result1);
    return true;
  }else{logger.info("values not matching for VerifySummaryPageHeader  : "+result+" : "+result1);return false;}
};

this.skipcontactdetails = async function(){
  let result = await util.waitForExpectedElement(gaq_nextpersonaldetails);
  util.retryingClick(result.locator());
};

this.VerifySummaryPageReferenceNumber = async function(text){
  refpath = by.xpath("//p[text()='Your "+text+" reference']");
  let result = await util.visibilityOfElementLocated(refpath);
      if(text == "price")
      {
      let result1 = await util.waitForExpectedElement(ReferenceNumber);
      var refnumb = await util.getText(result1);
      }
      else if(text=="quote")
      {
      let result1 = await util.waitForExpectedElement(Quote_ReferenceNumber);
      var refnumb = await util.getText(result1);
      }
  browser.executeScript('window.sessionStorage.setItem("refnum", arguments[0]);',refnumb);
  //logger.info("Reference Number is  : "+refnumb);
};

this.VerifySummaryPageDirectDebitText = async function(){
  let result= await util.visibilityOfElementLocated(DirectDebitText);
  if(result)
  {
    //logger.info("DirectDebitText is displaying : "+result);
    let result1= await util.visibilityOfElementLocated(DirectDebitCheckbox);
    //logger.info("DirectDebit check box is displaying : "+result);
      if(result1 == true)
      {
      //logger.info("DirectDebitCheckbox is displaying : "+result1);
      return true;
      }else{logger.info("DirectDebitCheckbox is not displaying : "+result1);return false;}
  }else{logger.info("DirectDebitText is not displaying : "+result);return false;}
};

this.VerifySummaryPageDirectDebitText_quote = async function(){
  let result= await util.visibilityOfElementLocated(DirectDebitText);
  if(result)
  {
    //logger.info("DirectDebitText is displaying : "+result);
    let result1= await util.visibilityOfElementLocated(quote_ddcheckbox);
    //logger.info("DirectDebit check box is displaying : "+result);
      if(result1 == true)
      {
      //logger.info("DirectDebitCheckbox is displaying : "+result1);
      return true;
      }else{logger.info("DirectDebitCheckbox is not displaying : "+result1);return false;}
  }else{logger.info("DirectDebitText is not displaying : "+result);return false;}
};

this.VerifySummaryPagevalidUntil = async function(text)
{
  let result = await util.visibilityOfElementLocated(by.xpath("//p[contains(text(),'"+text+" valid until')]"));
  if(result)
  {
    let ele = await util.visibilityOfElementLocated(validUntilPrice);
    return ele;
  }else{logger.info("Unable to find Valid until Price ");return false;}
};

this.VerifySummaryPageContractLength = async function(text){
  let clickcontlength = await util.waitForExpectedElement(ContractLength);
  util.clickEvent(clickcontlength);
  util.waitForPageLoad();
      var values = text.split(',');
      var i;
      var j =1;
              for(i = 0; i < values.length; i++)
              {
                  elementValue = element(by.css("ul[role='listbox'] :nth-child("+j+")"));
                  let result2 = await util.getText(elementValue);
                  let result3 = text.includes(result2);
                  if(result3){
                    //logger.info("Values are matching "+result2+" : "+values[i]+" : "+result3);
                  }else{
                    logger.info("Values are not matching : "+result2+" : "+values[i]+" : "+result3);
                    return false;
                  }
                  j++;
                }
  return true;
};

this.VerifySummaryPagePricePlan = async function(text){
    let clickcontpriceplan = await util.waitForExpectedElement(PricePlan);
    util.clickEvent(clickcontpriceplan);
    util.waitForPageLoad();
    var values = text.split(',');
    var i;
    var j =1;
            for(i = 0; i < values.length; i++)
            {
                elementValue = element(by.css(".ember-power-select-options :nth-child("+j+")"));
                let result2 = await util.getText(elementValue);
                let result3 = await util.compareText(result2,values[i]);
                if(result3){
                  //logger.info("Values are matching : "+result2+" : "+values[i]+" : "+result3);
                }else{
                  logger.info("Values are not matching : "+result2+" : "+values[i]+" : "+result3);
                  return false;
                }
                j++;
              }
              return true;
};

this.VerifySummaryPageProductType = async function(text){
  //logger.info("Inside VerifySummaryPageProductType ******************* ");
  let clickproducttype = await util.waitForExpectedElement(ProductType);
  util.clickEvent(clickproducttype);
  util.waitForPageLoad()
  var values = text.split(',');
  var i;
  var j =1;
  elementValue1 = element.all(by.css("ul[role='listbox']"));
  let elementval2 = await util.getText(elementValue1);
  for(i = 0; i < values.length; i++)
  {
      elementValue = element(by.css(".ember-power-select-options :nth-child("+j+")"));
      let result2 = await util.getText(elementValue);
      if(text.includes(result2))
      {
          //logger.info(values[i]+" Value is available ");
      }
      else
      {
        logger.info(values[i]+" Value is not available ");
        return false;
      }
    }
    return true;
};

this.getelecrowcount = async function(elecrowcountval){
  util.waitForMoreTime1();
  var ele = "";
  ele = await util.findElements(elecrowcountval);
  // logger.info("path : "+elecrowcountval);
  // logger.info("elements : "+ele);
  eleclength = ele.length;
  lencheck = ele.length;
  //logger.info("*********Elec row count is : "+eleclength+" : "+ele.length);
};

this.getgasrowcount = async function(gasrowcountval){
  util.waitForMoreTime1();
  var ele1 = "";
  var ele1 = await util.findElements(gasrowcountval);
  // logger.info("path : "+gasrowcountval);
  // logger.info("elements : "+ele1);
  gaslength = ele1.length;
  //logger.info("*********Gas row count is : "+gaslength+" : "+ele1.length);
};

this.comparegaqtableprices = async function(arg1,arg2)
{
  that=this;
  scrol = 0;
  eleclength =undefined;
  gaslength = undefined;
  //logger.info("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ inside comparegaqtableprices "+arg1+" #### "+arg2);
  //logger.info("row count before : "+eleclength+" : "+gaslength);
switch(arg2)
{
    case "CMA": case "gas nonCMA": case "elec nonCMA":
                await that.getelecrowcount(elecrowcount);
                await that.getgasrowcount(gasrowcount);
                logger.info("row count after : "+eleclength+" : "+gaslength);
                util.waitForMoreTime();
                for(var i = 1;i<=eleclength;i++)//eleclength
                {
                  let result = await that.VerifyElecPriceTable(i,arg1,arg2,3);
                  if(result){
                  }
                  else{
                    logger.info("Values are not same for the elec row : "+i);
                    return false;
                    break;
                  }
                }
                util.waitForMoreTime1();
                scrol = 6500;
                for(var i =1;i<=gaslength;i++)
                {
                  let result = await that.VerifyGasPriceTable(i,arg1,arg2,4);
                  if(result){

                  }
                  else
                  {
                    logger.info("Values are not same for the gas row : "+i);
                    return false;
                    break;
                  }
                }
                return true;
    break;
    case "skipaddress": case "skipmpxn":
                await that.getelecrowcount(elecrowcount_skipaddress);
                await that.getgasrowcount(gasrowcount_skipaddress);
                logger.info("row count after : "+eleclength+" : "+gaslength);
                util.waitForMoreTime();
                for(var i = 1;i<=eleclength;i++)//eleclength
                {
                  let result = await that.VerifyElecPriceTable(i,arg1,arg2,4);
                  if(result){
                  }
                  else{
                    logger.info("Values are not same for the elec row : "+i);
                    return false;
                    break;
                  }
                }
                util.waitForMoreTime1();
                scrol = 6500;
                for(var i =1;i<=gaslength;i++)
                {
                  let result = await that.VerifyGasPriceTable(i,arg1,arg2,5);
                  if(result){

                  }
                  else
                  {
                    logger.info("Values are not same for the gas row : "+i);
                    return false;
                    break;
                  }
                }
                return true;
    break;

    case "Elec CMA":
                await that.getelecrowcount(elecrowcount);
                //logger.info("row count after : "+eleclength+" : "+gaslength);
                util.waitForMoreTime();
                for(var i = 1;i<=eleclength;i++)//eleclength
                {
                  let result = await that.VerifyElecPriceTable(i,arg1,arg2,3);
                  if(result){
                  }
                  else{
                    logger.info("Values are not same for the elec row : "+i);
                    return false;
                    break;
                  }
                }
                return true;
    break;
    case "SingleElecCMA":
                await that.getelecrowcount(elecrowcount);
                //logger.info("row count after : "+eleclength+" : "+gaslength);
                util.waitForMoreTime();
                for(var i = 1;i<=eleclength;i++)//eleclength
                {
                  let result = await that.VerifySingleElecPriceTable(i,arg1,arg2,3);
                  if(result){
                  }
                  else{
                    logger.info("Values are not same for the elec row : "+i);
                    return false;
                    break;
                  }
                }
                return true;
    break;
    case "Gas CMA":
                await that.getelecrowcount(elecrowcount);
                //logger.info("row count after : "+eleclength+" : "+gaslength);
                util.waitForMoreTime();
                for(var i = 1;i<=eleclength;i++)//eleclength
                {
                  let result = await that.VerifyGasPriceTable(i,arg1,arg2,3);
                  if(result){
                  }
                  else{
                    logger.info("Values are not same for the Gas row : "+i);
                    return false;
                    break;
                  }
                }
                return true;
    break;

    case "Gas large":
                await that.getelecrowcount(elecrowcount);
                await that.getgasrowcount(gasrowcount);
                logger.info("row count after : "+eleclength+" : "+gaslength);
                util.waitForMoreTime();
                for(var i = 1;i<=eleclength;i++)//eleclength
                {
                  let result = await that.VerifyElecPriceTable(i,arg1,arg2,3);
                  if(result){}else{logger.info("Values are not same for the elec row : "+i);return false; break;}
                }
                return true;
    break;
    case "elec large":
                await that.getelecrowcount(elecrowcount);
                await that.getgasrowcount(gasrowcount);
                //logger.info("row count after : "+eleclength+" : "+gaslength);
                util.waitForMoreTime();
               for(var i = 1;i<eleclength;i++)//eleclength
                {
                  let result = await that.VerifyGasPriceTable(i,arg1,arg2,3);
                  if(result){}else{logger.info("Values are not same for the elec row : "+i);return false; break;}
                }
                return true;
    break;
    case "both nonCMA Gas":
    case "NoncmaGas":
                  await that.getgasrowcount(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li"));
                  for(var i = 2;i<=gaslength;i++)//eleclength
                  {
                    let result = await that.VerifyGasPriceTableNonCMA(i,arg1,arg2,3);
                    if(result){}else{logger.info("Values are not same for the Gas row : "+i);return false;}
                  }
                  return true;
            break;
    case "both nonCMA Elec":
                //logger.info("*******************inside case both nonCMA Elec : "+arg2);
                  await that.getelecrowcount(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li"));
                  //logger.info("*******************inside case both nonCMA Elec : "+arg2+" : "+eleclength);
                  for(var i = 2;i<=eleclength;i++)//eleclength
                  {
                    let result = await that.VerifyElecPriceTableNonCMA(i,arg1,arg2,3);
                    if(result){}else{logger.info("Values are not same for the elec row : "+i);return false;}
                  }
                  return true;
            break;
    case "ElecnonCMA":
                //logger.info("*******************inside case ElecnonCMA : "+arg2);
                  await that.getelecrowcount(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li"));
                  //logger.info("*******************inside case ElecnonCMA : "+arg2+" : "+eleclength);
                  for(var i = 2;i<=eleclength;i++)//eleclength
                  {
                    let result = await that.VerifyElecPriceTableNonCMA(i,arg1,arg2,3);
                    //logger.info("*********************************    "+result);
                    if(result){}else{logger.info("Values are not same for the elec row : "+i);return false;}
                  }
                  return true;
            break;
    case "NoncmaElec":
                //logger.info("*******************inside case both nonCMA Elec : "+arg2);
                  await that.getelecrowcount(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li"));
                  //logger.info("*******************inside case both nonCMA Elec : "+arg2+" : "+eleclength);
                  for(var i = 2;i<=eleclength;i++)//eleclength
                  {
                    let result = await that.VerifyElecdaynightPriceTableNonCMA(i,arg1,arg2,3);
                    if(result){}else{logger.info("Values are not same for the elec row : "+i);return false;}
                  }
                  return true;
            break;
}
};

this.VerifyElecPriceTable = async function(ui_row,arg1,arg2,row){
  that = this;
  //logger.info(" 8888888888888888888888888888 "+ui_row+arg1+arg2+row);
  if(ui_row != undefined)
  {
        pele = ui_row - 1;
        //logger.info("-----------------------------------"+ElecProductsnoncma[pele]);
        var ProductName = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='ml-2 mr-2 align-self-center product']"));
        var Standingcharge = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div[2]/div[2]"));
        var UniRate = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div/div[2]"));
        var PricePerYear = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__price-placeholder hidden-sm-down']/div[2]//h4"));
        var selectPerMonth = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__price-placeholder hidden-sm-down']/div[2]//*[@class='btn text-center bg-button ember-view']"));
        var maxischargeurate = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__panel-body']/div[2]//span"));
        var PricePerMonth = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__price-placeholder hidden-sm-down']/div[2]//h4"));
        var PriceTotal = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__price-placeholder hidden-sm-down']/div[1]//h4"));
        scrol = scrol + 400;
        browser.executeScript('window.scrollTo(0,'+scrol+');');
        let product = await util.getText(ProductName);
        switch(arg1)
        {
          case "DD":
            switch(arg2)
            {
              case "CMA": case "gas nonCMA": case "Elec CMA": case "Gas large":
                      var result = product.includes(ElecProductscma[pele]);
              break;
              //case "": var result = product.includ
              case "elec nonCMA": case "skipaddress": case "skipmpxn":
                      var result = product.includes(ElecProductsnoncma[pele]);
              break;
            }
          break;
          case "without DD":
            switch(arg2)
            {
              case "CMA":
              case "gas nonCMA":
              case "Elec CMA":
              case "Gas large": var result = product.includes(ElecProductscmawoDD[pele]);
              break;
              case "elec nonCMA": case "skipaddress": case "skipmpxn":
                      var result = product.includes(ElecProductsnoncmawoDD[pele]);;
              break;
            }
        }
        if(result)
        {
          //logger.info(ui_row+" ProductName is matching - "+result+" : "+product);
          util.waitForMoreTime();
          util.clickEvent(maxischargeurate);
          util.waitForPageLoad();
          var scharge = await util.getText(Standingcharge);
          scharge = scharge.replace(/p/gi,"");
          var urate = await util.getText(UniRate);
          urate = urate.replace(/p/gi,"");
          //logger.info(" Unit rate is : "+urate+" standing charge is : "+scharge);
          util.clickEvent(maxischargeurate);
          let priceyear = await util.getText(PricePerYear);
          priceyear = priceyear.replace(/[£*,]/gi,"");
          priceyear = priceyear.slice(0,-1); priceyear = parseFloat(priceyear);
          var totalprice = await util.getText(PriceTotal);
          totalprice = totalprice.replace(/[^0-9\.]/gi,"");
          totalprice = totalprice.slice(0,-1); totalprice = parseFloat(totalprice);
          util.clickEvent(selectPerMonth);
          util.waitForPageLoad();
          var pricemonth = await util.getText(PricePerMonth);
          pricemonth = pricemonth.replace(/[^0-9\.]/gi,"");
          pricemonth = pricemonth.slice(0,-1); pricemonth = parseFloat(pricemonth);
          util.clickEvent(selectPerMonth);
          await util.getText(PricePerMonth);
          if(arg1 == "DD")
          {
            var result1 = await that.pricecalculationElec(ElecConsumption,product,urate,scharge,priceyear,pricemonth,totalprice);
          }
          else if(arg1 == "without DD")
          {
            var result1 = await that.pricecalculationElecwoDD(ElecConsumption,product,urate,scharge,priceyear,pricemonth,totalprice);
          }
          return result1;
        }
        else
        {
          logger.info(ui_row+"ProductName is not matching - "+result+" : "+product);
          return false;
        }
          //return true;
  }
};

this.VerifySingleElecPriceTable = async function(ui_row,arg1,arg2,row){
  that = this;
  //logger.info(" 8888888888888888888888888888 "+ui_row+arg1+arg2+row);
  if(ui_row != undefined)
  {
        pele = ui_row - 1;
        //logger.info("-----------------------------------"+ElecProductsnoncma[pele]);
        var ProductName = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='ml-2 mr-2 align-self-center product']"));
        var PricePerYear = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__price-placeholder hidden-sm-down']/div[2]//h4"));
        var selectPerMonth = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__price-placeholder hidden-sm-down']/div[2]//*[@class='btn text-center bg-button ember-view']"));
        var maxischargeurate = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__panel-body']/div[2]//span"));
        var PricePerMonth = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__price-placeholder hidden-sm-down']/div[2]//h4"));
        var PriceTotal = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__price-placeholder hidden-sm-down']/div[1]//h4"));
        scrol = scrol + 400;
        browser.executeScript('window.scrollTo(0,'+scrol+');');
        let product = await util.getText(ProductName);
        switch(arg1)
        {
          case "DD":
            switch(arg2)
            {
              case "SingleElecCMA":
                      var result = product.includes(ElecProductscma[pele]);
              break;
            }
          break;
          case "without DD":
            switch(arg2)
            {
              case "SingleElecCMA": var result = product.includes(ElecProductscmawoDD[pele]);
              break;
            }
        }
        if(result)
        {
          logger.info(ui_row+" ProductName is matching - "+result+" : "+product);
          util.waitForMoreTime();
          util.clickEvent(maxischargeurate);
          util.waitForPageLoad();
          if(product.includes("Lite") || product.includes("Landlord"))
          {
            var Standingcharge = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div[2]/div[2]"));
            var UniRate = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div/div[2]"));
            var scharge = await util.getText(Standingcharge);
            scharge = scharge.replace(/p/gi,"");
            var urate = await util.getText(UniRate);
            urate = urate.replace(/p/gi,"");
          }
          else
          {
            var Standingcharge = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div[3]/div[2]"));
            var elemdaynight = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div[1]/div[1]"));
            var daynight = await util.getText(elemdaynight);
            if(daynight == "Night")
            {
              var UnitRate_Night = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div[1]/div[2]"));
              var UnitRate_day = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div[2]/div[2]"));
            }
            else
            {
              var UnitRate_day = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div[1]/div[2]"));
              var UnitRate_Night = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div[2]/div[2]"));
            }
            var scharge = await util.getText(Standingcharge);
            scharge = scharge.replace(/p/gi,"");
            var urateday = await util.getText(UnitRate_day);
            urateday = urateday.replace(/p/gi,"");
            var uratenight = await util.getText(UnitRate_Night);
            uratenight = uratenight.replace(/p/gi,"");
          }


          util.clickEvent(maxischargeurate);
          //logger.info(" Unit rate is : "+urateday+" : "+uratenight+" standing charge is : "+scharge);
          let priceyear = await util.getText(PricePerYear);
          priceyear = priceyear.replace(/[£*,]/gi,"");
          priceyear = priceyear.slice(0,-1); priceyear = parseFloat(priceyear);
          let totalprice = await util.getText(PriceTotal);
          totalprice = totalprice.replace(/[^0-9\.]/gi,"");
          totalprice = totalprice.slice(0,-1); totalprice = parseFloat(totalprice);
          util.clickEvent(selectPerMonth);
          util.waitForPageLoad();
          let pricemonth = await util.getText(PricePerMonth);
          pricemonth = pricemonth.replace(/[^0-9\.]/gi,"");
          pricemonth = pricemonth.slice(0,-1); pricemonth = parseFloat(pricemonth);
          util.waitForPageLoad();
          util.clickEvent(selectPerMonth);
          await util.getText(PricePerMonth);
          if(arg1 == "DD")
          {
            if(product.includes("Lite") || product.includes("Landlord"))
            {
              var result1 = await that.pricecalculationElec(ElecConsumption,product,urate,scharge,priceyear,pricemonth,totalprice);
            }
            else
            {
              var result1 = await that.pricecalculationElecdaynight(ElecConsumption,product,urateday,uratenight,scharge,priceyear,pricemonth,totalprice);
            }
          }
          else if(arg1 == "without DD")
          {
            if(product.includes("Lite") || product.includes("Landlord"))
            {
              var result1 = await that.pricecalculationElecwoDD(ElecConsumption,product,urate,scharge,priceyear,pricemonth,totalprice);
            }
            else
            {
              var result1 = await that.pricecalculationElecdaynightwoDD(ElecConsumption,product,urateday,uratenight,scharge,priceyear,pricemonth,totalprice);
            }
          }
          return result1;
        }
        else
        {
          logger.info(ui_row+"ProductName is not matching - "+result+" : "+product);
          return false;
        }
          return true;
  }
};

this.pricecalculationElec = async function(Consumption,product,urate,scharge,priceyearly,pricemonth,totalprice)
{
  //logger.info("Values : "+Consumption+" : "+product+" : "+urate+" : "+scharge+" : "+priceyearly+" : "+pricemonth+" : "+totalprice)
    price = ((Consumption*urate)+(365*scharge))/100;
    discount = (price*(7/100));
    //logger.info("************** "+price+" **************** "+discount);
    let result = product.includes("Lite");
    if(result)//no need to reduce the discount amount for Lite products in monthly, yearly prices
    {
      //logger.info("Lite products : "+result);
      Monthly_price =  price/12;
      Monthly_price = Monthly_price.toFixed(2);
      Monthly_price = Monthly_price.slice(0,-1); Monthly_price = parseFloat(Monthly_price);
      yearly_price = price;
      yearly_price = yearly_price.toFixed(2);
      yearly_price = yearly_price.slice(0,-1); yearly_price = parseFloat(yearly_price);
      if(product.includes("1 Year"))
      {
        tprice = price;
        tprice = tprice.toFixed(2);
        tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
      }
      else
      {
        //logger.info("inside else : "+product);
        if(product.includes("2 Year")){calVal = 2;
        }else if(product.includes("3 Year")){ calVal = 3;
        }else if(product.includes("4 Year")){ calVal = 4;
        }else if(product.includes("5 Year")){ calVal = 5;
        }
          tprice = price*calVal;
          tprice = tprice.toFixed(2);
          tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
      }

    }
    else//need to reduce the discount for non-Lite products in monthly, yearly prices
    {
      Monthly_price =  (price - discount)/12;
      Monthly_price = Monthly_price.toFixed(2);
      Monthly_price = Monthly_price.slice(0,-1); Monthly_price = parseFloat(Monthly_price);
        if(product.includes("6 Months"))//calculation is diffenrent for total and yearly prices (only prices will be displaying for 6 months in online)
        {
              logger.info("inside if : "+product); // the calculated prices are yearly. so, it has to be for 6 months (prices/2)
              tprice = price - discount;
              tprice = tprice/2;
              tprice = tprice.toFixed(2);
              tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
              yearly_price = (price - discount);
              yearly_price = yearly_price;
              yearly_price = yearly_price.toFixed(2);
              yearly_price = yearly_price.slice(0,-1); yearly_price = parseFloat(yearly_price);
        }
        else if(product.includes("1 Year"))
        {
              //logger.info("inside else if : "+product);
              tprice = price - discount;
              tprice = tprice.toFixed(2);
              tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
              yearly_price = (price - discount);
              yearly_price = yearly_price.toFixed(2);
              yearly_price = yearly_price.slice(0,-1); yearly_price = parseFloat(yearly_price);
                //logger.info("inside else if : "+tprice+ " : "+yearly_price);
        }
        else //yearly price will be changes based on year (no of years * price)
        {
          //logger.info("inside else : "+product);
          if(product.includes("2 Year")){calVal = 2;
          }else if(product.includes("3 Year")){ calVal = 3;
          }else if(product.includes("4 Year")){ calVal = 4;
          }else if(product.includes("5 Year")){ calVal = 5;
          }
            tprice = price - discount;
            tprice = tprice*calVal;
            tprice = tprice.toFixed(2);
            tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
            yearly_price = (price - discount);
            yearly_price = yearly_price.toFixed(2);
            yearly_price = yearly_price.slice(0,-1); yearly_price = parseFloat(yearly_price);
        }
    }
    //logger.info("Calculated prices : TotalPrice = "+tprice+" yearly_price = "+yearly_price+" and  Monthly_price = "+Monthly_price);
    //logger.info("**************** prices : TotalPrice = "+tprice+" TotalPrice+ = "+(tprice+0.1).toFixed(1)+" and  TotalPrice- = "+(tprice-0.1).toFixed(1));
    if(totalprice == tprice || totalprice == (tprice+0.1).toFixed(1) || totalprice == (tprice-0.1).toFixed(1))
    {
      //logger.info("Total prices are same : "+tprice+" : "+totalprice);
      if(priceyearly == yearly_price || priceyearly == (yearly_price+0.1).toFixed(1) || priceyearly == (yearly_price-0.1).toFixed(1))
      {
        //logger.info("Yearly prices are same : "+yearly_price+" : "+priceyearly);
        if(pricemonth == Monthly_price || pricemonth == (Monthly_price+0.1).toFixed(1) || pricemonth == (Monthly_price-0.1).toFixed(1))
        {
          logger.info("Total prices, Yearly prices, Monthly prices are same for "+product+" : "+tprice+" : "+yearly_price+" : "+Monthly_price);
          return true;
        }else{logger.info("Monthly prices are not same : "+Monthly_price+" : "+pricemonth);return false;}
      }else{logger.info("Yearly prices are not same : "+yearly_price+" : "+priceyearly);return false;}
    }else{logger.info("Total prices are not same : "+tprice+" : "+totalprice);return false;}

  };

  this.pricecalculationElecdaynight = async function(Consumption,product,urateday,uratenight,scharge,priceyearly,pricemonth,totalprice)
  {
    //logger.info("Values : "+Consumption+" : "+product+" : "+urateday+" : "+uratenight+" : "+scharge+" : "+priceyearly+" : "+pricemonth+" : "+totalprice)
      var consumption_night = (Consumption*75/100);
      var consumption_day = (Consumption*25/100);
      price = (((consumption_night*uratenight)+(consumption_day*urateday))+(365*scharge))/100;
      //price = ((Consumption*urate)+(365*scharge))/100;
      discount = (price*(7/100));
      let result = product.includes("Lite");
      if(result)//no need to reduce the discount amount for Lite products in monthly, yearly prices
      {
        //logger.info("Lite products : "+result);
        Monthly_price =  price/12;
        Monthly_price = Monthly_price.toFixed(2);
        Monthly_price = Monthly_price.slice(0,-1); Monthly_price = parseFloat(Monthly_price);
        yearly_price = price;
        yearly_price = yearly_price.toFixed(2);
        yearly_price = yearly_price.slice(0,-1); yearly_price = parseFloat(yearly_price);
        if(product.includes("1 Year"))
        {
          tprice = price;
          tprice = tprice.toFixed(2);
          tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
        }
        else
        {
          //logger.info("inside else : "+product);
          if(product.includes("2 Year")){calVal = 2;
          }else if(product.includes("3 Year")){ calVal = 3;
          }else if(product.includes("4 Year")){ calVal = 4;
          }else if(product.includes("5 Year")){ calVal = 5;
          }
            tprice = price*calVal;
            tprice = tprice.toFixed(2);
            tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
        }

      }
      else//need to reduce the discount for non-Lite products in monthly, yearly prices
      {
        Monthly_price =  (price - discount)/12;
        Monthly_price = Monthly_price.toFixed(2);
        Monthly_price = Monthly_price.slice(0,-1); Monthly_price = parseFloat(Monthly_price);
          if(product.includes("6 Months"))//calculation is diffenrent for total and yearly prices (only prices will be displaying for 6 months in online)
          {
                //logger.info("inside if : "+product); // the calculated prices are yearly. so, it has to be for 6 months (prices/2)
                tprice = price - discount;
                tprice = tprice/2;
                tprice = tprice.toFixed(2);
                tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
                yearly_price = (price - discount);
                yearly_price = yearly_price;
                yearly_price = yearly_price.toFixed(2);
                yearly_price = yearly_price.slice(0,-1); yearly_price = parseFloat(yearly_price);
          }
          else if(product.includes("1 Year"))
          {
                //logger.info("inside else if : "+product);
                tprice = price - discount;
                tprice = tprice.toFixed(2);
                tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
                yearly_price = (price - discount);
                yearly_price = yearly_price.toFixed(2);
                yearly_price = yearly_price.slice(0,-1); yearly_price = parseFloat(yearly_price);
                //logger.info("inside else if : "+tprice+ " : "+yearly_price);
          }
          else //yearly price will be changes based on year (no of years * price)
          {
            //logger.info("inside else : "+product);
            if(product.includes("2 Year")){calVal = 2;
            }else if(product.includes("3 Year")){ calVal = 3;
            }else if(product.includes("4 Year")){ calVal = 4;
            }else if(product.includes("5 Year")){ calVal = 5;
            }
              tprice = price - discount;
              tprice = tprice*calVal;
              tprice = tprice.toFixed(2);
              tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
              yearly_price = (price - discount);
              yearly_price = yearly_price.toFixed(2);
              yearly_price = yearly_price.slice(0,-1); yearly_price = parseFloat(yearly_price);
          }
      }
      //logger.info("Calculated prices : TotalPrice = "+tprice+" yearly_price = "+yearly_price+" and  Monthly_price = "+Monthly_price);
      if(totalprice == tprice || totalprice == (tprice+0.1).toFixed(1) || totalprice == (tprice-0.1).toFixed(1))
      {
        //logger.info("Total prices are same : "+tprice+" : "+totalprice);
        if(priceyearly == yearly_price || priceyearly == (yearly_price+0.1).toFixed(1) || priceyearly == (yearly_price-0.1).toFixed(1))
        {
          //logger.info("Yearly prices are same : "+yearly_price+" : "+priceyearly);
          if(pricemonth == Monthly_price || pricemonth == (Monthly_price+0.1).toFixed(1) || pricemonth == (Monthly_price-0.1).toFixed(1))
          {
            logger.info("Total prices, Yearly prices, Monthly prices are same for "+product+" : "+tprice+" : "+yearly_price+" : "+Monthly_price);
            return true;
          }else{logger.info("Monthly prices are not same : "+Monthly_price+" : "+pricemonth);return false;}
        }else{logger.info("Yearly prices are not same : "+yearly_price+" : "+priceyear);return false;}
      }else{logger.info("Total prices are not same : "+tprice+" : "+totalprice);return false;}

    };


this.pricecalculationElecwoDD = async function(Consumption,product,urate,scharge,priceyearly,pricemonth,totalprice)
{
    price = ((Consumption*urate)+(365*scharge))/100;
      Monthly_price =  price/12;
      Monthly_price = Monthly_price.toFixed(2);
      Monthly_price = Monthly_price.slice(0,-1); Monthly_price = parseFloat(Monthly_price);
        if(product.includes("6 Months"))//calculation is diffenrent for total and yearly prices (only prices will be displaying for 6 months in online)
        {
              //logger.info("inside if : "+product); // the calculated prices are yearly. so, it has to be for 6 months (prices/2)
              tprice = price;
              tprice = tprice/2;
              tprice = tprice.toFixed(2);
              tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
              yearly_price = price;
              yearly_price = yearly_price.toFixed(2);
              yearly_price = yearly_price.slice(0,-1); yearly_price = parseFloat(yearly_price);
        }
        else if(product.includes("1 Year"))
        {
              //logger.info("inside else if : "+product);
              tprice = price;
              tprice = tprice.toFixed(2);
              tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
              yearly_price = price;
              yearly_price = yearly_price.toFixed(2);
              yearly_price = yearly_price.slice(0,-1); yearly_price = parseFloat(yearly_price);
        }
        else //yearly price will be changes based on year (no of years * price)
        {
          //logger.info("inside else : "+product);
          if(product.includes("2 Year")){calVal = 2;
          }else if(product.includes("3 Year")){ calVal = 3;
          }
            tprice = price ;
            tprice = tprice*calVal;
            tprice = tprice.toFixed(2);
            tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
            yearly_price = price;
            yearly_price = yearly_price.toFixed(2);
            yearly_price = yearly_price.slice(0,-1); yearly_price = parseFloat(yearly_price);
        }

    //logger.info("Calculated prices : TotalPrice = "+tprice+" TotalPrice+0.01 = "+(tprice+0.1).toFixed(1)+" TotalPrice-0.01 = "+(tprice-0.1).toFixed(1)+" TotalPrice tofixed = "+tprice.toFixed(0)+" comparing price = "+totalprice);
    if(totalprice == tprice || totalprice == (tprice+0.1).toFixed(1) || totalprice == (tprice-0.1).toFixed(1) || totalprice == (tprice.toFixed(0)))
    {
      //logger.info("Total prices are same : "+tprice+" : "+totalprice);
      if(priceyearly == yearly_price || priceyearly == (yearly_price+0.1).toFixed(1) || priceyearly == (yearly_price-0.1).toFixed(1) || priceyearly == (yearly_price.toFixed(0)))
      {
        //logger.info("Yearly prices are same : "+yearly_price+" : "+priceyearly);
        if(pricemonth == Monthly_price || pricemonth == (Monthly_price+0.1).toFixed(1) || pricemonth == (Monthly_price-0.1).toFixed(1) || pricemonth == (Monthly_price.toFixed(0)))
        {
          logger.info("Total prices, Yearly prices, Monthly prices are same for "+product+" : "+tprice+" : "+yearly_price+" : "+Monthly_price);
          return true;
        }else{logger.info("Monthly prices are not same : "+Monthly_price+" : "+pricemonth);return false;}
      }else{logger.info("Yearly prices are not same : "+yearly_price+" : "+priceyear);return false;}
    }else{logger.info("Total prices are not same : "+tprice+" : "+totalprice);return false;}

};

this.pricecalculationElecdaynightwoDD = async function(Consumption,product,urateday,uratenight,scharge,priceyearly,pricemonth,totalprice)
{
    //logger.info("Values : "+Consumption+" : "+product+" : "+urateday+" : "+uratenight+" : "+scharge+" : "+priceyearly+" : "+pricemonth+" : "+totalprice)
      var consumption_night = (Consumption*75/100);
      var consumption_day = (Consumption*25/100);
      price = (((consumption_night*uratenight)+(consumption_day*urateday))+(365*scharge))/100;
      Monthly_price =  price/12;
      Monthly_price = Monthly_price.toFixed(2);
      Monthly_price = Monthly_price.slice(0,-1); Monthly_price = parseFloat(Monthly_price);
        if(product.includes("6 Months"))//calculation is diffenrent for total and yearly prices (only prices will be displaying for 6 months in online)
        {
              //logger.info("inside if : "+product); // the calculated prices are yearly. so, it has to be for 6 months (prices/2)
              tprice = price;
              tprice = tprice/2;
              tprice = tprice.toFixed(2);
              tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
              yearly_price = price;
              yearly_price = yearly_price.toFixed(2);
              yearly_price = yearly_price.slice(0,-1); yearly_price = parseFloat(yearly_price);
        }
        else if(product.includes("1 Year"))
        {
              //logger.info("inside else if : "+product);
              tprice = price;
              tprice = tprice.toFixed(2);
              tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
              yearly_price = price;
              yearly_price = yearly_price.toFixed(2);
              yearly_price = yearly_price.slice(0,-1); yearly_price = parseFloat(yearly_price);
        }
        else //yearly price will be changes based on year (no of years * price)
        {
          //logger.info("inside else : "+product);
          if(product.includes("2 Year")){calVal = 2;
          }else if(product.includes("3 Year")){ calVal = 3;
          }
            tprice = price ;
            tprice = tprice*calVal;
            tprice = tprice.toFixed(2);
            tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
            yearly_price = price;
            yearly_price = yearly_price.toFixed(2);
            yearly_price = yearly_price.slice(0,-1); yearly_price = parseFloat(yearly_price);
        }

    //logger.info("Calculated prices : TotalPrice = "+tprice+" yearly_price = "+yearly_price+" and  Monthly_price = "+Monthly_price);
    if(totalprice == tprice || totalprice == (tprice+0.1).toFixed(1) || totalprice == (tprice-0.1).toFixed(1))
    {
      //logger.info("Total prices are same : "+tprice+" : "+totalprice);
      if(priceyearly == yearly_price || priceyearly == (yearly_price+0.1).toFixed(1) || priceyearly == (yearly_price-0.1).toFixed(1))
      {
        //logger.info("Yearly prices are same : "+yearly_price+" : "+priceyearly);
        if(pricemonth == Monthly_price || pricemonth == (Monthly_price+0.1).toFixed(1) || pricemonth == (Monthly_price-0.1).toFixed(1))
        {
          logger.info("Total prices, Yearly prices, Monthly prices are same for "+product+" : "+tprice+" : "+yearly_price+" : "+Monthly_price);
          return true;
        }else{logger.info("Monthly prices are not same : "+Monthly_price+" : "+pricemonth);return false;}
      }else{logger.info("Yearly prices are not same : "+yearly_price+" : "+priceyear);return false;}
    }else{logger.info("Total prices are not same : "+tprice+" : "+totalprice);return false;}

};


this.pricecalculationGas = async function(Consumption,product,urate,scharge,priceyearly,pricemonth,totalprice)
{
  price = ((Consumption*urate)+(365*scharge))/100;
  discount = (price*(7/100));
  Monthly_price =  (price - discount)/12;
  Monthly_price = Monthly_price.toFixed(2);
  Monthly_price = Monthly_price.slice(0,-1); Monthly_price = parseFloat(Monthly_price);
    if(product.includes("6 Months"))//calculation is diffenrent for total and yearly prices (only prices will be displaying for 6 months in online)
    {
          //logger.info("inside if : "+product); // the calculated prices are yearly. so, it has to be for 6 months (prices/2)
          tprice = price - discount;
          tprice = tprice/2;
          tprice = tprice.toFixed(2);
          tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
          yearly_price = (price - discount);
          yearly_price = yearly_price;
          yearly_price = yearly_price.toFixed(2);
          yearly_price = yearly_price.slice(0,-1); yearly_price = parseFloat(yearly_price);
    }
    else if(product.includes("1 Year"))
    {
          //logger.info("inside else if : "+product);
          tprice = price - discount;
          tprice = tprice.toFixed(2);
          tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
          yearly_price = (price - discount);
          yearly_price = yearly_price.toFixed(2);
          yearly_price = yearly_price.slice(0,-1); yearly_price = parseFloat(yearly_price);
    }
    else //yearly price will be changes based on year (no of years * price)
    {
      //logger.info("inside else : "+product);
      if(product.includes("2 Year")){calVal = 2;
      }else if(product.includes("3 Year")){ calVal = 3;
      }
        tprice = price - discount;
        tprice = tprice*calVal;
        tprice = tprice.toFixed(2);
        tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
        yearly_price = (price - discount);
        //logger.info("************ before to fixed : "+yearly_price);
        yearly_price = yearly_price.toFixed(2);
        //logger.info("************ after to fixed : "+yearly_price);
        yearly_price = yearly_price.slice(0,-1); yearly_price = parseFloat(yearly_price);
    }
    //logger.info("type of tprice : "+typeof(tprice)+" type of totalprice: "+typeof(totalprice));
    //logger.info("Calculated prices : TotalPrice = "+(tprice+0.1).toFixed(1)+" : "+(tprice-0.1).toFixed(1)+" : "+totalprice);
    if(totalprice == tprice || totalprice == (tprice+0.1).toFixed(1) || totalprice == (tprice-0.1).toFixed(1))
    {
      //logger.info("Total prices are same : "+tprice+" : "+totalprice);
      if(priceyearly == (yearly_price) || priceyearly == (yearly_price+0.1).toFixed(1) || priceyearly == (yearly_price-0.1).toFixed(1))
      {
        //logger.info("Yearly prices are same : "+yearly_price+" : "+priceyearly);
        if(pricemonth == Monthly_price || pricemonth == (Monthly_price+0.1).toFixed(1) || pricemonth == (Monthly_price-0.1).toFixed(1))
        {
        logger.info("Total prices, Yearly prices, Monthly prices are same for "+product+" : "+tprice+" : "+yearly_price+" : "+Monthly_price);
        return true;
      }else{logger.info("Monthly prices are not same : "+Monthly_price+" : "+pricemonth);return false;}
    }else{logger.info("Yearly prices are not same : "+yearly_price+" : "+priceyearly);return false;}
  }else{logger.info("Total prices are not same : "+tprice+" : "+totalprice);return false;}
};

this.pricecalculationGaswoDD = async function(Consumption,product,urate,scharge,priceyearly,pricemonth,totalprice)
{
  price = ((Consumption*urate)+(365*scharge))/100;
  Monthly_price =  price/12;
  Monthly_price = Monthly_price.toFixed(2);
  Monthly_price = Monthly_price.slice(0,-1); Monthly_price = parseFloat(Monthly_price);

    if(product.includes("6 Months"))//calculation is diffenrent for total and yearly prices (only prices will be displaying for 6 months in online)
    {
          //logger.info("inside if : "+product); // the calculated prices are yearly. so, it has to be for 6 months (prices/2)
          tprice = price;
          tprice = tprice/2;
          tprice = tprice.toFixed(2);
          tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
          yearly_price = price;
          yearly_price = yearly_price.toFixed(2);
          yearly_price = yearly_price.slice(0,-1); yearly_price = parseFloat(yearly_price);
    }
    else if(product.includes("1 Year"))
    {
          //logger.info("inside else if : "+product);
          tprice = price;
          tprice = tprice.toFixed(2);
          tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
          yearly_price = price;
          yearly_price = yearly_price.toFixed(2);
          yearly_price = yearly_price.slice(0,-1); yearly_price = parseFloat(yearly_price);
    }
    else //yearly price will be changes based on year (no of years * price)
    {
      //logger.info("inside else : "+product);
      if(product.includes("2 Year")){calVal = 2;
      }else if(product.includes("3 Year")){ calVal = 3;
      }
        tprice = price;
        tprice = tprice*calVal;
        tprice = tprice.toFixed(2);
        tprice = tprice.slice(0,-1); tprice = parseFloat(tprice);
        yearly_price = price;
        yearly_price = yearly_price.toFixed(2);
        yearly_price = yearly_price.slice(0,-1); yearly_price = parseFloat(yearly_price);
    }
  //logger.info("Calculated prices : TotalPrice = "+(tprice+0.1).toFixed(1)+" : "+(tprice-0.1).toFixed(1)+" : "+totalprice);
  if(totalprice == tprice || totalprice == (tprice+0.1).toFixed(1) || totalprice == (tprice-0.1).toFixed(1))
  {
    //logger.info("Total prices are same : "+tprice+" : "+totalprice);
    if(priceyearly == yearly_price || priceyearly == (yearly_price+0.1).toFixed(1) || priceyearly == (yearly_price-0.1).toFixed(1))
    {
      //logger.info("Yearly prices are same : "+yearly_price+" : "+priceyearly);
      if(pricemonth == Monthly_price || pricemonth == (Monthly_price+0.1).toFixed(1) || pricemonth == (Monthly_price-0.1).toFixed(1))
      {
        logger.info("Total prices, Yearly prices, Monthly prices are same for "+product+" : "+tprice+" : "+yearly_price+" : "+Monthly_price);
        return true;
      }else{logger.info("Monthly prices are not same : "+Monthly_price+" : "+pricemonth);return false;}
    }else{logger.info("Yearly prices are not same : "+yearly_price+" : "+priceyearly);return false;}
  }else{logger.info("Total prices are not same : "+tprice+" : "+totalprice);return false;}
};

  this.VerifyGasPriceTable = async function(ui_row,arg1,arg2,row)
  {
    //logger.info("scrol value is  - : "+scrol);
    if(ui_row != undefined)
    {
      //logger.info("Gas row is : "+ui_row);
      pele = ui_row - 1;
      var ProductName = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='ml-2 mr-2 align-self-center product']"));
      var Standingcharge = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div[2]/div[2]"));
      var UniRate = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div/div[2]"));
      var PricePerYear = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__price-placeholder hidden-sm-down']/div[2]//h4"));
      var selectPerMonth = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__price-placeholder hidden-sm-down']/div[2]//*[@class='btn text-center bg-button ember-view']"));
      var maxischargeurate = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__panel-body']/div[2]//span"));
      var PricePerMonth = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__price-placeholder hidden-sm-down']/div[2]//h4"));
      var PriceTotal = element(by.xpath(".//*[@class='price-summary ember-view']/div["+row+"]//*[@class='price-description ember-view']/div["+ui_row+"]//*[@class='price-card__price-placeholder hidden-sm-down']/div[1]//h4"));
      scrol = scrol + 600;
      browser.executeScript('window.scrollTo(0,'+scrol+');');
      let product = await util.getText(ProductName);
      switch(arg1)
      {
        case "DD":
          switch(arg2)
          {
            case "CMA": case "elec nonCMA": case "Gas CMA": case "elec large":
                      var result = product.includes(GasProductscma[pele]);
            break;
            case "gas nonCMA":case "skipaddress":case "skipmpxn":
                      var result = product.includes(GasProductsnoncma[pele]);
            break;
          }
        break;
        case "without DD":
          switch(arg2)
          {
            case "CMA": case "elec nonCMA": case "Gas CMA": case "elec large":
                      var result = product.includes(GasProductscmawoDD[pele]);
            break;
            case "gas nonCMA":case "skipaddress":case "skipmpxn":
                      var result = product.includes(GasProductsnoncmawoDD[pele]);;
            break;
          }
      }

      if(result)
      {
        //logger.info(ui_row+" ProductName is matching - "+result+" : "+product);
        util.waitForMoreTime();
        util.clickEvent(maxischargeurate);//maximize the Standing charges and unit rates overlay
        util.waitForMoreTime();
        let scharge = await util.getText(Standingcharge);
        scharge = scharge.replace(/p/gi,"");
        let urate = await util.getText(UniRate);
        urate = urate.replace(/p/gi,"");
        //logger.info(" Unit rate is : "+urate+" standing charge is : "+scharge);
        util.clickEvent(maxischargeurate);

        let priceyear = await util.getText(PricePerYear);
        priceyear = priceyear.replace(/[£*,]/gi,"");
        priceyear = priceyear.slice(0,-1); priceyear = parseFloat(priceyear);
        let totalprice = await util.getText(PriceTotal);
        totalprice = totalprice.replace(/[^0-9\.]/gi,"");
        totalprice = totalprice.slice(0,-1); totalprice = parseFloat(totalprice);
        util.clickEvent(selectPerMonth);
        util.waitForPageLoad();
        let pricemonth = await util.getText(PricePerMonth);
        pricemonth = pricemonth.replace(/[^0-9\.]/gi,"");
        pricemonth = pricemonth.slice(0,-1); pricemonth = parseFloat(pricemonth);
        util.waitForPageLoad();
        util.clickEvent(selectPerMonth);
        await util.getText(PricePerMonth);
        if(arg1 == "DD")
        {
          var result1 = await that.pricecalculationGas(GasConsumption,product,urate,scharge,priceyear,pricemonth,totalprice);
        }
        else if(arg1 == "without DD")
        {
          var result1 = await that.pricecalculationGaswoDD(GasConsumption,product,urate,scharge,priceyear,pricemonth,totalprice);
        }
        return result1;
      }
      else
      {
        logger.info("ProductName is not matching - "+result+" : "+product);
        return false;
      }
        return true;
      }
  };

this.VerifyGasPriceTableNonCMA = async function(ui_row,arg1,arg2,row)
{
    if(ui_row != undefined)
    {
          pele = ui_row - 2;
          var ProductName = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li["+ui_row+"]//*[@class='product-grid__products']/p[1]"));
          var Standingcharge = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li["+ui_row+"]//*[@class='col-md-5 col-lg-4']//strong"));
          var UniRate = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li["+ui_row+"]//*[@class='row align-items-top']//strong"));
          var PricePerYear = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//li["+ui_row+"]//div[1]//*[@class='product-grid__vat-year']/h4"));
          var PricePerMonth = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//li["+ui_row+"]/div/div/div[2]//*[@class='product-grid__vat-year']/strong[1]"));
          var PriceTotal = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//li["+ui_row+"]/div/div/div[2]//*[@class='product-grid__vat-year']/strong[2]"));
          let product = await util.getText(ProductName);
          switch(arg1)
          {
            case "DD":
              switch(arg2)
              {
                case "both nonCMA Elec":
                case "both nonCMA Gas":
                case "NoncmaGas": var result = product.includes(GasProductsbothnoncma[pele]);
                break;
              }
            break;
            case "without DD":
              switch(arg2)
              {
                case "both nonCMA Elec":
                case "both nonCMA Gas":
                case "NoncmaGas": var result = product.includes(GasProductsbothnoncmawoDD[pele]);
                break;
              }
          }
          if(result)
          {
            //logger.info(ui_row+" ProductName is matching - "+result+" : "+product);
            util.waitForMoreTime();
            let scharge = await util.getText(Standingcharge);
            scharge = scharge.replace(/p/gi,"");
            let urate = await util.getText(UniRate);
            urate = urate.replace(/p/gi,"");
            //logger.info(" Unit rate is : "+urate+" standing charge is : "+scharge);
            let priceyear = await util.getText(PricePerYear);
            priceyear = priceyear.replace(/[£*,]/gi,"");
            priceyear = priceyear.slice(0,-1);
            priceyear = parseFloat(priceyear);
            let totalprice = await util.getText(PriceTotal);
            totalprice = totalprice.replace(/[^0-9\.]/gi,"");
            totalprice = totalprice.slice(0,-1); totalprice = parseFloat(totalprice);
            let pricemonth = await util.getText(PricePerMonth);
            pricemonth = pricemonth.replace(/[^0-9\.]/gi,"");
            pricemonth = pricemonth.slice(0,-1); pricemonth = parseFloat(pricemonth);
            if(arg1 == "DD")
            {
              var result1 = await that.pricecalculationGas(GasConsumption,product,urate,scharge,priceyear,pricemonth,totalprice);
            }
            else if(arg1 == "without DD")
            {
              var result1 = await that.pricecalculationGaswoDD(GasConsumption,product,urate,scharge,priceyear,pricemonth,totalprice);
            }
            return result1;
          }
          else
          {
            logger.info("ProductName is not matching - "+result+" : "+product);
            return false;
          }
            return true;
    }
};

this.VerifyElecPriceTableNonCMA = async function(ui_row,arg1,arg2,row)
{
    if(ui_row != undefined)
    {
          pele = ui_row - 2;
          var ProductName = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li["+ui_row+"]//*[@class='product-grid__products']/p[1]"));
          var Standingcharge = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li["+ui_row+"]//*[@class='col-md-5 col-lg-4']//strong"));
          var UniRate = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li["+ui_row+"]//*[@class='row align-items-top']//strong"));
          var PricePerYear = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//li["+ui_row+"]//div[1]//*[@class='product-grid__vat-year']/h4"));
          var PricePerMonth = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//li["+ui_row+"]/div/div/div[2]//*[@class='product-grid__vat-year']/strong[1]"));
          var PriceTotal = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//li["+ui_row+"]/div/div/div[2]//*[@class='product-grid__vat-year']/strong[2]"));
          let product = await util.getText(ProductName);
          switch(arg1)
          {
            case "DD":
              switch(arg2)
              {
                case "both nonCMA Elec":
                case "NoncmaElec":
                case "ElecnonCMA": var result = product.includes(ElecProductsbothnoncma[pele]);
                //**********hjbj*******************iok8
                break;
              }
            break;
            case "without DD":
              switch(arg2)
              {
                case "both nonCMA Elec":
                case "NoncmaElec":
                case "ElecnonCMA": var result = product.includes(ElecProductsbothnoncmawoDD[pele]);
                break;
              }
          }
          if(result)
          {
            //logger.info(ui_row+" ProductName is matching - "+result+" : "+product);
            util.waitForMoreTime();
            let scharge = await util.getText(Standingcharge);
            scharge = scharge.replace(/p/gi,"");
            let urate = await util.getText(UniRate);
            urate = urate.replace(/p/gi,"");
            //logger.info(" Unit rate is : "+urate+" standing charge is : "+scharge);
            var priceyear = await util.getText(PricePerYear);
            priceyear = priceyear.replace(/[£*,]/gi,"");
            priceyear = priceyear.slice(0,-1);
            priceyear = parseFloat(priceyear);
            var totalprice = await util.getText(PriceTotal);
            totalprice = totalprice.replace(/[^0-9\.]/gi,"");
            totalprice = totalprice.slice(0,-1); totalprice = parseFloat(totalprice);
            let pricemonth = await util.getText(PricePerMonth);
            pricemonth = pricemonth.replace(/[^0-9\.]/gi,"");
            pricemonth = pricemonth.slice(0,-1); pricemonth = parseFloat(pricemonth);
            if(arg1 == "DD")
            {
              var result1 = await that.pricecalculationElec(ElecConsumption,product,urate,scharge,priceyear,pricemonth,totalprice);
            }
            else if(arg1 == "without DD")
            {
              var result1 = await that.pricecalculationElecwoDD(ElecConsumption,product,urate,scharge,priceyear,pricemonth,totalprice);
            }
            return result1;
          }
          else
          {
            logger.info("ProductName is not matching - "+result+" : "+product);
            return false;
          }
            //return true;
    }
};

this.VerifyElecdaynightPriceTableNonCMA = async function(ui_row,arg1,arg2,row)
{
    if(ui_row != undefined)
    {
          pele = ui_row - 2;
          var ProductName = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li["+ui_row+"]//*[@class='product-grid__products']/p[1]"));
          var Standingcharge = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li["+ui_row+"]//*[@class='col-md-5 col-lg-4']//strong"));
          var elemdaynight = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li["+ui_row+"]//*[@class='row align-items-top']//*[@class='d-block hidden-sm-down']"));
          var daynight = await util.getText(elemdaynight);
          logger.info("The unitrate is for : "+daynight);
          if(daynight == "Day")
          {
            //logger.info("****************Inside day night");
            var UnitRate_Night = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li["+ui_row+"]//*[@class='row align-items-top']/div[2]//strong"));
            var UnitRate_day = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li["+ui_row+"]//*[@class='row align-items-top']//strong"));

          }
          else
          {
            //logger.info("**********Inside night day");
            var UnitRate_day = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li["+ui_row+"]//*[@class='row align-items-top']/div[2]//strong"));
            var UnitRate_Night = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li["+ui_row+"]//*[@class='row align-items-top']//strong"));
          }
          var PricePerYear = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//li["+ui_row+"]//div[1]//*[@class='product-grid__vat-year']/h4"));
          var PricePerMonth = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//li["+ui_row+"]/div/div/div[2]//*[@class='product-grid__vat-year']/strong[1]"));
          var PriceTotal = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//li["+ui_row+"]/div/div/div[2]//*[@class='product-grid__vat-year']/strong[2]"));
          let product = await util.getText(ProductName);
          switch(arg1)
          {
            case "DD":
              switch(arg2)
              {
                case "NoncmaElec": var result = product.includes(ElecProductsbothnoncma[pele]);
                break;
              }
            break;
            case "without DD":
              switch(arg2)
              {
                case "NoncmaElec": var result = product.includes(ElecProductsbothnoncmawoDD[pele]);
                break;
              }
            break;
          }
          if(result)
          {
            logger.info(ui_row+" ProductName is matching - "+result+" : "+product);
            util.waitForMoreTime();
            let scharge = await util.getText(Standingcharge);
            scharge = scharge.replace(/p/gi,"");
            let urateday = await util.getText(UnitRate_day);
            urateday = urateday.replace(/p/gi,"");
            let uratenight = await util.getText(UnitRate_Night);
            uratenight = uratenight.replace(/p/gi,"");
            //logger.info(" Unit rate is : "+urateday+" : "+uratenight+" standing charge is : "+scharge);
            var priceyear = await util.getText(PricePerYear);
            priceyear = priceyear.replace(/[£*,]/gi,"");
            priceyear = priceyear.slice(0,-1);
            priceyear = parseFloat(priceyear);
            var totalprice = await util.getText(PriceTotal);
            totalprice = totalprice.replace(/[^0-9\.]/gi,"");
            totalprice = totalprice.slice(0,-1); totalprice = parseFloat(totalprice);
            let pricemonth = await util.getText(PricePerMonth);
            pricemonth = pricemonth.replace(/[^0-9\.]/gi,"");
            pricemonth = pricemonth.slice(0,-1); pricemonth = parseFloat(pricemonth);
            if(arg1 == "DD")
            {
              var result1 = await that.pricecalculationElecdaynight(ElecConsumption,product,urateday,uratenight,scharge,priceyear,pricemonth,totalprice);
            }
            else if(arg1 == "without DD")
            {
              var result1 = await that.pricecalculationElecdaynightwoDD(ElecConsumption,product,urateday,uratenight,scharge,priceyear,pricemonth,totalprice);
            }
            return result1;
          }
          else
          {
            logger.info("ProductName is not matching - "+result+" : "+product);
            return false;
          }
            return true;
    }
};

this.expandmoredetails = async function()
{
      let result = await util.waitForExpectedElement(MoreDetails);
        //logger.info("Clciking Expand More Details button : "+true);
        util.clickEvent(result);
        return true;
};

this.verifyaddressinmoredetails = async function(arg)
{
    let result = await util.waitForExpectedElement(address_moredetails);
      let more_address = await util.getText(result);
      //logger.info("The address is : "+more_address+" : "+PostCode+" : "+arg);
      if(arg === "skipaddress" || arg === 'skipmpxn')
      {
        if(more_address.includes(PostCode))
        {
          //logger.info("Verified Address : "+more_address+" : "+postcode);
          return true;
        }
        else
        {
        logger.info("Failed - Verified Address : "+more_address+" : "+PostCode);
        return false;
        }
      }
      else
      {
          if(more_address.includes(trimAddress))
          {
            //logger.info("Verified Address : "+more_address+" : "+trimAddress);
            return true;
          }
          else
          {
          logger.info("Failed - Verified Address : "+more_address+" : "+trimAddress);
          return false;
          }
        }
  };

this.noncmaverifyaddressinmoredetails = async function()
{
    let result = await util.waitForExpectedElement(address_moredetailsnoncma);
    let more_address = await util.getText(result);
          if(more_address.includes(trimAddress))
          {
            //logger.info("Verified Address : "+more_address+" : "+trimAddress);
            return true;
          }
          else
          {
          logger.info("Failed - Verified Address : "+more_address+" : "+trimAddress);
          return false;
          }
};

this.noncmaverifygasconsumptioninmoredetails = async function()
{
    let result = await util.waitForExpectedElement(gasconsumption_moredetailsnoncma);
    let morecons = await util.getText(result);
      if(morecons.includes(GasConsumption)){
        //logger.info("Verified Elec Consumption : "+morecons);
        return true;
      }else{
        logger.info("Failed - Verified Elec Consumption : "+morecons);
        return false;
      }
};

this.noncmaverifyelecconsumptioninmoredetails = async function()
{
    let result = await util.waitForExpectedElement(elecconsumption_moredetailsnoncma);
    let morecons = await util.getText(result);
      if(morecons.includes(ElecConsumption)){
        //logger.info("Verified Elec Consumption : "+morecons);
        return true;
      }else{
        logger.info("Failed - Verified Elec Consumption : "+morecons);
        return false;
      }
};

this.skipaddress_elecconsumptioninmoredetails = async function()
{
    let result = await util.waitForExpectedElement(elecconsumption_moredetails);
    let morecons = await util.getText(result);
      if(morecons.includes(Elecconsumption_skipaddress)){
        ElecConsumption = 20000;
        //logger.info("Verified Elec Consumption : "+morecons);
        return true;
      }else{
        logger.info("Failed - Verified Elec Consumption : "+morecons);
        return false;
      }
};

this.skipaddress_gasconsumptioninmoredetails = async function()
{
    let result = await util.waitForExpectedElement(gasconsumption_moredetails);
    let morecons = await util.getText(result);
      if(morecons.includes(Gasconsumption_skipaddress)){
        //logger.info("Verified Elec Consumption : "+morecons);
        GasConsumption = 30000;
        return true;
      }else{
        logger.info("Failed - Verified Elec Consumption : "+morecons);
        return false;
      }
};

this.verifyelecconsumptioninmoredetails = async function()
{
  let result = await util.waitForExpectedElement(elecconsumption_moredetails);
  let morecons = await util.getText(result);
    if(morecons.includes(ElecConsumption))
    {
      //logger.info("Verified Elec Consumption : "+morecons);
      return true;
    }else{
      logger.info("Failed - Verified Elec Consumption : "+morecons);
      return false;
    }
};

this.verifygasconsumptioninmoredetails = async function()
{
  let result = await util.waitForExpectedElement(gasconsumption_moredetails);
  let morecons = await util.getText(result);
    if(morecons.includes(GasConsumption))
    {
      //logger.info("Verified Elec Consumption : "+morecons);
      return true;
    }else{
      logger.info("Failed - Verified Elec Consumption : "+morecons);
      return false;
    }
};


this.uncheckddcheckbox = async function()
{
  util.waitForMoreTime();
  util.waitForMoreTime1();
  let result = await util.waitForExpectedElement(DirectDebitCheckbox);
  //logger.info("Unchecking DD check box is done : "+result);
  util.clickEvent(result);
  util.waitForMoreTime1();
  util.waitForMoreTime1();
  let result1 = await util.waitForExpectedElement(DirectDebitText);
  let text = await util.getText(result1);
  //logger.info("Text is : "+text);
  util.waitForMoreTime1();
};

this.Quote_uncheckddcheckbox = async function()
{
  util.waitForMoreTime1();
  util.waitForMoreTime1();
  util.waitForMoreTime1();
  util.waitForMoreTime1();
  util.waitForMoreTime1();
  //util.waitForMoreTime1();
  //util.waitForMoreTime1();
  //util.waitForMoreTime1();
  let result = await util.waitForExpectedElement(quote_ddcheckbox);
  //logger.info("Unchecking DD check box is done : "+result);
  util.clickEvent(result);
  util.waitForMoreTime1();
  let result1 = await util.waitForExpectedElement(DirectDebitText);
  let text = await util.getText(result1);
  //logger.info("Text is : "+text);
  util.waitForMoreTime1();
};

this.validateDDnotpresent = async function()
{
  ddlabel = by.xpath(".//*[contains(text(),'DD discount applied')]");
  let ele = await util.findElements(ddlabel);
      if(ele.length === 0)
      {
        //logger.info("DD Label is not displaying :  "+ele.length);
        return true;
      }
      else
      {
        logger.info("DD Label is displaying : "+ele.length);
        return false;
      }
};

this.ValidateLiteProductsNotpresent=async function()
{
  var result = util.findElements(by.xpath("//*[text()[contains(.,'Lite')]]"));
  if(result.length > 0)
  {
    //logger.info("BG Lite products are displaying");
    return false;
  }
  else
  {
    logger.info("BG Lite products are not displaying");
    return true;
  }
};

this.getpricetocompareinconfpage = async function(fuel,i)
{
  var n;
  if(fuel == "Gas")
  { n = 4; consumption = GasConsumption; }
  else if(fuel == "Electricity"){n=3; consumption = ElecConsumption;}
  else if(fuel == "GasCMA"){n = 3; consumption = GasConsumption;}
  var maxischargeurate = element(by.xpath(".//*[@class='price-summary ember-view']/div["+n+"]//*[@class='price-description ember-view']/div["+i+"]//*[@class='price-card__panel-body']/div[2]//span"));
  util.clickEvent(maxischargeurate);//maximize the Standing charges and unit rates overlay
  util.waitForMoreTime1();
  var finddaynight = await util.getText(element(by.xpath(".//*[@class='price-summary ember-view']/div["+n+"]//*[@class='price-description ember-view']/div["+i+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div/div")));
  logger.info("*********************************** count of elements : "+finddaynight+" : "+n);
  if(finddaynight == "Night" || finddaynight == "Day")
  {
    var finddaynight = await util.getText(element(by.xpath(".//*[@class='price-summary ember-view']/div["+n+"]//*[@class='price-description ember-view']/div["+i+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div/div")));
    if(finddaynight == "Night")
    {
      var UniRateday = element(by.xpath(".//*[@class='price-summary ember-view']/div["+n+"]//*[@class='price-description ember-view']/div["+i+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div[2]/div[2]"));
      var UniRatenight = element(by.xpath(".//*[@class='price-summary ember-view']/div["+n+"]//*[@class='price-description ember-view']/div["+i+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div/div[2]"));
      var Standingcharge = element(by.xpath(".//*[@class='price-summary ember-view']/div["+n+"]//*[@class='price-description ember-view']/div["+i+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div[3]/div[2]"));
      //logger.info(" Unit rate is : "+urateday+" and "+uratenight+" standing charge is : "+scharge);
    }
    else
    {
      var UniRateday = element(by.xpath(".//*[@class='price-summary ember-view']/div["+n+"]//*[@class='price-description ember-view']/div["+i+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div/div[2]"));
      var UniRatenight = element(by.xpath(".//*[@class='price-summary ember-view']/div["+n+"]//*[@class='price-description ember-view']/div["+i+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div[2]/div[2]"));
      var Standingcharge = element(by.xpath(".//*[@class='price-smmary ember-view']/div["+n+"]//*[@class='price-description ember-view']/div["+i+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div[3]/div[2]"));
      //logger.info(" Unit rate is : "+urateday+" and "+uratenight+" standing charge is : "+scharge);
    }
    var scharge = await util.getText(Standingcharge);
    scharge = scharge.replace(/p/gi,"");
    var urateday = await util.getText(UniRateday);
    //logger.info("************** "+urateday);
    urateday = urateday.replace(/p/gi,"");
    var uratenight = await util.getText(UniRatenight);
    uratenight = uratenight.replace(/p/gi,"");
    logger.info(" Unit rate is : "+urateday+" and "+uratenight+" standing charge is : "+scharge);
    var consumption_night = (consumption*75/100);
    var consumption_day = (consumption*25/100);
    yearpricetocomp = (((consumption_night*uratenight)+(consumption_day*urateday))+(365*scharge))/100;
    yearpricetocomp = yearpricetocomp.toFixed(2);
    logger.info("*************Price to compare conf page is : "+yearpricetocomp);
    util.clickEvent(maxischargeurate);//maximize the Standing charges and unit rates overlay
    util.waitForMoreTime();
    return yearpricetocomp;manikandan
  }
  else
  {
    var Standingcharge = element(by.xpath(".//*[@class='price-summary ember-view']/div["+n+"]//*[@class='price-description ember-view']/div["+i+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div[2]/div[2]"));
    var UniRate = element(by.xpath(".//*[@class='price-summary ember-view']/div["+n+"]//*[@class='price-description ember-view']/div["+i+"]//*[@class='price-card__panel-body']/div[2]//*[@class='col-md-6']/div/div[2]"));
    // var maxischargeurate = element(by.xpath(".//*[@class='price-summary ember-view']/div["+n+"]//*[@class='price-description ember-view']/div["+i+"]//*[@class='price-card__panel-body']/div[2]//span"));
    // util.clickEvent(maxischargeurate);//maximize the Standing charges and unit rates overlay
    // util.waitForMoreTime();
    var scharge = await util.getText(Standingcharge);
    scharge = scharge.replace(/p/gi,"");
    var urate = await util.getText(UniRate);
    urate = urate.replace(/p/gi,"");
    logger.info(" Unit rate is : "+urate+" standing charge is : "+scharge);
    yearpricetocomp = ((consumption*urate)+(365*scharge))/100;
    yearpricetocomp = yearpricetocomp.toFixed(2);
    util.clickEvent(maxischargeurate);//maximize the Standing charges and unit rates overlay
    util.waitForMoreTime();
    return yearpricetocomp;
  }

};

this.selectbuybutton = async function(fuel,scrol,i)
{
  that = this;
  //logger.info("Scrol value is : "+scrol);
  switch(fuel){
    case "Electricity":
    case "GasCMA": var n =3;
    break;
    case "Gas": var n =4;
    break;
    default: logger.info("Invalid input");
  }
  browser.executeScript('window.scrollTo(0,'+scrol+');');//'+scrol+'
  elecproduct = element(by.xpath(".//*[@class='price-summary ember-view']/div["+n+"]//*[@class='price-description ember-view']/div["+i+"]//*[@class='ml-2 mr-2 align-self-center product']"));//*[@class='btn btn-submit ember-view']
  elementlist1 = await util.getText(elecproduct);
  //logger.info("The value of product is : "+elementlist1+" : "+tariffname);
    if(elementlist1.includes(tariffname))
    {
      yearpricetocomp = await that.getpricetocompareinconfpage(fuel,i);
      //logger.info("Price to compare confirmation page : "+yearpricetocomp);
      util.waitForMoreTime1();util.waitForMoreTime();
      //.//*[@class='price-summary ember-view']/div["+n+"]//*[@class='price-description ember-view']/div["+i+"]//*[@class='btn btn-submit ember-view']
      buybutton = await util.waitForExpectedElement(by.xpath(".//*[@class='price-summary ember-view']/div["+n+"]//*[@class='price-description ember-view']/div["+i+"]/div[2]/div[3]//*[@type='button']"));
      util.retryingClick(buybutton.locator());
      //logger.info("button clicked");
      return true;
    }
};

this.clickbuybutton = async function(arg1,arg2)
{
  scrol = "";
  util.waitForMoreTime1();
  that=this;
  tariffname = arg1;
  energytype = arg2;
  switch(arg2)
  {
    case "Electricity":
            scrol = 400;
            await this.getelecrowcount(elecrowcount);
            for(i=1;i<=eleclength;i++)
            {
            scrol = scrol+400;
            let result =await that.selectbuybutton("Electricity",scrol,i);
            if(result){break;}
            }
    break;
    case "Gas":
            scrol = 6000;
            await that.getgasrowcount(gasrowcount);
            for(i=1;i<=gaslength;i++)
            {
            scrol = scrol+400;
            browser.executeScript('window.scrollTo(0,'+scrol+');');
            let result =await that.selectbuybutton("Gas",scrol,i);
            if(result){break;}
            }
    break;
    case "GasonlyCMA":
            scrol = 200;
            await that.getgasrowcount(elecrowcount);
            for(i=1;i<=gaslength;i++)
            {
            scrol = scrol+200;
            browser.executeScript('window.scrollTo(0,'+scrol+');');
            let result =await that.selectbuybutton("GasCMA",scrol,i);
            if(result){break;}
            }
    break;
    default:logger.info("Invalid input : "+arg2);
  }
  // if(arg2 == "Electricity")
  // {
  //   scrol = 400;
  //   await this.getelecrowcount(elecrowcount);
  //   for(i=1;i<=eleclength;i++)
  //   {
  //   scrol = scrol+400;
  //   let result =await that.selectbuybutton("Electricity",scrol,i);
  //   if(result){break;}
  //   }
  // }
  // else if(arg2 == "Gas")
  // {
  //     scrol = 6000;
  //     await that.getgasrowcount(gasrowcount);
  //     for(i=1;i<=gaslength;i++)
  //     {
  //     scrol = scrol+400;
  //     browser.executeScript('window.scrollTo(0,'+scrol+');');
  //     let result =await that.selectbuybutton("Gas",scrol,i);
  //     if(result){break;}
  //     }
  // }
  // else if(arg2 == "GasCMA")
  // {
  //     scrol = 200;
  //     var rowcount = by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li");
  //     await that.getgasrowcount(elecrowcount);
  //     for(i=1;i<=gaslength;i++)
  //     {
  //     scrol = scrol+400;
  //     browser.executeScript('window.scrollTo(0,'+scrol+');');
  //     let result =await that.selectbuybutton("GasCMA",scrol,i);
  //     if(result){break;}
  //     }
  // }
};

this.clickbuybuttonnoncma = async function(arg1,arg2)
{
  scrol = "";
  util.waitForMoreTime1();
  that=this;
  tariffname = arg1;
  energytype = arg2;
      scrol = 400;
      for(i=2;i<=4;i++)
      {
      scrol = 500;
      browser.executeScript('window.scrollTo(0,'+scrol+');');
      let result =await that.clickbuynowforgasnoncmaproduct(scrol,i);
      if(result){break;}
      }
};

this.clickbuynowforgasnoncmaproduct = async function(scrol,i)
{
  elecproduct = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li["+i+"]//div[1]//*[@class='product-grid__products']/p[1]"));
  elementlist1 = await util.getText(elecproduct);
  //logger.info("elementlist1 is : "+elementlist1);
  if(elementlist1.includes(tariffname))
  {
    var element1 = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li["+i+"]//div[1]//*[@class='product-grid__vat-year']/h4"));
    yearpricetocomp = await util.getText(element1);
    //logger.info("Price to compare confirmation page : "+yearpricetocomp);
    util.waitForMoreTime1();util.waitForMoreTime();
    buybutton = await util.waitForExpectedElement(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li["+i+"]/div//*[@class='btn btn-submit product-grid__buy ember-view']"));
    util.retryingClick(buybutton.locator());
    //logger.info("button clicked");
    return true;
  }
};

this.GAQenterpersonaldetails = async function(firstname,lastname,businessname,telephone,emailaddress)
{
  //logger.info("inside GAQenterpersonaldetails");
  util.waitForMoreTime1();
  Firstname = firstname;
  let result = await util.waitForExpectedElement(fname);
  util.enterText(result,firstname);
  let result1 = await util.waitForExpectedElement(lname);
  util.enterText(result1,lastname);
  let result2 = await util.waitForExpectedElement(bname);
  util.enterText(result2,businessname);
  let result3 = await util.waitForExpectedElement(pnumber);
  util.enterText(result3,telephone);
  let result4 = await util.waitForExpectedElement(email);
  util.enterText(result4,emailaddress);
  let result5 = await util.waitForExpectedElement(detailsnext);
  //logger.info("Continue button is displaying : "+result5);
  util.clickEvent(result5);
  util.waitForPageLoad();
};

this.verifyGAQconfirmationpage = async function(arg)
{
  that = this;
  util.waitForMoreTime1();
  util.waitForMoreTime1();
  util.waitForMoreTime1();
  util.waitForMoreTime1();
  util.waitForMoreTime1();
  util.waitForMoreTime1();
  util.waitForMoreTime1();
  util.waitForMoreTime1();
  util.waitForMoreTime1();
  util.waitForMoreTime1();
  result = await util.waitForExpectedElement(confpageheader);
  let valueconfpageheader = await util.getText(result);
  let confpheader = await util.compareText(valueconfpageheader,arg);
    if(confpheader)
    {
      logger.info("Confpageheader values are same : "+valueconfpageheader+" : "+arg);
      let isrefdisplayed = await util.visibilityOfElementLocated(conf_reference);
      if(isrefdisplayed)
      {
        logger.info("conf_reference value is displyaing : "+isrefdisplayed);
        let checkpricec = await that.checkpriceconfpage();
        if(checkpricec)
        {
          logger.info("confirmation page is displyaing as expected ");
          return true;
        }else{logger.info("check price confpage is not displyaing : "+checkpricec);return false;}
      }else{logger.info("conf_reference value is not displyaing : "+isrefdisplayed);return false;}
    }else{logger.info("Confpageheader values are not same : "+confpageheader+" : "+arg);return false;}
};

this.checkpriceconfpage= async function()
{
  let result = await util.waitForExpectedElement(conf_price);
  //logger.info("Inside Check price : "+tariffname);
    if(tariffname == "1 Year Online Saver")
    {
        if(energytype=="Gas" || energytype=="GasonlyCMA")
        {
          let ele = await util.waitForExpectedElement(conf_price);
          let getgasprice = await util.getText(ele);
          getgasprice = getgasprice.replace(/[^0-9\.]/gi,"");
            if(getgasprice.includes(yearpricetocomp))
            {
                //logger.info("Price is displaying as expected : "+getgasprice);
                return true;
            }else{logger.info("Price is not displaying as expected : "+getgasprice+" : "+yearpricetocomp);return false;}
        }
        else if(energytype=="Electricity")
        {
          let ele = await util.waitForExpectedElement(conf_price);
          let getelecprice = await util.getText(ele);
          getelecprice = getelecprice.replace(/[^0-9\.]/gi,"");
            if(getelecprice.includes(yearpricetocomp))
            {
                //logger.info("Price is displaying as expected : "+getelecprice);
                return true;
            }else{logger.info("Price is not displaying as expected : "+getelecprice+" : "+yearpricetocomp);return false;}
        }
      }
    else
    {
      let ele = await util.waitForExpectedElement(conf_price);
      let getprice = await util.getText(ele);

          if(getprice.includes(yearpricetocomp))
          {
            //logger.info("Price is displaying as expected : "+getprice);
            return true;
          }
          else
          {
            logger.info("Price is not displaying as expected : "+getprice+" : "+yearpricetocomp);
            return false;
          }
    }
};

this.SelectFueltype = async function(arg)
{
  fueltype = arg;
  switch(arg)
  {
    case "Gas" :
              //logger.info("Inside Gas loop");
              util.waitForMoreTime();
              let result = await util.waitForExpectedElement(gasfuel)
              //logger.info("Selecting Gas Fuel : "+result);
              util.clickEvent(result);
    break;
    case "Electricity" :
              //logger.info("Inside Electricity loop");
              util.waitForMoreTime();
              let result1 = await util.waitForExpectedElement(elecfuel);
                //logger.info("Selecting Electricity Fuel : "+result1);
                util.clickEvent(result1);
    break;
    default : logger.info("Invalid input SelectFueltype "+arg);
  }
};

this.ClickConfirmStartDate = async function(){
    util.waitForMoreTime1();
    util.waitForMoreTime1();
    let checkstartdate = await util.visibilityOfElementLocated(conf_startdate);
    if(checkstartdate)
    {
      let result1 = await util.waitForExpectedElement(confstartdate);
      //util.retryingClick(by.css("button[type='submit']"));
      var result = element(confstartdate);
      //logger.info(result);
      result.click();
      //logger.info("############## clicked ClickConfirmStartDate button : "+result);
      util.waitForMoreTime1();
    }
    else
    {
      util.waitForMoreTime1();
      util.waitForMoreTime1();
      let result1 = await util.waitForExpectedElement(by.css("button[type='submit']"));
      // util.retryingClick(result.locator());
      var result = element(confstartdate);
      //logger.info(result);
      result.click();
      //logger.info("############## clicked ClickConfirmStartDate button : "+result);
      util.waitForMoreTime1();
    }
};

this.VerifySummaryPagevalidUntilquote = async function(text)
{
  let result= await util.visibilityOfElementLocated(by.xpath("//p[contains(text(),'"+text+" valid until')]"));
  if(result)
  {
    //logger.info("Quote valid until is displaying : "+result);
    return true;
  }
  else
  {
    logger.info("Quote valid until is not displaying : "+result); return false;
  }
};

this.leadcontactdetailsheader = async function(arg){
  util.waitForMoreTime1();
  let result = await util.waitForExpectedElement(largebusinessoverlay);
    let getlboverlay = await util.getText(result);
    //logger.info("The overlay value is : "+getlboverlay+" and arg is : "+arg);
    let islbovrlaysame = await util.compareText(getlboverlay,arg);
    if(islbovrlaysame)
    {
      //logger.info("large businessoverlay header is dsiplaying as expected : "+arg+" : "+getlboverlay);
      return true;
    }else{logger.info("large businessoverlay header is not dsiplaying as expected : "+arg+" : "+getlboverlay);return false;}
};

this.leadcontactdetailssubheader = async function(arg)
{
  let result = await util.waitForExpectedElement(largebusinessoverlaymessage);
    let getlboverlaymsg = await util.getText(result);
    let islbovrlaymsgsame = await util.compareText(getlboverlaymsg,arg);
    if(islbovrlaymsgsame)
    {
      //logger.info("large businessoverlay header is dsiplaying as expected : "+arg+" : "+getlboverlaymsg);
      return true;
    }else{logger.info("large businessoverlay header is not dsiplaying as expected : "+arg+" : "+getlboverlaymsg);return false;}
};

this.largebusinessoverlaymessage1 = async function(arg)
{
  let result = await util.waitForExpectedElement(largebusinessoverlaymessage1);
    let getlboverlaymsg1 = await util.getText(result);
    let islbovrlaymsgsame1 = await util.compareText(getlboverlaymsg1,arg);
    if(islbovrlaymsgsame1)
    {
      //logger.info("large businessoverlay header is dsiplaying as expected : "+arg+" : "+getlboverlaymsg1);
      return true;
    }else{logger.info("large businessoverlay header is not dsiplaying as expected : "+arg+" : "+getlboverlaymsg1);return false;}
};

this.verifyconfirmationpageLC = async function(arg)
{
  util.waitForMoreTime1();
  util.waitForMoreTime1();util.waitForMoreTime1();
  value = arg+" "+Firstname;
  let result = await util.waitForExpectedElement(largeconfpage);
    let result1 = await util.getText(result);
    let result2 = await util.compareText(result1,value);
    if(result2)
    {
      //logger.info("Text has been validated successfully for verifyconfirmationpageLC : "+result1+" : "+value);
      return true;
    }else{logger.info("Text has been validation failed for verifyconfirmationpageLC : "+result1+" : "+value);return false;}
};

this.verifyconfirmationpagemessageLC = async function(arg)
{
  let result = await util .waitForExpectedElement(largeconfpagemsg);
    let result1 = await util.getText(result);
    let result2 = await util.compareText(result1,arg);
    if(result2)
    {
      //logger.info("Text has been validated successfully for verifyconfirmationpagemessageLC : "+result1+" : "+arg);
      return true;
    }else{logger.info("Text validation failed for verifyconfirmationpagemessageLC : "+result1+" : "+arg);return false;}
};

this.verifysitedetails = async function(arg)
{
  that = this;
  //logger.info("Inside verifysitedetails : "+arg);
    switch(arg)
    {
      case "DualFuel":
                      let valadddual = await that.validatesiteaddressdual();
                      if(valadddual)
                      {
                        //logger.info("validate siteaddress dual is completed : "+valadddual);
                        return true;
                      }else{logger.info("validate siteaddress dual is Failed : "+valadddual);return false;}
      break;
      case "GasElecDE"://this.validategasmeterdetailsElecDE();
                      let valaddElecDE = await that.validategasmeterdetailsElecDE();
                      if(valaddElecDE)
                      {
                        //logger.info("validate siteaddress Elec DE is completed : "+valaddElecDE);
                        return true;
                      }else{logger.info("validate siteaddress Elec DE is Failed : "+valaddElecDE);return false;}
      break;
      case "GasElecHH"://this.validateelecmeterdetailsElecHH();
                      let valaddElecHH = await that.validateelecmeterdetailsElecHH();
                      if(valaddElecHH)
                      {
                        //logger.info("validate siteaddress Elec DE is completed : "+valaddElecHH);
                        return true;
                      }else{logger.info("validate siteaddress Elec DE is Failed : "+valaddElecHH);return false;}
      break;
      default: logger.info("Invalid input for verifysitedetails : "+arg);
      return false;
    }
};

this.validatesiteaddressdual = async function(){
  let ele = await util.waitForExpectedElement(sitedetails_address);
  let result = await util.getText(ele);
  if(result.includes(trimAddress))
  {
      //logger.info("Site Address is displaying as expected : "+result);
      let ele1 = await util.waitForExpectedElement(dualgasmprn)
      let result1 = await util.getText(ele1);
      let cmpmprn = await util.compareText(result1,dualgasmprnmsg);
      if(cmpmprn)
      {
        //logger.info("MPRN is displaying as expected : "+dualgasmprnmsg+" : "+result1);
        let ele2 = await util.waitForExpectedElement(dualelecmpan);
        let getmpanvalue = await util.getText(ele2);
        let cmpmpan = await util.compareText(getmpanvalue,dualelecmpanmsg);
        if(cmpmpan)
        {
          //logger.info("MPAN is displaying as expected : "+dualelecmpanmsg+" : "+getmpanvalue);
          return true;
        }else{logger.info("MPAN is not displaying as expected : "+dualelecmpanmsg+" : "+getmpanvalue);return false;}
      }else{logger.info("MPRN is not displaying as expected : "+dualgasmprnmsg+" : "+result1);return false;}
    }else{logger.info("Failed - Verification of Site Address for Dual : "+result+" : "+trimAddress);return false;}
};

this.validategasmeterdetailsElecDE = async function()
{
  util.waitForMoreTime1();
  let addressele = await util.waitForExpectedElement(sitedetails_address);
  var address = await util.getText(addressele);
  if(address.includes(trimAddress))
  {
  //logger.info("Site Address is displaying as expected : "+address);
  let ele = await util.waitForExpectedElement(singlemeterdetails);
  var result2 = await util.getText(ele);
  let result1 = await util.compareText(result2,singlemetergasmsgelecDE);
  if(result1)
  {
    //logger.info("Gas meter deatils are displaying as expected : "+singlemetergasmsgelecDE+" : "+result2);
    return true;
    }else{logger.info("Gas meter deatils are not displaying as expected : "+singlemetergasmsgelecDE+" : "+result);return false;}
  }else{logger.info("Failed - Verification of Site Address for Dual : "+result+" : "+trimAddress);return false;}
};

this.verifymessagesforElecDEandHH = async function(){
  let addressele = await util.waitForExpectedElement(sitedetails_address);
  var address = await util.getText(addressele);
  if(address.includes(trimAddress))
  {
  //logger.info("Site Address is displaying as expected : "+address);
  let ele =  await util.waitForExpectedElement(headerofDEelec);
  var result = await util.getText(ele);
  let result1 = await util.compareText(result,headerofDEelecmsg);
  if(result1)
  {
    //logger.info("Header for headerofDEelecmsg is as expected : "+result+" : "+headerofDEelecmsg);
    let ele1 = await util.waitForExpectedElement(elecDEpathmsg1);
    var getelecDEpathmsg1 = await util.getText(ele1);
    let cmpelecDEpathmsg1 = await util.compareText(getelecDEpathmsg1,singlemeterdetailsmsg1);
    if(cmpelecDEpathmsg1)
    {
      //logger.info("Message for singlemeterdetailsmsg1 is as expected : "+getelecDEpathmsg1+" : "+cmpelecDEpathmsg1);
      let ele2 = await util.waitForExpectedElement(elecDEpathmsg2);
      var getsinglemeterdetails = await util.getText(ele2);
      let cmpsinglemeterdetails = await util.compareText(getsinglemeterdetails,singlemeterdetailsmsg2);
      if(cmpsinglemeterdetails)
      {
        //logger.info("singlemeterdetails is as expected : "+getsinglemeterdetails+" : "+getsinglemeterdetails);
        return true;
      }else{logger.info("Header for singlemeterdetails is not as expected : "+getsinglemeterdetails+" : "+singlemeterdetailsmsg2);return false;}
    }else{logger.info("Message for singlemeterdetailsmsg1 is not as expected : "+getelecDEpathmsg1+" : "+singlemeterdetailsmsg1);return false;}
  }else{logger.info("Header for headerofDEelecmsg is as expected : "+result+" : "+headerofDEelecmsg);return false;}
  }else{logger.info("Failed - Verification of Site Address for Dual : "+result+" : "+trimAddress);return false;}
};

this.verifymessagesforElecHH = async function()
{
  let ele = await util.waitForExpectedElement(headerofDEelec);
  var result = await util.getText(ele);
  let result1 = await util.compareText(result,headerofDEelecmsg);
      if(result1)
      {
        //logger.info("Header for headerofDEelecmsg is as expected : "+result+" : "+headerofDEelecmsg);
        let ele1 = await util.waitForExpectedElement(elecDEpathmsg1);
        var getelecDEpathmsg1 = await util.getText(ele1);
        let cmpelecDEpathmsg1 = await util.compareText(getelecDEpathmsg1,singlemeterdetailsmsg1HH);
          if(cmpelecDEpathmsg1)
          {
            //logger.info("Message for singlemeterdetailsmsg1 is as expected : "+getelecDEpathmsg1+" : "+cmpelecDEpathmsg1);
            let ele2 = await util.waitForExpectedElement(elecDEpathmsg2);
            var getsinglemeterdetails = await util.getText(ele2);
            let cmpsinglemeterdetails = await util.compareText(getsinglemeterdetails,singlemeterdetailsmsg2);
              if(cmpsinglemeterdetails)
              {
                //logger.info("singlemeterdetails is as expected : "+getsinglemeterdetails+" : "+getsinglemeterdetails);
                return true;
              }else{logger.info("Header for singlemeterdetails is not as expected : "+getsinglemeterdetails+" : "+singlemeterdetailsmsg2);return false;}
          }else{logger.info("Message for singlemeterdetailsmsg1 is not as expected : "+getelecDEpathmsg1+" : "+singlemeterdetailsmsg1HH);return false;}
        }else{logger.info("Header for headerofDEelecmsg is as expected : "+result+" : "+headerofDEelecmsg);return false;}
};

this.validateelecmeterdetailsElecHH = async function()
{
  util.waitForMoreTime1();
  let address = await util.waitForExpectedElement(sitedetails_address);
  var addressval = await util.getText(address);
  if(addressval.includes(trimAddress))
  {
    //logger.info("Passed - Verification of Site Address for ElecHH : "+addressval+" : "+trimAddress);
    let ele = await util.waitForExpectedElement(singlemeterdetails)
    var result = await util.getText(ele);
    let result1 = await util.compareText(result,singlemetergasmsgelecHH);
    if(result1)
    {
      //logger.info("values are same for validateelecmeterdetailsElecHH : "+result+" : "+singlemetergasmsgelecHH);
      return true;
    }else{logger.info("values are not same for validateelecmeterdetailsElecHH : "+result+" : "+singlemetergasmsgelecHH);return false;}
  }else{logger.info("Failed - Verification of Site Address for ElecHH : "+result+" : "+trimAddress);return false;}
};

this.entermpan = async function(arg)
{
  util.waitForPageLoad();
  let element = await util.waitForExpectedElement(mpanbox);
  util.enterText(element,arg);
};

this.entermprn = async function(arg)
{
  util.waitForPageLoad();
  let element = await util.waitForExpectedElement(mprnbox);
  util.enterText(element,arg);
};

this.clickaftermpxn = async function()
{
  let element1 = await util.waitForExpectedElement(mpan_findmymeter);
  util.clickEvent(element1);
};

};

module.exports = new GetAQuotePage();
