@anonymous-SMR
Feature: Anonymous_Submit_Meter_Reading

@ASMR_SubmitMeter
#@ASMRPostCodeInvalid
Scenario Outline: Verify whether the customer is getting proper error message for invalid account
Given the url to perform ASMR
When user navigate to the SMR page for "<fuel-type>"
Then user enter the "<email-address>","<account-Number>","<postcode>" for "<fuel-type>"
Then Error message should be "<error-message>" for "<error-type>"

Examples:
|account-Number|postcode|email-address|type|error-type|fuel-type|error-message|
|600531839|Tw18 1al|Tester@bgdigitaltest.co.uk|Invalid_Postcode|ASMR-invalid|Electricity|The postcode you've entered for this account doesn't match our records. It should match the site postcode on your bill and may be different to your billing postcode.|
|601101442|HD8 0NZ|Tester@bgdigitaltest.co.uk|closed-account|ASMR-invalid|Electricity|We can't accept your meter readings online. Please call us on 0800 316 2010.|
|670002027|OL11 2Sl|Tester@bgdigitaltest.co.uk|collective-account|ASMR-invalid|Electricity|We can't accept your meter readings online. Please call us on 0800 316 2010.|
|600455436|DA8 3HF|Tester@bgdigitaltest.co.uk|child-account|ASMR-invalid|Electricity|We can't accept your meter readings online. Please call us on 0800 316 2010.|
#|600110982|B75 5JX|Tester@bgdigitaltest.co.uk|More_Than_Three_Meters|ASMR-invalid|Electricity|We can't accept your meter readings online. Please call us on 0800 316 2010.|
|600560826|CW1 2AH|Tester@bgdigitaltest.co.uk|In-progress_Account|ASMR-invalid|Electricity|We can't accept your meter readings online. Please call us on 0800 316 2010.|
|609999922|LE1 1AD|jayanthi.s2@cognizant.com|Invalid_accounts|ASMR-invalid|Electricity|We can't accept your meter readings online. Please call us on 0800 316 2010.|

@ASMR_SubmitMeter
@ASMR_Invalid_post_Code_Client_Side
Scenario Outline: Verify whether the customer is getting proper client side error message
Given the url to perform ASMR
When user navigate to the SMR page for "<fuel-type>"
Then user enter the "<email-address>","<account-Number>","<postcode>" for "<fuel-type>"
Then click to generate error
Then Error message should be "Enter a valid email address." for "email-invalid"
Then Error message should be "Please enter your account number. This can be found on your bill and will start with 60 or 67." for "account-invalid"
Then Error message should be "Enter a valid UK postcode" for "postcode-invalid"

Examples:
|account-Number|postcode|email-address|type|fuel-type|
|600783a|2AF|Tester@bgdigitaltest|client-side|Electricity|

@ASMR_SubmitMeter
#@ASMR_Displaying_meter_and_account_details_for_identified_customer
Scenario Outline: Verify whether the customer is displayed with his account details
Given the url to perform ASMR
When user navigate to the SMR page for "<fuel-type>"
Then click on the tool tip for "asmr-account"
Then click on the tool tip for "asmr-postcode"
Then user enter the "<email-address>","<account-Number>","<postcode>" for "<fuel-type>"
Then user should verify Account Number, Fuel Type and Meter serial number from meter details page

Examples:
|account-Number|postcode|email-address|type|fuel-type|
|600783816|KA18 2AF|Tester@bgdigitaltest.co.uk|Display_Accounts|Electricity|


