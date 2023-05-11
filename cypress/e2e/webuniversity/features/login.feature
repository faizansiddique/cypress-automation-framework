@smoke
Feature: WebDriverUniversity Login Page

    Scenario: Login with Valid Credentials
        Given Able to access WebDriverUniversity Login Portal
        When Enter valid username webdriver
        And Enter valid password webdriver123
        And click on login button
        Then Validate successful message validation succeeded

    Scenario: Login with Valid Credentials
        Given Able to access WebDriverUniversity Login Portal
        When Enter valid username webdriver
        And Enter valid password webdriver555
        And click on login button
        Then Validate successful message validation failed

    @login
    Scenario Outline: Test Login via WebDriverUniversity Login Portal
        Given Able to access WebDriverUniversity Login Portal
        When Enter valid username <username>
        And Enter valid password <password>
        And click on login button
        Then Validate successful message <message>

        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver555 | validation failed    |
            | haroon    | webdriver555 | validation failed    |