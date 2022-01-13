Feature: Get A Quote Lead Scenarios

@LeadScenarios
@TwoMeterFound @mytestnow
Scenario Outline:Verify whether the two meter found customer(Elec/Gas - Large consumption) is displayed with Thank you page after successful large business lead creation.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters "<fuel>" consumption as "<consumption>" for every "<Duration>"
          Then verify "<page>" lead creation page is displaying with the "<title>" and "<subtitle>" and "<message>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then verify Thank you page is displayed to user with "Thanks" and "A member of our team will contact you shortly." messages
Examples:
| postcode | Address | consumption | Duration | scenario | fuel | page | firstname | lastname | businessname | telephone | email | title | subtitle | message |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 840000 | Year | Gas-LargeConsumption | Gas | large business | ElecGasLCfn | ElecGasLCln | Testing | 0127364586 | bgbsales12@gmail.com | Are you a large business? | The spend or consumption that you have provided shows you could be a large business. | You can choose to go back and adjust your spend or consumption, or a member of our large business team can call you back. |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 1000001 | Year | Elec-LargeConsumption | Electricity | large business | ElecGasLCfn | ElecGasLCln | Testing | 0127364586 | bgbsales12@gmail.com | Are you a large business? | The spend or consumption that you have provided shows you could be a large business. | You can choose to go back and adjust your spend or consumption, or a member of our large business team can call you back. |
@rerun
Scenario Outline:Verify whether the two meter found customer(Elec/Gas - Noncma consumption) is displayed with Thank you page after successful existing supply lead creation.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters "<fuel>" consumption as "<consumption>" for every "<Duration>"
          Then verify "<page>" lead creation page is displaying with the "<title>" and "<subtitle>" and "<message>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then verify Thank you page is displayed to user with "Thanks" and "A member of our team will contact you shortly." messages
Examples:
| postcode | Address | consumption | Duration | scenario | fuel | page | firstname | lastname | businessname | telephone | email | title | subtitle | message |
| CW7 2AU | GEORGE SNAPE CHARTERED ACCOUNTANTS 214 HIGH STREET WINSFORD CW7 2AU | 60000 | Year | Elec-noncma | Electricity | Existing Supply | ElecGasESelcfn | ElecGasESelecln | Testing | 0127364586 | bgbsales12@gmail.com |  You already have a contract with us for this address. | You're energy is currently not due for renewal, or you've already accepted a quote from us over the phone. | Leave your details below and we will call you back. |
| CW7 2AU | GEORGE SNAPE CHARTERED ACCOUNTANTS 214 HIGH STREET WINSFORD CW7 2AU | 84000 | Year | Gas-noncma | Gas | Existing Supply | ElecGasESelcfn | ElecGasESelecln | Testing | 0127364586 | bgbsales12@gmail.com |  You already have a contract with us for this address. | You're energy is currently not due for renewal, or you've already accepted a quote from us over the phone. | Leave your details below and we will call you back. |
@test123
Scenario Outline: Verify whether the two meter found customer(Elec/Gas - Noncma consumption) is displayed with Thank you page after successful existing supply lead creation.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters elec consumption as "<Econsumption>" for every "<EDuration>" And gas consumption as "<Gconsumption>" for every "<GDuration>"
          Then verify "<page>" lead creation page is displaying with the "<title>" and "<subtitle>" and "<message>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then verify Thank you page is displayed to user with "Thanks" and "A member of our team will contact you shortly." messages
Examples:
| postcode | Address | Econsumption | EDuration | Gconsumption | GDuration | scenario | page | firstname | lastname | businessname | telephone | email | title | subtitle | message |
| CW7 2AU | GEORGE SNAPE CHARTERED ACCOUNTANTS 214 HIGH STREET WINSFORD CW7 2AU | 60000 | Year | 84000 | Year | Elec-noncma & Gas-noncma | Existing Supply | ElecGasESelcfn | ElecGasESelecln | Testing | 0127364586 | bgbsales12@gmail.com | You already have a contract with us for this address. | You're energy is currently not due for renewal, or you've already accepted a quote from us over the phone. | Leave your details below and we will call you back. |

Scenario Outline: Verify whether the two meter found customer(one fuel is large consumption and another fuel is large/noncma consumption) is displayed with Thank you page after successful large business lead creation.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters elec consumption as "<Econsumption>" for every "<EDuration>" And gas consumption as "<Gconsumption>" for every "<GDuration>"
          Then verify "<page>" lead creation page is displaying with the "<title>" and "<subtitle>" and "<message>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then verify Thank you page is displayed to user with "Thanks" and "A member of our team will contact you shortly." messages
