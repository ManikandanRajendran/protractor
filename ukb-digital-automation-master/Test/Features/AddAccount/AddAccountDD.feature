
@DirectDebit
Feature: Perform DirectDebit Payment

@Direct_debit_InProgress
Scenario Outline:Verify whether the user is displayed with Direct Debit In-progress message in OAM dashboard page
Given the url to perform DirectDebit_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
And user selects the "<organization>"
Then check "<message>" in OAM Dashoard page

Examples:
|user-type|email-address|password|message|organization|
#|collective|Manikandan.R5@cognizant.com|password12|Your Direct Debit instruction is processing.|First-Organization|
|normal|amendvariable@test.com|password123|Your Direct Debit instruction is processing.|First-Organization|
|normal|amendvariable@test.com|password123|Your Direct Debit instruction is processing.|Second-Organization|

@Direct_debit_variable
Scenario Outline:verify whether the user is able to complete the Set up variable Direct Debit1 successfully
Given the url to perform DirectDebit_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
And user selects the "<organization>"
Then user clicks "<payment-category>"
Then user clicks DD "<DD-type>"
Then user checks and enter bank details "<holderName>","<code>","<bankNumber>","<DD-type>"
#Then select the guarantee and submit
#Then Direct debit is made successfully and navigates to confirmation section, displays "Thank you, your Direct Debit set up is complete"

Examples:
|user-type|email-address|password|payment-category|DD-type|holderName|code|bankNumber|organization|
|normal|setupdd@test.com|password19|Direct-Debit|variable|Tester|400250|11049151|First-Organization|
|normal|setupdd@test.com|password19|Direct-Debit|variable|Tester|400250|11049151|Second-Organization|
|collective|setupddcollective002@test.com|password19|Direct-Debit|variable|Tester|400250|11049151|First-Organization|
|collective|setupddcollective002@test.com|password19|Direct-Debit|variable|Tester|400250|11049151|Second-Organization|

@Direct_debit_fixed
@testing
Scenario Outline:Verify whether the user is able to complete the "Set up fixed Direct Debit" successfully
Given the url to perform DirectDebit_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
And user selects the "<organization>"
And user selects "<account>" from multiple account dashboard
Then user clicks "<payment-category>"
Then user clicks DD "<DD-type>"
Then user checks and enter bank details "<holderName>","<code>","<bankNumber>","<DD-type>"
#Then select the guarantee and submit
#Then Direct debit is made successfully and navigates to confirmation section, displays "Thank you, your Direct Debit set up is complete"
Examples:
|user-type|email-address|password|payment-category|DD-type|holderName|code|bankNumber|organization|account|
|normal|setupfdd@test.com|password19|Direct-Debit|fixed|Tester|400250|11049151|First-Organization|602564917|

@Direct_Debit_Invalid_bank_details
@testing
Scenario Outline:Verify whether the user is displayed with an error message for invalid bank details (valid format)
Given the url to perform DirectDebit_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
And user selects the "<organization>"
Then user clicks "<payment-category>"
Then user clicks DD "<DD-type>"
Then user checks and enter bank details "<holderName>","<code>","<bankNumber>","<DD-type>"
Then select the guarantee and submit
Then Error message should be "<error>" for "<type>"
Examples:
|user-type|email-address|password|payment-category|DD-type|error|type|holderName|code|bankNumber|organization|
|normal|setupdd@test.com|password19|Direct-Debit|variable|The bank details entered cannot be accepted. You can change these details by clicking on the edit link below.|other|Tester|123457|123456789|First-Organization|
|normal|setupdd@test.com|password19|Direct-Debit|variable|The bank details entered cannot be accepted. You can change these details by clicking on the edit link below.|other|Tester|123457|123456789|Second-Organization|


