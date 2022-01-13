RetrieveQuote = function(){
   var util;
   var log4js = require('log4js');
   var logger = log4js.getLogger();
   var util=require('../Utils/FrameworkUtil.js');
   var Futil=require('../Utils/FunctionalUtil.js');
   var expect = require('expect');
   var GetAQuote = require('../pages/obj_GetAQuotePage.js');

//web elements
   var valuetype = "",quoteid="";
   var gaqpagetitle = by.css("h1.mb-4");
   var gaqpagetitle1 = "Get a quote for your business energy";
   var pagetitle = by.css("span[class='apply-h2']");
   var pagetitle_GAQ = by.css(".px0 h1");
   var retrievequotelink = by.css("a[href='/business/gas-and-electricity/retrieve-a-quote']");
   var retrievetitle = by.css("h1.mt-5");
   var quoteid_Label = by.css("label[for='quoteId']");
   var quoteid_input = by.css("Input[name='quoteId']");
   var email_Label = by.css("label[for='email']");
   var email_input = by.css("Input[name='email']");
   var quoteid_error = by.css("div[data-test-retrieve-quoteid] .form-control-feedback");
   var email_error = by.css("div[data-test-retrieve-email] .form-control-feedback");
   var errormsg,eleclength ="",gaslength = "";
   var expiredtext = by.css("h2.mt-5");
   var expiredmsg = by.xpath("//*[@class='retrieve-quote']//p");
   var expiredmsg1 = "To see our latest energy prices you will need to generate a new quote.";
   var gobackfromexpiredpage = by.css("button[type='button']");
   var retrievequote = by.css("button[type='button']");
   var cantfindquote = by.css("h2.mt-5");
   var cantfindquotemsg = by.xpath("//*[@class='retrieve-quote']//p");
   var cantfindquotemsg1 = "Please check your quote reference number and email address, or you can get a new quote.";
   var gobackfromcantfinddpage = by.css(".mb-5 button[type='button']");
   var gobacktoretrievepage = by.css(".mt-5 button[type='button']");
   var quotepagetitle = by.css(".mb-2 h1");
   var quotepagetitle1 = "Your energy quote";
   var quoteidvalue = by.css(".col-md-4 .quotation__value");
   var confpageheader = by.xpath("//h1[text()='Complete your purchase']");
   var conf_reference = by.css('.quoterferencerte p');
   var conf_price = by.css('.annualestimatedprice h2');
   // var elecrowcount = by.xpath("//*[@class='price-summary ember-view']/div[3]//*[@class='price-description ember-view']/div[contains(@class,'ember-view')]");
   // var gasrowcount = by.xpath("//*[@class='price-summary ember-view']/div[4]//*[@class='price-description ember-view']/div[contains(@class,'ember-view')]");
   // var elecrowcountdd = by.xpath("//*[@class='price-summary ember-view']/div[3]//*[@class='price-description ember-view']/div[contains(@class,'ember-view')]");
   // var gasrowcountdd = by.xpath("//*[@class='price-summary ember-view']/div[4]//*[@class='price-description ember-view']/div[contains(@class,'ember-view')]");
   var gasconsumption_moredetailsnoncma = by.css("#quote-summary-meter-gas strong");
   var elecconsumption_moredetailsnoncma = by.css("#quote-summary-meter-electricity strong");
   var consumption="",yearpricetocomp="";
   var GasProductsbothnoncma = ['1 Year Fixed rate','2 Year Fixed rate','3 Year Fixed rate'];
   var GasProductsbothnoncmawoDD = ['1 Year Fixed rate','2 Year Fixed rate','3 Year Fixed rate'];
   var ElecProductscma = ['1 Year Online Saver','1 Year Direct','1 Year Direct','2 Year Direct','2 Year Direct','3 Year Direct','3 Year Direct','1 Year British Gas Lite','2 Year British Gas Lite','3 Year British Gas Lite','4 Year British Gas Lite','5 Year British Gas Lite','6 Months Landlord tariff'];
   var ElecProductscmawoDD = ['1 Year Direct','1 Year Direct','2 Year Direct','2 Year Direct','3 Year Direct','3 Year Direct','6 Months Landlord tariff'];
   var ElecProductsnoncma = ['1 Year Fixed rate','1 Year Fixed rate','2 Year Fixed rate',' Year Fixed rate','3 Year Fixed rate','3 Year Fixed rate','1 Year British Gas Lite','2 Year British Gas Lite','3 Year British Gas Lite','4 Year British Gas Lite','5 Year British Gas Lite','6 Months Landlord tariff']
   var ElecProductsnoncmawoDD = ['1 Year Fixed rate','1 Year Fixed rate','2 Year Fixed rate',' Year Fixed rate','3 Year Fixed rate','3 Year Fixed rate','6 Months Landlord tariff'];
   var ElecProductsbothnoncma = ['1 Year Fixed rate','2 Year Fixed rate','3 Year Fixed rate'];
   var ElecProductsbothnoncmawoDD = ['1 Year Fixed rate','2 Year Fixed rate','3 Year Fixed rate'];


 this.comparetitleofthepage = async function(arg1,arg2)
 {
   that = this;
   util.waitForMoreTime1();
   if(arg1 == "Get a Quote")
   {
     var result = await util.visibilityOfElementLocated(pagetitle_GAQ);
     var value = await that.comparetitle(pagetitle_GAQ,arg2);
     return value;
   }
   else
   {
     var result = await util.visibilityOfElementLocated(pagetitle);
     var value = await that.comparetitle(pagetitle,arg2);
     return value;
   }
 };

 this.comparetitle = async function(result,scenario)
 {
   if(result)
   {
     var pagetitle_ele = await util.waitForExpectedElement(result);
     var pagetitle = await util.getText(pagetitle_ele)
     var result1 = await util.compareText(pagetitle,scenario);
     if(result1)
     {
       //logger.info("Title is same : "+result1+" : "+scenario);
       return true;
     }
     else
     {
       //logger.info("Title is not same : "+result1+" : "+scenario);
       return false;
     }
   }
 };

 this.clickretrievequote = async function()
 {
   browser.executeScript('window.scrollTo(0,800);');
   let element1 = await util.waitForExpectedElement(retrievequotelink);
   util.clickEvent(element1);
};

this.verifylandingpage = async function(arg)
{
  var result = await util.waitForExpectedElement(retrievetitle);
  var title = await util.getText(result);
  var result1 = await util.compareText(title,arg);
  if(result1)
  {
    //logger.info("Title is same in Retrieve quote landing page :: "+title);
    var result2 = await util.visibilityOfElementLocated(quoteid_input);
    if(result2)
    {
      //logger.info("QuoteId field is displaying Retrieve quote landing page");
      var result3 = await util.visibilityOfElementLocated(email_input);
      if(result3)
      {
        //logger.info("Email field is displaying Retrieve quote landing page");
        return true;
      }else("Email field is not displaying Retrieve quote landing page");return false;
    }else("QuoteId field is not displaying Retrieve quote landing page");return false;
  }else("Title is not same in Retrieve quote landing page :: "+title);return false;
};

this.enterquoteid = async function(arg1,arg2)
{
  errormsg = arg2;
  util.waitForMoreTime1();
  var result = await util.waitForExpectedElement(quoteid_input);
  util.enterText(result,arg1);
};

this.enteremail = async function(arg1,arg2)
{
  errormsg = arg2;
  util.waitForMoreTime1();
  var result = await util.waitForExpectedElement(email_input);
  util.enterText(result,arg1);
  var result1 = await util.waitForExpectedElement(quoteid_Label);
  util.clickEvent(result1);
};

this.verifyerrormessage = async function(arg)
{
  error = arg;
  //logger.info("************* : "+errormsg);
  if(errormsg == "quoteid")
  {
    var result1 = await util.waitForExpectedElement(email_input);
    util.clickEvent(result1);
    var result = await util.waitForExpectedElement(quoteid_error);
    var err = await util.getText(result);
    var result1 = await util.compareText(error,err);
      if(result1)
      {
        //logger.info("Error message is displaying as expected - "+error+" : "+err);
        return true;
      }
      else
      {
        logger.info("Error message is not displaying as expected - "+error+" : "+err);
        return false;
      }
    }
    else if(errormsg == "email")
    {
      var result1 = await util.waitForExpectedElement(quoteid_input);
      util.clickEvent(result1);
      var result = await util.waitForExpectedElement(email_error);
      var err = await util.getText(result);
      var result1 = await util.compareText(error,err);
        if(result1)
        {
          //logger.info("Error message is displaying as expected - "+error+" : "+err);
          return true;
        }
        else
        {
          logger.info("Error message is not displaying as expected - "+error+" : "+err);
          return false;
        }
      }
};

this.retrievequote_click = async function()
{
  var result1 = await util.waitForExpectedElement(retrievequote);
  util.clickEvent(result1);
  util.waitForMoreTime1();
};

this.quoteexpired = async function(arg)
{
  var result = await util.waitForExpectedElement(expiredtext);
  var title = await util.getText(result);
  var result1 = await util.compareText(title,arg);
  if(result1)
  {
    //logger.info("Title is same for expired scenario : "+title);
    var result2 = await util.waitForExpectedElement(expiredmsg);
    var title1 = await util.getText(result2);
    var result3 = await util.compareText(title1,expiredmsg1);
    if(result3)
    {
      //logger.info("Message is displaying as expected for quote expired scenario : "+title1);
      return true;
    }else("Message is not displayiong as expected for quote expired scenario : "+title1);return false;
  }else("Title is not same for expired scenario : "+title);return false;
};

this.quotecantfind = async function(arg)
{
  var result = await util.waitForExpectedElement(cantfindquote);
  var title = await util.getText(result);
  var result1 = await util.compareText(title,arg);
  if(result1)
  {
    //logger.info("Title is same for quote can't find scenario : "+title);
    var result2 = await util.waitForExpectedElement(cantfindquotemsg);
    var title1 = await util.getText(result2);
    var result3 = await util.compareText(title1,cantfindquotemsg1);
    if(result3)
    {
      //logger.info("Message is displayiong as expected for quote quote can't find scenario : "+title1);
      return true;
    }else("Message is not displayiong as expected for quote quote can't find scenario : "+title1);return false;
  }else("Title is not same for quote can't find scenario : "+title);return false;
};

this.clickgetaquote = async function()
{
  var result = await util.waitForExpectedElement(gobackfromcantfinddpage);
  util.clickEvent(result);
  util.waitForMoreTime1();
};

this.clickgetaquotefromcantfind = async function()
{
  var result = await util.waitForExpectedElement(gobackfromexpiredpage);
  util.clickEvent(result);
  util.waitForMoreTime1();
};

this.verifygaqpage = async function()
{
  var result1 = await util.waitForExpectedElement(gaqpagetitle);
  var title = await util.getText(result1);
  var result1 = await util.compareText(title,gaqpagetitle1);
  if(result1)
  {
    //logger.info("User is able to navigate to the Get a quote page : "+title);
    return true;
  }
  else
  {
    logger.info("User is not able to navigate to the Get a quote page : "+title);
    return false;
  }
};

this.clickgoback = async function()
{
  var result = await util.waitForExpectedElement(gobacktoretrievepage);
  util.clickEvent(result);
  util.waitForMoreTime1();
};

this.retrieveenergyquote = async function()
{
  util.waitForMoreTime1();
  util.waitForMoreTime();
  var result = await util.waitForExpectedElement(quotepagetitle);
  var title = await util.getText(result);
  var result1 = await util.compareText(title,quotepagetitle1);
  if(result1)
  {
    //logger.info("User is able to navigate to the your energy quote page : "+title);
    return true;
  }
  else
  {
    logger.info("User is not able to navigate to the your energy quote page : "+title);
    return false;
  }
};

this.validatequoteid = async function(arg)
{
  quoteid = arg;
  util.waitForMoreTime1();
  var result = await util.waitForExpectedElement(quoteidvalue);
  var title = await util.getText(result);
  var result1 = await util.compareText(title,arg);
  if(result1)
  {
    //logger.info("The value of quoteId is same : "+title+" : "+arg);
    return true;
  }
  else
  {
    logger.info("The value of quoteId is not same : "+title+" : "+arg);
    return false;
  }
};

this.getelecrowcount = async function(elecrowcountval){
  util.waitForMoreTime1();
  var ele = "";
  ele = await util.findElements(elecrowcountval);
  eleclength = ele.length;
  //logger.info("*********Elec row count is : "+eleclength+" : "+ele.length);
};

this.getgasrowcount = async function(gasrowcountval){
  util.waitForMoreTime1();
  var ele1 = "";
  var ele1 = await util.findElements(gasrowcountval);
  gaslength = ele1.length;
  //logger.info("*********Gas row count is : "+gaslength+" : "+ele1.length);
};

this.Getconsumption = async function(arg)
{
  that = this;
  util.waitForMoreTime();
  await GetAQuote.expandmoredetails();
  switch(arg)
  {
    case "NoncmaGas":
    case "NoncmaElec": await that.noncmaverifyconsumptioninmoredetails(arg);
    break;
  }

};

this.noncmaverifyconsumptioninmoredetails = async function(arg)
{
  var ele;
  switch(arg)
  {
    case "NoncmaGas": ele = gasconsumption_moredetailsnoncma;
    break;
    case "NoncmaElec": ele = elecconsumption_moredetailsnoncma;
    break;
  }
    let result = await util.waitForExpectedElement(ele);
    consumption = await util.getText(result);
    consumption = consumption.replace(/[^0-9\.]/gi,"");
    await GetAQuote.expandmoredetails();
};

this.findbuybutton = async function(product,scenario)
{
  that=this;
  scrol = 0;
  eleclength =undefined;
  gaslength = undefined;
  switch(scenario)
  {
    case "GasCMA":
    case "ElecCMA":
    case "NoncmaGas":
    case "NoncmaElec": await that.getgasrowcount(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li"));
                  for(var i = 2;i<=gaslength;i++)//eleclength
                  {
                    let result = await that.clickbuyRetrieveQuote(i,product);
                    if(result){break;}
                  }
    break;
    default : logger.info("Invalid input");
  }

};

this.clickbuyRetrieveQuote = async function(i,product)
{
  if(i == 3)
  {
    browser.executeScript('window.scrollTo(0,500);');
  }
  valuetype = "";
  var ProductName = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li["+i+"]//*[@class='product-grid__products']/p[1]"));
  var product_name = await util.getText(ProductName);
  if(product_name.includes(product))
  {
    var element1 = element(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li["+i+"]//div[1]//*[@class='product-grid__vat-year']/h4"));
    yearpricetocomp = await util.getText(element1);
    yearpricetocomp = yearpricetocomp.replace(/[^0-9\.]/gi,"");
    yearpricetocomp = parseFloat(yearpricetocomp);
    var idDDdisplaying = await util.findElements(by.css("span[class='d-block product-grid__head--show']"));
    if(idDDdisplaying.length > 0)
    {
      valuetype = "DD";
    }
    util.waitForMoreTime1();util.waitForMoreTime();
    var buybutton = await util.waitForExpectedElement(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li["+i+"]/div//*[@class='btn btn-submit product-grid__buy ember-view']"));
    util.retryingClick(buybutton.locator());
    logger.info("buy button clicked");
    return true;
  }
};

this.compareprice = async function(scenario,paytype)
{
  that=this;
  scrol = 0;
  eleclength =undefined;
  gaslength = undefined;
      switch(scenario)
      {
        case "NoncmaGas":
                      await that.getgasrowcount(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li"));
                      for(var i = 2;i<=gaslength;i++)//eleclength
                      {
                        let result = await that.VerifyGasPriceTableNonCMA(i,paytype,scenario,3);
                        if(result){}else{logger.info("Values are not same for the Gas row : "+i);return false;}
                      }
                      return true;
        break;
        case "GasCMA": case "ElecCMA":
                      await that.getgasrowcount(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li"));
                      for(var i = 2;i<=gaslength;i++)//eleclength
                      {
                        let result = await that.VerifyGasPriceTable(i,paytype,scenario,3);
                        if(result){}else{logger.info("Values are not same for the Gas row : "+i);return false;}
                      }
                      return true;
        break;
        case "NoncmaElec":
                      await that.getelecrowcount(by.xpath("//*[@class='quotation']/div[2]/div[1]//ul/li"));
                      for(var i = 2;i<=eleclength;i++)//eleclength
                      {
                        let result = await that.VerifyElecPriceTableNonCMA(i,paytype,scenario,3);
                        if(result){}else{logger.info("Values are not same for the elec row : "+i);return false;}
                      }
                      return true;
        break;
        default : logger.info("Invalid input");
      }
};

this.VerifyGasPriceTableNonCMA = async function(ui_row,paytype,scenario,row)
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

          switch(paytype)
          {
            case "DD":
              switch(scenario)
              {
                case "NoncmaGas": var result = product.includes(GasProductsbothnoncma[pele]);
                break;
              }
            break;
            case "without DD":
              switch(scenario)
              {
                case "NoncmaGas": var result = product.includes(GasProductsbothnoncmawoDD[pele]);
                break;
              }
          }
          if(result)
          {
            util.waitForMoreTime();
            let scharge = await util.getText(Standingcharge);
            scharge = scharge.replace(/p/gi,"");
            let urate = await util.getText(UniRate);
            urate = urate.replace(/p/gi,"");
            let priceyear = await util.getText(PricePerYear);
            priceyear = priceyear.replace(/[£*,]/gi,"");
            priceyear = priceyear.slice(0,-1);
            priceyear = parseFloat(priceyear);
            let totalprice = await util.getText(PriceTotal);
            totalprice = totalprice.replace(/[^0-9\.]/gi,"");
            totalprice = totalprice.slice(0,-1);
            totalprice = parseFloat(totalprice);
            let pricemonth = await util.getText(PricePerMonth);
            pricemonth = pricemonth.replace(/[^0-9\.]/gi,"");
            pricemonth = pricemonth.slice(0,-1);
            pricemonth = parseFloat(pricemonth);
            if(paytype == "DD")
            {
              var result1 = await GetAQuote.pricecalculationGas(consumption,product,urate,scharge,priceyear,pricemonth,totalprice);
            }
            else if(paytype == "without DD")
            {
              var result1 = await GetAQuote.pricecalculationGaswoDD(consumption,product,urate,scharge,priceyear,pricemonth,totalprice);
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

this.VerifyGasPriceTable = async function(ui_row,paytype,scenario,row)
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
          if(scenario == "GasCMA")
          {
            consumption = 24000;
          }
          else
          {
            consumption = 12000;
          }
          switch(paytype)
          {
            case "DD":
              switch(scenario)
              {
                case "GasCMA":
                case "ElecCMA": var result = product.includes("1 Year Fixed rate");
                break;
                case "NoncmaGas": var result = product.includes(GasProductsbothnoncma[pele]);
                break;
                case "NoncmaElec": var result = product.includes(ElecProductsbothnoncma[pele]);
                break;
              }
            break;
            case "without DD":
              switch(scenario)
              {
                case "GasCMA":
                case "ElecCMA": var result = product.includes("1 Year Fixed rate");
                break;
                case "NoncmaGas": var result = product.includes(GasProductsbothnoncma[pele]);
                break;
                case "NoncmaElec": var result = product.includes(ElecProductsbothnoncma[pele]);
                break;
              }
          }
          if(result)
          {
            logger.info(" ProductName is matching - "+product);
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
            pricemonth = pricemonth.slice(0,-1);
            pricemonth = parseFloat(pricemonth);
            if(paytype == "DD")
            {
              var result1 = await GetAQuote.pricecalculationGas(consumption,product,urate,scharge,priceyear,pricemonth,totalprice);
            }
            else if(paytype == "without DD")
            {
              var result1 = await GetAQuote.pricecalculationGaswoDD(consumption,product,urate,scharge,priceyear,pricemonth,totalprice);
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

this.VerifyElecPriceTableNonCMA = async function(ui_row,paytype,scenario,row)
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
          switch(paytype)
          {
            case "DD":
              switch(scenario)
              {
                case "both nonCMA Elec":
                case "NoncmaElec": var result = product.includes(ElecProductsbothnoncma[pele]);
                //**********hjbj*******************iok8
                break;
              }
            break;
            case "without DD":
              switch(scenario)
              {
                case "both nonCMA Elec":
                case "NoncmaElec": var result = product.includes(ElecProductsbothnoncmawoDD[pele]);
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
            if(paytype == "DD")
            {
              var result1 = await GetAQuote.pricecalculationElec(consumption,product,urate,scharge,priceyear,pricemonth,totalprice);
            }
            else if(paytype == "without DD")
            {
              var result1 = await GetAQuote.pricecalculationElecwoDD(consumption,product,urate,scharge,priceyear,pricemonth,totalprice);
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

this.verifyGAQconfirmationpage = async function(arg)
{
  //logger.info("inside verifyGAQconfirmationpage ******************");
  that = this;
  util.waitForMoreTime1();
  util.waitForMoreTime1();
  util.waitForMoreTime1();
  util.waitForMoreTime1();
  util.waitForMoreTime1();
  // util.waitForMoreTime1();
  // util.waitForMoreTime1();
  // util.waitForMoreTime1();
  // util.waitForMoreTime1();
  result = await util.waitForExpectedElement(confpageheader);
  let valueconfpageheader = await util.getText(result);
  let confpheader = await util.compareText(valueconfpageheader,arg);
    if(confpheader)
    {
      //logger.info("Confpageheader values are same : "+valueconfpageheader+" : "+arg);
      let ele = await util.waitForExpectedElement(conf_reference);
      let isrefdisplayed = await util.getText(ele);
      //logger.info("reference number : "+isrefdisplayed+" : "+quoteid);
      if(isrefdisplayed.includes(quoteid))
      {
        //logger.info("conf_reference value is displyaing : "+isrefdisplayed);
        let checkpricec = await that.checkpriceconfpage_retrievequote();
        if(checkpricec)
        {
          logger.info("confirmation page is displyaing as expected : "+valueconfpageheader+" : "+checkpricec+" : "+isrefdisplayed);
          return true;
        }else{logger.info("check price confpage is not displyaing : "+checkpricec);return false;}
      }else{logger.info("conf_reference value is not displyaing : "+isrefdisplayed);return false;}
    }else{logger.info("Confpageheader values are not same : "+valueconfpageheader+" : "+arg);return false;}
};

this.checkpriceconfpage_retrievequote= async function()
{
  let result = await util.waitForExpectedElement(conf_price);
  //logger.info("Inside Check price : "+tariffname);
      let ele = await util.waitForExpectedElement(conf_price);
      let getprice = await util.getText(ele);
      getprice = getprice.replace(/[^0-9\.]/gi,"");
      //logger.info("Price is displaying as expected*** : "+getprice);
      if(valuetype == "DD")
      {
        var discount = getprice*(7/100);
        yearpricetocomp = yearpricetocomp+discount;
        yearpricetocomp = yearpricetocomp.toFixed(2);
        //logger.info("Price is displaying as expected****** : "+yearpricetocomp);
      }
          if(getprice.includes(yearpricetocomp))
          {
            logger.info("Price is displaying as expected******* : "+getprice);
            return true;
          }
          else
          {
            logger.info("Price is not displaying as expected : "+getprice+" : "+yearpricetocomp);
            return false;
          }
};


}

module.exports = new RetrieveQuote();
