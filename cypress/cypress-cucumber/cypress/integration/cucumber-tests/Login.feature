Feature: Login to Application

  As a valid user
  I want to log in into Application

  Scenario: Valid Login
   Given I open login page
   When I fill in the form
   And I click the submit button
   Then I should see a success message