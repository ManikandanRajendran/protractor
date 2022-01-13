
@LoggedInPayment
Feature: Perform Loggedin Payment

@LoggedInPayment_add_card
Scenario Outline: Verify whether successful Message is displayed when Logged In Customer saves the cards
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks "<payment-category>"
And user clicks on Add Card button
Then user enters all the required values in Payment amount and Card details section with "<card-number>"
And success message is displayed for successfully adding a card

Examples:
|user-type|email-address|password|payment-category|card-number|
|normal|bgbwp118@wp.com|password12|manage-payment|4539791001730106|

@LoggedInPayment_error_for_ worldPayField
Scenario Outline: verify whether Error message is displayed when Logged In customer tries to continue without entering card details .
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks "<payment-category>"
And do payment with "<pound-type>" pounds
And user clicks pay by new card
And leave all the card details fields blank
Then Error message should be "Enter a valid card number" for "cardNumber"
And Error message should be "Enter a valid cardholder's name" for "cardHolderName"
And Error message should be "Enter a valid cardholder's name" for "cardHolderName"
And Error message should be "Enter a valid month and year" for "cardExpiry"
And Error message should be "Enter a valid security code" for "cardSecurity"
Examples:
|user-type|email-address|password|payment-category|pound-type|
|normal|bgbwp118@wp.com|password12|make-payment|valid|

@LoggedInPayment_error_for_expiredDate
Scenario Outline: verify whether a Error message is displayed when logged customer selects expiry date in past
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks "<payment-category>"
And do payment with "<pound-type>" pounds
And user clicks pay by new card
And select expired date in worldPay
Then Error message should be "Expiry date must be in the future" for "cardExpiry"
Examples:
|user-type|email-address|password|payment-category|pound-type|
|normal|bgbwp118@wp.com|password12|make-payment|valid|

@LoggedInPayment_Saved_Card_Payment_MerchantAddress
Scenario Outline: Verify whether merchant address is displayed in payment review page when logged in customer make payment by saved card
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks on "<child-type>" account from the list
And user clicks "<payment-category>"
And do payment with "<pound-type>" pounds
And select the already saved card from card details section
Then check merchant address is displayed in payment page section for "<type>"
Examples:
|user-type|email-address|password|pound-type|payment-category|type|
|normal|bgbwp118@wp.com|password12|valid|make-payment|saved-pay|

@LoggedInPayment_newPay_MerchantAddress
Scenario Outline: Verify whether merchant address is displayed in payment page when logged in customer make payment by new card
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks "<payment-category>"
And do payment with "<pound-type>" pounds
And user clicks pay by new card
Then check merchant address is displayed in payment page section for "<type>"
Examples:
|user-type|email-address|password|pound-type|payment-category|type|
|normal|bgbwp118@wp.com|password12|valid|make-payment|new-pay|


@LoggedInPayment_Pay_new_Card
Scenario Outline: Verify whether Logged In Customer is able to make Payment Successfully by adding new card
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks "<payment-category>"
And do payment with "<pound-type>" pounds
And user clicks pay by new card
And user enters all the required values in Payment amount and Card details section with "<card-number>"
Then payment is made successfully and navigates to confirmation section
And Payment reference number is displayed on Confirmation section
Then click on manage-card in confirmation page
And verify new card is added at the top of manage payment

Examples:
|user-type|email-address|password|pound-type|payment-category|card-number|
|normal|bgbwp118@wp.com|password12|valid|make-payment|5555555555554444|

@LoggedInPayment_less_and_greater_pounds
Scenario Outline: verify whether Logged In Customer is not allowed to make payment for less than €1 and €2 when account balance is more than €2 pounds
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks "<payment-category>"
And do payment with "<pound-type>" pounds
And click to verify error
Then Error message should be "<error-message>" for "<error-type>"

Examples:
|user-type|email-address|password|pound-type|payment-category|error-message|error-type|
|normal|bgbwp118@wp.com|password12|invalid-low|make-payment|The minimum amount you can pay is £2.00.|invalid-pound|
|normal|bgbwp118@wp.com|password12|invalid-high|make-payment|The amount you pay can't be more than your current balance.|invalid-pound|
|normal|testbgb0004@bgb.com|password1234|more-than-99999|make-payment|You cannot make a payment of more than £99999 online.|invalid-pound|

@LoggedInPayment_Saved_Card_Payment_and_less than 2 or 1 pound_payment
Scenario Outline: Verify whether the logged in customer is able to make Payment with saved cards with less than £2/£1 when account balance is less than £2/£1 repectively
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks "<payment-category>"
And do payment with "<pound-type>" pounds
And select the already saved card from card details section
And click pay button in Review payment section
Then payment is made successfully and navigates to confirmation section
And Payment reference number is displayed on Confirmation section

Examples:
|user-type|email-address|password|pound-type|payment-category|
|normal|bgbtestdata7@bgb.com|password1234|less-than-2|make-payment|
|normal|bgbtestdata7@bgb.com|password1234|less-than-1|make-payment|
|normal|bgbwp118@wp.com|password12|valid|make-payment|
|normal|bgbwp115@wp.com|password123|valid|make-payment|


