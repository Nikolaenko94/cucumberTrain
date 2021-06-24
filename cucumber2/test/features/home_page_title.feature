@smoke
Feature: Home Page Title

@epam
Scenario: Page title
    Given I open "https://www.epam.com/" url
    Then Page title should be "EPAM | Enterprise Software Development, Design & Consulting"
        And Page title should not be "EPAM | "
    When I wait "1" seconds  

Scenario: Page title
    Given I open "https://www.google.com/?gws_rd=ssl" url
    Then Page title should be "Google"
    When I wait "1" seconds 

@so
Scenario Outline: Page Titles <URL>
    Given I open "<URL>" url
    Then Page title should be "<Title>"
    When I wait "1" seconds 
    Examples:
        | URL                                | Title                                                        | 
        | https://www.google.com/?gws_rd=ssl | Google                                                       |
        | https://www.epam.com/              | EPAM \| Enterprise Software Development, Design & Consulting |