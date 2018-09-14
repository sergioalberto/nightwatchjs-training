module.exports = {
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
        .assert.containsText('#rso > div:nth-child(1) > div > div:nth-child(1) > div > div > h3 > a', 'Rembrandt - Wikipedia')
        .end();
    }
};
