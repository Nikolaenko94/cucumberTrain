@smoke
Feature: Home Page Title

Scenario: Page title
    Given I open "https://www.epam.com/" url
    Then Page title should be "EPAM | Enterprise Software Development, Design & Consulting"
        And Page title should not be "EPAM | "
    When I wait "1" seconds  