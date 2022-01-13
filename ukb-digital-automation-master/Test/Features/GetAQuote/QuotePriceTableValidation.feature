Feature: GAQ Quote page validation

@Twometerfound_PriceTableValidation
Scenario Outline: To verify whether prices of Gas and Elec (Acquisition Prices) products are displaying properly in Price summary page for the Two meter found customers (Elec/Gas - large consumption per year)
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters elec consumption as "<Econsumption>" for every "<EDuration>" And gas consumption as "<Gconsumption>" for every "<GDuration>"
          And User is not entering contact details and clicking next
          Then verify price summary page Header, Price Reference Number, Price Valid Until and Direct debit details
          And verify Filter for "<fuel>" new user product
          And verify Price table for "<fuel>" new user product - Acquisition prices "DD" and "<scenario>"
          And the user expand More details
          And User should see the address and meter details for Dual products
          And User uncheck the direct debit checkbox of "price page"
          Then verify Price table for "<fuel>" new user product - Acquisition prices "without DD" and "<scenario>"
          And verify direct debit label is not displayed in table header and individual rows
          And verify BG lite products is not displayed in the Quote or Price table
Examples:
| postcode | Address | Econsumption | EDuration | Gconsumption | GDuration | scenario | fuel |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 12000 | Year | 840000 | Year | Gas large| elec |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 1000001 | Year | 24000 | Year | elec large| gas |

Scenario Outline: To verify whether prices of Gas and Elec (Acquisition Prices) products are displaying prperly in Price summary page for the Two meter found customers (Gas and Elec - cma consumption per year)
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters elec consumption as "<Econsumption>" for every "<EDuration>" And gas consumption as "<Gconsumption>" for every "<GDuration>"
          And User is not entering contact details and clicking next
          Then verify price summary page Header, Price Reference Number, Price Valid Until and Direct debit details
          And verify Filter for gas and elec new user product
          And verify Price table for "<fuel>" new user product - Acquisition prices "DD" and "<scenario>"
          And the user expand More details
          Then User should see the address and meter details for Dual products
          And User uncheck the direct debit checkbox of "price page"
          Then verify Price table for "<fuel>" new user product - Acquisition prices "without DD" and "<scenario>"
          And verify direct debit label is not displayed in table header and individual rows
          And verify BG lite products is not displayed in the Quote or Price table
Examples:
| postcode | Address | Econsumption | EDuration | Gconsumption | GDuration | scenario | fuel |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 12000 | Year | 24000 | Year | CMA | Gas and Electricity |

Scenario Outline: To verify whether prices of Gas/Elec (Acquisition Prices) products are displaying properly in Price summary page for the Two meter found customers (Elec/Gas - cma consumption per year)
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters "<fuel>" consumption as "<consumption>" for every "<Duration>"
          And User is not entering contact details and clicking next
          Then verify price summary page Header, Price Reference Number, Price Valid Until and Direct debit details
          And verify Filter for "<fuel>" new user product
          And verify Price table for "<fuel>" new user product - Acquisition prices "DD" and "<scenario>"
          And the user expand More details
          And User should see the address and meter details for "<fuel>" products
          And User uncheck the direct debit checkbox of "price page"
          Then verify Price table for "<fuel>" new user product - Acquisition prices "without DD" and "<scenario>"
          And verify direct debit label is not displayed in table header and individual rows
          And verify BG lite products is not displayed in the Quote or Price table
Examples:
| postcode | Address | consumption | Duration | scenario | fuel |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 24000 | Year | Gas CMA| Gas |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 12000 | Year | Elec CMA| Electricity |

Scenario Outline: To verify whether prices of Gas and Elec (Acquisition Prices) products are displaying properly in Price summary page for the Two meter found customers (Elec/Gas - Noncma consumption per year)
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters elec consumption as "<Econsumption>" for every "<EDuration>" And gas consumption as "<Gconsumption>" for every "<GDuration>"
          And User is not entering contact details and clicking next
          Then verify price summary page Header, Price Reference Number, Price Valid Until and Direct debit details
          And verify Filter for gas and elec new user product
          And verify Price table for "<fuel>" new user product - Acquisition prices "DD" and "<scenario>"
          And the user expand More details
          Then User should see the address and meter details for Dual products
          When User uncheck the direct debit checkbox of "price page"
          Then verify Price table for "<fuel>" new user product - Acquisition prices "without DD" and "<scenario>"
          And verify direct debit label is not displayed in table header and individual rows
          And verify BG lite products is not displayed in the Quote or Price table