@Direct_debit_blacklist_bank_details
@testing1
Scenario Outline:Verify whether the user is displayed with an error message for blacklist bank details
Given the url to perform DirectDebit_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
And user selects the "<organization>"
And user selects "<account>" from multiple account dashboard
Then user clicks "<payment-category>"
Then user clicks DD "<DD-type>"
Then user checks and enter bank details "<holderName>","<code>","<bankNumber>","<DD-type>"
Then select the guarantee and submit
Then Error message should be "<error>" for "<type>"

Examples:
|user-type|email-address|password|payment-category|holderName|code|bankNumber|error|type|DD-type|organization|account|
|normal|setupdd001@test.com|password19|Direct-Debit|Tester|120881|00250302|The bank details entered cannot be accepted. You can change these details by clicking on the edit link below.|other|variable|First-Organization|600560853|
|normal|setupdd001@test.com|password19|Direct-Debit|Tester|120881|00250302|The bank details entered cannot be accepted. You can change these details by clicking on the edit link below.|other|variable|Second-Organization|600560853|

@Direct_debit_Amend_Direct_Debit
@testing1
Scenario Outline:Verify whether the user is able to complete the Manage Direct Debit journey successfully
Given the url to perform DirectDebit_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
And user selects the "<organization>"
And user selects "<account>" from multiple account dashboard
Then user clicks "<payment-category>"
Then verify "<amend-DD>" heading
Then user checks and enter bank details "<holderName>","<code>","<bankNumber>","<DD-type>"
#Then select the guarantee and submit
#Then Direct debit is made successfully and navigates to confirmation section, displays "Thank you, your Direct Debit set up is complete"

Examples:
|user-type|email-address|password|payment-category|holderName|code|bankNumber|DD-type|amend-type|amend-DD|organization|account|
|normal|amendfdd@test.com|password19|Direct-Debit|Tester|400250|11049151|fixed|normalAmendFDD|Amend Fixed Direct Debit|First-Organization|601469821|
|normal|amendvdd002@test.com|password19|Direct-Debit|Tester|400250|11049151|fixed|normalAmendFDD|Amend Fixed Direct Debit|Second-Organization|601469821|
|normal|amvdd002@test.com|password19|Direct-Debit|Tester|400250|11049151|variable|normalAmendVDD|Amend Variable Direct Debit|First-Organization|600272582|
|normal|amendfdd@test.com|password19|Direct-Debit|Tester|400250|11049151|variable|normalAmendVDD|Amend Variable Direct Debit|Second-Organization|600272582|


@Direct_debit_Amend_Direct_Debit
@testing1
Scenario Outline:Verify whether the user is able to complete the Manage Direct Debit journey successfully for collective account
Given the url to perform DirectDebit_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
And user selects the "<organization>"
Then user clicks "<payment-category>"
Then verify "<amend-DD>" heading
Then user checks and enter bank details "<holderName>","<code>","<bankNumber>","<DD-type>"
#Then select the guarantee and submit
#Then Direct debit is made successfully and navigates to confirmation section, displays "Thank you, your Direct Debit set up is complete"

Examples:
|user-type|email-address|password|payment-category|holderName|code|bankNumber|DD-type|amend-type|amend-DD|organization|
|collective|collectiveamenddd@test.com|password19|Direct-Debit|Tester|400250|11049151|variable|collectiveAmendVDD|Amend Variable Direct Debit|First-Organization|

@Direct_debit_mandate_PDF
@testing1
Scenario Outline:Verify whether the user is displayed with Direct Debit mandate and able to download "Direct Debit mandate" PDF file
Given the url to perform DirectDebit_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
And user selects the "<organization>"
#Then user clicks on "normalVDD" account from the list
Then user clicks "<payment-category>"
Then user clicks DD "<DD-type>"
Then user clicks No option for authorization question
Then click PDF link
Then check PDF is opened in next tab

Examples:
|user-type|email-address|password|payment-category|DD-type|organization|
|normal|setupdd@test.com|password19|Direct-Debit|variable|First-Organization|
|normal|setupdd@test.com|password19|Direct-Debit|variable|Second-Organization|
