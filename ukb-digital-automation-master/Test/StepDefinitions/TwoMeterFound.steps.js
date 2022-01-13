var GetAQuote = require('../pages/obj_GetAQuotePage.js');
var data = require('../Resources/testdata.json');
var util=require('../Utils/FunctionalUtil.js');
var cache = element(by.css('.fa-close'));
var log4js = require('log4js');
var logger = log4js.getLogger();
var assert = require('assert');
var url = data[0].UKB_GAQ_url;

module.exports = function()
{
  this.setDefaultTimeout(1000 * 1000);

  //Nacigate to business GAQ home page
this.Given(/^the user is on Anonymous GAQ page$/,async function(){
    var url1 = browser.baseUrl+url;
    await util.launchUrl(url1);
    let result = await GetAQuote.comparetitleofthepage("Get a quote for your business energy");
    assert.equal(result,true,"Unable to validate title of the GAQ landing page");
});

this.When(/^the user enters postcode as \"([^\"]*)\" and selects address as \"([^\"]*)\"$/,async function(postcode,address){
  let result = await GetAQuote.EnterPostcodeandAddress(postcode,address);
  assert.equal(result,true,"Unable to select the address");
});

this.When(/^the user enters postcode as \"([^\"]*)\" and skips the address$/,async function(postcode){
  let result = await GetAQuote.EnterPostcode(postcode);
  assert.equal(result,true,"Unable to select the address");
  await GetAQuote.clickskipaddress();
});

this.When(/^user clicks skip this step in MPxN section$/,async function(){
  await GetAQuote.clickskipmpxn();
});

this.When(/^the user enters elec consumption as \"([^\"]*)\" for every \"([^\"]*)\" And gas consumption as \"([^\"]*)\" for every \"([^\"]*)\"$/,async function(econ,edur,gcon,gdur){
  await GetAQuote.findconsumptiondetails();
  await GetAQuote.EnterElectricityConsumptionAndDuration(econ,edur);
  await GetAQuote.EnterGasConsumptionAndDuration(gcon,gdur);
  await GetAQuote.ClickNextafterConsumption();
});

this.When(/^the user enters \"([^\"]*)\" consumption as \"([^\"]*)\" for every \"([^\"]*)\"$/,async function(fuel,con,dur)
{
  if(fuel == "Electricity")
  {
    await GetAQuote.EnterElectricityConsumptionAndDuration(con,dur);
    await GetAQuote.ClickNextafterConsumption();
  }
  else if(fuel == "Gas")
  {
    await GetAQuote.EnterGasConsumptionAndDuration(con,dur);
    await GetAQuote.ClickNextafterConsumption();
  }else if(fuel == "Gas(I&C)" || fuel == "Gas(Existing supply)" || fuel == "Gas(LargeConsumption)" || fuel == "GasnonCMA" || fuel == "GasonlyCMA")
  {
    await GetAQuote.EnterGasConsumptionAndDuration_onemeterfound(con,dur);
    await GetAQuote.ClickNextafterConsumption();
  }else if(fuel == "GasCMA")
  {
    await GetAQuote.EnterGasCMAConsumptionAndDuration(con,dur);
    await GetAQuote.ClickNextafterConsumption();
  }

});

this.When(/^User is not entering contact details and clicking next$/,async function()
{
  await GetAQuote.skipcontactdetails();
});

this.Then(/^verify price summary page Header, Price Reference Number, Price Valid Until and Direct debit details$/,async function()
{
  let isTitleMatch = await GetAQuote.VerifySummaryPageHeader("Your business energy prices");
  assert.equal(isTitleMatch,true,"price summary page Header is not matching");
  let isDDVisible=await GetAQuote.VerifySummaryPageDirectDebitText();
  assert.equal(isDDVisible,true,"Direct debit detail is not visible");
  let isuntilVisible=await GetAQuote.VerifySummaryPagevalidUntil("Price");
  assert.equal(isuntilVisible,true,"Price Valid Until is not visible");
});

