Feature: A/B testing page
Scenario: Check page title
Given: A/B testing page is accessed
when: I check title
then: title should match "A/B Test Control"

Scenario: Check page description
Given: A/B testing page is accessed
when: I check description
then: description should match "Also known as split testing. This is a way in which businesses are able to simultaneously test
                            and learn different versions of a page to see which text and/or functionality works best 
                            towards a desired outcome (e.g. a user action such as a click-through)."

Scenario: Check page credit
Given: A/B testing page is accessed
when: I check credit name
then: credit name should match "Powered by Elemental Selenium"                         