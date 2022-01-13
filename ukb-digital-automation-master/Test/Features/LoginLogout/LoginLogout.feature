Feature:Login & Logout Scenarios
@Error message while entering invalid e-mail
Scenario Outline: Verify whether error message is displayed while entering invalid email address
Given user lands on business login page
When user enters email address as "<EmailAddress>"
Then verify error message around email as "Please enter a valid email address"
Examples:
|EmailAddress|
|123|

@Error message while entering blank email address
Scenario Outline: Verify whether error message is displayed while entering blank email address
Given user lands on business login page
When user enters email address as "<EmailAddress>"
Then verify error message around email as "Email address field can't be blank"
Examples:
|EmailAddress|
||

@Error message is not displayed while entering valid email address
Scenario Outline: Verify whether error message is not displayed while entering valid email address
Given user lands on business login page
When user enters email address as "<EmailAddress>"
Then verify error message around email textbox as "Please enter a valid email address" is not displayed
Examples:
|EmailAddress|
|setupfdd8@bg.com|

@Error message while entering blank password address
Scenario Outline: Verify whether error message is displayed while entering blank password
Given user lands on business login page
When user enters password as "<Password>"
Then verify error message around password textbox as "Password must contain letters and numbers"
Examples:
|Password|
| |

@Error message is displayed while entering invalid password
Scenario Outline: Verify whether error message is displayed while entering invalid password
Given user lands on business login page
When user enters password as "<Password>"
Then verify error message around password textbox as "Password must contain letters and numbers"
Examples:
|Password|
|password|

@Error message is not displayed while entering password in valid format
Scenario Outline: Verify whether error message is not displayed while entering password in valid format
Given user lands on business login page
When user enters password as "<Password>"
Then verify error message around password textbox as "Password must contain letters and numbers" is not displayed
Examples:
|Password|
|password12|

@Login button is disabled while entering invalid email address and valid password
Scenario Outline: Verify whether login button is disabled while entering invalid email address and valid password
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
Then verify the login button disabled
Examples:
|EmailAddress|Password|
|123|password12|

@Visual feedback is displayed while entering the password
Scenario Outline: Verify whether visual feedback is displayed while entering the password
Given user lands on business login page
When user enters password as "<Password>"
Then verify visual feedback is provided next to each line of criteria
Examples:
|Password|
|password12|

@Login button is disabled when valid email address and invalid password are entered
Scenario Outline: Verify whether login button is disabled when valid email address and invalid password are entered
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
Then verify the login button disabled
Examples:
|EmailAddress|Password|
|test@test.co.uk|password|

@Login button is enabled when valid email address and valid password are entered
Scenario Outline: Verify whether login button is enabled when valid email address and valid password are entered
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
Then verify the login button enabled
Examples:
|EmailAddress|Password|
|test@test.co.uk|password12|

@Error message is displayed for In-Progress status email address
Scenario Outline: Verify whether an appropriate error message is displayed for In-Progress status email address
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify error message in login page as "Our records show that you've already used this email address to start the"
And verify error message in login page as "registration process but haven't activated your account."
And verify error message in login page as "Please check your email account for an activation email we have sent you and click on"
And verify error message in login page as "the 'Complete registration' link to continue."
Examples:
|EmailAddress|Password|
|svtest7@gmail.com|password12|

@Error message is displayed for pending activation status email address
Scenario Outline: Verify whether an appropriate error message is displayed for pending activation status email address
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify error message in login page as "Our records show that you've already used this email address to start the"
And verify error message in login page as "registration process but haven't activated your account."
And verify error message in login page as "Please check your email account for an activation email we have sent you and click on"
And verify error message in login page as "the 'Complete registration' link to continue."
Examples:
|EmailAddress|Password|
|testing412@gmail.com|password12|

@Error message is displayed for the customer whose email address is not yet activated
Scenario Outline: Verify whether an appropriate error message is displayed for the customer whose email address is not yet activated
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify error message in login page as "Oops, it looks like something went wrong"
Then verify error message in login page as "Our records show that you've already used this email address to start the"
And verify error message in login page as "registration process but haven't activated your account."
And verify error message in login page as "Please check your email account for an activation email we have sent you and click on"
And verify error message in login page as "the 'Complete registration' link to continue."
Examples:
|EmailAddress|Password|
|test04072017153941@gmail.com|password12|

@Error message is displayed for the black listed email address
Scenario Outline: Verify whether an appropriate error message is displayed for the black listed email address
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify error message in login page as "Oops, it looks like something went wrong"
And verify error message in login page as "We don't recognise the details you've entered."
And verify error message in login page as "Forgotten your details?"
And verify error message in login page as "Retrieve your details"
And verify error message in login page as "If you're a British Gas Lite customer, please go to the"
And verify error message in login page as "British Gas Lite"
And verify error message in login page as "If you're a British Gas Home customer, please go to our"
And verify error message in login page as "home"
Examples:
|EmailAddress|Password|
|singh_harv@rediff.com|password12|

