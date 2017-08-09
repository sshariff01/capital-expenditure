Feature: Display total cycle times
  As a product owner
  I want to know the total amount of time spent on stories for the current iteration

Scenario: Get the total cycle time of stories for this iteration
  Given I navigate to the endpoint "/"
  Then I see the label "Total # of Hours Spent This Iteration:" for totalCycleTime
  And I see a value equal to the totalCycleTime
