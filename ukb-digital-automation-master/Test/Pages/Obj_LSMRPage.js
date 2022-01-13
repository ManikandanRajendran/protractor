var SMRPage = function () {

    var log4js = require('log4js');
    var logger = log4js.getLogger();
    var util = require('../Utils/FrameworkUtil.js');

    var Loginlink = element(by.css('div.ukb-head-topnav  a[href*="login"]'));

    var BGSubmitMeterReadLink = (by.css('a[href*="meter-readings"]'));

    var subbtn = (by.css('button[class*="submit-button"]'));
    var confirmationTitle = (by.css('.confirmation-details strong'));
    var actualDate=by.css("p[class='mt-3'] strong");
    var DashBoardSection = (by.css('.your-account__dashboard'));
    var confirm= by.css('.confirmation-detail strong');
    var MoreThanThreeMetersError2 = (by.css('div.ember-view > div > div > div > div > h5 > b'));
    var MoreThanThreeMetersError=(by.css('#ember641 > div > div > div > div > h5 > b'));
    var ComplexMeterErrorMessage = (by.xpath('(//*[@class="col your-account__dashboard"]//ul[1])[1]/li[1]/div'));
    var searchItemPath = (by.name('searchItem'));
    var SearchForm = (by.css('.search-form'));
    var searchByPath = (by.css('.ember-power-select-placeholder'));
    var SearchButton = (by.css('.search-form button'));
    var ImplusibleOverlay = (by.css(".implausible-modal"));
    //var ImplusibleSubmitButton = (by.css(".implausible-modal div>button:nth-child(1)"));
    var ImplusibleSubmitButton = by.css(".implausible-modal div:nth-child(3)");
    var MeterDetailsSection = (by.css('.meter-details--content-bg-color>div:first-child'));
    var ConfirmationPageEstimateMessage = (by.css('.confirmation-table>div>div:last-child'));
    var ConfirmationEstimatedText = "*If the meter read is significantly different to what we were expecting your next bill may be estimated."
    var NewBalanceTitleMessage = (by.css('.confirmation-details>p>strong'));
    var ODBSection = (by.css('.confirmation-details>div:last-child'));
    var ODBBillAmount = (by.css('.confirmation-details__amount'));
    var BalanceAmount = (by.css('.accent-orange'));
    var PaymentButton =(by.css('.confirmation-details>div:last-child button'));
    var NewBalanceSectionText = "Your new balance based on readings you submitted is displayed belows"
    var retrieveAndFillAccountDetails1=by.css('div.col-12.p-2.mb-0.mb-sm-3 > div:nth-child(1) > div');
    var MultipleAccountselection = (by.css('.accounts-list__wrapper'))
    var MultipleAccountselectionbyrow = (by.css('.accounts-list__wrapper>div:nth-child(3)'))
    var BalanceAmountType = (by.css('.your-account__balance-plan>div>div>div>p:last-child'))
    var PaymentTypeCheck = (by.xpath('.//*[text()="Setup a Direct Debit"]'))
    var AddresSection = (by.css('.address'))
    var meterserialnumberSection = (by.css('.mb-1:last-child span'))
    var YourNewMeterReadSction = (by.css('div.col-12.pl-4.pt-3.content-bg-light-grey > p:nth-child(2) > strong'))
    var StatusOfAccount=(by.css('.in-progress__view-progress a[href="#"]'))
    var readMeterRowsNew=by.css("p[class*='read-value']");
    var no_of_readings = "";
    var fueltype=""; var accountType ="";
    var c;
    var MeterReadValues = [];
    /*Function to navigate Login page*/
    this.navigateToLogin = function ()
    {
        util.clickEvent(Loginlink);

    };

    /*Function to validate the negative error messages for LSMR*/
    this.VerifyLSMRErrorMessage = async function(message,accType)
    {
        switch(accType)
        {
            case "Closed-Account": return this.verifyErrorMessage (BGSubmitMeterReadLink,message);break;
            case "More_Than_Three_Meters":return this.verifyErrorMessage (MoreThanThreeMetersError2,message);break;
            case "Complex_Meter": return this.verifyErrorMessage (ComplexMeterErrorMessage,message);break;
            case "In-Progress-Account": return this.verifyErrorMessage (StatusOfAccount,message);break;
            case "More_Than_Three_Meters_Collective":return this.verifyErrorMessage (MoreThanThreeMetersError2,message);break;
            case "Collective_Gas":return this.verifyErrorMessage (MoreThanThreeMetersError2,message);break;
        }
    };

    /*Function to verify a generic error message*/
    this.verifyErrorMessage =async function(eleSelector,message)
    {
        let element=await util.waitForExpectedElement(eleSelector);
        let text= await util.getText(element);
        let isMatching=await util.compareText(text,message);
        return isMatching;
    };

    /*Fuction to be select account number from multiple Account DasBoard*/
    this.SelectAccountFromDashBoard = function()
    {
        let ele = util.waitForElementToBeClickableAndReturnElement(MultipleAccountselection);
        util.clickEvent(ele);

    }

    /*Fucntion to Navigate the Submit Meter Read Page*/
    this.NavigateToSubmitMeterReadPage = function () {
        util.waitForMoreTime();
        let ele = util.waitForElementToBeClickableAndReturnElement(BGSubmitMeterReadLink);
        util.clickEvent(ele);
    };


    /*Function to verify a generic error message*/
    this.navigateToAccount =function(accountNo)
    {
        util.waitForMoreTime();
        var selector = '//strong[contains(text(),'+ '"' + accountNo + '"' +')]';
        var accBy = by.xpath(selector);
        let ele= util.waitForElementToBeClickableAndReturnElement(accBy);
        util.clickEvent(ele);
    };

    /*Function to select the ollective account details*/
    this.CollectiveSearchMeterDetails = function(searchby,searchitem)
    {
        util.waitForExpectedElement(SearchForm);
        let ele1=util.waitForElementToBeClickableAndReturnElement(searchByPath);
        util.clickEvent(ele1);
        let searchKey= element(by.xpath('//li[text()="'+searchby+'"]'));
        util.clickEvent(searchKey);
        util.enterText(element(searchItemPath),searchitem);
        let ele2=util.waitForElementToBeClickableAndReturnElement(SearchButton);
        util.clickEvent(ele2);


    };


    /*Function to validate and fetch the meter details from Meter Deatils Page for Multi Register*/
    this.retrieveAndFillAccountDetails = async function(type)
    {
        var that=this;

        return util.findElements(retrieveAndFillAccountDetails1).then(function(items){
            logger.info("No of readings:"+no_of_readings);
            no_of_readings=items.length;

        }).then(async function(){

            await that.readAndWriteMeter(type);

        });
    };

    /*Function to click Submit Meter Read Button with Implusible Overlay*/
    this.SubmitMeter =async function ()
    {
        var d = new Date();
        util.waitForMoreTime();
        browser.executeScript('window.scrollBy(0,1000);');
        let ele=util.waitForElementToBeClickableAndReturnElement(subbtn);
        util.clickEvent(ele);
        let result=await util.isElementPresent(ImplusibleOverlay);
        var element;
        if(result)
        {
            // if day is saturday or sunday - overlay will only have two buttons on a weekend
            if((d.getDay() == 6) ||(d.getDay() == 0))
            {
                element=await util.waitForExpectedElement(by.css(".implausible-modal div:nth-child(2)"));
            }
            else
            {
                element=await util.waitForExpectedElement(by.css(".implausible-modal div:nth-child(3)"));
            }
            util.clickEvent(element);
        }
        else
        {

            logger.info("Not an Implusible Journey:");
        }

    };


    this.verifyConfirmationPage = async function(accType,fuelType)
    {
        logger.info(accType);
        accountType=accType;
        logger.info(accountType);
        fueltype=fuelType;
        //logger.info("Fuel Type is:"+fueltype);

        let result = await util.visibilityOfElementLocated(confirmationTitle);
        if(result)
        {
            // util.compareText((util.getText(ConfirmationPageEstimateMessage.locator())),ConfirmationEstimatedText)
            if(accountType == "Single_Account_Gas_Collective_Postcode" || accountType == "Single_Account_Gas_Collective_MPAN"
                || accountType == "Single_Account_Electricity_Collective_PostCode" || accountType == "Single_Account_Electricity_Collective_MPAN")
            {
                var Str1 = '(.//*[@class="confirmation-table row mt-3"]//tbody/tr[';
                var Str2 = ']/td[4]//span[@class="text-right"])[1]';
                let result = await this.ConfirmationMeterReadDetailsVerification(Str1,Str2);
                if(result)
                {

                    return true;
                }
                else
                {
                    return false;
                }
            }
            else if (accountType == "MultiMeter")
            {
                var Str1 = '(.//*[@class="confirmation-table row mt-3"]//tbody/tr[';
                var Str2 = ']/td[4]//span[@class="text-right"])[1]';
                let result = await this.ConfirmationMeterReadDetailsVerification(Str1,Str2);
                if(result)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                var Str1 = '(.//*[@class="confirmation-table row mt-3"]//tbody/tr[1]/td[5]//span[@class="text-right"])[';
                var Str2 = ']';
                let result = await this.ConfirmationMeterReadDetailsVerification(Str1,Str2);
                if(result)
                {
                    return true;
                }
                else
                {

                    return false;
                }
            }
        }
        else
        {
            return false;
        }

    };



    /*Function to validate confirmation Meter Read Details*/
    this.ConfirmationMeterReadDetailsVerification = async function(Str1,Str2)
    {

            logger.info('no of readings gas:'+no_of_readings);
            for(var i=1;i<=no_of_readings;i++)
            {

                for(var s=0;s<MeterReadValues[i-1].length;s++)
                {

                    if(MeterReadValues[i-1].slice(0,1) == "0")
                    {
                        MeterReadValues[i-1] = MeterReadValues[i-1].replace(0,"");
                          logger.info("Previous Meter After Removing Zeros:@@@@" +MeterReadValues[i]);
                    }
                }

                var combinePath = Str1 + i + Str2;
                var temp = util.findElement(by.xpath(combinePath));
                let tempText= await util.getText(temp);

               logger.info("Meter read value after slice:******" +MeterReadValues[i-1]);
                   logger.info("temp is: "+tempText);
                let isMatching=util.compareText(tempText,MeterReadValues[i-1])
                MeterReadValues=[];
                return isMatching;
            }

    };

    this.VerifySmrLinkNotVisible = async function()
    {
        let result=await util.isElementPresent(BGSubmitMeterReadLink);
        if(result)
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    this.VerifyMeterDetailsSection = async function()
    {
        let result=await util.visibilityOfElementLocated(MeterDetailsSection);
        if(result)
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    this.VerifyAddressSection = async function()
    {
        let result=await util.visibilityOfElementLocated(AddresSection);
        if(result)
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    this.VerifyMeterSerialNumberSection = async function()
    {
        let result=await util.visibilityOfElementLocated(meterserialnumberSection);
        if(result)
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    this.VerifyYourNewMeterReadSction = async function()
    {
        let result=await util.visibilityOfElementLocated(YourNewMeterReadSction);
        if(result)
        {
            return true;
        }
        else
        {
            return false;
        }
    };

    this.VerifyODBSection = async function()
    {
        let result = await util.waitForExpectedElement(ODBSection);
        if(result)
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    this.VerifyODBBillAmount = async function()
    {
        let result = await util.waitForExpectedElement(ODBBillAmount);
        if(result)
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    this.VerifyODBBalanceAmount = async function()
    {
        let result = await util.waitForExpectedElement(BalanceAmount);
        if(result)
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    this.VerifyODBPaymentButton = async function()
    {
        let result = await util.waitForExpectedElement(PaymentButton);
        if(result)
        {
            return true;
        }
        else
        {
            return false;
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



    this.readAndWriteMeter=async function(type){
        var that=this;
        var scroll=0;
        readDial=[];
        util.waitForMoreTime();
        readRows=await util.findElements(readMeterRowsNew);
        noOfReadRows=readRows.length;
        actualDateArray=[];
        let actuals=await util.findElements(actualDate);
        var i=1;
        var c=0;
        for(let r=1;r<=noOfReadRows;r++){
            if(r!=1){ scroll=scroll+300; util.executeScript('window.scrollBy(0,'+scroll+');'); }

            else if(type==="MultiMeter"){
                var ele=await util.waitForExpectedElement(by.xpath("//*/div[@class='col-12 p-2 mb-0 mb-sm-3']["+i+"]/div[@class='col-12 col-lg-6 col-md-6 pull-left'][1]/div/p[@class='read-value bold'][1]"));
            }
            else{
                var ele=await util.waitForExpectedElement(by.xpath("//*/div[@class='col-12 p-2 mb-0 mb-sm-3'][1]/div[@class='col-12 col-lg-6 col-md-6 pull-left'][1]/div["+i+"]/p[@class='read-value bold'][1]"));
            }
            i=i+1;
            let meterReading=await util.getText(ele);
            readDial[r]=meterReading;
            var temp=readDial[r];
            var temp_length=temp.length;
            var newReading=Number(temp) + 1;
            var newReadingString=newReading.toString();
            var confirmMeterRead=newReadingString;
            var newReading_length=newReadingString.length;
            if(newReading_length>temp_length){
                let sliceReading=newReading_length-temp_length;
                newReadingString=newReadingString.slice(sliceReading)
                var confirmMeterRead=newReadingString;
            }
            else if(newReading_length<temp_length){
                let addReading=temp_length-newReading_length;
                for(let a=1;a<=addReading;a++){
                    newReadingString=0+newReadingString;
                }
            }
            var allZeros = /^0*$/.test(confirmMeterRead)
            if(allZeros){
                logger.info("meter read is all zero");
            }
            else{
                MeterReadValues.push(confirmMeterRead);
            }

            if(type==="MultiMeter"){
                actualDateArray[r]=await util.getText(actuals[r-1]);
                that.pickDate(r);
                c=c+1;
                logger.info("c value:"+c);
                var elementInput=await util.waitForExpectedElement(by.xpath("//*/div[@class='col-12 p-2 mb-0 mb-sm-3']["+c+"]/div[@class='col-12 col-lg-6 col-md-6 pull-left'][2]/div/div[@data-test-register=0]//*[@data-test-dial=\"0\"]"));
            }

            else{
                if(r==1){
                    actualDateArray[r]=await util.getText(actuals[r-1]);
                    that.pickDate(r);
                }
                var elementInput=await util.waitForExpectedElement(by.xpath('//*/div[@data-test-register='+c+']//*[@data-test-dial="0"]'));
                c=c+1;
            }

            await elementInput.sendKeys(newReadingString);

        }

    }

    this.pickDate=async function(r){
        previous_date=actualDateArray[r]
        var split_new_date=util.retrieveNextDate(new Date(previous_date));
        var day=split_new_date[2];
        if(day.length==2 && day.charAt(0)=="0"){
            day=day.slice(1);
        }

        var month=new Date(previous_date).getMonth();
        var year=split_new_date[3];
        let date_pick=await util.waitForExpectedElement(by.xpath('(//*[@class="form-control ember-view"])['+r+']'));
        util.clickEvent(date_pick);
        util.clickEvent(element(by.xpath('(//select[@class="pika-select pika-select-year"])['+r+']')));
        util.clickEvent(element(by.xpath('(//select[@class="pika-select pika-select-year"])['+r+']//option[text()='+year+']')));
        util.waitForMoreTime();
        util.clickEvent(element(by.xpath('(//select[@class="pika-select pika-select-month"])['+r+']')));
        util.clickEvent(element(by.xpath('(//select[@class="pika-select pika-select-month"])['+r+']//option[@value='+month+']')));
        util.clickEvent(element(by.xpath('(//button[@class="pika-button pika-day" and @data-pika-day="'+day+'"])['+r+']')));
    }

};
module.exports = new SMRPage();