@Error message is disappeared when typing the email address @Test
Scenario Outline: Verify whether error message is disappeared when typing the email address
Given user lands on business login page
When user enters email address as "<InvalidEmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify error message in login page as "Oops, it looks like something went wrong"
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify error message as "Oops, it looks like something went wrong" is not displayed in login page
Then the user logs out of the account by clicking on the logout button
Examples:
|InvalidEmailAddress|Password|EmailAddress|
|singh_harv@rediff.com|password12|setupdddata9@bg.com|


@Error message is disappeared when typing the password
Scenario Outline: Verify that error message is disappeared when typing the password
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<InvalidPassword>"
And user clicks on login button
Then verify error message in login page as "Oops, it looks like something went wrong"
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify error message as "Oops, it looks like something went wrong" is not displayed in login page
Then the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|InvalidPassword|Password|
|qas02sapdata1@bgdigitaltest.co.uk|password1234|password12|

#This functionality currently de-scoped
@User is taken to Renewal bill page when logging in with Renewal link
Scenario Outline: Verify whether user is taken to Renewal bill page when logging in with Renewal link
Given user directly lands on Renewals
When user enters email address as "<EmailAddress>"
When user enters password as "<Password>"
When user clicks on login button
Then verify the landed page is "renewal quote page"
Then the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
#|servicesdata25@bgdigitaltest.co.uk|password12|

#This functionality currently de-scoped
@User is taken to view bill page when logged in using view bill URL
Scenario Outline: Verify whether user is taken to view bill page when logged in using view bill URL
Given user directly lands on View Bill
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify the landed page is "View bill page"
Then the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
#|incidentren5@bgdigitaltest.co.uk|password12|

#This functionality currently de-scoped
@User is taken to Submit meter page when logged in using Submit meter link
Scenario Outline: Verify whether user is taken to Submit meter page when logged in using Submit meter link
Given user directly lands on SMR
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify the landed page is "Submit meter read page"
Then the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
#|incidentren5@bgdigitaltest.co.uk|password12|

#This functionality currently de-scoped
Scenario Outline: Verify whether user is taken to Payments page when logged in using payment details link
Given user directly lands on Payments
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify the landed page is "Payment details page"
Then the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
#|incidentren5@bgdigitaltest.co.uk|password12|

@User lands on OAM error page
Scenario Outline: Verify whether user lands on OAM error page
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify error message in page as "Oops, it looks like something went wrong"
Then verify error message in page as "We can't find your energy account(s). Please call us on 0800 316 2010  and we'll get you back online."
Then the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|incidentren5@bgdigitaltest.co.uk|password12|

@logout
Scenario Outline: Verify whether user is able to logout
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify the landed page is "Account Dashboard"
When the user logs out of the account by clicking on the logout button
Then user is able to view the log out page
Examples:
|EmailAddress|Password|
|qas02sapdata1@bgdigitaltest.co.uk|password12|

@logout and access few links
Scenario Outline: Verify whether user is able to logout and able to access few links
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify the landed page is "Account Dashboard"
When the user logs out of the account by clicking on the logout button
Then user should able to access the Boiler maintenance, Upgrade to smart meter, Hive active heating and logback in links
Examples:
|EmailAddress|Password|
|qas02sapdata1@bgdigitaltest.co.uk|password12|

#This functionality currently de-scoped
@Testing
Scenario Outline: Verify whether user is taken to Submit meter page when logged in using global Submit meter link
Given user directly lands on GSMR
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify the landed page is "Global SMR Page"
And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
#|incidentren5@bgdigitaltest.co.uk|password12|

@Login and Register roundel is not displayed in the business home page
Scenario Outline: Verify whether "Login" and "Register" roundel is not displayed in the business home page
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify the landed page is "Account Dashboard"
And Click on British Gas Icon
Then verify user is navigated to Business Home Page
And verify roundel for login and register is not displayed
And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|qas02sapdata1@bgdigitaltest.co.uk|password12|

@Links under my accounts mega menu is displayed when customer logged in
Scenario Outline: Verify whether appropriate links under my accounts mega menu is displayed when customer logged in
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify the landed page is "Account Dashboard"
Then user clicks on your account mega menu and should be able to see View Accounts, Update your details and Logout links and clicks on logout
Examples:
|EmailAddress|Password|
|qas02sapdata1@bgdigitaltest.co.uk|password12|

@roundel
Scenario:Verify whether appropriate links under my accounts mega menu is displayed before login
Given user lands on business login page
Then user clicks on your account mega menu and should be able to see the links available under your account mega menu

@User is able to logout from the CQ page
Scenario Outline: Verify whether the user is able to logout from the CQ page
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify user should navigate to accounts page
And user click on settings link
And user clicks on logout from header of CQ page
Examples:
|EmailAddress|Password|
|testesa02@test.com|password1234|

@User is able to logout by clicking the logout button from the mega menu
Scenario Outline: Verify that the user is able to logout by clicking the logout button from the mega menu
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify user should navigate to accounts ember page
And click logout from megamenu
Examples:
|EmailAddress|Password|
|qas02sapdata1@bgdigitaltest.co.uk|password12|
