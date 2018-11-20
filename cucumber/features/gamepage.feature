Feature: As a user, i should be able to click on all the buttons on the homepage and also see all the graphics on it

  Scenario: User can see viewer count graphic of a game
    Given I visit the home page
    Then I search for "Dota 2"
    Then I wait for 1 second
    Then I click on the first item "Dota 2"
    Then I wait for 1 second
    Then I should see "Dota 2"
