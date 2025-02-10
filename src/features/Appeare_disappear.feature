Feature: Verify element  appear after page refresh
	
Scenario: check if the element present after refreshing the page   
   Given : The Heroku Home page is accessed
     And : Click on the disappearing_elements link
    When : I navigate to "Disappearing Elements" page    
    And  : when i refresh the page 
    Then : I should see "Gallery" element
