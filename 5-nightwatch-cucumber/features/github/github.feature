@github
Feature: Open Github

    @github-nighwatch
    Scenario: Navigating to Github
        Given I open Github Nightwatch page
        Then the Github title is "nightwatch"
