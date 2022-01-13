Feature:Registration Scenarios

@register
Scenario: Verify whether customer is able to land on Registration page
Given user lands on business login page
When user clicks on "Register"
Then verify Registration page is displayed


Scenario Outline: Verify Error message is displayed for customer who is  already registered  with email
Given user lands on business registration page
When user enters "<emailaddress>" for "<Registration>"
Then verify error messages in registration page as "Oops, it looks like something went wrong,You've already registered. Please,log in"
Examples:
|emailaddress|Registration|
|vinith.velusamy@cognizant.com|Registration_02|


Scenario Outline: Verify whether customer is taken to In-progress page when he tries to register with In-Progress status email
Given user lands on business registration page
When user enters "<emailaddress>" for "<Registration>"
Then verify registration in progress page
Examples:
|emailaddress|Registration|
|singh_harv@me.com|Registration_03|


Scenario Outline: Verify whether Black list customers are directed to global maintenance page
Given user lands on business registration page
When user enters "<emailaddress>" for "<Registration>"
Then verify global maintenance page
Examples:
|emailaddress|Registration|
|singh_harv@rediff.com|Registration_04|


Scenario Outline: Verify whether error message is displayed for Blacklisted Bporgs
Given user lands on business registration page
When user enters "<emailaddress>" and "<AccountNumber>" and "<PostCode>" for "<Registration>"
Then verify error messages in registration page as "Oops, it looks like something went wrong,We are unable to register your online account."
Examples:
|emailaddress|AccountNumber|PostCode|Registration|
|samplerr@test.co.uk|600528007|S5 6HH|Registration_05|


Scenario Outline: Verify whether error message is displayed when customer enters Wrong security answer
Given user lands on business registration page
When user enters email address as "<emailaddress>" and account number as "<AccountNumber>" and postcode as "<PostCode>" and security answer as "<SecurityAnswer>" for "<Registration>"
Then verify error messages in registration page as "Oops, it looks like something went wrong,It appears the information entered does not match our records."
Then verify error messages in registration page as "To continue registration and to ensure your account is correctly validated,please enter the required information again."
Examples:
|emailaddress|AccountNumber|PostCode|SecurityAnswer|Registration|
|sam@test.co.uk|600001105|NW31DR|1251|Registration_06|


#Scenario Outline: Verify whether error message is displayed when customer enters Wrong security answer for more than one time
#Given user lands on business registration page
#When user enters email address as "<emailaddress>" and account number as "<AccountNumber>" and postcode as "<PostCode>" and security answer as "<SecurityAnswer>" for "<Registration>"
#Then verify error messages in registration page as "You have 2 more attempts before the account is locked"
#When user enters security answer as "<SecurityAnswer>"
#Then verify error messages in registration page as "You have 1 more attempt before the account is locked"
#Examples:
#|emailaddress|AccountNumber|PostCode|SecurityAnswer|Registration|
#|samplerrrr@test.co.uk|600001105|NW3 1DR|1251|Registration_07|

@test23
Scenario Outline:verify whether the RBP customer is asked to enter his Last Four Digits of Direct Debit Account for security question
Given user lands on business registration page
When user enters email address as "<emailaddress>" and account number as "<AccountNumber>" and postcode as "<PostCode>" and security answer as "<SecurityAnswer>" for "<Registration>"
And user selects title as "<title>" and enter first name as "<firstname>" and lastname as "<lastname>" and phone number as "<phone>" and password as "<password>" for registration journey
Then validate the activation email sent message
Examples:
|emailaddress|AccountNumber|PostCode|SecurityAnswer|Registration|title|firstname|lastname|phone|password|
|sample1234@test.co.uk|600001105|NW31DR|0071|Registration_10|Mrs|sample|name|07466455483|password12|



Scenario Outline: Verify whether Registration journey for  Grey list customers
Given user lands on business registration page
When user enters email address as "<emailaddress>" and account number as "<AccountNumber>" and postcode as "<PostCode>" and last Payment Amount as "<LastPaymentAmount>" for "<Registration>"
And user selects title as "<title>" and enter first name as "<firstname>" and lastname as "<lastname>" and phone number as "<phone>" and password as "<password>" for registration journey
Then validate the activation email sent message
Examples:
|emailaddress|AccountNumber|PostCode|LastPaymentAmount|Registration|title|firstname|lastname|phone|password|
|sample34@test.co.uk|601398329|GU212DR|1393.93|Registration_11|Mrs|sample|name|07466455483|password12|


