const { When, Then, setDefaultTimeout } = require('cucumber');
const { expect } = require('chai');


setDefaultTimeout(60000);

When(/^I open "([^"]*)" url$/,function(url){
    return browser.get(url);
});

Then(/^Page title should (not )?be "([^"]*)"$/, async function(notArg, title){
    const pageTitle = await browser.getTitle();    
    if(notArg){
        expect(pageTitle).to.not.be.equal(title);  
    } else{
        expect(pageTitle).to.be.equal(title); 
    };         
});

When(/^I wait "([^"]*)" seconds$/, function(seconds){
    return browser.sleep(seconds * 1000);
}); 