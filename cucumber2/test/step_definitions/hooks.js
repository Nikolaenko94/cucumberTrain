const { After } = require("cucumber");

//this hook needed for add screenshots after each test
//if used After({tags: "@tagsName"}, func(){}) - we apply this only for this tag
// After({tags: "@so"},async function(){
//     const screenshot = await browser.takeScreenshot();
//     //conver img from base_64 to png
//     const decodedImage = new Buffer.from(screenshot, 'base64');
//     //at this case, 'this' - show our scenarios
//     return this.attach(decodedImage, 'image/png');
// })
After(async function(){
    const screenshot = await browser.takeScreenshot();
    //conver img from base_64 to png
    const decodedImage = new Buffer.from(screenshot, 'base64');
    //at this case, 'this' - show our scenarios
    return this.attach(decodedImage, 'image/png');
})