
module.exports = function(){
    // return this
    
    this.Given('open the browser and load url', async function () {
        // Write code here that turns the phrase above into concrete actions
        console.log('Reached');
        browser.get(browser.baseUrl);
        return 'pending';
      });
}