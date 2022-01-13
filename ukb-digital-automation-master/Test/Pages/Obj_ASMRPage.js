var ASMR = function()
{

var log4js = require('log4js');
var logger = log4js.getLogger();

var util=require('../utils/FrameworkUtil.js')

var smrbutton = by.css("a[href*='submit-meter-read/your-details']");
var smrtitle = by.css(".meter-read h2");
var email = by.name("model.email");
var accno = by.name("model.accountNumber");
var sitepostcode = by.name("model.postcode");
var divYourDetails=by.css("div[class='account-detail row container']");
var fuelTypeSelector=by.css(".meter-detail .justify-content-center strong");
var accountNumberSelector=by.css("span[data-test-account-number]");
var meterSerialSelector=by.css("div[class='container meter-detail'] div div div:nth-child(9) p");
var NextButton = by.css(".account-detail button");
var readMeterRows=by.css("div[class='row m-0 mt-3'] div[class='meter-register'] div[class='row']");
var readMeterCells=by.css("div[class='row m-0 mt-3'] div[class='meter-register'] div[class='row'] div[class='p-1']");
var writeMeterRows=by.css("div[data-test-register] div[class='meter-register'] div[class='row']");
var writeMeterCells=by.css("div[data-test-register] div[class='meter-register'] div[class='row'] div[class='p-1']");
var actualDate=by.css("p[class='my-1'] strong");
var datePicker=by.css("div[class*='date-picker'] div  input");
var submitButton = by.css('button.btn.btn-primary');
var confirm=by.css('div[data-test-confirmation-detail] h5 span strong');
var confirmationMessage = by.css("div[data-test-confirmation-detail] p:nth-child(3)");
var implusibleOverlay = by.css(".implausible-modal");

var implusibleSubmitButton=by.xpath("//*/div[contains(@class,'implausible-modal')]/div[contains(@class,'justify-content-center')]/div[contains(@class,'square-tile')]/h6[contains(text(),'Submit your meter reading(s) anyway')]");
var checkBox = by.css(".check-box-check");
var titleBox = by.css(".ember-power-select-trigger");
var titleOption = by.xpath('.//ul[@class="ember-power-select-options ember-view"]/li[text()="Mr"]');
var firstName=by.xpath("//div/input[@type='text' and @name='firstName']");
var lastName=by.xpath("//div/input[@type='text' and @name='lastName']");
var reminder = by.css(".reminder-section>p")
var reminderSubmitButton = by.css('.reminder-section button');
var remiderSuccessful = by.xpath('.//*[@class="reminder-section"]/p[2]');
var remiderAlreadSubmitted = by.xpath(".//*[@class='reminder-section']/p");


var readMeterRowsNew=by.css("p[class*='read-value']");
/***************************************************/



readDial=new Array();
writeDial=new Array();
actualDateArray=new Array();
var fuel="";
var fuelType="";





  this.clickASMRButton= function(fuel){
     browser.executeScript('window.scrollBy(0,1000);');
   if(fuel ==='Electricity')
     type=3;
    else
     type=2;
    let element=util.waitForElementToBeClickableAndReturnElement(by.css("div.loggedin-anonymous div.anonymous-section div.parsys_column:nth-child("+type+") p a[href*='submit-meter-read/your-details']"));
    fuelType=fuel;
    util.clickEvent(element);
  };

this.VerifySMRTitleVisible = async function()
{
let element=await util.waitForExpectedElement(smrtitle);
let SMRTitle=await util.getText(element);
let result=await util.compareText(SMRTitle,'Submit a business energy meter reading');
return result;
};


this.clickTogenerateError=function(){
  let element=util.waitForElementPresent(divYourDetails);
  util.clickEvent(element);
}

this.verifyFuelType=async function(){
  let result=await util.visibilityOfElementLocated(fuelTypeSelector);
  return result;
};
this.verifyAccountnumber=async function(){
  let result=await util.visibilityOfElementLocated(accountNumberSelector);
  return result;
};
this.verifyMeterSerialNumber=async function(){
  let result=await util.visibilityOfElementLocated(meterSerialSelector);
  return result;
};


this.readMeter=async function(type){
  var scroll=0;
  readDial=[];
  util.waitForMoreTime();
  readRows=await util.findElements(readMeterRows);
  noOfReadRows=readRows.length;
  readCells=await util.findElements(readMeterCells);
  noOfReadCells=readCells.length;
  cellsPerReadRow= noOfReadCells/noOfReadRows;
  cellsPerReadRow = Math.floor(cellsPerReadRow);
  remainingReadCells=noOfReadCells;
  var temp=new Array();
  var i=6;

logger.info("noOfReadRows:"+noOfReadRows);
  logger.info("noOfReadCells:"+noOfReadCells);
  logger.info("cellsPerReadRow:"+cellsPerReadRow);
  logger.info("reading...");
for(let r=1;r<=noOfReadRows;r++){
  if(r!=1){ scroll=scroll+300; browser.executeScript('window.scrollBy(0,'+scroll+');'); }
for(var c=0;c<cellsPerReadRow;c++)
{
      let element=await util.waitForExpectedElement(by.xpath(".//*[@class='container meter-detail']/div/div/div["+i+"]//*[@data-test-dial=\""+c+"\"]"))
      let dialText=await util.getElementAttribute(element,'value');
      temp[c]=dialText;
}
remainingReadCells=remainingReadCells-cellsPerReadRow;
if(r==noOfReadRows)
{
  if(remainingReadCells!=0){
   for(let k=0;k<remainingReadCells;k++)
     {
      let element=util.waitForElementPresent(by.xpath(".//*[@class='container meter-detail']/div/div/div["+i+"]//*[@data-test-dial=\""+c+"\"]"))
      let dialText=await util.getElementAttribute(element,'value');
      temp[c]=dialText;
      c++;
     }
}
}
let dial=temp.toString();
let dial_replace=dial.replace(/,/gi, "");
readDial[r]=dial_replace;
if(type==="SubmitMeterRead_Electricity" || type==="Elec_Multi_Registers")
{
  i=i+1;
}
else{  i=i+6;}
}
};

this.readActualMeter=async function(type){
  var scroll=0;
  readDial=[];
  util.waitForMoreTime();
  readRows=await util.findElements(readMeterRowsNew);
  noOfReadRows=readRows.length;
  logger.info("noOfReadRows:"+noOfReadRows);
  var i=10;
  for(let r=1;r<=noOfReadRows;r++){
    if(r!=1){ scroll=scroll+300; browser.executeScript('window.scrollBy(0,'+scroll+');'); }
    let element=await util.waitForExpectedElement(by.css("div[class='row'] div div:nth-child("+i+") p[class='read-value bold']"));
    logger.info("i*****:"+i);
    let meterReading=await util.getText(element);
    logger.info("meterReading:"+meterReading);
    readDial[r]=meterReading;
    logger.info("readDial:"+readDial);
    if(type==="MultiMeter"){
        i=i+8;
    }
    else{
      i=i+1;
    }

  }
}

this.readActualDate=async function(){
actualDateArray=[];
let actuals=await util.findElements(actualDate);
for(let i=0;i<actuals.length;i++){
   actualDateArray[i]=await util.getText(actuals[i]);
}
};

this.writeMeter=async function(type){
  var that=this;
  var scroll=0;
  var c=0;
  var m=1;
  writeDial=[];
  util.waitForMoreTime();
  writeRows=await util.findElements(writeMeterRows);
  noOfWriteRows=writeRows.length;
  writeCells=await util.findElements(writeMeterCells);
  noOfWriteCells=writeCells.length;
  cellsPerWriteRow= noOfWriteCells/noOfWriteRows;
  cellsPerWriteRow = Math.floor(cellsPerWriteRow);
  remainingWriteCells=noOfWriteCells;
  if(type==="MultiMeter"){
    var i=1;
  }
  else{
      var i=0;
  }


  logger.info("noOfWriteRows:"+noOfWriteRows);
  logger.info("noOfWriteCells:"+noOfWriteCells);
  logger.info("cellsPerWriteRow:"+cellsPerWriteRow);

  for(let r=1;r<=noOfWriteRows;r++){
    if(type==="SubmitMeterRead_Electricity" || type==="Elec_Multi_Registers"){
      browser.executeScript('window.scrollBy(0,1000);');
    }
    else{
    if(r!=1){ scroll=scroll+500; browser.executeScript('window.scrollBy(0,'+scroll+');'); }
    else{browser.executeScript('window.scrollBy(0,-1000);');}
  }
    var temp=readDial[r];
    var temp_length=temp.length;
    var newReading=Number(temp) + 1;
    var newReadingString=newReading.toString();
    var confirmMeterRead=newReadingString;
    var newReading_length=newReadingString.length;
    if(newReading_length>temp_length){
      let sliceReading=newReading_length-temp_length;
      newReadingString=newReadingString.slice(sliceReading);
      var confirmMeterRead=newReadingString;
    }
    else if(newReading_length<temp_length){
      let addReading=temp_length-newReading_length;
      for(let a=1;a<=addReading;a++){
         newReadingString=0+newReadingString;
       }
    }
   logger.info("confirmMeterRead:"+confirmMeterRead);
  var allZeros = /^0*$/.test(confirmMeterRead)
   if(allZeros){
      logger.info("meter read is all zero");
   }
   else{
    writeDial[m]=confirmMeterRead;
    logger.info("  writeDial[m]:"+  writeDial[m]);
    m++;
  }
  if(type==="SubmitMeterRead_Electricity" || type==="Elec_Multi_Registers"){
      if(r==1){
        that.pickDate(r);
      }
    }
    else{
      that.pickDate(r);
    }



  if(type==="MultiMeter"){
    var element=await util.waitForExpectedElement(by.xpath("//*/div[@class='row m-0 mb-4']["+i+"]/div[@data-test-register=0]//*[@data-test-dial=\""+c+"\"]"))
  }
  else {
    var element=await util.waitForExpectedElement(by.xpath("//*/div[@data-test-register="+i+"]//*[@data-test-dial=\""+c+"\"]"))
  }
    await element.sendKeys(newReadingString);

     i=i+1;

  }
  util.waitForMoreTime();
};


this.pickDate=async function(r){
  previous_date=actualDateArray[r-1]
  var split_new_date=util.retrieveNextDate(new Date(previous_date));
  var day=split_new_date[2];
  if(day.length==2 && day.charAt(0)=="0"){
    day=day.slice(1);
  }
  var month=split_new_date[1];
  var year=split_new_date[3];
  let date_pick=await util.waitForExpectedElement(by.xpath('(//*[@class="form-control ember-view"])['+r+']'));
  util.clickEvent(date_pick);
  util.clickEvent(element(by.xpath('(//select[@class="pika-select pika-select-year"])['+r+']')));
  util.clickEvent(element(by.xpath('(//select[@class="pika-select pika-select-year"])['+r+']//option[text()='+year+']')));
  util.waitForMoreTime();
  util.clickEvent(element(by.xpath('(//select[@class="pika-select pika-select-month"])['+r+']')));
  util.clickEvent(element(by.xpath('(//select[@class="pika-select pika-select-month"])['+r+']//option[contains(text(),"'+month+'")]')));
  util.clickEvent(element(by.xpath('(//button[@class="pika-button pika-day" and @data-pika-day="'+day+'"])['+r+']')));
}

this.clickSubmit=async function(){
  browser.executeScript('window.scrollBy(0,1000);');
  let element=util.waitForElementToBeClickableAndReturnElement(submitButton);
  util.clickEvent(element);
  let result=await util.isElementPresent(implusibleOverlay);
  if(result){
         let implusibleElement=await util.waitForExpectedElement(implusibleSubmitButton);
              util.clickEvent(implusibleElement);
            }
   else {
          logger.info("there is no implausible popup");
        }

};


this.verifyConfirmation =async function(arg)
{
  util.waitForMoreTime();
  let element=await util.waitForExpectedElement(confirm);
  let text= await util.getText(element);
  let isMatching=await util.compareText(text,arg);
  return isMatching;
};


this.verifyConfirmationMessage =async function(message)
{
  let element=await util.waitForExpectedElement(confirmationMessage);
  let text= await util.getText(element);
  let isMatching=await util.compareText(text,message);
  return isMatching;
};

this.confirmationMeterReadVerification =async function()
{
  for(var i=1;i<=noOfWriteRows;i++)
    {
      if(i==4)
      {
        browser.executeScript('window.scrollTo(0,1000);');
      }
      for(var j=1;j<writeDial.length;j++)
      {
        if(writeDial[j].slice(0,1) == "0")
        {
          writeDial[j] = writeDial[j].replace(0,"");
        }
      }

      let element=await util.waitForExpectedElement(by.css('.table-bordered tbody tr:nth-child('+i+') td:nth-child(5)'));
      let text= await util.getText(element);
      if(fuelType === "Electricity"){
          logger.info("fuelType:"+fuelType);
          text=text.slice(2);
      }
      logger.info("text:"+text);
      let isMatching=await util.compareText(text,writeDial[i]);
      if(!isMatching){
          return false;
      }

    }

return true;

};


this.verifyImplusibleAndSubmit =async function()
{

let result=await util.isElementPresent(implusibleOverlay);
if(result){
  let element=await util.waitForExpectedElement(implusibleSubmitButton);
            util.clickEvent(element);
            return true;
          }
      else{
        return false;
      }
  };

  this.verifyRemider =async function(arg)
  {
      let element=await util.waitForExpectedElement(reminder);
      let text= await util.getText(element);
      let isMatching=await util.compareText(text,arg);
      return isMatching;
  };

  this.checkReminderForm=async function(){
    let element=await util.waitForExpectedElement(checkBox);
     util.clickEvent(element);


  };

  this.submitReminderForm =async function()
  {
    browser.executeScript('window.scrollTo(0,1000);');
    let element_titleBox=await util.waitForExpectedElement(titleBox);
    util.clickEvent(element_titleBox);
    let element_titleOption=await util.waitForExpectedElement(titleOption);
    util.clickEvent(element_titleOption);
    let element_firstName=await util.waitForExpectedElement(firstName);
    util.enterText(element_firstName,"Test");
    let element_lastName= await util.waitForExpectedElement(lastName);
    util.enterText(element_lastName,"Test");
    let element_reminderSubmitButton=util.waitForElementToBeClickableAndReturnElement(reminderSubmitButton);
    util.clickEvent(element_reminderSubmitButton);
  };

      this.verifyReminderSubmission =async function(arg)
      {
        let element=await util.waitForExpectedElement(remiderSuccessful);
        let text= await util.getText(element);
        let isMatching=await util.compareText(text,arg);
        return isMatching;

      };


      this.verifyReminderAlreadySubmitted =async function(arg1,arg2)
      {
        let element=await util.waitForExpectedElement(remiderAlreadSubmitted);
        let text= await util.getText(element);
        if(text.includes(arg1)){
          if(text.includes(arg2)){
            return true;
          }
          else {
          return false;
          }
        }
        else{
            return false;
        }

      };

}; module.exports = new ASMR();