Examples:
| postcode | Address | Econsumption | EDuration | Gconsumption | GDuration | scenario | fuel |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 12000 | Year | 84000 | Year | gas nonCMA | Gas and Electricity |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 60000 | Year | 24000 | Year | elec nonCMA | Gas and Electricity |


Scenario Outline: To verify whether prices of Gas/Elec product is displaying properly in Quote summary page for the Gas meter found customers (Gas/Elec - noncma consumption per year).
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters "<fuel>" consumption as "<consumption>" for every "<Duration>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then the user click on confirm start date
          Then verify Quote summary page Header, Quote Reference Number, Quote Valid Until and Direct debit details
          And verify Quote table for "<fuel>" new user product - Acquisition prices "DD" and "<scenario>"
          And the user expand More details
          Then User should see the address and meter details for "<fuel1>"
          And User uncheck the direct debit checkbox of "quote page"
          And verify Quote table for "<fuel>" new user product - Acquisition prices "without DD" and "<scenario>"
          Then verify direct debit label is not displayed in table header and individual rows
          Then verify BG lite products is not displayed in the Quote or Price table
Examples:
| postcode | Address | consumption | Duration | scenario | firstname | lastname | businessname | telephone | email | fuel | fuel1 |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 84000 | Year | NoncmaGas | ElecGasNoncmaElecfn | ElecGasNoncmaElecln | Testing | 0127364585 | bgbsales12@gmail.com | Gas | Gas |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 60000 | Year | ElecnonCMA | ElecGasNoncmaElecfn | ElecGasNoncmaElecln | Testing | 0127364585 | bgbsales12@gmail.com | Electricity | Electricity |


Scenario Outline: To verify whether prices of Gas & Elec product is displaying properly in Price summary page when user skips to selecting address.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and skips the address
          Then verify price summary page Header, Price Reference Number, Price Valid Until and Direct debit details
          And verify Filter for gas and elec new user product
          And the user expand More details
          Then User should see the address and meter details for "<fuel>" products
          And verify Price table for "<fuel>" new user product - Acquisition prices "DD" and "<scenario>"
          And User uncheck the direct debit checkbox of "price page"
          And verify Price table for "<fuel>" new user product - Acquisition prices "without DD" and "<scenario>"
          Then verify direct debit label is not displayed in table header and individual rows
          Then verify BG lite products is not displayed in the Quote or Price table
Examples:
| postcode | scenario | fuel |
| TW20 9JJ | skipaddress | skipaddress |

@OnemeterfoundElec_PriceTableValidation @rerun
Scenario Outline: To verify whether prices of Elec (Acquisition Prices) product is displaying properly in Price summary page for the Elec meter found customers (Elec - cma consumption)
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters "<fuel>" consumption as "<consumption>" for every "<Duration>"
          And User is not entering contact details and clicking next
          Then verify price summary page Header, Price Reference Number, Price Valid Until and Direct debit details
          And verify Filter for "<fuel>" new user product
          And verify Price table for "<fuel>" new user product - Acquisition prices "DD" and "<scenario>"
          And the user expand More details
          And User should see the address and meter details for "<fuel>" products
          And User uncheck the direct debit checkbox of "price page"
          Then verify Price table for "<fuel>" new user product - Acquisition prices "without DD" and "<scenario>"
          And verify direct debit label is not displayed in table header and individual rows
          And verify BG lite products is not displayed in the Quote or Price table
Examples:
| postcode | Address | consumption | Duration | scenario | fuel |
| TW20 9JJ | 27 QUINCY ROAD EGHAM TW20 9JJ | 12000 | Year | SingleElecCMA | Electricity |
| TW20 9JJ | 27 QUINCY ROAD EGHAM TW20 9JJ | 6000 | 6 Months | SingleElecCMA | Electricity |
| TW20 9JJ | 27 QUINCY ROAD EGHAM TW20 9JJ | 3000 | Quarter | SingleElecCMA | Electricity |
| TW20 9JJ | 27 QUINCY ROAD EGHAM TW20 9JJ | 1000 | Month | SingleElecCMA | Electricity |

@OnemeterfoundGas_QuoteTableValidation
Scenario Outline: To verify whether prices of Gas product is displaying properly in Quote summary page for the Gas meter found customers (Gas - noncma consumption per year).
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters "<fuel>" consumption as "<consumption>" for every "<Duration>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then the user click on confirm start date
          Then verify Quote summary page Header, Quote Reference Number, Quote Valid Until and Direct debit details
          And verify Quote table for "<fuel>" new user product - Acquisition prices "DD" and "<scenario>"
          And the user expand More details
          Then User should see the address and meter details for "<fuel1>"
          And User uncheck the direct debit checkbox of "quote page"
          And verify Quote table for "<fuel>" new user product - Acquisition prices "without DD" and "<scenario>"
          Then verify direct debit label is not displayed in table header and individual rows
          Then verify BG lite products is not displayed in the Quote or Price table
