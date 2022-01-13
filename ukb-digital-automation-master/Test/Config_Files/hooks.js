module.exports = function(){

    this.After(function (scenario, callback) {
           if (scenario.isFailed()) {
            // browser.manage().window().setSize(1270, 1200).then(result =>
               browser.takeScreenshot().then(function (stream) {
                   let decodedImage = new Buffer(stream.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
                  scenario.attach(decodedImage, 'image/png');
                   callback();
               }, function (err) {
                   callback(err);
               });
       }
      else {
          callback();
      }
   });
}
