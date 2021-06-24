const path = require('path');
const yargs = require("yargs").argv;

exports.config = {
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    specs: [path.resolve('./test/features/**/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
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
        tags: yargs.tags || '@smoke'
    },
    onPrepare: () =>{
        return browser.waitForAngularEnabled(false);
    }    
};