Examples:
| postcode | Address | consumption | Duration | scenario | firstname | lastname | businessname | telephone | email | fuel | fuel1 |
| EX38 8HE | THE MAISONETTE 12 SOUTH STREET TORRINGTON EX38 8HE | 84000 | Year | NoncmaGas | NoncmaGas | NoncmaGas | Testing | 0127364585 | bgbsales12@gmail.com | GasnonCMA | Gas |
| EX38 8HE | THE MAISONETTE 12 SOUTH STREET TORRINGTON EX38 8HE | 21000 | Quarter | NoncmaGas | NoncmaGas | NoncmaGas | Testing | 0127364585 | bgbsales12@gmail.com | GasnonCMA | Gas |
| EX38 8HE | THE MAISONETTE 12 SOUTH STREET TORRINGTON EX38 8HE | 42000 | 6 Months | NoncmaGas | NoncmaGas | NoncmaGas | Testing | 0127364585 | bgbsales12@gmail.com | GasnonCMA | Gas |
| EX38 8HE | THE MAISONETTE 12 SOUTH STREET TORRINGTON EX38 8HE | 7000 | Month | NoncmaGas | NoncmaGas | NoncmaGas | Testing | 0127364585 | bgbsales12@gmail.com | GasnonCMA | Gas |

Scenario Outline: To verify whether prices of Gas (Acquisition Prices) product is displaying properly in Price summary page for the Gas meter found customers (Gas - cma consumption)
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters "<fuel>" consumption as "<consumption>" for every "<Duration>"
          And User is not entering contact details and clicking next
          Then verify price summary page Header, Price Reference Number, Price Valid Until and Direct debit details
          And verify Filter for "<fuel>" new user product
          And verify Price table for "<fuel>" new user product - Acquisition prices "DD" and "<scenario>"
          And the user expand More details
          And User should see the address and meter details for "<fuel>" products
          And User uncheck the direct debit checkbox of "price page"
          Then verify Price table for "<fuel>" new user product - Acquisition prices "without DD" and "<scenario>"
          And verify direct debit label is not displayed in table header and individual rows
          And verify BG lite products is not displayed in the Quote or Price table
Examples:
| postcode | Address | consumption | Duration | scenario | fuel |
| EX38 8HE | THE MAISONETTE 12 SOUTH STREET TORRINGTON EX38 8HE | 24000 | Year | Gas CMA | GasCMA |
| EX38 8HE | THE MAISONETTE 12 SOUTH STREET TORRINGTON EX38 8HE | 12000 | 6 Months | Gas CMA | GasCMA |
| EX38 8HE | THE MAISONETTE 12 SOUTH STREET TORRINGTON EX38 8HE | 6000 | Quarter | Gas CMA | GasCMA |
| EX38 8HE | THE MAISONETTE 12 SOUTH STREET TORRINGTON EX38 8HE | 2000 | Month | Gas CMA | GasCMA |

@SkipAddressMPxN
Scenario Outline: To verify whether prices of Gas & Elec product is displaying properly in Price summary page when user skips to entering MPxN.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And user clicks skip this step in MPxN section
          Then verify price summary page Header, Price Reference Number, Price Valid Until and Direct debit details
          And verify Filter for gas and elec new user product
          And the user expand More details
          Then User should see the address and meter details for "<fuel>" products
          And verify Price table for "<fuel>" new user product - Acquisition prices "DD" and "<scenario>"
          And User uncheck the direct debit checkbox of "price page"
          And verify Price table for "<fuel>" new user product - Acquisition prices "without DD" and "<scenario>"
          Then verify direct debit label is not displayed in table header and individual rows
          Then verify BG lite products is not displayed in the Quote or Price table
Examples:
| postcode | Address | scenario | fuel |
| GU1 2AF | 8A LONDON ROAD GUILDFORD GU1 2AF | skipmpxn | skipmpxn |

