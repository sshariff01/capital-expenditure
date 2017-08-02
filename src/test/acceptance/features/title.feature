Feature: Title check
  I should be able to go to the home page of the CapEx website and check its title

Scenario: Get the title of the home page
  Given I navigate to the endpoint "/"
  Then I expect the title of the page "Getting Started with Analyzing Capital Expenditure"

