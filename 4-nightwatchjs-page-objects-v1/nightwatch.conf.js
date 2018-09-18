const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

module.exports = {
    src_folders : ['tests'],
    output_folder: 'reports',
    custom_assertions_path: '',
    custom_commands_path: '',
    page_objects_path: 'pages',
    live_output: false,
    disable_colors: false,
    globals_path: '',
    test_workers: {
        enabled: false,
        workers: 2,
    },
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: '',
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver': chromedriver.path,
            'webdriver.gecko.driver': geckodriver.path
        },
    },
    test_settings: {
        default: {
            globals: {
                waitForConditionTimeout: 30000,
                waitForConditionPollInterval: 1000,
                asyncHookTimeout: 50000,
            },
            launch_url: 'http://localhost',
            selenium_port: 4444,
            selenium_host: 'localhost',
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
            },
            selenium: {
                cli_args: {
                    'webdriver.chrome.driver': chromedriver.path,
                },
            },
        },
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
            },
            selenium: {
                cli_args: {
                    'webdriver.chrome.driver': chromedriver.path,
                },
            },
        },
        chromeHeadless: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    args: ['headless', 'no-sandbox', 'disable-gpu'],
                },
                
            },
            selenium: {
                cli_args: {
                    'webdriver.chrome.driver': chromedriver.path,
                },
            },
        },
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                marionette: true,
                acceptSslCerts: true,
            },
            selenium: {
                cli_args: {
                    'webdriver.gecko.driver': geckodriver.path,
                },
            },
        }
    },
}
