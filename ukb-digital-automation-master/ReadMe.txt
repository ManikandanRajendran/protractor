To run your feature in Local Browser:
cd ukb-digital-automation\Test\Config_Files> protractor cucumber_SeleniumConfig.js --params.environment=UKB111

To run your feature in browserstack:
cd ukb-digital-automation\Test\Config_Files> protractor cucumber_BrowserstackConfig.js  --params.environment=UKB111

To Run particular tag in Local Browser:
cd ukb-digital-automation\Test\Config_Files > protractor cucumber_SeleniumConfig.js --cucumberOpts.tags=@tagname --params.environment=UKB141

To Run particular tag in browserStack:
cd ukb-digital-automation\Test\Config_Files > protractor cucumber_BrowserstackConfig.js --params.environment=UKB141 --cucumberOpts.tags=@tagname

Note: Please change the Environment Accordingly and pass tagname where “@tagname” is specified

To run the API collections:
npm install -g newman
newman run postman_collection.json -e DevTest.postman_environment.json -r html,cli
