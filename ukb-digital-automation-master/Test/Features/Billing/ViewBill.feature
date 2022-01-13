@Billing
Feature: View Bill

@ViewBill_single_Account_multiplebill_download
  Scenario Outline: Verify whether the customer  is able to download more than one bills in his account
                    Given the url to perform viewbill page
                    When user should enter the "<email-address>" and "<password>" for "<user-type>"
                    And user clicks "<billing-category>" under billing
                    Then verify view bill is displayed
                    And user selects "<type>" "from" "<from-date>"
                    And user selects "<type>" "to" "<to-date>"
                    #And user should get all the bills displayed for the selected date
                    And user clicks download Viewbill
                    #Then user should click close link
                  #  Then user should be navigated to OAM dashboard page
                    #Then the user logs out of the account by clicking on the logout button
                  #  And verify bills is downloaded as PDF file


  Examples:
  |user-type|email-address|password|billing-category|from-date|to-date|type|
  |normal|qas02testp2d4@bgdigitaltest.co.uk|password12|View your bills|10/August/2015|10/August/2018|valid|

  @ViewBill_single_Account_getbillcount
    Scenario Outline: Verify whether the customer  is able to download more than one bills in his account
                      Given the url to perform viewbill page
                      When user should enter the "<email-address>" and "<password>" for "<user-type>"
                      And user clicks "<billing-category>" under billing
                      Then verify view bill is displayed
                      And user selects "<type>" "from" "<from-date>"
                      And user selects "<type>" "to" "<to-date>"
                      And user clicks download Viewbill
                      #Then user should click close link
                      Then user should be navigated to OAM dashboard page
                      #Then the user logs out of the account by clicking on the logout button
                      And verify bills is downloaded as PDF file


    Examples:
    |user-type|email-address|password|billing-category|from-date|to-date|type|
    |normal|qas02testp2d5@bgdigitaltest.co.uk|password12|View your bills|28/August/2015|28/August/2018|valid|


  @ViewBill_multiple_Account
    Scenario Outline: Verify whether the Multiple customer  is able to download his account bills
                      Given the url to perform viewbill page
                      When user should enter the "<email-address>" and "<password>" for "<user-type>"
                      And user selects "<account>" from multiple account dashboard
                      And user clicks "<billing-category>" under billing
                      Then verify view bill is displayed
                      And user selects "<type>" "from" "<from-date>"
                      And user selects "<type>" "to" "<to-date>"
                      And user clicks download Viewbill
                      #Then user should click close link
                      Then user should be navigated to OAM dashboard page
                      #Then the user logs out of the account by clicking on the logout button
                      And verify bills is downloaded as PDF file
Examples:
|user-type|email-address|password|billing-category|child-type|from-date|to-date|type|account|
|collective|arunbaskar.g@britishgas.co.uk|password12|View your bills|collectivePayment|01/June/2017|01/June/2018|valid|601472999|



  @ViewBill_single_Account_singlebill_download
    Scenario Outline: Verify whether the customer  is able to download single bill in his account bills
                      Given the url to perform viewbill page
                      When user should enter the "<email-address>" and "<password>" for "<user-type>"
                      And user clicks "<billing-category>" under billing
                      Then verify view bill is displayed
                      And user selects "<type>" "from" "<from-date>"
                      And user selects "<type>" "to" "<to-date>"
                      When user clicks download single bill
                      #Then user should click close link
                      Then user should be navigated to OAM dashboard page
                      #Then the user logs out of the account by clicking on the logout button
                      And verify bills is downloaded as pdf file


    Examples:
    |user-type|email-address|password|billing-category|from-date|to-date|type|
    |normal|testdatap2d22@bgdigitaltest.co.uk|password12|View your bills|01/June/2017|13/August/2018|valid|

  @ViewBill_nobillerrorscenario
  Scenario Outline: Verify whether an error message is displayed when user select invalid date range or does not contain any bills for the selected date range.
                    Given the url to perform viewbill page
                    When user should enter the "<email-address>" and "<password>" for "<user-type>"
                    And user clicks "<billing-category>" under billing
                    Then verify view bill is displayed
                    And user selects "<type>" "from" "<from-date>"
                    And user selects "<type>" "to" "<to-date>"
                    Then Error message should be "<message>" for "<error-type>"
                    Then user should click close link
                    Then user should be navigated to OAM dashboard page
                    #Then the user logs out of the account by clicking on the logout button

    Examples:
    |user-type|email-address|password|billing-category|child-type|from-date|to-date|message|error-type|type|
    |normal|testdatap2d22@bgdigitaltest.co.uk|password12|View your bills|normalBill|01/June/2017|01/June/2017|We're unable to show a bill for this account. You can request a copy of your bill here.|other|valid|



    @ViewBill_fromdateerror1
    Scenario Outline: Verify whether an error message is displayed when user select invalid date range that is from date less than to date
                      Given the url to perform viewbill page
                      When user should enter the "<email-address>" and "<password>" for "<user-type>"
                      And user clicks "<billing-category>" under billing
                      Then verify view bill is displayed
                      And user selects "<type>" "from" "<from-date>"
                      And user selects "<type>" "to" "<to-date>"
                      Then Error message should be "<message>" for "<error-type>"
    Examples:
    |user-type|email-address|password|billing-category|child-type|from-date|to-date|message|error-type|type|
    |normal|testdatap2d22@bgdigitaltest.co.uk|password12|View your bills|normalBill|01/June/2018|01/June/2017|Please select a valid from date and to date i.e. from date is before to date.|other|invalid|

    @ViewBill_morethan12monthserror
    Scenario Outline: Verify whether an error message is displayed when user select dates more than 36 months
                      Given the url to perform viewbill page
                      When user should enter the "<email-address>" and "<password>" for "<user-type>"
                      And user clicks "<billing-category>" under billing
                      Then verify view bill is displayed
                      And user selects "<type>" "from" "<from-date>"
                      And user selects "<type>" "to" "<to-date>"
                      Then Error message should be "<message>" for "<error-type>"
    Examples:
    |user-type|email-address|password|billing-category|child-type|from-date|to-date|message|error-type|type|
    |normal|testdatap2d22@bgdigitaltest.co.uk|password12|View your bills|normalBill|01/June/2013|01/June/2017|Please select a maximum date range of 36 months.|other|invalid|

    @ViewBill_collective_Account
      Scenario Outline: Verify whether the collective customer  is able to download his account bills
                        Given the url to perform viewbill page
                        When user should enter the "<email-address>" and "<password>" for "<user-type>"
                        And user selects "<account>" from multiple account dashboard
                        And user clicks "<billing-category>" under billing
                        Then verify view bill is displayed
                        And user selects "<type>" "from" "<from-date>"
                        And user selects "<type>" "to" "<to-date>"
                      #  When user clicks download Viewbill
                      #  Then user should click close link
                      #  Then user should be navigated to OAM dashboard page
                        #Then the user logs out of the account by clicking on the logout button
                      #  And verify bills is downloaded as zip file