Examples:
| postcode | Address | Econsumption | EDuration | Gconsumption | GDuration | scenario | page | firstname | lastname | businessname | telephone | email | title | subtitle | message |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 1000001 | Year | 84000 | Year | Elec-LargeConsumption & Gas-noncma | large business | ElecGasLCfn | ElecGasLCln | Testing | 0127364586 | bgbsales12@gmail.com | Are you a large business? | The spend or consumption that you have provided shows you could be a large business. | You can choose to go back and adjust your spend or consumption, or a member of our large business team can call you back. |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 1000001 | Year | 840000 | Year | Elec-noncma & Gas-LargeConsumption | large business | ElecGasLCfn | ElecGasLCln | Testing | 0127364586 | bgbsales12@gmail.com | Are you a large business? | The spend or consumption that you have provided shows you could be a large business. | You can choose to go back and adjust your spend or consumption, or a member of our large business team can call you back. |
| TW20 9JJ | 7 QUINCY ROAD EGHAM TW20 9JJ | 60000 | Year | 840000 | Year | Elec-LargeConsumption & Gas-LargeConsumption | large business | ElecGasLCfn | ElecGasLCln | Testing | 0127364586 | bgbsales12@gmail.com | Are you a large business? | The spend or consumption that you have provided shows you could be a large business. | You can choose to go back and adjust your spend or consumption, or a member of our large business team can call you back. |

Scenario: Verify whether Site details and Meter details of Gas and Elec are displaying properly for the two meter found customers.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "TW20 9JJ" and selects address as "7 QUINCY ROAD EGHAM TW20 9JJ"
          Then verify site address details and meter details for "DualFuel"

Scenario: Verify whether Site details and Meter details of Gas and Elec are displaying properly for the two meter found customers when Gas is active & Elec meter is DE meter.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "GU1 2AF" and selects address as "CURCHODS ESTATE AGENTS 4 LONDON ROAD GUILDFORD GU1 2AF"
          Then verify site address details and meter details for "GasElecDE"
          And verify the message for elec DE meter is displaying as "We can't give you a quote for your business electricity"

Scenario: Verify whether Site details and Meter details of Gas and Elec are displaying properly for the two meter found customers when Gas is active & Elec meter is HH meter.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "SE1 9EQ" and selects address as "26 PARK STREET LONDON SE1 9EQ"
          Then verify site address details and meter details for "GasElecHH"
          And verify the message for elec HH meter is displaying as "We can't give you a quote for your business electricity"

@OneMeterGas
Scenario Outline: Verify whether the Gas meter found customer(Gas - large consumption) is displayed with Thank you page after successful I&C lead creation.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters "<fuel>" consumption as "<consumption>" for every "<Duration>"
          Then verify "<page>" lead creation page is displaying with the "<title>" and "<subtitle>" and "<message>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then verify Thank you page is displayed to user with "Thanks" and "A member of our team will contact you shortly." messages
Examples:
| postcode | Address | consumption | Duration | fuel | page | firstname | lastname | businessname | telephone | email | title | subtitle | message |
| EX38 8HE | THE MAISONETTE 12 SOUTH STREET TORRINGTON EX38 8HE | 840000 | Year | Gas(I&C) | I&C | IandCgasfn | IandCgasln | Testing | 0127364586 | bgbsales12@gmail.com | Are you a large business? | The spend or consumption that you have provided shows you could be a large business. | You can choose to go back and adjust your spend or consumption, or a member of our large business team can call you back. |

Scenario Outline: Verify whether the Gas meter found customer(Gas - noncma consumption) is displayed with Thank you page after successful Existing supply lead creation.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters "<fuel>" consumption as "<consumption>" for every "<Duration>"
          Then verify "<page>" lead creation page is displaying with the "<title>" and "<subtitle>" and "<message>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then verify Thank you page is displayed to user with "Thanks" and "A member of our team will contact you shortly." messages
