module.exports = {
    tags: ['git'],
    'Demo test GitHub' : function (client) {
        client
        .url(client.globals.githubLaunchUrl)
        .waitForElementVisible('body', 1000)
        .waitForElementVisible('.container h1 strong a')
        .assert.containsText('.container h1 strong a', 'nightwatch', 'Checking project title is set to nightwatch')
        .end()
    }
};
