var FrameworkUtil = function() {

  var log4js = require('log4js');
  var logger = log4js.getLogger("Common");

  const DRIVER_WAIT_TIME = 10;
  const DEBUG_WAIT = 1000;
  const TINY_WAIT =1000;
  const SMALL_WAIT=2000;
  const LONG_WAIT=5000;
  const LONG_WAIT1=10000;
  var commonElements=new Map();
  var EC = protractor.ExpectedConditions;


  function Util() {

}



// this.findElementUsingFluentWait=function(by,timeOutSeconds){
//  return browser.wait(function() {
//         browser.sleep(2000);
//         return element(by).isDisplayed().then(function() {
//              logger.info("element displayed");
//              return element(by);
//          });
//      }, timeOutSeconds*1000, 'Expectation error: Timed out ');
// };


this.findElement=function(by) {
    return element(by);
};

this.findElements=function(by) {
    return element.all(by);
  };

this.waitForUnstableElement=function(by) {
  var that=this;
  return that.waitForElementPresent(by);
};

this.waitForElementPresent=function(by) {
  var that=this;
  browser.wait(EC.presenceOf(element(by)), LONG_WAIT);
  return that.findElement(by);
};


 this.waitForElementsPresent=async function(by){
   var that=this;
   browser.wait(EC.presenceOf(element(by)), LONG_WAIT);
   return await that.findElements(by);

};

this.waitForExpectedElement=async function(by) {
      var that=this;
       let result=await that.visibilityOfElementLocated(by);
       return (result ? that.findElement(by) : null);
   };

   this.waitAndFindElement=async function(by) {
       var that=this;
       return await that.waitForExpectedElement(by);
   }

   this.findEnabledElement=function(by) {
      var that=this;
      return that.waitForElementPresent(by);
   }

   this.visibilityOfElementLocated=function(by) {
            browser.sleep(SMALL_WAIT);
            return element(by).isDisplayed();
      };

this.waitForElementToBeClickableAndReturnElement=function(by) {
        var that=this;
        browser.wait(EC.elementToBeClickable(element(by)), SMALL_WAIT);
        return that.findElement(by);
};



this.waitForElementEnabled=function(by,timeout) {
  try {
    browser.wait(EC.invisibilityOf(element(by)), timeout);
      return true;
    } catch (e) {
    logger.error("Exception in waitUntilInVisibility:"+e.stack);
      return false;
  }

};

this.waitForElementEnabled=function(by) {
   var that=this;
    browser.wait(EC.invisibilityOf(element(by)), SMALL_WAIT);
    return that.findElement(by);
  };



this.waitForElementVisible=function(by,timeout) {
  try {
    browser.wait(EC.visibilityOf(element(by)), timeout);
      return true;
  } catch (e) {
    logger.error("Exception in waitForElementVisible:"+e.stack);
      return false;
  }

};
this.waitForElementVisible=function(by) {
        browser.wait(EC.visibilityOf(element(by)), SMALL_WAIT);
        return element(by);
};

this.waitForElementsVisible=function(by) {
        var that=this;
        browser.wait(EC.visibilityOf(element(by)), SMALL_WAIT);
        return that.findElements(by);
};

this.elementDisplayed=function(by) {
        var that=this;
        browser.wait(EC.presenceOf(element(by)), LONG_WAIT);
        that.findElement(by);

};

this.elementPresent=function(by) {
  try {
        browser.wait(EC.presenceOf(element(by)), TINY_WAIT);
        return true;
  } catch (e) {
    logger.error("Exception in elementPresent:"+e.stack);
      return false;
  }
};

this.isElementPresent=function(by){
  return element(by).isPresent();
};


this.elementClickable=function(by) {
        try {
              browser.wait(EC.elementToBeClickable(element(by)), TINY_WAIT);
              return true;
        } catch (e) {
          logger.error("Exception in elementClickable:"+e.stack);
            return false;
        }
    };


this.retryingFindElement=function(by) {
      var attempts = 0;
      var that=this;
      while (attempts < 2) {
          try {
              return that.waitForElementVisible(by);
          } catch (e) {
              logger.warn("Exceeding time to find element in retryingFindElement(): " + by, e.stack);
          }
          attempts++;
      }

  };

this.retryingClick=function(by) {
    var attempts = 0;
    while (attempts < 30) {
        try {
            element(by).click();
            break;
        } catch (e) {
            logger.error("Exception in retryingClick:"+e.stack);
        }
        attempts++;
    }
};


this.retryingElementClick=function(element) {
  var attempts = 0;
    while (attempts < 50) {
        try {
            element.click();
            break;
        } catch (e) {
            logger.error("Exception in retryingElementClick:"+e.stack);
        }
        attempts++;
    }
};

this.waitForMoreTime=function() {
    browser.sleep(LONG_WAIT);
  };
  
this.waitForMoreTime1=function() {
      browser.sleep(LONG_WAIT1);
    };

this.waitForPageLoad=function() {
        browser.sleep(SMALL_WAIT);

};


this.getText=function(element){
    return element.getText();
}

this.compareText=function(text1,text2){
    text1 = text1.toString().trim();
    text2 = text2.toString().trim();
    if(text1===text2){
        return true;
    }
    else{
      return false;
    }
}

this.comparePartialText=function(text1,text2){
    text1 = text1.toString().trim();
    text2 = text2.toString().trim();
    if(text1.includes(text2)){
      return true;
    }
    else{
      return false;
    }
  }


this.sliceText=function(text,position){
return text.toString().slice(position);
}

this.clearText=function(element) {
  return element.clear();
};

this.enterText=function(element,value){
element.sendKeys(value);
}

this.clickEvent=function(element){
element.click();
}
//Split text Method
this.SplitPartialText=function(ele,ele1,splitval,i) {
  ele.getText().then(function(text)
  {
    var str = text.split(splitval);
    var string = str[i].trim();
    if(ele1.includes(string)){
      logger.info("****************  "+ele1+" contains "+string);
    }else{
      logger.info("****************  "+ele1+" does not contain "+string);
    }

  });

};



//Split text Method
  this.SplitText=function(ele,ele1,splitval,i) {
    ele.getText().then(function(text)
    {
      logger.info(" The value is : "+text);
      var str = text.split(splitval);
      var string = str[i].trim();
      logger.info("*********** after trim : "+string);
      if(string == ele1){
        logger.info("****************  "+string+" and "+ele1+" are Same");
      }else{
        logger.info("****************  "+string+" and "+ele1+" are not Same");
      }

    });

};


  this.validatePageTitle=function() {
    pagetitle=browser.getTitle();
    return pagetitle;
  };

this.switchToFrame=function(id){
    browser.switchTo().frame(id);
};

      this.switchToParentFrame=function()
    {
        browser.switchTo().parentFrame();
    };



    this.switchToFrameByIndex=function(i)
    {
        browser.switchTo().frame(i);
    };



    this.switchToDefault=function()
    {
        browser.switchTo().defaultContent();
    };



    this.btnClick=function(btn)
    {
        browser.executeScript("arguments[0].click();",btn);
    };

    this.executeScript=function(script)
    {
        return browser.executeScript(script);
    };

	this.executeScript = function (script,ele)
    {
        browser.executeScript(script,ele).then(function ()
        {
            //LOG.info(executeScript is successful);
            console.log("executeScript is successful");
        }, function (err) {
            // LOG.info('Error...' + err);
            console.log("executeScript is not successful" + err);
        });
    };

    this.closeTabByIndex=function(iWindowIndex)
    {
        browser.getAllWindowHandles().then(function (handles)
        {
            if(handles.length > iWindowIndex)
            {
                browser.switchTo().window(handles[iWindowIndex]);
                browser.close();
              }
        });
    };



    this.switchToWindowByIndex=function(iWindowIndex)
    {
        browser.getAllWindowHandles().then(function (handles)
        {
            if(handles.length > iWindowIndex)
            {
                browser.switchTo().window(handles[iWindowIndex]);
            }
        });
    };

    this.switchToLastOpenWindow=function()
    {
        browser.getAllWindowHandles().then(function (handles)
        {
            if(handles.length > 0)
            {
                var handle= (handles[handles.length -1]);
                browser.switchTo().window(handle);
            }
        }, function (err) {

        });
    }

  this.getElementAttribute=function(element,attribute){
    return element.getAttribute(attribute);
}

  this.retrieveNextDate=function(date){
  var new_date = date.getDate() + 1;
  date.setDate(new_date)
  var current_date = date.toString();
  var split_new_date=current_date.split(" ");
  return split_new_date;
}

this.retrievePreviousDate=function(date){
  var new_date = date.getDate() - 1;
  date.setDate(new_date)
  var current_date = date.toString();
  var split_new_date=current_date.split(" ");
  return split_new_date;
}

this.retrieveCurrentDate=function(date){
  var current_date = date.toString();
  var split_new_date=current_date.split(" ");
  return split_new_date;
}

this.getWindowHandle=function(){
  return  browser.getAllWindowHandles();
}
this.switchToWindow=function(tab){
      browser.switchTo().window(tab)
};

this.getUrl=function(){
return browser.driver.getCurrentUrl();
};

};
module.exports = new FrameworkUtil();
