const searchCommands = {
    submit() {
        this.waitForElementVisible('@submitButton', 10000)
        .sendKeys('@searchBar', this.api.Keys.ENTER)
        .api.pause(3000);
        return this; // Return page object for chaining
    }
};

module.exports = {
    url: 'http://google.com',
    commands: [searchCommands],
    elements: {
        searchBar: {selector: 'input[name=q]'},
        submitButton: {selector: 'input[name="btnK"]'}
    }
};
