Feature: forgotten my Details
@forgotten1
Scenario: Verify whether customer is able to navigate on "forgotten my Details" page from login page
Given user lands on login page
When user clicks on I've forgotten my details
Then verify the header as "Forgotten your details?"
And verify default tab selected as Password
And verify that URL contains "/business/app/forgotten-your-details"


Scenario: Verify whether back to login link takes customer to forgotten my Details page
Given user lands on login page
When user clicks on I've forgotten my details
And user clicks on Back to log in
Then verify the header as "Log in to your business account"
And verify that URL contains "/business/your-account/login"

@password1
Scenario Outline: Verify whether customer is able to reset his password
Given user lands on login page
When user clicks on I've forgotten my details
And user enters email address in login page as "<EmailAddress>"
And user clicks on Email me
Then verify password reminder message for "<EmailAddress>"
And verify that URL contains "/business/app/forgotten-your-details/password-reminder-sent"
Examples:
|EmailAddress|
|vinith.velusamy@cognizant.com|


Scenario: Verify whether all the required fields are displayed when customer choose "Both" tab on forgotten my Details page
Given user lands on login page
When user clicks on I've forgotten my details
And user clicks on Both tab
Then verify all the fields are displayed under both tab
And user clicks on Back to log in
Then verify the header as "Log in to your business account"
And verify that URL contains "/business/your-account/login"


Scenario Outline: Verify whether customer is able to retrieve email and password details when he choose "both" tab on forgotten my Details page
Given user lands on login page
When user clicks on I've forgotten my details
And user clicks on Both tab
And user enters all the email details with title as "<title>" and firstname as "<firstname>" and lastname as "<lastname>" and account number as "<AccountNumber>"
And user clicks on Find button on forgotten my Details page
Then verify the UI of email address and password retrieved page for "<EmailAddress>"
And verify that URL contains "business/app/forgotten-your-details/email-password-confirmation"
Examples:
|EmailAddress|title|firstname|lastname|AccountNumber|
|gopinath.muthukrishnan@cognizant.com|Mr|Arun|Baskar|600538279|


Scenario: Verify whether customer is able to retrieve his details when he choose email tab on forgotten my Details page
Given user lands on login page
When user clicks on I've forgotten my details
And user clicks on Email tab
Then user should verify all his details under Email tab
Then user clicks on Back to log in
Then verify the header as "Log in to your business account"
And verify that URL contains "/business/your-account/login"


Scenario Outline: Verify whether customer is able to retrieve his forgotten Email address
Given user lands on login page
When user clicks on I've forgotten my details
And user clicks on Email tab
And user enters all the email details with title as "<title>" and firstname as "<firstname>" and lastname as "<lastname>" and account number as "<AccountNumber>" for Email
And user clicks on Find button on forgotten my Details page
Then verify the UI of email address retrieved page for "<EmailAddress>"
And verify that URL contains "/business/app/forgotten-your-details/email-address-confirmation"
Then user clicks on Log in from email address retrieve page
And verify the header as "Log in to your business account"
Examples:
|EmailAddress|title|firstname|lastname|AccountNumber|
|gopinath.muthukrishnan@cognizant.com|Mr|Arun|Baskar|600538279|


Scenario Outline: Verify that error message is displayed while entering an unregistered email address on forgotten my Details page
Given user lands on login page
When user clicks on I've forgotten my details
And user enters email address in login page as "<EmailAddress>"
And user clicks on Email me
Then verify error message in login page as Oops, it looks like something went wrong
And verify error message in login page as Please check your email address
Examples:
|EmailAddress|
|lakshminarayanan.ganesan@cognizant.com|


Scenario Outline: Verify that error message is displayed while entering an unregistered email address on forgotten my Details page under email tab
Given user lands on login page
When user clicks on I've forgotten my details
And user clicks on Email tab
And user enters all the email details with title as "<title>" and firstname as "<firstname>" and lastname as "<lastname>" and account number as "<AccountNumber>" for Email
And user clicks on Find button on forgotten my Details page
Then verify error message in login page as Oops, it looks like something went wrong
Then verify error message in login page as We can't find an account with that information. Please check all your details are correct
Examples:
|title|firstname|lastname|AccountNumber|
|Mr|Test|Tester|600513642|


Scenario Outline: Forgotten Email - Multiple Email Addresses For Single User
Given user lands on login page
When user clicks on I've forgotten my details
And user clicks on Email tab
And user enters all the email details with title as "<title>" and firstname as "<firstname>" and lastname as "<lastname>" and account number as "<AccountNumber>" for Email
And user clicks on Find button on forgotten my Details page
Then verify the UI of multiple matches found page
Then verify the multiple matches found page for forgotten Both for "<FullName>"
And verify that URL contains "/business/app/forgotten-your-details/multiple-addresses-found"
Then user clicks on Back to log in in multiple matches page
Then verify the header as "Log in to your business account"
And verify that URL contains "/business/your-account/login"
Examples:
|title|firstname|lastname|AccountNumber|FullName|
|Mr|Automation|Renewals|600574253|Automation Renewals|


Scenario Outline: Forgotten Both - Multiple Email Addresses For Single User
Given user lands on login page
When user clicks on I've forgotten my details
And user clicks on Both tab
And user enters all the email details with title as "<title>" and firstname as "<firstname>" and lastname as "<lastname>" and account number as "<AccountNumber>"
And user clicks on Find button on forgotten my Details page
Then verify the UI of multiple matches found page for forgotten Both
Then verify the multiple matches found page for forgotten Both for "<FullName>"
And verify that URL contains "/business/app/forgotten-your-details/multiple-addresses-found"
Then user clicks on Back to log in in multiple matches page
Then verify the header as "Log in to your business account"
And verify that URL contains "/business/your-account/login"
Examples:
|title|firstname|lastname|AccountNumber|FullName|
|Mr|Automation|Renewals|600574253|Automation Renewals|