@LoggedInPayment_RB_and_CI_Users
Scenario Outline: Verify whether RB and CI active customer are not Allowed to make a payment.
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then payment link is not available for "<user-type>"

Examples:
|user-type|email-address|password|
|RB-User|setupdd4@bgdigitaltest.co.uk|password12|
|CI-Flag|cisetupdd2@bgdigitaltest.co.uk|password12|



@LoggedInPayment_update_expiryDate
Scenario Outline: Verify whether Logged In customer is able to change Date of Expiry field in Managed saved payment card section
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks "<payment-category>"
And user clicks on edit link
And change the expiry date and clicks update button
Then check expiry date of card is updated
Examples:
|user-type|email-address|password|payment-category|
|normal|bgbwp118@wp.com|password12|manage-payment|

@LoggedInPayment_validate_card_details
Scenario Outline: Verify Logged in Customer is able to view saved payment card details in profile section
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks "<payment-category>"
And check details of cards

Examples:
|user-type|email-address|password|payment-category|
|normal|bgbwp118@wp.com|password12|manage-payment|


@LoggedInPayment_add_16_card
Scenario Outline: Verify whether the Error Message displayed when the Logged In Customer add 16 cards in Manage Saved Cards
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
And user clicks "<payment-category>"
Then user should able to add 16 cards from 0-5 "<cards>"
And user should able to add 16 cards from 5-9
And user should able to add 16 cards from 9-13
And user should able to add 16 cards from 13-16

Examples:
|user-type|email-address|password|payment-category|cards|
|normal|bgbwp116@wp.com|password12|manage-payment|5555555555554444,5434600000000044,4111111111111111,4539791001730106,4917300800000000,4242424242424242,4462030000000000,6759649826438453,4911830000000,4917610000000000, 4444333322221111,5200000000000007,5454545454545454,2221000000000009,4484070000000000,4917610000000000003|


@LoggedInPayment_customer_not_able_to_make_payment
Scenario Outline:  Verify whether Logged In customer is not allowed to make payment by adding new card when 16 cards saved in Managed saved Card section
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks "<payment-category>"
And do payment with "<pound-type>" pounds
Then check the limit message "You have reached the maximum limit of saved cards. You'll need to delete an existing card to make a payment using a new card."
Examples:
|user-type|email-address|password|pound-type|payment-category|
|normal|bgbwp116@wp.com|password12|valid|make-payment|

@LoggedInPayment_update_card_more_than_limit
Scenario Outline: Verify whether Error message displayed when the customer tried to change card details more than 10 times on a given month
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks "<payment-category>"
And user clicks on edit link and update card for 1-5 times
And user clicks on edit link and update card for 6-10 times
Then Error message should be "<error>" for "<type>"

Examples:
|user-type|email-address|password|payment-category|type|error|
|normal|bgbwp116@wp.com|password12|manage-payment|other|You have reached the maximum update limit of 10 times for this month so please again try later. You can still make a payment using this card to pay your outstanding balance.|

@LoggedInPayment_delete_card
Scenario Outline: Verifying whether Normal account Customer is able to delete the saved card in Manage Saved card section
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks "<payment-category>"
Then User clicks on Delete link and clicks on Yes Delete button
Then check selected card is deleted

Examples:
|user-type|email-address|password|payment-category|
|normal|bgbwp116@wp.com|password12|manage-payment|


@LoggedInPayment_make_payment_DD_customer
Scenario Outline:Verify whether DD Customer is not allowed to make payment
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then check "payment" link should "be" available for this user
Then check "make-payment" link should "not be" available for this user

Examples:
|user-type|email-address|password|payment-category|
|Single-DD|anandg@ixvu.com|password12|payment|


@LoggedInPayment_make_payment_credit_account
Scenario Outline: Verify whether Credit customer is not allowed to make a payment
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks on "<account-type>" account from the list
Then check "<payment-category>" link should "not be" available for this user

Examples:
|user-type|email-address|password|payment-category|account-type|
|Credit-Account|ukbwpp08@wpp.com|password123|make-payment|closedCredit|

@LoggedInPayment_add_card_collectiveAccount
Scenario Outline: Verify whether successful Message is displayed when Logged In Collective account Customer saves the cards
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks on "<child-type>" account from the list
Then user clicks "<payment-category>"
Then user clicks on Add Card button
And user enters all the required values in Payment amount and Card details section with "<card-number>"
Then success message is displayed for successfully adding a card

Examples:
|user-type|email-address|password|payment-category|card-number|child-type|
|collective|setupddtest@bgdigitaltest.com|password123|manage-payment|4539791001730106|collectivePayment|

@LoggedInPayment_update_expiryDate_collectiveAccount
Scenario Outline: Verify whether Logged In Collective account customer is able to change Date of Expiry field in Managed saved payment card section
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks on "<child-type>" account from the list
Then user clicks "<payment-category>"
Then user clicks on edit link
Then change the expiry date and clicks update button
Then check expiry date of card is updated
Examples:
|user-type|email-address|password|payment-category|child-type|
|collective|setupddtest@bgdigitaltest.com|password123|manage-payment|collectivePayment|


