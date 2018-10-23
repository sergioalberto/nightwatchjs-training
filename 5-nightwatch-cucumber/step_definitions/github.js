const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')

const githubPage = client.page.github.github();

Given("I open Github Nightwatch page", () => {
    return githubPage.navigate().waitForElementVisible('body', 1000)
})

Then("the Github title is {string}", (title) => {
    return githubPage.verifyTittle(title)
})