#Scenario Outline: Verify the Activation page for RBP user
#Given user directly lands on "<URL>"
#Then verify registration page for normal user
#When user clicks on Log in to my account
#Then verify loginpage is displayed
#Examples:
#|URL|
#|https://10.224.70.50/business/your-account/register/activate?id=730f4d1c-f966-46b8-8fc5-8e4acb68ab68|

#Scenario Outline: Verify the Activation page for Super  user
#Given user directly lands on "<URL>"
#Then verify registration page for normal user
#When user clicks on Log in to my account
#Then verify loginpage is displayed
#Examples:
#|URL|
#|https://10.224.70.50/business/your-account/register/activate?id=2122a263-5e71-41c4-883f-4558197d1155|


#Scenario Outline: Verify Agent Registration Journey for Super User
#Given user directly lands on "<URL>"
#Then verify Registration page is displayed
#When user selects title as "<title>" and enter first name as "<firstname>" and lastname as "<lastname>" and phone number as "<phone>" and password as "<password>" for registration journey
#Then verify registration page for normal user
#Examples:
#|URL|emailaddress|title|firstname|lastname|phone|password|
#|https://10.224.70.50/business/csareg/bed63cd4-2267-44fd-9623-06ed3c86a9c8|sampletes@test.co.uk|Mrs|sample|name|07466455483|password12|


#Scenario Outline: Verify Agent Registration Journey for RBP User
#Given user directly lands on "<URL>"
#Then verify Registration page is displayed
#When user selects title as "<title>" and enter first name as "<firstname>" and lastname as "<lastname>" and phone number as "<phone>" and password as "<password>" for registration journey
#Then verify registration page for normal user
#Examples:
#|URL|emailaddress|title|firstname|lastname|phone|password|
#|https://10.224.70.50/business/csareg/793e788f-823a-4491-90c9-d4a465fa74c4|test@test.co.uk|Mrs|sample|name|07466455483|password12|


Scenario Outline: verify whether the RBP customer is asked to enter his Last Payment amount for security question
Given user lands on business registration page
When user enters email address as "<emailaddress>" and account number as "<AccountNumber>" and postcode as "<PostCode>" and last Payment Amount as "<LastPaymentAmount>" for "<Registration>"
And user selects title as "<title>" and enter first name as "<firstname>" and lastname as "<lastname>" and phone number as "<phone>" and password as "<password>" for registration journey
Then validate the activation email sent message
Examples:
|emailaddress|AccountNumber|PostCode|LastPaymentAmount|Registration|title|firstname|lastname|phone|password|
|samplerrr@test.co.uk|600488793|TW18 4UQ|188.33|Registration_08|Mr|sample|name|07466455483|password12|


Scenario Outline: verify whether the RBP customer is asked to enter his Lcard number for security question
Given user lands on business registration page
When user enters email address as "<emailaddress>" and account number as "<AccountNumber>" and postcode as "<PostCode>" and card number as "<LCard>" for "<Registration>"
And user selects title as "<title>" and enter first name as "<firstname>" and lastname as "<lastname>" and phone number as "<phone>" and password as "<password>" for registration journey
Then validate the activation email sent message
Examples:
|emailaddress|AccountNumber|PostCode|LCard|Registration|title|firstname|lastname|phone|password|
|samtpgtlerrr@test.co.uk|600944682|BN3 3YN|9567|Registration_09|Mr|sample|name|07466455483|password12|

@test12
Scenario: Verify whether customer is able to land on registration page when he clicks "Registration" button from the business home page
Given user lands on business home page for registration
When user clicks on "Register" button from business home page
Then verify Registration page is displayed



Scenario: Verify customer is able to land on registration page when he "Registration" button from the header
Given user lands on business home page for registration
When user clicks on "Register" button from the header
Then verify Registration page is displayed



Scenario: Verify customer is able to land on registration page when he "Registration" button from mega menu section
Given user lands on business login page
When user clicks on Your Account button from the megamenu and click on register
Then verify Registration page is displayed



Scenario Outline: Verify whether the error message is displayed when entering the site post code which is not associated to the account number
Given user lands on business registration page
When user enters email address as "<emailaddress>" and account number as "<AccountNumber>" and postcode as "<PostCode>" for "<Registration>"
Then verify error messages in registration page as "Oops, it looks like something went wrong,Your site postcode has not been recognized"
Examples:
|emailaddress|AccountNumber|PostCode|Registration|
|samtpgt@test.co.uk|600452421|NW31DR|Registration_28|



