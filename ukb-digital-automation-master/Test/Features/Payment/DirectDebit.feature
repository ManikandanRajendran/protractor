
@DirectDebit
Feature: Perform DirectDebit Payment

@Direct_debit_InProgress
Scenario Outline:Verify whether the user is displayed with Direct Debit In-progress message in OAM dashboard page
Given the url to perform DirectDebit_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks on "<child-type>" account from the list
Then check "<message>" in OAM Dashoard page

Examples:
|user-type|email-address|password|message|child-type|
|collective|Manikandan.R5@cognizant.com|password12|Your Direct Debit instruction is processing.|collectiveDDInProgress|
#|normal|tester0315@test.com|password12|Your Direct Debit instruction is processing.|

@Direct_debit_variable
Scenario Outline:Verify whether the user is able to complete the "Set up variable Direct Debit" successfully
Given the url to perform DirectDebit_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks on "<child-type>" account from the list
Then user clicks "<payment-category>"
Then user clicks DD "<DD-type>"
Then user checks and enter bank details "<holderName>","<code>","<bankNumber>","<DD-type>"
#Then select the guarantee and submit
#Then Direct debit is made successfully and navigates to confirmation section, displays "Thank you, your Direct Debit set up is complete"

Examples:
|user-type|email-address|password|payment-category|DD-type|holderName|code|bankNumber|child-type|
|normal|setupddtest@bgdigitaltest.com|password123|Direct-Debit|variable|Tester|400250|11049151|normalVDD|
|collective|collectivetesting01@bgtest.com|password12|Direct-Debit|variable|Tester|400250|11049151|collectiveVDD|

@Direct_debit_fixed
Scenario Outline:Verify whether the user is able to complete the "Set up fixed Direct Debit" successfully
Given the url to perform DirectDebit_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks "<payment-category>"
Then user clicks DD "<DD-type>"
Then user checks and enter bank details "<holderName>","<code>","<bankNumber>","<DD-type>"
#Then select the guarantee and submit
#Then Direct debit is made successfully and navigates to confirmation section, displays "Thank you, your Direct Debit set up is complete"
Examples:
|user-type|email-address|password|payment-category|DD-type|holderName|code|bankNumber|
|normal|testingcc07@testing.com|password12|Direct-Debit|fixed|Tester|400250|11049151|

@Direct_Debit_Invalid_bank_details
Scenario Outline:Verify whether the user is displayed with an error message for invalid bank details (valid format)
Given the url to perform DirectDebit_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks on "normalVDD" account from the list
Then user clicks "<payment-category>"
Then user clicks DD "<DD-type>"
Then user checks and enter bank details "<holderName>","<code>","<bankNumber>","<DD-type>"
Then select the guarantee and submit
Then Error message should be "<error>" for "<type>"
Examples:
|user-type|email-address|password|payment-category|DD-type|error|type|holderName|code|bankNumber|
|normal|setupddtest@bgdigitaltest.com|password123|Direct-Debit|variable|The bank details entered cannot be accepted. You can change these details by clicking on the edit link below.|other|Tester|123457|123456789|

@Direct_debit_InProgress_account
Scenario Outline:Verify whether the user is not displayed with set up direct debit link in OAM dashboard page for In-progress status account
Given the url to perform DirectDebit_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then check "<payment-category>" link should "not be" available for this user

Examples:
|user-type|email-address|password|payment-category|
|Inprogress|monica.erskine@cognizant.com|password12|direct-debit|

@Direct_debit_Inactive
Scenario Outline:Verify whether the user is not displayed with set up direct debit link in OAM dashboard page for Inactive status account
Given the url to perform DirectDebit_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks on "<child-type>" account from the list
Then check "<payment-category>" link should "not be" available for this user

Examples:
|user-type|email-address|password|payment-category|child-type|
|In-active|tester0318@test.com|password12|direct-debit|inactiveDD|

@Direct_debit_RB_user_and_CI-Flag
Scenario Outline:Verify whether the user is not displayed with Payment section in OAM Dashoard page for CI-Flag account
Given the url to perform DirectDebit_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then payment link is not available for "<user-type>"

Examples:
|user-type|email-address|password|
|RBuser|bgbddqas02_505@bgdigitaltest.co.uk|password12|
|CI-Flag|cisetupdd2@bgdigitaltest.co.uk|password12|

@Direct_debit_blacklist_bank_details
Scenario Outline:Verify whether the user is displayed with an error message for blacklist bank details
Given the url to perform DirectDebit_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
#Then user clicks on "normalVDDblacklist" account from the list
Then user clicks "<payment-category>"
Then user clicks DD "<DD-type>"
Then user checks and enter bank details "<holderName>","<code>","<bankNumber>","<DD-type>"
Then select the guarantee and submit
Then Error message should be "<error>" for "<type>"

Examples:
|user-type|email-address|password|payment-category|holderName|code|bankNumber|error|type|DD-type|
|normal|tester0317@test.com|password12|Direct-Debit|Tester|120881|00250302|The bank details entered cannot be accepted. You can change these details by clicking on the edit link below.|other|variable|


@Direct_debit_Amend_Direct_Debit
Scenario Outline:Verify whether the user is able to complete the Manage Direct Debit journey successfully
Given the url to perform DirectDebit_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks on "<amend-type>" account from the list
Then user clicks "<payment-category>"
Then verify "<amend-DD>" heading
Then user checks and enter bank details "<holderName>","<code>","<bankNumber>","<DD-type>"
#Then select the guarantee and submit
#Then Direct debit is made successfully and navigates to confirmation section, displays "Thank you, your Direct Debit set up is complete"

Examples:
|user-type|email-address|password|payment-category|holderName|code|bankNumber|DD-type|amend-type|amend-DD|
|normal|setupddtest@bgdigitaltest.com|password123|Direct-Debit|Tester|400250|11049151|fixed|normalAmendFDD|Amend Fixed Direct Debit|
|normal|setupddtest@bgdigitaltest.com|password123|Direct-Debit|Tester|400250|11049151|variable|normalAmendVDD|Amend Variable Direct Debit|
|collective|Manikandan.R5@cognizant.com|password12|Direct-Debit|Tester|400250|11049151|variable|collectiveAmendVDD|Amend Variable Direct Debit|

@Direct_debit_mandate_PDF
Scenario Outline:Verify whether the user is displayed with Direct Debit mandate and able to download "Direct Debit mandate" PDF file
Given the url to perform DirectDebit_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks on "normalVDD" account from the list
Then user clicks "<payment-category>"
Then user clicks DD "<DD-type>"
Then user clicks No option for authorization question
Then click PDF link
Then check PDF is opened in next tab

Examples:
|user-type|email-address|password|payment-category|DD-type|
|normal|setupddtest@bgdigitaltest.com|password123|Direct-Debit|variable|