Examples:
|user-type|email-address|password|billing-category|child-type|from-date|to-date|type|account|
|collective|collectivenewp2d5@bgdigitaltest.co.uk|password12|View your bills|collectivePayment|01/June/2017|01/June/2018|valid|670006041|


@ViewBill_collective_Account_morethan36monthsearcherror
  Scenario Outline: Verify whether the collective customer is getting an error message when user select dates more than 36 months
                    Given the url to perform viewbill page
                    When user should enter the "<email-address>" and "<password>" for "<user-type>"
                    And user selects "<account>" from multiple account dashboard
                    And user clicks "<billing-category>" under billing
                    Then verify view bill is displayed
                    And user selects "<type>" "from" "<from-date>"
                    #And user selects "<type>" "to" "<to-date>"
                    Then Error message should be "<message>" for "<error-type>"
Examples:
|user-type|email-address|password|billing-category|child-type|from-date|to-date|type|account|message|error-type|type|
|collective|collectivenewp2d5@bgdigitaltest.co.uk|password12|View your bills|collectivePayment|01/June/2013|01/June/2017|valid|670006041|Please select a maximum date range of 36 months.|other|invalid|

@ViewBill_collective_Account_formdateerror
Scenario Outline: Verify whether the collective customer  is displayed with an error message when user select invalid date range that is from date less than to date
                  Given the url to perform viewbill page
                  When user should enter the "<email-address>" and "<password>" for "<user-type>"
                  And user selects "<account>" from multiple account dashboard
                  And user clicks "<billing-category>" under billing
                  Then verify view bill is displayed
                  And user selects "<type>" "from" "<from-date>"
                  And user selects "<type>" "to" "<to-date>"
                  Then Error message should be "<message>" for "<error-type>"

                  Examples:
|user-type|email-address|password|billing-category|child-type|from-date|to-date|message|error-type|type|account|
|normal|collectivenewp2d5@bgdigitaltest.co.uk|password12|View your bills|collectivePayment|01/June/2018|01/June/2017|Please select a valid from date and to date i.e. from date is before to date.|other|invalid|670006041|


@ViewBill_collective_Account_nobillerror
  Scenario Outline: Verify whether the collective customer  is displayed with no bill error message
                    Given the url to perform viewbill page
                    When user should enter the "<email-address>" and "<password>" for "<user-type>"
                    And user selects "<account>" from multiple account dashboard
                    And user clicks "<billing-category>" under billing
                    Then verify view bill is displayed
                    And user selects "<type>" "from" "<from-date>"
                    And user selects "<type>" "to" "<to-date>"
                    Then Error message should be "<message>" for "<error-type>"
Examples:
|user-type|email-address|password|billing-category|child-type|from-date|to-date|type|account|message|error-type|type|
|collective|collectivenewp2d5@bgdigitaltest.co.uk|password12|View your bills|collectivePayment|01/June/2017|01/June/2017|valid|670006041|We're unable to show a bill for this account. You can request a copy of your bill here.|other|valid|


@ViewBill_collective_sampleerror
  Scenario Outline: Verify whether the collective customer  is able to download his account bills
                    Given the url to perform viewbill page
                    When user should enter the "<email-address>" and "<password>" for "<user-type>"
                    And user selects "<account>" from multiple account dashboard
                    And user clicks "<billing-category>" under billing
                    Then verify view bill is displayed
                    And user selects "<type>" "from" "<from-date>"
                    And user selects "<type>" "to" "<to-date>"
                    Then Error message should be "<message>" for "<error-type>"

                    Examples:
|user-type|email-address|password|billing-category|child-type|from-date|to-date|message|error-type|type|account|
#|normal|collectivenewp2d5@bgdigitaltest.co.uk|password12|View your bills|collectivePayment|01/June/2018|01/June/2017|Please select a valid from date and to date i.e. from date is before to date.|other|invalid|670006041|
