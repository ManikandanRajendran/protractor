Feature: GAQ end to end scenarios

@TwoMeterFound_EndToEnd @lkj
Scenario Outline: To verify whether the two  meter found customer(Gas&Elec - cma consumption per year) is able to Buy One year Gas/Elec product and displaying with reference number in confirmation page.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters elec consumption as "<Econsumption>" for every "<EDuration>" And gas consumption as "<Gconsumption>" for every "<GDuration>"
          And User is not entering contact details and clicking next
          Then verify price summary page Header, Price Reference Number, Price Valid Until and Direct debit details
          And User click buy of "<product>" for "<fuel>" Product
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then verify "Complete your purchase" and reference number in confirmation page
Examples:
| postcode | Address | Econsumption | EDuration | Gconsumption | GDuration | product | fuel | firstname | lastname | businessname | telephone | email | scenario |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 12000 | Year | 24000 | Year | 1 Year Online Saver | Gas | ElecGasOneYearGasfn | ElecGasOneYearGasln | Testing | 0127364585 | bgbsales12@gmail.com | Elec |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 12000 | Year | 24000 | Year | 1 Year Online Saver | Electricity | ElecGasOneYearElecfn | ElecGasOneYearElecln | Testing | 0127364585 | bgbsales12@gmail.com | Gas |
@Quote  @test123
Scenario Outline: To verify whether the two  meter found customer(Gas&Elec - noncma consumption per year) is able to Buy One/two/three year Gas/Elec product and displaying with reference number in confirmation page.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters elec consumption as "<Econsumption>" for every "<EDuration>" And gas consumption as "<Gconsumption>" for every "<GDuration>"
          And the user click on "<fuel>" fuel type
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          And the user click on confirm start date
          And User uncheck the direct debit checkbox of "quote page"
          And User click buy of "<product>" for "<fuel>" Product - "<scenario>"
          Then verify "Complete your purchase" and reference number in confirmation page
Examples:
| postcode | Address | Econsumption | EDuration | Gconsumption | GDuration | product | fuel | firstname | lastname | businessname | telephone | email | scenario |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 60000 | Year | 84000 | Year | 1 Year Fixed rate | Gas | ElecGasNoncmaGasfn | ElecGasNoncmaGasln | Testing | 0127364585 | bgbsales12@gmail.com | bothnoncma |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 60000 | Year | 84000 | Year | 2 Year Fixed rate | Gas | ElecGasNoncmaGasfn | ElecGasNoncmaGasln | Testing | 0127364585 | bgbsales12@gmail.com | bothnoncma |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 60000 | Year | 84000 | Year | 3 Year Fixed rate | Gas | ElecGasNoncmaGasfn | ElecGasNoncmaGasln | Testing | 0127364585 | bgbsales12@gmail.com | bothnoncma |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 60000 | Year | 84000 | Year | 1 Year Fixed rate | Electricity | ElecGasNoncmaElecfn | ElecGasNoncmaElecln | Testing | 0127364585 | bgbsales12@gmail.com | bothnoncma |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 60000 | Year | 84000 | Year | 2 Year Fixed rate | Electricity | ElecGasNoncmaElecfn | ElecGasNoncmaElecln | Testing | 0127364585 | bgbsales12@gmail.com | bothnoncma |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 60000 | Year | 84000 | Year | 3 Year Fixed rate | Electricity | ElecGasNoncmaElecfn | ElecGasNoncmaElecln | Testing | 0127364585 | bgbsales12@gmail.com | bothnoncma |

@ElecMeterFound_EndToEnd @rerun
Scenario Outline: To verify whether the Elec meter found customer(Elec - cma consumption per year) is able to Buy One year Elec product and displaying with reference number in confirmation page.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters "<fuel>" consumption as "<consumption>" for every "<Duration>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then verify price summary page Header, Price Reference Number, Price Valid Until and Direct debit details
          And User click buy of "<product>" for "<fuel>" Product
          Then verify "Complete your purchase" and reference number in confirmation page
