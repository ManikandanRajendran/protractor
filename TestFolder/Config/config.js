exports.config = {

    allScriptsTimeout:110000,
    framework:'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    directConnect: false,

    specs:['../feature/test.feature'],
    cucumberOpts: {
                 require:['../steps/*.steps.js'],
                //  tags:['@test123'],
                 format: 'json:.tmp/results.json',
                 strict: true,
                 keepAlive: false ,
    },
    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options:{
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                openReportInBrowser:true,
                reportPath:'Cucumber-Multi-Report/Report-',
        }
    }],

    capabilities: {
        browserName: 'chrome',
        'shardTestFiles': true,
        maxInstances: 1,
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
            directConnect = false;
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
                       browser.baseUrl="https://www1.bgo.bgdigitaltest.co.uk/";
                       console.log("*********** is it "+browser.params.environment);
        }
                browser.manage().window().maximize();
                //   browser.manage().timeouts().pageLoadTimeout(40000);
                //   browser.manage().timeouts().implicitlyWait(25000);
                browser.waitForAngularEnabled(false);
                browser.ignoreSynchronization = true;
                browser.ignoreUncaughtExceptions= true;
    
    },

};