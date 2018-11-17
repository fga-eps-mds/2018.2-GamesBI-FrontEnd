Feature: Check out the team
  As a user, I want to be able to view the team, so I can see who they are

  Scenario: User can see home page
    Given I visit the home page
    Then I should see the logo
  
  Scenario: User can click trending games
    Given I visit the home page
    Then I click on "trending games"
    And I wait for 1 second

  Scenario: User can click most watched
    Given I visit the home page
    Then I click on "most watched"
    And I wait for 1 second

  Scenario: User can click top by played time
    Given I visit the home page
    Then I click on "top by played time"
    And I wait for 1 second

  Scenario: User can click sales
    Given I visit the home page
    Then I click on "sales"
    And I wait for 1 second