Examples:
| postcode | Address | consumption | Duration | product | fuel | firstname | lastname | businessname | telephone | email | scenario |
| TW20 9JJ | 27 QUINCY ROAD EGHAM TW20 9JJ | 12000 | Year | 1 Year Online Saver | Electricity | ptcEleconeyearfn | ptcEleconeyearln | Testing | 0127364585 | bgbsales12@gmail.com | Eleccma |
@rerun @Quote
Scenario Outline: To verify whether the Elec meter found customer(Elec - noncma consumption per year) is able to Buy One/two/three year Elec product and displaying with reference number in confirmation page.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters "<fuel>" consumption as "<consumption>" for every "<Duration>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          And the user click on confirm start date
          And User uncheck the direct debit checkbox of "quote page"
          And User click buy of "<product>" for "<fuel>" Product - "<scenario>"
          Then verify "Complete your purchase" and reference number in confirmation page
Examples:
| postcode | Address | consumption | Duration | product | fuel | firstname | lastname | businessname | telephone | email | scenario |
| TW20 9JJ | 27 QUINCY ROAD EGHAM TW20 9JJ | 60000 | Year | 1 Year Fixed rate | Electricity | NoncmaElec | NoncmaElec | Testing | 0127364585 | bgbsales12@gmail.com | ElecnonCMA |
| TW20 9JJ | 27 QUINCY ROAD EGHAM TW20 9JJ | 60000 | Year | 2 Year Fixed rate | Electricity | NoncmaElec | NoncmaElec | Testing | 0127364585 | bgbsales12@gmail.com | ElecnonCMA |
| TW20 9JJ | 27 QUINCY ROAD EGHAM TW20 9JJ | 60000 | Year | 3 Year Fixed rate | Electricity | NoncmaElec | NoncmaElec | Testing | 0127364585 | bgbsales12@gmail.com | ElecnonCMA |

@GasMeterFound_EndToEnd
Scenario Outline: To verify whether the Gas meter found customer(Gas - cma consumption per year) is able to Buy One year Gas product and displaying with reference number in confirmation page.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters "<fuel>" consumption as "<consumption>" for every "<Duration>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then verify price summary page Header, Price Reference Number, Price Valid Until and Direct debit details
          And User click buy of "<product>" for "<fuel>" Product
          Then verify "Complete your purchase" and reference number in confirmation page
Examples:
| postcode | Address | consumption | Duration | product | fuel | firstname | lastname | businessname | telephone | email | scenario |
| EX38 8HE | THE MAISONETTE 12 SOUTH STREET TORRINGTON EX38 8HE | 24000 | Year | 1 Year Online Saver | GasonlyCMA | ptcGasoneyearfn | ptcGasoneyearln | Testing | 0127364585 | bgbsales12@gmail.com | GasCMA |
@Quote
Scenario Outline: To verify whether the Gas meter found customer(Gas - noncma consumption per year) is able to Buy One/two/three year Gas product and displaying with reference number in confirmation page.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters "<fuel>" consumption as "<consumption>" for every "<Duration>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          And the user click on confirm start date
          And User uncheck the direct debit checkbox of "quote page"
          And User click buy of "<product>" for "<fuel>" Product - "<scenario>"
          Then verify "Complete your purchase" and reference number in confirmation page
Examples:
| postcode | Address | consumption | Duration | product | fuel | firstname | lastname | businessname | telephone | email | scenario |
| EX38 8HE | THE MAISONETTE 12 SOUTH STREET TORRINGTON EX38 8HE | 84000 | Year | 1 Year Fixed rate | GasnonCMA | Noncmagas | Noncmagas | Testing | 0127364585 | bgbsales12@gmail.com | GasnonCMA |
| EX38 8HE | THE MAISONETTE 12 SOUTH STREET TORRINGTON EX38 8HE | 84000 | Year | 2 Year Fixed rate | GasnonCMA | Noncmagas | Noncmagas | Testing | 0127364585 | bgbsales12@gmail.com | GasnonCMA |
| EX38 8HE | THE MAISONETTE 12 SOUTH STREET TORRINGTON EX38 8HE | 84000 | Year | 3 Year Fixed rate | GasnonCMA | Noncmagas | Noncmagas | Testing | 0127364585 | bgbsales12@gmail.com | GasnonCMA |
