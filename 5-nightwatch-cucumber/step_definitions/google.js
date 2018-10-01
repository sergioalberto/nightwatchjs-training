const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')

const homePage = client.page.google.home();

Given("I open Google`s search page", () => {
    return homePage.navigate().waitForElementVisible('body', 1000)
})

Then("the Google search form exists", () => {
    return homePage.assert.visible('@searchBar')
})
