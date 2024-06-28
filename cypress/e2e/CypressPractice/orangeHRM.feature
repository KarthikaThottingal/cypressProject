Feature: Validate the login page

Scenario: Login into orangeHRM homepage
    When user enter username
    When user enter password
    When user click on login button
    When user able to login to orange hrm and homepage displayed
