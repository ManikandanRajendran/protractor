exports.config = {
    allScriptsTimeout:110000,
    framework:'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    directConnect: true,
    specs:['../features/test.feature'],
    cucumberOpts: {
                 require:['../steps/*.steps.js'],
                //  tags:['@test123'],
                 format: 'json:.tmp/results.json',
                 strict: true,
                 keepAlive: false
    },
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1
        // chromeOptions:
        // {
        //     args: [ "--headless", "--disable-gpu"]
        // }
    },
 
    beforeLaunch: function () {
        var rimraf = require('rimraf', ['rmdir']);
        rimraf('.tmp', function () { console.log('removing JSON tmp folder'); });
        browserName=exports.config.capabilities.browserName;
        directConnect=exports.config.directConnect;
        switch(browserName){
            case "chrome":
            directConnect = true;
            break;
        case "firefox":
            directConnect = false;
            break;
        default:
            browserName='chrome';
            directConnect = true;
        }
        exports.config.directConnect=directConnect;
        exports.config.capabilities.browserName=browserName;
    },

    onPrepare: function() {
        switch (browser.params.environment) {
                   case "stage":
                       browser.baseUrl="https://www1.bgo.bgdigitaltest.co.uk/";
                       break;
                   case "QA1":
                       browser.baseUrl="https://www2.bgo.bgdigitaltest.co.uk/";
                       break;
                   default:
                       console.log("*********** "+browser.params.environment);
                       browser.baseUrl="https://www1.bgo.bgdigitaltest.co.uk/";
        }
                  browser.manage().window().maximize();
                  browser.manage().timeouts().pageLoadTimeout(40000);
                  browser.manage().timeouts().implicitlyWait(25000);
                  //browser.waitForAngularEnabled(false);
                  browser.ignoreSynchronization = true;
                  browser.ignoreUncaughtExceptions= true;
    
    }
  };