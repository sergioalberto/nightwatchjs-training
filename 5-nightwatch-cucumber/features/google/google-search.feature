@google-search
Feature: Google Search

    @google
    Scenario: Open Google
        Given I open Google`s search page
        Then the title is "Google"
        And the Google search form exists

    @google
    Scenario: Searching on Google
        Given I open Google`s search page
        Then the Google search form exists
        When I need to looking for "nightwatch"
        And I open the link with the following text "Nightwatch.js | Node.js powered End-to-End testing framework"
        Then the title is "Nightwatch.js | Node.js powered End-to-End testing framework"
        And the page should have the following texts:
            |texts|
            |End-to-End        |
            |Selenium/WebDriver|