Examples:
| postcode | Address | consumption | Duration | fuel | page | firstname | lastname | businessname | telephone | email | title | subtitle | message |
| WA2 8LT | SYSTEM C HEALTHCARE LTD 6-7 QUAY BUSINESS CENTRE HARVARD COURT WINWICK QUAY WARRINGTON WA2 8LT | 84000 | Year | Gas(Existing supply) | Existing supply | ESgasfn | ESgasln | Testing | 0127364586 | bgbsales12@gmail.com | You already have a contract with us for this address. | You're energy is currently not due for renewal, or you've already accepted a quote from us over the phone. | Leave your details below and we will call you back. |

@OneMeterElec
Scenario Outline: Verify whether the Elec meter found customer(Elec - large consumption) is displayed with Thank you page after successful I&C lead creation.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters "<fuel>" consumption as "<consumption>" for every "<Duration>"
          Then verify "<page>" lead creation page is displaying with the "<title>" and "<subtitle>" and "<message>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then verify Thank you page is displayed to user with "Thanks" and "A member of our team will contact you shortly." messages
Examples:
| postcode | Address | consumption | Duration | fuel | page | firstname | lastname | businessname | telephone | email | title | subtitle | message |
| TW20 9JJ | 27 QUINCY ROAD EGHAM TW20 9JJ | 1000001 | Year | Electricity | I&C | IandCElecfn | IandCElecln | Testing | 0127364586 | bgbsales12@gmail.com | Are you a large business? | The spend or consumption that you have provided shows you could be a large business. | You can choose to go back and adjust your spend or consumption, or a member of our large business team can call you back. |

Scenario Outline: Verify whether the Elec meter found customer(Elec - DE meter) is displayed with Thank you page after successful DE lead creation.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          Then verify "<page>" lead creation page is displaying with the "<title>" and "<subtitle>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then verify Thank you page is displayed to user with "Thanks" and "A member of our team will contact you shortly." messages
Examples:
| postcode | Address | fuel | page | meter | firstname | lastname | businessname | telephone | email | title | subtitle |
| DN32 9DW | FLAT 1 249A FREEMAN STREET GRIMSBY DN32 9DW | Electricity | De-energized | DE | DEelecfn | DEelecln | Testing | 0127364586 | bgbsales12@gmail.com | Your meter isn't connected to the network. | We think your meter has been disconnected.Leave your details below and we will call you back. |

Scenario Outline: Verify whether the Elec meter found customer(Elec - HH meter) is displayed with Thank you page after successful HH lead creation.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          Then verify "<page>" lead creation page is displaying with the "<title>" and "<subtitle>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then verify Thank you page is displayed to user with "Thanks" and "A member of our team will contact you shortly." messages
Examples:
| postcode | Address | fuel | page | meter | firstname | lastname | businessname | telephone | email | title | subtitle |
| MK42 0XE | MOTHERCARE UK LTD UNIT 5 ST. JOHNS CENTRE ROPE WALK BEDFORD MK42 0XE | Electricity | half hourly | HH | HHelecfn | HHelecln | Testing | 0127364586 | bgbsales12@gmail.com | We'd like to give you a bespoke price tailored to your business needs. | Leave your details below and we will call you back. |

Scenario Outline: Verify whether the Elec meter found customer(Elec - noncma consumption) is displayed with Thank you page after successful Existing Supply lead creation.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user enters "<fuel>" consumption as "<consumption>" for every "<Duration>"
          Then verify "<page>" lead creation page is displaying with the "<title>" and "<subtitle>" and "<message>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then verify Thank you page is displayed to user with "Thanks" and "A member of our team will contact you shortly." messages
Examples:
| postcode | Address | consumption | Duration | scenario | fuel | page | firstname | lastname | businessname | telephone | email | title | subtitle | message |
| LE9 9LD | M & M 4 ARNOLDS CRESCENT NEWBOLD VERDON LEICESTER LE9 9LD | 60000 | Year | Elec-LargeConsumption | Electricity | Existing Supply | ESelecfn | ESelecln | Testing | 0127364586 | bgbsales12@gmail.com | You already have a contract with us for this address. | You're energy is currently not due for renewal, or you've already accepted a quote from us over the phone. | Leave your details below and we will call you back. |

