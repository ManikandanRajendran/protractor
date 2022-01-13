Feature: Retrieve Quote Journeys
@rerun
Scenario Outline: Verify whether user is able to navigate to Retrieve Quote page
          Given user is on <page> landing page
          When user clicks on retrieve quote link
          Then user is able to see Retrieve Quote landing page
Examples:
| page |
| Get a Quote |
| business gas|
| business electricity|
| compare business electricity |

Scenario Outline: To verify whether proper error message is displaying when user is passing invalid inputs for Quote and Email fields.
            Given user is on <page> landing page
            When user clicks on retrieve quote link
            And user is passing quoteId as <QuoteId>
            Then user should see the error message as <quoteiderror> in retrieve page
            And user is passing email as <Email>
            Then user should see the error message as <emailerror> in retrieve page
Examples:
| page | QuoteId | Email | quoteiderror | emailerror |
| Get a Quote | abcd | 1234 | Please enter a valid reference number. | Please check your email address, it doesn't seem right. |
| Get a Quote |  |  | Please tell us your reference number. | Please tell us your email address. |

Scenario Outline: To verify whether proper error message is displaying when the quote id is not available.
            Given user is on <page> landing page
            When user clicks on retrieve quote link
            And user is passing quoteId as <QuoteId>
            And user is passing email as <Email>
            And user is clicking on retrieve a quote button
            Then user should see the <message> message for quote can't found page
            And user clicks on Get a new quote button
            Then user should see the Get a quote landing page
Examples:
| page | QuoteId | Email | message |
| Get a Quote | 3001964899 | bgbsales12@gmail.com | We can't find your quote |

Scenario Outline: To verify whether user is able to retrieve quote of non-cma Gas/Elec.
            Given user is on <page> landing page
            When user clicks on retrieve quote link
            And user is passing quoteId as <QuoteId>
            And user is passing email as <Email>
            And user is clicking on retrieve a quote button
            Then user should see the <scenario> energy quote page
            And user should see the quoteid as <QuoteId>
Examples:
| page | QuoteId | Email | scenario |
| Get a Quote | 3001966940 | bgbsales12@gmail.com | nonCMA_Gas |
| Get a Quote | 3001966942 | bgbsales12@gmail.com | nonCMA_Elec |

Scenario Outline: To verify whether user is able to retrieve quote of cma Gas/Elec.
            Given user is on <page> landing page
            When user clicks on retrieve quote link
            And user is passing quoteId as <QuoteId>
            And user is passing email as <Email>
            And user is clicking on retrieve a quote button
            Then user should see the <scenario> energy quote page
            And user should see the quoteid as <QuoteId>
Examples:
| page | QuoteId | Email | scenario |
| Get a Quote | 3001966937 | bgbsales12@gmail.com | CMA_Elec |
| Get a Quote | 3001966936 | bgbsales12@gmail.com | CMA_Gas |

Scenario Outline: To verify whether products and prices are displaying properly when user is retrieving quote of non-cma Gas/Elec.
            Given user is on <page> landing page
            When user clicks on retrieve quote link
            And user is passing quoteId as <QuoteId>
            And user is passing email as <Email>
            And user is clicking on retrieve a quote button
            Then user should see the <scenario> energy quote page
            And user should see the quoteid as <QuoteId>
            And verify quote table prices of <scenario> with <"DD">
            And User uncheck the direct debit checkbox of "quote page"
            And verify quote table prices of <scenario> with <"without DD">
Examples:
| page | QuoteId | Email | scenario |
| Get a Quote | 3001966940 | bgbsales12@gmail.com | NoncmaGas |
| Get a Quote | 3001966942 | bgbsales12@gmail.com | NoncmaElec |

Scenario Outline: To verify whether products and prices are displaying properly when user is retrieving quote of cma Gas/Elec.
            Given user is on <page> landing page
            When user clicks on retrieve quote link
            And user is passing quoteId as <QuoteId>
            And user is passing email as <Email>
            And user is clicking on retrieve a quote button
            Then user should see the <scenario> energy quote page
            And user should see the quoteid as <QuoteId>
            And verify quote table prices of <scenario> with <"DD">
            And User uncheck the direct debit checkbox of "quote page"
            And verify quote table prices of <scenario> with <"without DD">
Examples:
| page | QuoteId | Email | scenario |
| Get a Quote | 3001966937 | bgbsales12@gmail.com | ElecCMA |
| Get a Quote | 3001966936 | bgbsales12@gmail.com | GasCMA |
@rerun
Scenario Outline: To verify whether price details are displaying as expected for cma Gas/Elec when coming through retrieve a quote.
            Given user is on <page> landing page
            When user clicks on retrieve quote link
            And user is passing quoteId as <QuoteId>
            And user is passing email as <Email>
            And user is clicking on retrieve a quote button
            Then user should see the <scenario> energy quote page
            And user should see the quoteid as <QuoteId>
            And verify quote table prices of <scenario> with <"DD">
            And User uncheck the direct debit checkbox of "quote page"
            And verify quote table prices of <scenario> with <"without DD">
