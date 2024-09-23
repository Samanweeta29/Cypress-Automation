Feature: Register user on automationexercise

    Scenario: Verify user has succesfully created account
        Given I launch the browser and Navigate to url "http://automationexercise.com"
        Then Verify that home page is visible successfully
        When I Click on "Signup | Login" button
        Then Verify "New User Signup!" is visible
        When Enter name and email address
        And I Click Signup button
        Then Verify that 'ENTER ACCOUNT INFORMATION' is visible
        When I will Fill details Title, Name, Email, Password, Date of birth
        And I will Select checkbox 'Sign up for our newsletter!'
        And I will Select checkbox 'Receive special offers from our partners!'
        And I will Fill details First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        And I will Click 'Create Account button'
        Then Verify that 'ACCOUNT CREATED!' is visible
        When I Click 'Continue' button
        Then Verify that 'Logged in as username' is visible
        When I Click 'Delete Account' button
        Then Verify that 'ACCOUNT DELETED!' is visible 
        And  I click 'Continue' button