this.Then(/^verify Filter for gas and elec new user product$/,async function()
{
  let result = await GetAQuote.VerifySummaryPageContractLength("6 Months,1 Year,2 Year,3 Year,4 Year,5 Year,All");
  assert.equal(result,true,"VerifySummaryPageContractLength details are not valid");

  let result1 = await GetAQuote.VerifySummaryPagePricePlan("New customer price,All");
  assert.equal(result1,true,"VerifySummaryPagePricePlan details are not valid");

  let result2 = await GetAQuote.VerifySummaryPageProductType("Direct,Online,Broker Site Safety Check,Landlord,British Gas Lite,Standing charge,No standing charge,All" );
  assert.equal(result2,true,"VerifySummaryPageProductType details are not valid");
});

this.Then(/^verify Filter for \"([^\"]*)\" new user product$/,async function(arg)
{
  if(arg == "gas"){
    let result = await GetAQuote.VerifySummaryPageContractLength("6 Months,1 Year,2 Year,3 Year,All");
    assert.equal(result,true,"VerifySummaryPageContractLength details are not valid");
  }else if(arg == "elec")
  {
  let result = await GetAQuote.VerifySummaryPageContractLength("6 Months,1 Year,2 Year,3 Year,4 Year,5 Year,All");
  assert.equal(result,true,"VerifySummaryPageContractLength details are not valid");
  }

  let result1 = await GetAQuote.VerifySummaryPagePricePlan("New customer price,All");
  assert.equal(result1,true,"VerifySummaryPagePricePlan details are not valid");

  if(arg == "gas"){
    let result2 = await GetAQuote.VerifySummaryPageProductType("Online,Direct,Broker Site Safety Check,Landlord,Standing charge,No standing charge,All" );
    assert.equal(result2,true,"VerifySummaryPageProductType details are not valid");
  }else if(arg == "elec")
  {
  let result2 = await GetAQuote.VerifySummaryPageProductType("Online,Direct,British Gas Lite,Landlord,Standing charge,No standing charge,All" );
  assert.equal(result2,true,"VerifySummaryPageProductType details are not valid");
  }
});

this.Then(/^verify Price table for \"([^\"]*)\" new user product - Acquisition prices \"([^\"]*)\" and \"([^\"]*)\"$/,async function(arg1,arg2,arg3)
{
  let result = await GetAQuote.comparegaqtableprices(arg2,arg3);
  assert.equal(result,true,"Price mismatch in table for new user product");
});

this.Then(/^verify Quote table for \"([^\"]*)\" new user product - Acquisition prices \"([^\"]*)\" and \"([^\"]*)\"$/,async function(arg1,arg2,arg3)
{
  let result = await GetAQuote.comparegaqtableprices(arg2,arg3);
  assert.equal(result,true,"Price mismatch in table for new user product");
});

this.When(/^the user expand More details$/,async function()
{
  let result = await GetAQuote.expandmoredetails();
  assert.equal(result,true,"Unable to click expand more details button");
});

this.Then(/^User should see the address and meter details for Dual products$/,async function()
{
    let result = await GetAQuote.verifyaddressinmoredetails();
    assert.equal(result,true,"unable to validate Address - Dual products");
    let result1 = await GetAQuote.verifyelecconsumptioninmoredetails();
    assert.equal(result1,true,"unable to validate Elec Consumption - Dual products");
    let result2 = await GetAQuote.verifygasconsumptioninmoredetails();
    assert.equal(result2,true,"unable to validate Gas Consumption - Dual products");
});

