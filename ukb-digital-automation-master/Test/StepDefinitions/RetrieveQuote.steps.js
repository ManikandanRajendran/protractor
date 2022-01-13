var GetAQuote = require('../pages/obj_GetAQuotePage.js');
var RetrieveQuote = require('../pages/obj_RetrieveQuotePage.js');
var data = require('../Resources/testdata.json');
var util=require('../Utils/FunctionalUtil.js');
var cache = element(by.css('.fa-close'));
var log4js = require('log4js');
var logger = log4js.getLogger();
var assert = require('assert');
var url = data[0].UKB_retrieve_url;

module.exports = function()
{
this.setDefaultTimeout(1000 * 1000);

this.Given(/^user is on (.*) landing page$/,async function(arg){
var scenario = arg;
  if(scenario == "Get a Quote")
  {
    url = browser.baseUrl+"gas-and-electricity/get-a-quote";
    await util.launchUrl(url);
    let result = await RetrieveQuote.comparetitleofthepage(scenario,"Get a business energy quote");
    assert.equal(result,true,"Unable to validate title of the GAQ landing page");
  }
  else if(scenario == "business gas")
  {
    url = browser.baseUrl+"gas-and-electricity/business-gas";
    await util.launchUrl(url);
    let result = await RetrieveQuote.comparetitleofthepage(scenario,"Business gas");
    assert.equal(result,true,"Unable to validate title of the business-gas landing page");
  }
  else if(scenario == "business electricity")
  {
    url = browser.baseUrl+"gas-and-electricity/business-electricity";
    await util.launchUrl(url);
    let result = await RetrieveQuote.comparetitleofthepage(scenario,"Business electricity");
    assert.equal(result,true,"Unable to validate title of the business-electricity landing page");
  }
  else if(scenario == "compare business electricity")
  {
    url = browser.baseUrl+"gas-and-electricity/business-electricity/compare-business-electricity";
    await util.launchUrl(url);
    let result = await RetrieveQuote.comparetitleofthepage(scenario,"Business electricity");
    assert.equal(result,true,"Unable to validate title of the business-electricity landing page");
  }
});

this.When(/^user clicks on retrieve quote link$/,async function(){
  await RetrieveQuote.clickretrievequote();
});

this.Then(/^user is able to see Retrieve Quote landing page$/,async function(){
  let result = await RetrieveQuote.verifylandingpage("Retrieve your online business quote");
  assert.equal(result,true,"Unable to validate retrieve quote landing page");
});

this.When(/^user is passing quoteId as (.*)$/,async function(arg){
  await RetrieveQuote.enterquoteid(arg,"quoteid");
});

this.Then(/^user should see the error message as (.*) in retrieve page$/,async function(arg){
  let result = await RetrieveQuote.verifyerrormessage(arg);
  assert.equal(result,true,"Unable to validate error messages of quoteif and email");
});

this.When(/^user is passing email as (.*)$/,async function(arg){
  await RetrieveQuote.enteremail(arg,"email");
});

this.When(/^user is clicking on retrieve a quote button$/,async function(){
  await RetrieveQuote.retrievequote_click();
});

this.Then(/^user should see the (.*) message$/,async function(arg){
  await RetrieveQuote.quoteexpired(arg);
});

this.Then(/^user should see the (.*) message for quote can't found page$/,async function(arg){
  let result = await RetrieveQuote.quotecantfind(arg);
  assert.equal(result,true,"Unable to validate the messages of can't find quote");
});

this.When(/^user clicks on Get a new quote button$/,async function(){
  await RetrieveQuote.clickgetaquote();
});

this.When(/^user clicks on go back button$/,async function(){
  await RetrieveQuote.clickgoback();
});

this.Then(/^user should see the Get a quote landing page$/,async function(){
  let result = await RetrieveQuote.verifygaqpage();
  assert.equal(result,true,"Unable to validate the messages of expired quote");
});

this.Then(/^user should see the (.*) energy quote page$/,async function(arg){
  let result = await RetrieveQuote.retrieveenergyquote();
  assert.equal(result,true,"Unable to validate the your energy quote page");
});

this.Then(/^user should see the quoteid as (.*)$/,async function(arg){
  let result = await RetrieveQuote.validatequoteid(arg);
  assert.equal(result,true,"Unable to validate the quoteid");
});

this.Then(/^verify quote table prices of (.*) with <"([^"]*)">$/,async function(scenario,paytype)
{
  if(scenario == "NoncmaGas" || scenario == "NoncmaElec")
  {
    await RetrieveQuote.Getconsumption(scenario);
  }
  let result = await RetrieveQuote.compareprice(scenario,paytype);
  assert.equal(result,true,"Unable to validate the Quote prices");
});

this.Then(/^user clicks on \"([^\"]*)\" for \"([^\"]*)\"$/,async function(product,scenario)
{
  await RetrieveQuote.findbuybutton(product,scenario);
});

this.Then(/^verify \"([^\"]*)\",price and reference number in confirmation page$/,async function(arg)
{
  let result = await RetrieveQuote.verifyGAQconfirmationpage(arg);
  assert.equal(result,true,"Unable to verify GAQ confirmation page");
});



};
