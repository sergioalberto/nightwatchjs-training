module.exports = {
    tags: ['google'],
    'Demo test Google' : function (client) {
        client
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', 'rembrandt van rijn')
        .sendKeys('input[type=text]', client.Keys.ENTER)
        .waitForElementVisible('button[name=btnG]', 1000)
        .click('button[name=btnG]')
        .pause(1000)
        .waitForElementVisible('#search .srg [href="https://es.wikipedia.org/wiki/Rembrandt"]', 5000)
        .assert.containsText('#search .srg [href="https://es.wikipedia.org/wiki/Rembrandt"]',
            'Rembrandt - Wikipedia')
        .end();
    }
};

