Feature: Perform submit Meter Reading in "British Gas" business application

  Background:

    Given the url to perform Login

  @LSMR_Single_Electric

  Scenario Outline: User should able to submit Meter Reading while provide valid email and account details

    When User navigate to business Login page

    And user should enter the "<email-address>" and "<password>" for "<user-type>"

    And User navigate to submit meter read page

    And User validates the SMR page

    And User get meter reading count, select past date and enter new meter Reading for <account-type>

    Then user should click submit button in page

    And User should verify the confirmation page for <account-type> and <fuel-type>

    Then User should click on logout button
    Examples:
      |email-address|password|account-no|account-type|user-type|fuel-type|
      |loggedinpay102@test.com|password12|601821002|Single_Account_Electricity|normal|Electricity|

  @LSMR_Closed_Account1
  Scenario Outline: User should able to verify a closed acc with no smr option in the dashboard

    When User navigate to business Login page

    And user should enter the "<email-address>" and "<password>" for "<user-type>"

    And User verifies the absence of the smr link

    Then User should click on logout button

    Examples:
      |email-address|password|account-type|account-no|user-type|
      |lsmrgas104@test.com|password12|Closed_Acc|600537158|normal|

  @LSMR_Closed_Account2
  Scenario Outline: User should able to verify a closed acc with no smr option in the dashboard

    When User navigate to business Login page

    And user should enter the "<email-address>" and "<password>" for "<user-type>"

    And User verifies the absence of the smr link

    Then User should click on logout button

    Examples:
      |email-address|password|account-type|account-no|user-type|
      |lsmrgas103@test.com|password12|Closed_Acc|600602161|normal|


  @LSMR_Error_Complex_meter

    Scenario Outline: To verify user can able to get the error message when more that three meters from dashboard

      When User navigate to business Login page

     And user should enter the "<email-address>" and "<password>" for "<user-type>"

      And User should verify the <message> error message for <account-type>

     Then User should click on logout button

      Examples:
        |email-address|password|account-type|account-no|message|user-type|
        |lsmrgas105@test.com|password12|Complex_Meter|601006459|You don't need to submit a meter reading online|normal|


  @LSMR_Single_Gas

  Scenario Outline: User should able to submit Meter Reading while provide valid email and account details

    When User navigate to business Login page

    And user should enter the "<email-address>" and "<password>" for "<user-type>"

    And User navigate to submit meter read page

    And User validates the SMR page

    And User get meter reading count, select past date and enter new meter Reading for <account-type>

    Then user should click submit button in page

    And User should verify the confirmation page for <account-type> and <fuel-type>

    Then User should click on logout button
    Examples:
      |email-address|password|account-no|account-type|user-type|fuel-type|
      |lsmrgas102@test.com|password12|600059924|Single_Account_Gas|normal|Gas|


    @Collective_Gas_MPRN1

    Scenario Outline:: User should be able to submit a meter read for a collective gas acc, by postcode

      When User navigate to business Login page

      And user should enter the "<email-address>" and "<password>" for "<user-type>"

     And User navigate to submit meter read page

     And User should select the "MPRN" and search item as "40465803"

      And User should verify the <message> error message for <account-type>

      Then User should click on logout button

      Examples:
        |email-address|password|account-type|message|user-type|
       |lsmrgas111@test.com|password12|Collective_Gas|Oops, it looks like something went wrong.|normal|

  @Collective_Gas_MPRN2

  Scenario Outline:: User should be able to submit a meter read for a collective gas acc, by postcode

    When User navigate to business Login page

    And user should enter the "<email-address>" and "<password>" for "<user-type>"

    And User navigate to submit meter read page

    And User should select the "MPRN" and search item as "40465803"

    And User should verify the <message> error message for <account-type>

    Then User should click on logout button

    Examples:
      |email-address|password|account-type|message|user-type|
      |lsmrgas110@test.com|password12|Collective_Gas|Oops, it looks like something went wrong.|normal|


  @Collective_Gas_Postcode

    Scenario Outline:: User should be able to submit a meter read for a collective gas acc, by postcode

      When User navigate to business Login page

      And user should enter the "<email-address>" and "<password>" for "<user-type>"

      And User navigate to submit meter read page

      And User should select the "Site Postcode" and search item as "W1D 4PP"

      And User get meter reading count, select past date and enter new meter Reading for <account-type>

      Then user should click submit button in page

    And User should verify the confirmation page for <account-type> and <fuel-type>

      Then User should click on logout button

      Examples:
        |email-address|password|account-type|user-type|fuel-type|
        |lsmrgas108@test.com|password12|MultiMeter|normal|Gas|




























