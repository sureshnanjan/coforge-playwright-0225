Feature: WYSIWYG Editor page
Scenario: Check page title
Given: WYSIWYG Editor page is accessed
when: I check title
then: title should match "An iFrame containing the TinyMCE WYSIWYG Editor"



Scenario: Check editor loaded correcctly
Given: WYSIWYG Editor page is accessed
when: I check editor iFrame
then: title should match I should see the editor iFrame


Scenario: type text in the editor
Given: WYSIWYG Editor page is accessed
when: I click inside the editor iFrmae
And: I type "Test text" in the editor
Then: the editor should display "Test text"