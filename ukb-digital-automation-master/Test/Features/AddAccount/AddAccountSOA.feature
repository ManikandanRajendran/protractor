@Billing
Feature: Statement Of Account

@SOA_Single_Account
Scenario Outline: Verify whether the customer who has multiple account is able to download his account statement
Given the url to perform SOA
When user should enter the "<email-address>" and "<password>" for "<user-type>"
And user selects the "<organization>"
And user clicks "<billing-category>" under billing
Then verify Statement Of Account view is displayed
And user selects "<type>" "from" "<from-date>"
And user selects "<type>" "to" "<to-date>"
And user clicks download statement
Then verify statement is downloaded

Examples:
|user-type|email-address|password|billing-category|child-type|from-date|to-date|type|organization|
|normal|viewbill001@test.com|password19|SOA|normalBill|01/June/2016|01/June/2017|valid|First-Organization|
|normal|viewbill001@test.com|password19|SOA|normalBill|01/June/2016|01/June/2017|valid|Second-Organization|
|collective|viewbillcoll@test.com|password19|SOA|collectivePayment|01/June/2017|01/June/2018|valid|Second-Organization|

@SOA_Multiple_CollectiveAccount
Scenario Outline: Verify whether the customer who has multiple account is able to download his account statement
Given the url to perform SOA
When user should enter the "<email-address>" and "<password>" for "<user-type>"
And user selects the "<organization>"
And user selects "<account>" from multiple account dashboard
And user clicks "<billing-category>" under billing
Then verify Statement Of Account view is displayed
And user selects "<type>" "from" "<from-date>"
And user selects "<type>" "to" "<to-date>"
And user clicks download statement
Then verify statement is downloaded

Examples:
|user-type|email-address|password|billing-category|child-type|from-date|to-date|type|organization|account|
|collective|viewbillcoll@test.com|password19|SOA|collectivePayment|01/June/2017|01/June/2018|valid|First-Organization|670071771|

@SOA_error
Scenario Outline: Verify whether an error message is displayed when user select invalid date range or does not contain statement of transaction for the selected date range.
Given the url to perform SOA
When user should enter the "<email-address>" and "<password>" for "<user-type>"
And user selects the "<organization>"
And user clicks "<billing-category>" under billing
Then verify Statement Of Account view is displayed
And user selects "<type>" "from" "<from-date>"
And user selects "<type>" "to" "<to-date>"
Then Error message should be "<message>" for "<error-type>"

Examples:
|user-type|email-address|password|billing-category|child-type|from-date|to-date|message|error-type|type|organization|
|normal|viewbill001@test.com|password19|SOA|normalBill|01/June/2017|01/June/2018|Statement could not be generated for the given date range. Please amend your date range.|other|valid|First-Organization|
|normal|viewbill001@test.com|password19|SOA|normalBill|01/June/2017|01/June/2018|Statement could not be generated for the given date range. Please amend your date range.|other|valid|Second-Organization|
|normal|viewbill001@test.com|password19|SOA|normalBill|01/June/2018|01/June/2017|Please select a valid from date and to date i.e. from date is before to date.|other|invalid|First-Organization|
|normal|viewbill001@test.com|password19|SOA|normalBill|01/June/2018|01/June/2017|Please select a valid from date and to date i.e. from date is before to date.|other|invalid|Second-Organization|
|normal|viewbill001@test.com|password19|SOA|normalBill|01/June/2015|01/June/2017|Please select a maximum date range of 12 months.|other|invalid|First-Organization|
|normal|viewbill001@test.com|password19|SOA|normalBill|01/June/2015|01/June/2017|Please select a maximum date range of 12 months.|other|invalid|Second-Organization|
