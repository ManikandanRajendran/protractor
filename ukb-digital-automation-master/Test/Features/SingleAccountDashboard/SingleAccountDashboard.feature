Feature: Single Account Dashboard

@SingleAccount_01
Scenario Outline: Verify whether the selected item is highlighted in left hand navigation
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify the actively selected item for all selected items are displayed
And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|bgbwp118@wp.com|password12|


@SingleAccount1_02
Scenario Outline: Verify whether the left hand navigation is displayed for super user
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify the elements "Readings,Billing,Payments,Settings,Add account,Manage users" in Left Hand Navigation
And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|bgbwp118@wp.com|password12|


@SingleAccount1_03
Scenario Outline: Verify whether the left hand navigation is displayed for full user
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify the elements "Readings,Billing,Payments,Settings" in Left Hand Navigation
And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|gopinath.muthukrishnan@cognizant.com|password12|


@SingleAccount_04
Scenario Outline: Verify whether the left hand navigation is displayed for RBP user
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify the elements "Readings,Billing,Payments,Settings" in Left Hand Navigation
And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|servicesdata56@bgdigitaltest.co.uk|password12|


@SingleAccount_05
Scenario Outline: Verify whether the left hand navigation is displayed for RB user
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify the elements "Readings,Billing,Settings" in Left Hand Navigation
And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|bgbtest_019@bgdigitaltest.co.uk|password12|


@SingleAccount_06
Scenario Outline: Verify whether the user is able to view group account balance, group account details and billing address for single collective account
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify Group account balance in the header
And verify Group account details with billing address
And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|collectivebill3@testing.com|password12|


@SingleAccount_07
Scenario Outline: Verify whether the customer lands on global submit meter read page on clicking submit a meter reading link
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
And user clicks on submit a meter reading
Then verify global submit meter read page is displayed
And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|collectivebill3@testing.com|password12|


@SingleAccount_13
Scenario Outline: verify whether the last login time stamp in dashboard page
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then verify the last login time stamp
And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|bgbwp118@wp.com|password12|


@SingleAccount_17
Scenario Outline: Verify whether the next bill due message is displayed for non collective account customers
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then next bill due message should be displayed for customer without collective account
And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|bgbwp118@wp.com|password12|


@SingleAccount_18
Scenario Outline: Verify whether the next meter read date is displayed in dashboard
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
#Then Next meter read due message should be displayed
#And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|bgbwp118@wp.com|password12|


@SingleAccount_19
Scenario Outline: Verify whether the site multiple site addresses are displayed for collective accounts
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
And user clicks on the link text sites in your group
Then verify the site addresses is displayed
And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|collectivebill3@testing.com|password12|

@Smoke
@SingleAccount_20
Scenario Outline: Verify whether customer lands on accounts page when he clicks the close icon in site address page
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
And user clicks on the link text sites in your group
And user clicks on close icon in sites in your group window
Then user is taken to my accounts page
And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|collectivebill3@testing.com|password12|


@SingleAccount_14
Scenario Outline: Verify whether the payment module is not displayed for an account with CI flag enabled
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then the payment module should not be displayed
And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|cisetupdd2@bgdigitaltest.co.uk|password12|


@SingleAccount_15
Scenario Outline: Verify whether the informative message is displayed for customers with complex meter
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then informative message should be displayed for customer with complex meter
And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|setupdddata8@bg.com|password12|


@SingleAccount_16
Scenario Outline: Verify whether the informative message is displayed for customers with tvi or edi billing account
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
Then informative message should be displayed for customer with tvi or edi billing account
And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|670002027edi@bgtest.com|password12|


@SingleAccount_08
Scenario Outline: verify whether the super user customer is not able to view the SMR for his closed account
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
And verify user lands on my accounts Overview page
Then verify "Submit a meter reading" component for "Super user" is not displayed
Then verify "Make a payment" component for "Super user" is not displayed
And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|ipservice110@bgdigitaltest.co.uk|password12|


@SingleAccount_09
Scenario Outline:verify whether the full access user customer is not able to view the SMR for his closed account
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
And verify user lands on my accounts Overview page
Then verify "Submit a meter reading" component for "Full access User" is not displayed
Then verify "Make a payment" component for "Full access User" is not displayed
And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|singleclosed1@bgdigitaltest.co.uk|password12|



@SingleAccount_10
Scenario Outline:verify whether the RBP user customer is not able to view the SMR for his closed account
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
And verify user lands on my accounts Overview page
Then verify "Submit a meter reading" component for "RBP User" is not displayed
Then verify "Make a payment" component for "RBP User" is not displayed
And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|singleclosed2@bgdigitaltest.co.uk|password12|




@SingleAccount_11
Scenario Outline:verify whether the RB user customer is not able to view the SMR for his closed account
Given user lands on business login page
When user enters email address as "<EmailAddress>"
And user enters password as "<Password>"
And user clicks on login button
And verify user lands on my accounts Overview page
Then verify "Submit a meter reading" component for "RB User" is not displayed
Then verify "Make a payment" component for "RB User" is not displayed
And the user logs out of the account by clicking on the logout button
Examples:
|EmailAddress|Password|
|singleclosed3@bgdigitaltest.co.uk|password12|


#@SingleAccount_12
#Scenario Outline: Verify whether the user is able to view Renewals link and navigate the Renewals page
#Given user lands on business login page
#When user enters email address as "<EmailAddress>"
#And user enters password as "<Password>"
#And user clicks on login button
#Then verify renewals link in account overview dashboard page
#And verify user is able to navigate to Renewals page
#And the user logs out of the account by clicking on the logout button from renewals page
#Examples:
#|EmailAddress|Password|
#|servicesdata24@bgdigitaltest.co.uk|password12|


#@SingleAccount_21
#Scenario Outline: Verify whether the renewal banner disappears when clicking on links in left naviagtion pane
#Given user lands on business login page
#When user enters email address as "<EmailAddress>"
#And user enters password as "<Password>"
#And user clicks on login button
#Then verify renewals banner in account overview dashboard page
#When user clicks on the links in account dashboard page
#Then verify the suppression of renewal banner
#And the user logs out of the account by clicking on the logout button
#Examples:
#|EmailAddress|Password|
#|servicesdata24@bgdigitaltest.co.uk|password12|
