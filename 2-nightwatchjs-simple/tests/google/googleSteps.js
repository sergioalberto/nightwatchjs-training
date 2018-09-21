module.exports = {
    'step one' : function (browser) {
        browser
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .setValue('input[type=text]', 'nightwatch')
        .sendKeys('input[type=text]', browser.Keys.ENTER)
        .waitForElementVisible('button[name=btnG]', 1000)
    },
    
    'step two' : function (browser) {
        browser
        .useXpath() // every selector now must be xpath
        .click('//button[@name="btnG"]')
        .useCss() // we're back to CSS now
        .waitForElementVisible('#search .srg a[href="http://nightwatchjs.org/"]', 5000)
        .assert.containsText('#search .srg a[href="http://nightwatchjs.org/"]', 'Nightwatch.js')
        .end();
    },
    
    before : function(browser) {
        console.log('Setting up...');
    },
    
    after : function(browser) {
        console.log('Closing down...');
    },
    
    beforeEach : function(browser) {
        console.log('Before step');
    },
    
    afterEach : function() {
        console.log('After step');
    }
    
};
