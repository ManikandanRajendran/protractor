Feature: Perform Anonymous Payment

@ErrorMessageValidation
Scenario Outline: To Verify whether proper error message is displaying when non eligible customers are trying to make a payment.
          Given User should navigate to Anonymous Payments Page
          Then verify the fields in payment landing page
          Then click on the tool tip for "payment-account"
          Then click on the tool tip for "payment-postcode"
          When User enters details of "<AccountNumber>" and "<postcode>" and "<email>" and click Next for "<TestScenario>"
          Then User should see the error message as "<ErrorMessage>" for "<TestScenario>"
Examples:
| AccountNumber | postcode | email | TestScenario | ErrorMessage | Scenario |
| 670a03179     | RG12 747L| shobanbabasdeu.manohazant.com                | invalid postcode accnum | Please enter your account number. This can be found on your bill and will start with 60 or 67.| the Error message is thrown while entering the Invalid account number/postcode in the Account number field |
| 600537639     | le4 5ex  | shobanbabasdeu.manohar@cognizant.com | SitePost_Code_Error | The postcode you entered for this account doesn't match our records. It should match the postcode on your bill. If you are still having problems, you can call 0800 316 2010. | the Ananymous customer is not able to navigate to the payment amount section by providing his account number and site postcode in your details section |
| 601244350     | NW1 9TD  | shobanbabasdeu.manohar@cognizant.com | child account | We can't process your payment online. Please call us on 0800 316 2010. | the Error message is thrown while entering the Child account number in the Account number field |
| 600007089     | SK14 2ND | shobanbabasdeu.manohar@cognizant.com | CI flag Balance | We can't take your payment online, please call us on 0800 316 2010. | the Error message is thrown while entering the CI Flag active account details in the Your details section |
| 600223278     | BA1 2PW  | shobanbabasdeu.manohar@cognizant.com | Credit Balance | Your account is currently in credit, so you don't need to make a payment. | the Error message is thrown while entering the Credit balance account details in the Your details section |
| 600007001     | EN3 4NT  | shobanbabasdeu.manohar@cognizant.com | Zero Balance | Your account is currently in credit, so you don't need to make a payment. | the Error message is thrown while entering the Zero balance account details in the Account number field |
| 600141173     | AB25 2XN | shobanbabasdeu.manohar@cognizant.com | DD account | You're already set up on Direct Debit, so you don't need to make a payment. | the Error message is thrown while entering the DD account details in the Account number field |
| 600042749     | LS28 5BT | shobanbabasdeu.manohar@cognizant.com | More than two payment | You've reached the maximum number of online payments you can make. Please call us on 0800 316 2010. | whether the Error message is displayed when the payment more than 2 done by customer |
#670064231-BR1 1LT

@FieldErrorValidation
Scenario Outline: To Verify whether proper error messages are getting displayed when passing invalid inputs for payment fields.
          Given User should navigate to Anonymous Payments Page
          Then verify the fields in payment landing page
          When User enters details of "<AccountNumber>" and "<postcode>" and "<email>" and click Next for "<TestScenario>"
          When user should enter payment amount as 1 pound
          Then user should see the error message as "The minimum amount you can pay is £2.00" when paying 1 pound
          When user should enter payment amount as more than current balance
          Then user should see the error message as "The amount you pay can't be more than your current balance"
          When user should not enter payment amount and click continue button
          Then user should see the error message as "Enter amount you would like to pay" when not giving amount
          #Then User should verify the error message for payment field validations
Examples:
| AccountNumber | postcode | email | TestScenario |
| 670070440     | sn14 0ab  | shobanbabasdeu.manohar@cognizant.com | Payment field error |

@PaymentDeclined
Scenario Outline: To Verify whether proper error message is displaying when payment got declined.
          Given User should navigate to Anonymous Payments Page
          Then verify the fields in payment landing page
          When User enters details of "<AccountNumber>" and "<postcode>" and "<email>" and click Next for "<TestScenario>"
          When user enters amount as "<amount>" to pay and clicking next button
          Then user should enter "<cardnum>" and "<Name>" and "<Month>" and "<Year>" and "<cvv>" and click pay button
          Then User should see the error message as "<ErrorMessage>" for "<TestScenario>"