Scenario Outline: Verify whether the error message is displayed when entering the invalid account number
Given user lands on business registration page
When user enters email address as "<emailaddress>" and account number as "<AccountNumber>" for "<Registration>"
Then verify error messages in registration page as "Please enter a valid account number starting with 60 or 67"
Examples:
|emailaddress|AccountNumber|Registration|
|samtpgt@test.co.uk|6004524|Registration_29|

@registerTelephone
Scenario Outline: Verify whether customer is able to register without telephone number
Given user lands on business registration page
When user enters email address as "<emailaddress>" and account number as "<AccountNumber>" and postcode as "<PostCode>" and card number as "<LCard>" for "<Registration>"
And user selects title as "<title>" and enter first name as "<firstname>" and lastname as "<lastname>" and password as "<password>"
Then validate the activation email sent message
Examples:
|emailaddress|AccountNumber|PostCode|LCard|Registration|title|firstname|lastname|password|
|samtpgtlerrr@test.co.uk|600944682|BN3 3YN|9567|Registration_09|Mr|sample|name|password12|



Scenario Outline:Verify whether the an appropiate error message is displayed during the agent registration when user tries to register in-progress status e-mail address
Given user lands on agent registration page
When user clicks on Register a User
And user enters "<emailaddress>" and "<accountNumber>" which is previously added by the super user but not yet activated
Then verify error messages in registration page as "Your registration is in progress"
Then verify error messages in registration page as "Your super user has invited you to register"
Then verify error messages in registration page as "Your super user invited you by email to register to manage your energy account online. All you need to do is activate your account."
Then verify error messages in registration page as "If you haven’t got an activation email, you can either request a new one or check your spam/junk folders if it’s not showing in your inbox."
Examples:
|emailaddress|accountNumber|
|singh_harv@me.com|600001105|


Scenario Outline: Verify whether an appropiate error message is displayed when customer tries to register the locked e-mail address
Given user lands on business registration page
When user enters "<emailaddress>" for "<Registration>"
Then verify error messages in registration page as "Oops, it looks like something went wrong,You've already registered. Please,log in"
Examples:
|emailaddress|Registration|
|test126@gmail.com|Registration_35|


Scenario Outline:Verify whether an appropiate error message is displayed when customer tries to register the locked e-mail address in the agent registration page
Given user lands on agent registration page
When user clicks on Register a User
And user enters "<emailaddress>" and "<accountNumber>" which is locked
Then verify error messages in registration page as "You've already registered. Please log in"
Examples:
|emailaddress|accountNumber|
|test126@gmail.com|600001105|


Scenario Outline: Verify whether customer is taken to In-progress page when he tries to register PENDING ACTIVATION status email address
Given user lands on business registration page
When user enters "<emailaddress>" for "<Registration>"
Then verify error messages in registration page as "Oops, it looks like something went wrong,Your online account's waiting to be activated. Please check your inbox for an email from business@britishgas.co.uk."
Examples:
|emailaddress|Registration|
|nagarajdevi8@gmail.com|Registration_06|

@register2
Scenario Outline: Verify Agent Registration Journey for PENDING ACTIVATION status email address
Given user lands on agent registration page
When user clicks on Register a User
And user enters "<emailaddress>" and "<accountNumber>" which is already in PENDING ACTIVATION status
Then verify error messages in registration page as "Your registration is pending activation"
Examples:
|emailaddress|accountNumber|
|nagarajdevi8@gmail.com|600001105|

@test
Scenario Outline: Verify whether an appropriate error message is displayed when customer tries to add the locked status e-mail address via manage user portal
Given user lands on business login page
When user enters email address as "<EmailAddress>"
When user enters password as "<Password>"
When user clicks on login button
When user clicks on Manage Users
When user clicks on Add new user
When user clicks on the option for Super User
When user tries to add the "<e-mailaddress>" via manage user which is in Locked status
Then verify the message as Our records show that this email address is already in use. Please can you use another email address
Examples:
|EmailAddress|Password|e-mailaddress|
|bgbukb@bgb.ccom|password12|ukbwpp02@wpp.com|


@test123
Scenario Outline: Verify whether the error message is displayed when customer tries to change his role from super user to some other role (for that account number there is only one super user)
Given user lands on agent registration page
And user clicks on Lookup User
And user enters the "<EmailAddress>" in the agent look up page
Then user should navigate to Update User details page
And user selects any role other than super user, verify that error message in popup
Examples:
|EmailAddress|
|bgbukb@bgb.ccom|
