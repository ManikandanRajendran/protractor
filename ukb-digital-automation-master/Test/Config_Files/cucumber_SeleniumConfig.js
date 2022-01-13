var d=new Date();
var timeStamp=d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+"_"+d.getHours()+"-"+d.getMinutes()+"-"+d.getSeconds();

exports.config = {
//param feature
  params: {
      login: {
          //Change these as appropriate
          email: 'lee.clement@britishgas.co.uk',
          password: 'password12'
      },
      environment:null,
  },

  allScriptsTimeout:110000,
  framework:'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  directConnect: true,

  specs:['../Features/GetAQuote/GAQLeadScenarios.feature'],
  cucumberOpts: {
                 require:['../StepDefinitions/*.steps.js','./hooks.js'],
                 tags:['@test123'],
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
                    reportPath:'Cucumber-Multi-Report/Report-'+timeStamp,
            }
}],
capabilities: {
              browserName: 'chrome',
              'shardTestFiles': true,
              maxInstances: 1,

	      //  chromeOptions: {
          //  args: [ "--headless", "--disable-gpu"]
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
               case "UKB63":
                   browser.baseUrl="https://193.67.163.63/business/";
                   break;
               case "UKB141":
                   browser.baseUrl="https://193.67.163.141/business/";
                   break;
               case "UKB83":
                   browser.baseUrl="https://193.67.163.83/business/";
                   break;
               case "UKB111":
                   browser.baseUrl="https://10.224.70.111/business/";
                   break;
               case "UKB50":
                   browser.baseUrl="https://10.224.70.50/business/";
                   break;
               case "UKB18":
                   browser.baseUrl="https://10.224.70.18/business/";
                   break;
               case "UKB41":
                   browser.baseUrl="https://193.67.163.41/business/";
                   break;
               default:
                   browser.baseUrl="https://10.224.70.111/business/";
    }
              browser.manage().window().maximize();
              browser.manage().timeouts().pageLoadTimeout(40000);
              browser.manage().timeouts().implicitlyWait(25000);
              //browser.waitForAngularEnabled(false);
              browser.ignoreSynchronization = true;
              browser.ignoreUncaughtExceptions= true;

},

};
