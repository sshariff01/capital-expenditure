Feature: Title check
  As a user
  I want to check the title on the home page of the CapEx website
  So that it tells me what page I'm looking at

Scenario: Get the title of the home page
  Given I navigate to the endpoint "/"
  Then I expect the title of the page "Getting Started with Analyzing Capital Expenditure"

