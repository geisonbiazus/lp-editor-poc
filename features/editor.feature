Feature: Landing Page Editor

  Scenario: Add new text component
    Given I have a Page
    And I have a section inside the Page
    Then the Section should be inside the Page
    When I add a new Text component to the first section in the position 42 x 36
    Then the text component should be inside the first section
    And the Text Component should be in the 42 x 36 position

  Scenario: Move component
    Given I have a Page
    And I have a section inside the Page
    And I have a text component in the position 20 x 20
    When I move the text component to positions 50 x 40
    Then the text component should be at 50 x 40 position