@NoMeterFound_MPXN
Scenario Outline: Verify whether the no meter found customer enters MPAN with DE/HH meter is displayed with Thank you page after successful DE/HH lead creation.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
        	And the user provides MPAN as "<MPAN>"
          Then verify "<page>" lead creation page is displaying with the "<title>" and "<subtitle>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then verify Thank you page is displayed to user with "Thanks" and "A member of our team will contact you shortly." messages
  Examples:
  | postcode | Address | MPAN | scenario | page | firstname | lastname | businessname | telephone | email | title | subtitle |
  | GU1 2AF | 8A LONDON ROAD GUILDFORD GU1 2AF | 011234562390000061835 | DE | De-energized | DEelecfn | DEelecln | Testing | 0127364586 | bgbsales12@gmail.com | Your meter isn't connected to the network.| We think your meter has been disconnected.Leave your details below and we will call you back. |
  | GU1 2AF | 8A LONDON ROAD GUILDFORD GU1 2AF | 011234561012347164520 | HH | half hourly | HHelecfn | HHelecln | Testing | 0127364586 | bgbsales12@gmail.com | We'd like to give you a bespoke price tailored to your business needs.| Leave your details below and we will call you back. |

Scenario Outline: Verify whether the no meter found customer enters MPAN with DE/HH meter and invalid MPRN is displayed with Thank you page after successful DE/HH lead creation.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
          And the user provides MPAN as "<MPAN>" and MPRN as "<MPRN>"
          Then verify "<page>" lead creation page is displaying with the "<title>" and "<subtitle>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then verify Thank you page is displayed to user with "Thanks" and "A member of our team will contact you shortly." messages
Examples:
| postcode | Address | MPAN | MPRN | scenario | page | firstname | lastname | businessname | telephone | email | title | subtitle |
| GU1 2AF | 8A LONDON ROAD GUILDFORD GU1 2AF | 011234562390000061835 | 12345678 | DE | De-energized | DEelecfn | DEelecln | Testing | 0127364586 | bgbsales12@gmail.com | Your meter isn't connected to the network.| We think your meter has been disconnected.Leave your details below and we will call you back. |
| GU1 2AF | 8A LONDON ROAD GUILDFORD GU1 2AF | 011234561012347164520 | 12345678 | HH | half hourly | HHelecfn | HHelecln | Testing | 0127364586 | bgbsales12@gmail.com | We'd like to give you a bespoke price tailored to your business needs.| Leave your details below and we will call you back. |

Scenario Outline: Verify whether the no meter found customer enters MPAN/MPRN (Elec&Gas - Noncma consumption) is displayed with Thank you page after successful Existing supply lead creation.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
        	And the user provides "<scenario>" as "<MPxN>"
          And the user enters "<fuel>" consumption as "<consumption>" for every "<Duration>"
          Then verify "<page>" lead creation page is displaying with the "<title>" and "<subtitle>" and "<message>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then verify Thank you page is displayed to user with "Thanks" and "A member of our team will contact you shortly." messages
Examples:
| postcode | Address | MPxN | consumption | Duration | scenario | page | fuel | firstname | lastname | businessname | telephone | email | title | subtitle | message |
| GU1 2AF | 8A LONDON ROAD GUILDFORD GU1 2AF | 011234561300000389281 | 60000 | Year | MPAN | Existing supply | Electricity | MPXNElecESelecfn | MPXNElecESelecln | Testing | 0127364586 | bgbsales12@gmail.com | You already have a contract with us for this address.| You're energy is currently not due for renewal, or you've already accepted a quote from us over the phone. | Leave your details below and we will call you back. |
| GU1 2AF | 8A LONDON ROAD GUILDFORD GU1 2AF | 68877707 | 84000 | Year | MPRN | Existing supply | Gas(Existing supply) | MPXNGasESgasfn | MPXNGasESgasln | Testing | 0127364586 | bgbsales12@gmail.com | You already have a contract with us for this address.| You're energy is currently not due for renewal, or you've already accepted a quote from us over the phone. | Leave your details below and we will call you back. |

Scenario Outline: Verify whether the no meter found customer enters MPAN/MPRN (Elec&Gas - large consumption) is displayed with Thank you page after successful large business lead creation.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
        	And the user provides "<scenario>" as "<MPxN>"
          And the user enters "<fuel>" consumption as "<consumption>" for every "<Duration>"
          Then verify "<page>" lead creation page is displaying with the "<title>" and "<subtitle>" and "<message>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then verify Thank you page is displayed to user with "Thanks" and "A member of our team will contact you shortly." messages
