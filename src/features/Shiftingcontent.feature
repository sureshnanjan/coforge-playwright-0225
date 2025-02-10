Feature: Heroku App Shifting content page
Scenario: Shifting content link and functionality works
    Given: The Heroku Home page is accessed
    When: I clicked on Shifting Content link
    Then: Shifting content page should be opened and title should match "Shifting Content"
    
    Given: I clicked on Menu Element link and landed on Menu Item page
    When: I refresh the Menu Item page
    Then: Menu element should be shifting a few pixels in either direction on each page load.

    Given: I clicked on An Image link and landed on Shifting content: Image page
    When: I refresh the Image page
    Then: Image should be shifting a few pixels in either direction on each page load.

    Given: I clicked on List link and landed on Shifting content: List page
    When: I refresh the List page
    Then: List should be shifting a few pixels in either direction on each page load.
   