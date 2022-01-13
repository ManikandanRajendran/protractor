Feature: Add Account

@Adding_Existing_accountnumber_AddAccount
Scenario Outline: Verify whether customer is displayed with an error message when they tries to add an account to which they have access already.
          Given the user lands on business Login page
          When enters the "<email-address>" and "<password>" for "<usertype>"
          And clicks on AddAccount option
          And enters the account details "<account-number>" and "<postcode>"
          Then verify whether the "<error>" message is displayed for "<usertype>" accounts
Examples:
|usertype|email-address|password|account-number|postcode|error|
|morethan15|account1502@test.com|password12|600981194|NE6 5TP|You already have access to this account.|

@TC_AddAccounts_Regression_08 @TC_AddAccounts_Regression_09
Scenario Outline: Verify whether the customer displayed with error message when customer tries to add the account number which doesn't have any security question
                  Given the user lands on UKB Login page
                  When enters the "<email-address>" and "<password>" for "<user-type>"
                  And clicks on AddAccount option
                  And enters the account details "<account-number>" and "<postcode>"
                  Then verify Header of error message displayed as "Your second organisation can't be added online" for "NoScecurityQuestions_header"
                  And Error message should be "<error>" for "<type>"
Examples:
|user-type|email-address|password|account-number|postcode|error|type|
|GreylistAccount|testesa01@gmail.com|password1234|602014302|N16 6XZ|We can't continue with your request. Please call us on 0330 1000 222 to continue.|NoScecurityQuestions|
|MoreThan15Accounts|bgbtveicustomer4@test.com|password12|602014302|N16 6XZ|We can't continue with your request. Please call us on 0330 1000 222 to continue.|NoScecurityQuestions|

@TC_AddAccounts_Regression_11
Scenario Outline: Verify whether the  "Add accounts" link NOT getting displayed when the customer having 2 organisations
          Given the user lands on UKB Login page
          When enters the "<email-address>" and "<password>" for "<user-type>"
          And selects the "<organization>"
          Then verify Add Accounts link is not available to "<user-type>"
Examples:
|user-type|email-address|password|organization|
|MoreThan15Accounts|bgbdigital0002@test.com|password12|First-Organization|


@TC_AddAccounts_Regression_29
Scenario Outline: Verify whether the customer able to move from one Organisation to Another using the drop down available
          Given the user lands on UKB Login page
          When enters the "<email-address>" and "<password>" for "<user-type>"
          And selects the "<organization>"
          And verify Add Accounts link is not available to "<user-type>"
          And clicks on the account from the list and verify the account navigation through dropdown in OAM page
          Then verify on clicking the other organisation from dropdown navigates to the second organisation
Examples:
|user-type|email-address|password|organization|
|LessThan15Accounts|bgbdigital0002@test.com|password12|First-Organization|


@Addinglocked_accountnumber_AddAccount
Scenario Outline: Verify whether the customer displayed with error message when customer tries to add the Locked account number
                  Given the user lands on UKB Login page
                  When enters the "<email-address>" and "<password>" for "<user-type>"
                  And clicks on AddAccount option
                  And enters the account details "<account-number>" and "<postcode>"
                  Then verify the error message "<error>" is displayed for "<user-type>"
Examples:
|user-type|email-address|password|account-number|postcode| error |
|MoreThan15|account1502@test.com|password12|600131919|B9 4DY|There have been too many failed attempts This organisation has been locked for 24 hours Go back to my accounts|
|GreyList|testesa01@gmail.com|password1234|600131919|B9 4DY|There have been too many failed attempts This organisation has been locked for 24 hours Go back to my accounts|


@Adding_Invalid_accountnumber_PostCode_AddAccount
Scenario Outline: Verify whether customer is displayed with an error message when they tries to add an account to which they have access already.
          Given the user lands on UKB Login page
          When enters the "<email-address>" and "<password>" for "<usertype>"
          And clicks on AddAccount option
          And user enter the account details "<account-number>" and "<postcode>"
          Then verify whether the "<error1>" and "<error2>" error messages is displayed for "<usertype>" accounts
Examples:
|usertype|email-address|password|account-number|postcode|error1|error2|
|normal|esakkiyammal.velu@britishgas.co.uk|password12|612057699|GU9 7EN|Please enter a valid account number starting with 60 or 67.|Please enter a valid postcode|