this.Then(/^User should see the address and meter details for \"([^\"]*)\" products$/,async function(arg)
{
    let result = await GetAQuote.verifyaddressinmoredetails(arg);
    assert.equal(result,true,"unable to validate Address - Dual products");
    if(arg == "Electricity")
    {
    let result1 = await GetAQuote.verifyelecconsumptioninmoredetails();
    assert.equal(result1,true,"unable to validate Elec Consumption - Dual products");
  }
  else if(arg == "Gas")
  {
    let result2 = await GetAQuote.verifygasconsumptioninmoredetails();
    assert.equal(result2,true,"unable to validate Gas Consumption - Dual products");
  }
  else if(arg == "skipaddress" || arg == "skipmpxn")
  {
    let result2 = await GetAQuote.skipaddress_elecconsumptioninmoredetails();
    assert.equal(result2,true,"unable to validate Elec Consumption - Dual products");
    let result3 = await GetAQuote.skipaddress_gasconsumptioninmoredetails();
    assert.equal(result3,true,"unable to validate Gas Consumption - Dual products");
  }
});

this.Then(/^User should see the address and meter details for \"([^\"]*)\"$/,async function(arg)
{
  let result = await GetAQuote.noncmaverifyaddressinmoredetails();
  assert.equal(result,true,"unable to validate Address -non CMA ");
  if(arg == "Gas")
  {
    let result1 = await GetAQuote.noncmaverifygasconsumptioninmoredetails();
    assert.equal(result,true,"unable to validate Consumption -non CMA ");
  }
  else if(arg == "Electricity")
  {
    let result1 = await GetAQuote.noncmaverifyelecconsumptioninmoredetails();
    assert.equal(result,true,"unable to validate Consumption -non CMA ");
  }

});

this.Then(/^verify direct debit label is not displayed in table header and individual rows$/,async function()
{
  let result = await GetAQuote.validateDDnotpresent();
  assert.equal(result,true,"Unable to validate DD not present");
});

this.Then(/^verify BG lite products is not displayed in the Quote or Price table$/,async function()
{
  let result = await GetAQuote.ValidateLiteProductsNotpresent();
  assert.equal(result,true,"Unable to validate Lite products not present");
});

this.Then(/^the user enters contact details as \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" and \"([^\"]*)\" and click continue button$/,async function(fname,lname,bname,tnum,email){
  await GetAQuote.GAQenterpersonaldetails(fname,lname,bname,tnum,email);
});

this.Then(/^User click buy of \"([^\"]*)\" for \"([^\"]*)\" Product$/,async function(arg1,arg2)
{
 await GetAQuote.clickbuybutton(arg1,arg2);
});

this.Then(/^User click buy of \"([^\"]*)\" for \"([^\"]*)\" Product - \"([^\"]*)\"$/,async function(arg1,arg2,scenario)
{
 await GetAQuote.clickbuybuttonnoncma(arg1,arg2);
});

this.Then(/^verify \"([^\"]*)\" and reference number in confirmation page$/,async function(arg)
{
  let result = await GetAQuote.verifyGAQconfirmationpage(arg);
  assert.equal(result,true,"Unable to verify GAQ confirmation page");
});

this.When(/^the user click on \"([^\"]*)\" fuel type$/,async function(arg)
{
  await GetAQuote.SelectFueltype(arg);
});

this.When(/^the user click on confirm start date$/,async function()
{
  await GetAQuote.ClickConfirmStartDate();
});

this.Then(/^verify Quote summary page Header, Quote Reference Number, Quote Valid Until and Direct debit details$/,async function()
{
  let isTitleMatch=await GetAQuote.VerifySummaryPageHeader("Your energy quote");
  assert.equal(isTitleMatch,true,"quote summary page Header is not matching");
  // await GetAQuote.VerifySummaryPageReferenceNumber("quote");
  // let isDDVisible=await GetAQuote.VerifySummaryPageDirectDebitText_quote();
  // assert.equal(isDDVisible,true,"Direct debit detail is not visible");
  // let isuntilVisible=await GetAQuote.VerifySummaryPagevalidUntilquote("Quote");
  // assert.equal(isuntilVisible,true,"Quote Valid Until is not visible");
});