#@ASMR_Post_meter_read_for_Gas_Single_Register
@ASMR_SubmitMeter
Scenario Outline: Verify whether the customer is able to submit meter read details when he gives valid details for Single Gas Registers
Given the url to perform ASMR
When user navigate to the SMR page for "<fuel-type>"
Then user enter the "<email-address>","<account-Number>","<postcode>" for "<type>"
Then user should verify Account Number, Fuel Type and Meter serial number from meter details page
Then Read meter readings for "<type>"
Then Write meter readings for "<type>"
Then user should click submit button in page
Then user verify the "Confirmation" page title as well as "Thanks for giving us your meter reading. We'll email you to let you know it's been processed." and Updated meter read values
Then user verify "<link-verification>" link message in confirmation
Examples:
|account-Number|postcode|email-address|type|fuel-type|link-verification|
#|601074265|W3 6PA|Tester@bgdigitaltest.co.uk|SubmitMeterRead_Gas|Gas|
|600875194|CH47 2DW|Tester@bgdigitaltest.co.uk|SubmitMeterRead_Gas|Gas|ASMR-register|
|600875194|CH47 2DW|Tester@bgdigitaltest.co.uk|SubmitMeterRead_Gas|Gas|ASMR-login|

#@ASMR_Post_meter_read_for_Multiple_Register
@ASMR_SubmitMeter
Scenario Outline: Verify whether the customer is able to submit meter read details when he gives valid details
Given the url to perform ASMR
When user navigate to the SMR page for "<fuel-type>"
Then user enter the "<email-address>","<account-Number>","<postcode>" for "<type>"
Then user should verify Account Number, Fuel Type and Meter serial number from meter details page
Then Read meter readings for "<type>"
Then Write meter readings for "<type>"
Then user should click submit button in page
Then user verify the "Confirmation" page title as well as "Thanks for giving us your meter reading. We'll email you to let you know it's been processed." and Updated meter read values
Examples:
|account-Number|postcode|email-address|type|fuel-type|
|601389843|TN25 4AG|Tester@bgdigitaltest.co.uk|SubmitMeterRead_Electricity|Electricity|
|601234478|EC4M 8AD|Tester@bgdigitaltest.co.uk|MultiMeter|Gas|
|600038328|SE25 6XN|Tester@bgdigitaltest.co.uk|SubmitMeterRead_Gas_implusible|Gas|
|600596676|NE38 8QB|Tester@bgdigitaltest.co.uk|MultiMeter|Electricity|
|601389843|TN25 4AG|Tester@bgdigitaltest.co.uk|Elec_Multi_Registers|Electricity|


#@ASMR_Submit_Reminder_for_Electricity_single_meter
@ASMR_alert
Scenario Outline: Verify whether the customer is able to submit meter reminder form
Given the url to perform ASMR
When user navigate to the SMR page for "<fuel-type>"
Then user enter the "<email-address>","<account-Number>","<postcode>" for "<type>"
Then user should verify Account Number, Fuel Type and Meter serial number from meter details page
Then Read meter readings for "<type>"
Then Write meter readings for "<type>"
Then user should click submit button in page
Then user verify the "Confirmation" page title as well as "Thanks for giving us your meter reading. We'll email you to let you know it's been processed." and Updated meter read values
Then user should submit a meter read reminder "Get meter read reminders"
Then verify the reminder "You have been successfully registered for the email alerts. We'll notify you when your next meter read is due."
Examples:
|account-Number|postcode|email-address|type|fuel-type|
|600783816|KA18 2AF|Tester@bgdigitaltest.co.uk|Reminder_Electricity|Electricity|
|601234478|EC4M 8AD|Tester@bgdigitaltest.co.uk|MultiMeter|Gas|


#@ASMR_verify_already_meter_read_reminder_submitted
@ASMR_alert
Scenario Outline: Verify whether the customer is displayed with Reminder_Already_Submitted
Given the url to perform ASMR
When user navigate to the SMR page for "<fuel-type>"
Then user enter the "<email-address>","<account-Number>","<postcode>" for "<type>"
Then user should verify Account Number, Fuel Type and Meter serial number from meter details page
Then Read meter readings for "<type>"
Then Write meter readings for "<type>"
Then user should click submit button in page
Then user verify the "Confirmation" page title as well as "Thanks for giving us your meter reading. We'll email you to let you know it's been processed." and Updated meter read values
Then user should able to see the message that customer already opted for reminders "You have already opted-in for meter read reminders." and "Please note we won't send reminders for meters that automatically send us readings."
Examples:
|account-Number|postcode|email-address|type|fuel-type|
|600783816|KA18 2AF|shobanbabu.manohar@cognizant.com|Reminder_Already_Submitted|Electricity|