@OnemeterfoundElec_QuoteTableValidation
Scenario Outline: To verify whether prices of Electricity product is displaying properly in Quote summary page for the Elec meter found customers (Electricity - noncma consumption).
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters "<fuel>" consumption as "<consumption>" for every "<Duration>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then the user click on confirm start date
          Then verify Quote summary page Header, Quote Reference Number, Quote Valid Until and Direct debit details
          And verify Quote table for "<fuel>" new user product - Acquisition prices "DD" and "<scenario>"
          Then the user expand More details
          Then User should see the address and meter details for "<fuel1>"
          Then User uncheck the direct debit checkbox of "quote page"
          And verify Quote table for "<fuel>" new user product - Acquisition prices "without DD" and "<scenario>"
          Then verify direct debit label is not displayed in table header and individual rows
          Then verify BG lite products is not displayed in the Quote or Price table
Examples:
| postcode | Address | consumption | Duration | scenario | firstname | lastname | businessname | telephone | email | fuel | fuel1 |
| TW20 9JJ | 27 QUINCY ROAD EGHAM TW20 9JJ | 60000 | Year | NoncmaElec | NoncmaElec | NoncmaElec | Testing | 0127364585 | bgbsales12@gmail.com | Electricity | Electricity |
| TW20 9JJ | 27 QUINCY ROAD EGHAM TW20 9JJ | 15000 | Quarter | NoncmaElec | NoncmaElec | NoncmaElec | Testing | 0127364585 | bgbsales12@gmail.com | Electricity | Electricity |
| TW20 9JJ | 27 QUINCY ROAD EGHAM TW20 9JJ | 30000 | 6 Months | NoncmaElec | NoncmaElec | NoncmaElec | Testing | 0127364585 | bgbsales12@gmail.com | Electricity | Electricity |
| TW20 9JJ | 27 QUINCY ROAD EGHAM TW20 9JJ | 5000 | Month | NoncmaElec | NoncmaElec | NoncmaElec | Testing | 0127364585 | bgbsales12@gmail.com | Electricity | Electricity |


@Twometerfound_QuoteTableValidation
Scenario Outline: To verify whether prices of Gas/Elec products are displaying properly in Quote summary page for the two meter found customers (Gas&Elec - noncma consumption per year).*******
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters elec consumption as "<Econsumption>" for every "<EDuration>" And gas consumption as "<Gconsumption>" for every "<GDuration>"
          And the user click on "<fuel>" fuel type
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          And the user click on confirm start date
          Then verify Quote summary page Header, Quote Reference Number, Quote Valid Until and Direct debit details
          And verify Quote table for "<fuel>" new user product - Acquisition prices "DD" and "<scenario>"
          And the user expand More details
          And User should see the address and meter details for "<fuel>"
          And User uncheck the direct debit checkbox of "quote page"
          Then verify Quote table for "<fuel>" new user product - Acquisition prices "without DD" and "<scenario>"
          And verify direct debit label is not displayed in table header and individual rows
          And verify BG lite products is not displayed in the Quote or Price table
Examples:
| postcode | Address | Econsumption | EDuration | Gconsumption | GDuration | scenario | firstname | lastname | businessname | telephone | email | fuel |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 60000 | Year | 84000 | Year | both nonCMA Elec | ElecGasNoncmaElecfn | ElecGasNoncmaElecln | Testing | 0127364585 | bgbsales12@gmail.com | Electricity |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 60000 | Year | 84000 | Year | both nonCMA Gas | ElecGasNoncmaElecfn | ElecGasNoncmaElecln | Testing | 0127364585 | bgbsales12@gmail.com | Gas |

@OnemeterfoundElec_QuoteTableValidation
Scenario Outline: To verify whether prices of Electricity product is displaying properly in Quote summary page for the Electricity meter found customers (Electricity - Spend per year).
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters "<fuel>" spend as "<spend>" in pounds for every "<Duration>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          And the user click on confirm start date
          Then verify Quote summary page Header, Quote Reference Number, Quote Valid Until and Direct debit details
          And verify Quote table for "<fuel>" new user product - Acquisition prices "DD" and "<scenario>"
          And the user expand More details
          And User should see the address and meter details for "<fuel1>"
          And User uncheck the direct debit checkbox of "quote page"
          Then verify Quote table for "<fuel>" new user product - Acquisition prices "without DD" and "<scenario>"
          And verify direct debit label is not displayed in table header and individual rows
          And verify BG lite products is not displayed in the Quote or Price table
Examples:
| postcode | Address | spend | Duration | scenario | firstname | lastname | businessname | telephone | email | fuel | fuel1 |
#| TW20 9JJ | 27 QUINCY ROAD EGHAM TW20 9JJ | 7200 | Year | NoncmaElec | NoncmaElec | NoncmaElec | Testing | 0127364585 | bgbsales12@gmail.com | Electricity | Electricity |
