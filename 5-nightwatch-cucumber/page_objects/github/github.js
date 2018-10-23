const actions = {
    verifyTittle(title) {
        this.waitForElementVisible('@title', 10000)
        .assert.containsText("@title", title, 'Checking project title is set to nightwatch');
        return this; // Return page object for chaining
    }
};

module.exports = {
    url: 'http://github.com/nightwatchjs/nightwatch',
    commands: [actions],
    elements: {
        title: {selector: '.container h1 strong a'},
    }
};