Examples:
| page | QuoteId | Email | scenario |
| Get a Quote | 3001966937 | bgbsales12@gmail.com | ElecCMA |
| Get a Quote | 3001966936 | bgbsales12@gmail.com | GasCMA |
@rerun
Scenario Outline: To verify whether user is able to see "complete your purchase" page for cma Gas/Elec (with DD) when coming through retrieve a quote.
            Given user is on <page> landing page
            When user clicks on retrieve quote link
            And user is passing quoteId as <QuoteId>
            And user is passing email as <Email>
            And user is clicking on retrieve a quote button
            Then user should see the <scenario> energy quote page
            And user should see the quoteid as <QuoteId>
            And user clicks on "<product>" for "<scenario>"
            Then verify "Complete your purchase",price and reference number in confirmation page
Examples:
| page | QuoteId | Email | scenario | product |
| Get a Quote | 3001966937 | bgbsales12@gmail.com | ElecCMA | 1 Year Fixed rate |
| Get a Quote | 3001966936 | bgbsales12@gmail.com | GasCMA | 1 Year Fixed rate |
@rerun
Scenario Outline: To verify whether user is able to see "complete your purchase" page for cma Gas/Elec (without DD) when coming through retrieve a quote.
            Given user is on <page> landing page
            When user clicks on retrieve quote link
            And user is passing quoteId as <QuoteId>
            And user is passing email as <Email>
            And user is clicking on retrieve a quote button
            Then user should see the <scenario> energy quote page
            And user should see the quoteid as <QuoteId>
            And User uncheck the direct debit checkbox of "quote page"
            And user clicks on "<product>" for "<scenario>"
            Then verify "Complete your purchase",price and reference number in confirmation page
Examples:
| page | QuoteId | Email | scenario | product |
| Get a Quote | 3001966937 | bgbsales12@gmail.com | ElecCMA | 1 Year Fixed rate |
| Get a Quote | 3001966936 | bgbsales12@gmail.com | GasCMA | 1 Year Fixed rate |

Scenario Outline: To verify whether user is able to see "complete your purchase" page for non-cma Gas/Elec (with DD) when coming through retrieve a quote.
            Given user is on <page> landing page
            When user clicks on retrieve quote link
            And user is passing quoteId as <QuoteId>
            And user is passing email as <Email>
            And user is clicking on retrieve a quote button
            Then user should see the <scenario> energy quote page
            And user should see the quoteid as <QuoteId>
            And user clicks on "<product>" for "<scenario>"
            Then verify "Complete your purchase",price and reference number in confirmation page
Examples:
| page | QuoteId | Email | scenario | product |
| Get a Quote | 3001966940 | bgbsales12@gmail.com | NoncmaGas | 1 Year Fixed rate |
| Get a Quote | 3001966940 | bgbsales12@gmail.com | NoncmaGas | 2 Year Fixed rate |
| Get a Quote | 3001966940 | bgbsales12@gmail.com | NoncmaGas | 3 Year Fixed rate |
| Get a Quote | 3001966942 | bgbsales12@gmail.com | NoncmaElec | 1 Year Fixed rate |
| Get a Quote | 3001966942 | bgbsales12@gmail.com | NoncmaElec | 2 Year Fixed rate |
| Get a Quote | 3001966942 | bgbsales12@gmail.com | NoncmaElec | 3 Year Fixed rate |
@rerun
Scenario Outline: To verify whether user is able to see "complete your purchase" page for non-cma Gas/Elec (without DD) when coming through retrieve a quote.
            Given user is on <page> landing page
            When user clicks on retrieve quote link
            And user is passing quoteId as <QuoteId>
            And user is passing email as <Email>
            And user is clicking on retrieve a quote button
            Then user should see the <scenario> energy quote page
            And user should see the quoteid as <QuoteId>
            And User uncheck the direct debit checkbox of "quote page"
            And user clicks on "<product>" for "<scenario>"
            Then verify "Complete your purchase",price and reference number in confirmation page
Examples:
| page | QuoteId | Email | scenario | product |
| Get a Quote | 3001966940 | bgbsales12@gmail.com | NoncmaGas | 1 Year Fixed rate |
| Get a Quote | 3001966940 | bgbsales12@gmail.com | NoncmaGas | 2 Year Fixed rate |
| Get a Quote | 3001966940 | bgbsales12@gmail.com | NoncmaGas | 3 Year Fixed rate |
| Get a Quote | 3001966942 | bgbsales12@gmail.com | NoncmaElec | 1 Year Fixed rate |
| Get a Quote | 3001966942 | bgbsales12@gmail.com | NoncmaElec | 2 Year Fixed rate |
| Get a Quote | 3001966942 | bgbsales12@gmail.com | NoncmaElec | 3 Year Fixed rate |

Scenario Outline: To verify whether proper error message is displaying when quote is expired.
            Given user is on <page> landing page
            When user clicks on retrieve quote link
            And user is passing quoteId as <QuoteId>
            And user is passing email as <Email>
            And user is clicking on retrieve a quote button
            Then user should see the <message> message
            And user clicks on Get a new quote button
            Then user should see the Get a quote landing page
Examples:
| page | QuoteId | Email | message |
| Get a Quote | 3001964899 | bgbsales12@gmail.com | Your quote has expired |