Examples:
| AccountNumber | postcode | email | TestScenario | ErrorMessage | Scenario | amount | cardnum | Name | Month | Year | cvv |
| 600979437     | KA5 5AD  | shobanbabasdeu.manohar@cognizant.com | payment declined | We can't process your payment online. Please call us on 0800 316 2010. | the decline payment details are updated in Worldpay MAI and SAP | 2 | 4444333322221111 | Refused43 | 02 | 2021 | 123 |

@SuccessfulPayment
Scenario Outline: To Verify whether the Ananymous customer (Normal and collective) is able to make payment successfully
          Given User should navigate to Anonymous Payments Page
          Then verify the fields in payment landing page
          When User enters details of "<AccountNumber>" and "<postcode>" and "<email>" and click Next for "<TestScenario>"
          Then user should able to see the payment section
          When user enters amount as "<amount>" to pay and clicking next button
          And user should enter "<cardnum>" and "<Name>" and "<Month>" and "<Year>" and "<cvv>" and click pay button
          Then User should see the payment confirmation message
          Then user verify "<link-verification>" link message in confirmation
Examples:
| AccountNumber | postcode | email | TestScenario | Scenario | amount | cardnum | Name | Month | Year | cvv |link-verification|
| 600537639     | BH7 6BZ | shobanbabasdeu.manohar@cognizant.com | Normal Account | the Ananymous customer is able to make payment successfully | 2 | 4444333322221111 | Tester | 02 | 2021 | 123 |payment-register|
| 670004016     | CH62 2BZ | shobanbabasdeu.manohar@cognizant.com | Collective Account | the Ananymous customer is able to make payment successfully | 2 | 4444333322221111 | Tester | 02 | 2021 | 123 |payment-login|

@SuccessfulPayment1
Scenario Outline: To Verify whether the Ananymous customer (Normal and collective) is able to make payment successfully
          Given User should navigate to Anonymous Payments Page
          Then verify the fields in payment landing page
          When User enters details of "<AccountNumber>" and "<postcode>" and "<email>" and click Next for "<TestScenario>"
          Then user should able to see the payment section
          When user enters amount as "<amount>" to pay and clicking next button
          And user should enter "<cardnum>" and "<Name>" and "<Month>" and "<Year>" and "<cvv>" and click pay button
          Then User should see the payment confirmation message
          Then user verify "<link-verification>" link message in confirmation
Examples:
| AccountNumber | postcode | email | TestScenario | Scenario | amount | cardnum | Name | Month | Year | cvv |
| 600536722     | L3 8LX   | shobanbabasdeu.manohar@cognizant.com | Less than 2 pounds | the Ananymous customer is able to make payment successfully | 1.01 | 4444333322221111 | Tester | 02 | 2021 | 123 |
| 600536722     | L3 8LX   | shobanbabasdeu.manohar@cognizant.com | Less than 1 pounds | the Ananymous customer is able to make payment successfully | 0.97 | 4444333322221111 | Tester | 02 | 2021 | 123 |

@AmountValidatePayment
Scenario Outline: To Verify whether the updated price is displaying in payment section when revisiting after payment done.
          Given User should navigate to Anonymous Payments Page
          Then verify the fields in payment landing page
          When User enters details of "<AccountNumber>" and "<postcode>" and "<email>" and click Next for "<TestScenario>"
          Then user should able to see the payment section
          When user enters amount as "<amount>" to pay and clicking next button
          And user should enter "<cardnum>" and "<Name>" and "<Month>" and "<Year>" and "<cvv>" and click pay button
          Then User should see the payment confirmation message
          When user is navigating back to payment journey
          And User enters details of "<AccountNumber>" and "<postcode>" and "<email>" and click Next for "<TestScenario>"
          Then user should see the updated price
Examples:
| AccountNumber | postcode | email | TestScenario | Scenario | amount | cardnum | Name | Month | Year | cvv |
| 600369997     | B66 2AS  | shobanbabasdeu.manohar@cognizant.com | check updated price | the updated payment amount is displaying in payment section | 2 | 4444333322221111 | Tester | 02 | 2021 | 123 |
