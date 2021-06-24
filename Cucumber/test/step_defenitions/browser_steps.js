//первое, что нужно, это импортировать ключевые слова
const { When, Then, setDefaultTimeout, Given } = require('cucumber');
const { expect } = require("chai");

setDefaultTimeout(60000);

Given(/^I open epam.com$/, function(){
    return browser.get('https://www.epam.com/');
});

Then(/^Page title should be "EPAM | Enterprise Software Development, Design & Consulting"$/, async function(){
    const pageTitle = await browser.getTitle();
    expect(pageTitle).to.be.equal("EPAM | Enterprise Software Development, Design & Consulting");
})

When(/^I wait 10 seconds$/, function(){
    return browser.sleep(10000);
})