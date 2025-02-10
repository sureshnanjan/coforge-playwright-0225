Feature: Verify the page redirection
	
Scenario:Redirect from Redirect page to Status code page  
   Given : The Heroku Home page is accessed
     And : Click on the Redirect  link
    When : It navigate to "Redirect" page    
    And  : I click on the status code page link 
    Then : I should be redirect to the  "Status code" page" 
