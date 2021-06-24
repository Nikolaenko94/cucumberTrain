    //build in node.js modules
    const path = require('path');
    //config. setings for protractor
    exports.config = {
    //We create default scripts for protractor
        //create default timeout for protractor
        allScriptsTimeout: 60000,
        //create timeout for given web page
        getPageTimeot: 60000,
        //show where stay over testing files
        //path resolve return absolutle pathes
        specs: [path.resolve('./test/features/**/*.feature')],
        //show what framework we using
        framework: 'custom',
        frameworkPath: require.resolve("protractor-cucumber-framework"),
        //show capabilites we using
        capabilities:{
            //show what browser we using
            browserName: 'chrome',
            //parametrs for browser
            chromeOptions: {
                // show need window size and baned using other experemental flags and features
                //flags: --no-sandbox: запрещает использовать эксперементальные фичи
                //       --window-size: разрешение браузера
                args:['--no-sandbox', '--window-size=1920,1080']
            },
        },
        //дополнительные флаги, не добавляются в капабилитись, так как будет появляться предупреждение, что бы его небыло лупим сюда:
        //указываем что мы испольщуем кастомный фреймворк, а именно protractor-cucumber-framework
        disableChecks: true,
        //мы будем использовать прямое соединение драйвера к браузеру.
        //мы не будем поднимать селениумовский сервак
        directConnect:true,
        //настройка опций для кукумбера)
        cucumberOpts: {
            // указываем где будут лежать степ-дефенитионс
            require: [path.resolve('./test/step_defenitions/**/*.js')],
            //и указываем, что если вдруг возникла ошибка какого то из тестов, то выполнение тестов не будет прерываться
            //прерывается только индивидуальный тест и идёт выполнение дальше
            //забота о формате) формат связан с выводом наших результатов, например что бы их сохраняло в виде json
            format: ["json:../reports/report.json"],
            //добавление тэгов. По дефолту не передано никаких
            //например добавим тэг, по которому будем определять запуск аших тестов
            tags: '@smoke'
        }
    };