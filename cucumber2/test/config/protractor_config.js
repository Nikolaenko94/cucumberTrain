const path = require('path');
const yargs = require("yargs").argv;
const reporter = require("cucumber-html-reporter");

//settings for cucumber-html-reporter
const reportOptions = {
    //add theme for reporter (appearance)
    theme: 'bootstrap',
    //show path for json file
    jsonFile: path.join(__dirname, '../reports/report.json'),
    //where we will save HTML-report
    output: path.join(__dirname, '../reports/cucumber-report.html'),
    reportSuitsAsScenarios: true,
    //also we can create launchreport function - auto run HTML report
}

exports.config = {
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    specs: [path.resolve('./test/features/**/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        //add settings for parallel run tests
        //command for run some potocs (some windows): npm test -- --tags "@tagName" --instances 2  
        shardTestFiles: yargs.instances > 1,
        maxInstances:    yargs.instances || 1, //potocs count
        browserName: "chrome",
        chromeOptions: {
            args: ['--no-sandbox', '--window-size=1920,1080']
        },
    },
    disableChecks: true,
    directConnect: true,
    cucumberOpts:{
        require: ['../step_definitions/**/*.js'],
        format: ['json:../reports/report.json'],
        //for start test with personal tag -> into command line -> npm test -- --tags "@tagsName"
        //if we want start only special tags we can -> npm test -- --tags "@tagName1 or @tagName2"
        //if we want start global tag, but we don't want start one local tag for this global -> npm test -- --tags "@globalTag and not @localTagForThisGlobal"
        //if we want start tests with some tags (not one) how chain, we can -> npm test -- --tags "@tagName1 and @tagName2" -> if we have tests with @tagName1 @tagName2 we run only this
        //we can also combinated our expressions, for example -> npm test -- --tags "(@tagName1 and @tagName2) and not @tagName3"        
        tags: yargs.tags || '@smoke'
    },
    onPrepare: () =>{
        return browser.waitForAngularEnabled(false);
    },
    afterLaunch: () =>{
        //generation HTML reporter
        return reporter.generate(reportOptions);
    }, 
};
//cucumber default hoooks:
// before, after, beforeAll, afterAll   