Examples:
| postcode | Address | MPxN | consumption | Duration | scenario | page | fuel | firstname | lastname | businessname | telephone | email | title | subtitle | message |
| GU1 2AF | 8A LONDON ROAD GUILDFORD GU1 2AF | 018011002000003618811 | 1000001 | Year | MPAN | Large Cosumption | Electricity | MPXNElecLCelecfn | MPXNElecLCelecln | Testing | 0127364586 | bgbsales12@gmail.com | Are you a large business?| The spend or consumption that you have provided shows you could be a large business. | You can choose to go back and adjust your spend or consumption, or a member of our large business team can call you back. |
| GU1 2AF | 8A LONDON ROAD GUILDFORD GU1 2AF | 3380791703 | 840000 | Year | MPRN | Large Cosumption | Gas(LargeConsumption) | MPXNGasLCgasfn | MPXNGasLCgasln | Testing | 0127364586 | bgbsales12@gmail.com | Are you a large business?| The spend or consumption that you have provided shows you could be a large business. | You can choose to go back and adjust your spend or consumption, or a member of our large business team can call you back. |

Scenario Outline:Verify whether the no meter found customer enters valid MPAN and MPRN (Elec&Gas - large consumption) is displayed with Thank you page after successful large business lead creation.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
        	And the user provides MPAN as "<MPAN>" and MPRN as "<MPRN>"
          And the user enters elec consumption as "<Econsumption>" for every "<EDuration>" And gas consumption as "<Gconsumption>" for every "<GDuration>"
          Then verify "<page>" lead creation page is displaying with the "<title>" and "<subtitle>" and "<message>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then verify Thank you page is displayed to user with "Thanks" and "A member of our team will contact you shortly." messages
Examples:
| postcode | Address | MPAN | MPRN | Econsumption | EDuration | Gconsumption | GDuration | scenario | page | firstname | lastname | businessname | telephone | email | title | subtitle | message |
| GU1 2AF | 8A LONDON ROAD GUILDFORD GU1 2AF | 018011002000003618811 | 3380791703 | 1000001 | Year | 840000 | Year | MPAN(valid) & MPRN(valid) | Large Cosumption | MPXNElecGasLCelecgasfn | MPXNElecGasLCelecgasln | Testing | 0127364586 | bgbsales12@gmail.com | Are you a large business?| The spend or consumption that you have provided shows you could be a large business. | You can choose to go back and adjust your spend or consumption, or a member of our large business team can call you back. |

Scenario Outline: Verify whether the no meter found customer enters valid MPAN and MPRN (one fuel is large consumption and another fuel is noncma consumption) is displayed with Thank you page after successful large business lead creation.
          Given the user is on Anonymous GAQ page
          When the user enters postcode as "<postcode>" and selects address as "<Address>"
        	And the user provides MPAN as "<MPAN>" and MPRN as "<MPRN>"
          And the user enters elec consumption as "<Econsumption>" for every "<EDuration>" And gas consumption as "<Gconsumption>" for every "<GDuration>"
          Then verify "<page>" lead creation page is displaying with the "<title>" and "<subtitle>" and "<message>"
          And the user enters contact details as "<firstname>" , "<lastname>" , "<businessname>" , "<telephone>" and "<email>" and click continue button
          Then verify Thank you page is displayed to user with "Thanks" and "A member of our team will contact you shortly." messages
Examples:
| postcode | Address | MPAN | MPRN | Econsumption | EDuration | Gconsumption | GDuration | scenario | page | firstname | lastname | businessname | telephone | email | title | subtitle | message |
| GU1 2AF | 8A LONDON ROAD GUILDFORD GU1 2AF | 018011002000003618811 | 3380791703 | 60000 | Year | 840000 | Year | MPAN(valid)-Non cma consumption & MPRN(valid) | Large Cosumption | MPXNElecGasLCgasfn | MPXNElecGasLCgasln | Testing | 0127364586 | bgbsales12@gmail.com | Are you a large business?| The spend or consumption that you have provided shows you could be a large business. | You can choose to go back and adjust your spend or consumption, or a member of our large business team can call you back. |
| GU1 2AF | 8A LONDON ROAD GUILDFORD GU1 2AF | 018011002000003618811 | 3380791703 | 1000001 | Year | 84000 | Year | MPRN(valid)-Non cma consumption & MPAN(valid) | Large Cosumption | MPXNElecGasLCelecfn | MPXNElecGasLCelecln | Testing | 0127364586 | bgbsales12@gmail.com | Are you a large business?| The spend or consumption that you have provided shows you could be a large business. | You can choose to go back and adjust your spend or consumption, or a member of our large business team can call you back. |
