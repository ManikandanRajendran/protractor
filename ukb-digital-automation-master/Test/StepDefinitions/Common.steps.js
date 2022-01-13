var data = require('../Resources/testdata.json');
var util=require('../Utils/FunctionalUtil.js');
var assert=require('assert');

//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger('info');

module.exports = function ()
{

this.setDefaultTimeout(120 * 3000);

this.Then(/^Error message should be \"([^\"]*)\" for \"([^\"]*)\"$/,async function (error,type){
  let isErrormatching=await util.verifyError(error,type);
  assert.equal(isErrormatching,true,"Could not match the error");
});

};
