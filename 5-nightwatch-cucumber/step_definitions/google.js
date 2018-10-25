const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')

const homePage = client.page.google.home();
const resultsPage = client.page.google.searchResults();
const nightwatch = client.page.nightwatch.nightwatch();

Given("I open Google`s search page", () => {
    return homePage.navigate().waitForElementVisible('body', 1000)
})

Then("the Google search form exists", () => {
    return homePage.assert.visible('@searchBar')
})

When("I need to looking for {string}",  (textToLookingFor) => {
    return homePage.lookingFor(textToLookingFor).submit()
})

When("I open the link with the following text {string}", (textToLookingFor) => {
    return resultsPage.lookingForResults(textToLookingFor)
})

Then('the page should have the following texts:', async (dataTable) => {
    return nightwatch.lookingTextsOnPage(dataTable)
})