@LoggedInPayment_Pay_new_Card_collectiveAccount
Scenario Outline: Verify whether Logged In collective account Customer is able to make Payment Successfully by adding new card
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks on "<child-type>" account from the list
Then user clicks "<payment-category>"
And do payment with "<pound-type>" pounds
Then user clicks pay by new card
Then user enters all the required values in Payment amount and Card details section with "<card-number>"
Then payment is made successfully and navigates to confirmation section
And Payment reference number is displayed on Confirmation section

Examples:
|user-type|email-address|password|pound-type|payment-category|card-number|child-type|
|collective|setupddtest@bgdigitaltest.com|password123|valid|make-payment|5555555555554444|collectivePayment|


@LoggedInPayment_Saved_Card_Payment_collectiveAccount
Scenario Outline: Verify whether the logged in collective account customer is able to make Payment with saved cards with less than £2/£1 when account balance is less than £2/£1 repectively
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks on "<child-type>" account from the list
Then user clicks "<payment-category>"
And do payment with "<pound-type>" pounds
Then select the already saved card from card details section
Then click pay button in Review payment section
Then payment is made successfully and navigates to confirmation section
And Payment reference number is displayed on Confirmation section
Examples:
|user-type|email-address|password|pound-type|payment-category|child-type|
|collective|setupddtest@bgdigitaltest.com|password123|valid|make-payment|collectivePayment|


@LoggedInPayment_delete_card_collectiveAccount
Scenario Outline: Verify whether collective account Customer is able to delete the saved card in Manage Saved card section
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks on "<child-type>" account from the list
Then user clicks "<payment-category>"
Then User clicks on Delete link and clicks on Yes Delete button
Then check selected card is deleted

Examples:
|user-type|email-address|password|payment-category|child-type|
|collective|setupddtest@bgdigitaltest.com|password123|manage-payment|collectivePayment|

@LoggedInPayment_no_pounds
Scenario Outline: verify whether Error message is thrown when logged in customer tries to make payment without entering balance.
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks "<payment-category>"
And keep balance field empty
Then click to verify error
Then Error message should be "<message1>" for "<type1>"
Then Error message should be "<message2>" for "<type2>"
Examples:
|user-type|email-address|password|payment-category|message1|type1|message2|type2|
|normal|bgbwp116@wp.com|password12|make-payment|How much would you like to pay?|control-label|Enter amount you would like to pay.|invalid-pound|


@LoggedInPayment_worldPay_display_noSavedCard
Scenario Outline: Verify whether worldpay is displayed when customer tries to make payment provided there is no saved card.
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks "manage-payment"
Then verify whether saved cards are not displayed
Then user clicks "make-payment"
And do payment with "<pound-type>" pounds
Then verify worldPay iframe is displayed

Examples:
|user-type|email-address|password|pound-type|
|normal|bgbwp116@wp.com|password12|valid|

@LoggedInPayment_new_card_payment_Refused
Scenario Outline: Verify whether payment is declined when an unauthorized user try to make payment
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks "<payment-category>"
And do payment with "<pound-type>" pounds
Then user clicks pay by new card
Then user enters all the required values in Payment amount and Card details section with "<card-number>"
Then Error message should be "We're sorry - we are unable to process your payment online." for "refused"
Then Error message should be "Please call us on 0800 316 2010 and we'll be able to help you." for "other"
Examples:
|user-type|email-address|password|pound-type|payment-category|card-number|
|normal|bgbwp121@wp.com|password123|refused|make-payment|5555555555554444|
|normal|bgbwp121@wp.com|password123|refused|make-payment|5555555555554444|
|normal|bgbwp115@wp.com|password123|refused|make-payment|5555555555554444|


@LoggedInPayment_zero_balance_and_payment_more_than_two_Times_per_day
Scenario Outline: verify whether Customer is not allowed to make payment when already payment made twice on a day and Account balance is Zero
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks "<payment-category>"
Then Error message should be "<error>" for "<type>"
Examples:
|user-type|email-address|password|payment-category|type|error|
|normal|bgbtestdatarenewal@bgdigitaltest.co.uk|password12|make-payment|other|Your account is currently in credit, so you don't need to make a payment.|
|normal|bgbwp118@wp.com|password12|make-payment|other|You've reached the maximum number of online payments you can make. Please call us on 0800 316 2010.|
|normal|bgbwp121@wp.com|password123|make-payment|other|We can't process your payment online. Please call us on 0800 316 2010.|
|normal|bgbwp115@wp.com|password123|make-payment|other|You can't make anymore online payments today. Please call us on 0800 316 2010.|

@LoggedInPayment_addCard_MerchantAddress
Scenario Outline: Verify whether merchant address is displayed in payment page when logged in customer adds new card
Given the url to perform Loggedin_payment
When user should enter the "<email-address>" and "<password>" for "<user-type>"
Then user clicks "<payment-category>"
And user clicks on Add Card button
Then verify merchant address is present in payment page section for "<type>"
Examples:
|user-type|email-address|password|payment-category|type|
|normal|bgbwp118@wp.com|password12|manage-payment|new-pay|