this.When(/^User uncheck the direct debit checkbox of \"([^\"]*)\"$/,async function(arg)
{
  if(arg == "quote page")
  {
    await GetAQuote.Quote_uncheckddcheckbox();
  }
  else if(arg == "price page")
  {
    await GetAQuote.uncheckddcheckbox();
  }
});

this.Then(/^verify \"([^\"]*)\" lead creation page is displaying with the \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$/,async function(page,title,subtitle,message)
{
  let result = await GetAQuote.leadcontactdetailsheader(title);
  assert.equal(result,true,"unable to validate large business overlay header");
  let result1 = await GetAQuote.leadcontactdetailssubheader(subtitle);
  assert.equal(result1,true,"unable to validate large business overlay message ");
  let result2 = await GetAQuote.largebusinessoverlaymessage1(message);
  assert.equal(result2,true,"unable to validate large business overlay message1 ");
});

this.Then(/^verify \"([^\"]*)\" lead creation page is displaying with the \"([^\"]*)\" and \"([^\"]*)\"$/,async function(page,title,subtitle)
{
  let result = await GetAQuote.leadcontactdetailsheader(title);
  assert.equal(result,true,"unable to validate large business overlay header");
  let result1 = await GetAQuote.leadcontactdetailssubheader(subtitle);
  assert.equal(result1,true,"unable to validate large business overlay message ");
});

this.Then(/^verify Thank you page is displayed to user with \"([^\"]*)\" and \"([^\"]*)\" messages$/,async function(arg1,arg2)
{
    let result = await GetAQuote.verifyconfirmationpageLC(arg1);
    assert.equal(result,true,"Failed : verify Thank you page is displayed to user with thank you");
    let result1 = await GetAQuote.verifyconfirmationpagemessageLC(arg2);
    assert.equal(result1,true,"unable to validate verifyconfirmationpagemessageLC");
});

this.Then(/^verify site address details and meter details for \"([^\"]*)\"$/, async function(arg)
{
  let result = await GetAQuote.verifysitedetails(arg);
  assert.equal(result,true,"Unable to verify site address details and meter details");
});

this.Then(/^verify the message for elec DE meter is displaying as \"([^\"]*)\"$/,async function(arg)
{
  let result = await GetAQuote.verifymessagesforElecDEandHH();
  assert.equal(result,true,"Unable to verify messages for ElecDEandHH");
});

this.Then(/^verify the message for elec HH meter is displaying as \"([^\"]*)\"$/,async function(arg)
{
  let result = await GetAQuote.verifymessagesforElecHH();
  assert.equal(result,true,"Unable to verify messages for ElecDEandHH");
});

this.Then(/^the user provides MPAN as \"([^\"]*)\"$/,async function(mpan)
{
  await GetAQuote.entermpan(mpan);
  await GetAQuote.clickaftermpxn();
});

this.Then(/^the user provides \"([^\"]*)\" as \"([^\"]*)\"$/,async function(value,mpan)
{
  if(value == "MPRN")
  {
    await GetAQuote.entermprn(mpan);
    await GetAQuote.clickaftermpxn();
  }
  else if(value == "MPAN")
  {
    await GetAQuote.entermpan(mpan);
    await GetAQuote.clickaftermpxn();
  }

});

this.Then(/^the user provides MPAN as \"([^\"]*)\" and MPRN as \"([^\"]*)\"$/,async function(mpan,mprn)
{
  await GetAQuote.entermpan(mpan);
  await GetAQuote.entermprn(mprn);
  await GetAQuote.clickaftermpxn();
});

this.When(/^the user enters \"([^\"]*)\" spend as \"([^\"]*)\" in pounds for every \"([^\"]*)\"$/,async function(fuel,pounds,duration)
{
  await GetAQuote.EnterElectricitySpendAndDuration(pounds,duration);
  await GetAQuote.ClickNextafterConsumption();
});

};
