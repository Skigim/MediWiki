# AVS Procedural Guide

**Asset Verification System Step-by-Step Instructions**

> A comprehensive procedural guide for submitting account verification requests using the Asset Verification System (AVS), covering ad hoc requests, direct requests, account responses, and eligibility determinations.

---

## Table of Contents

- [Key Definitions](#key-definitions)
- [Lifecycle of a Case in AVS](#lifecycle-of-a-case-in-avs)
- [Determine if AVS is Required](#determine-if-avs-is-required)
- [Submitting Ad Hoc Requests](#submitting-ad-hoc-requests)
- [Direct Requests and Account Responses](#direct-requests-and-account-responses)
- [Property and Flag Indicators](#property-and-flag-indicators)
- [Eligibility Decisions and Case Actions](#eligibility-decisions-and-case-actions)
- [Long-Term Care and Change Reports](#long-term-care-and-change-reports)

---

## Key Definitions

**Asset Verification System (AVS)**: Electronic system used to verify financial institution (FI) accounts and real property ownership for Medicaid applicants and beneficiaries.

**Ad Hoc Request**: Worker-initiated verification request submitted through the AVS portal for applications, renewals not included in batch processing, and account changes.

**Direct Request**: Additional verification request sent to specific financial institutions not included in the initial ad hoc search.

**Request Type (RT Code)**: Code that determines the lookback period and household size for AVS requests (e.g., NA for nursing home application, AR for ABD renewal).

**Batch Renewal Process**: Automated system-generated AVS requests for renewals that meet specific criteria.

**FI (Financial Institution)**: Banks, credit unions, and other financial entities that maintain deposit accounts.

**Lookback Period**: Time period for which account information is requested (3 months for ABD, 60 months for long-term care).

**Flag Indicator**: System alert indicating excessive increases or decreases in account balances that may require further review.

**Results After Decision (RAD)**: Additional information received from financial institutions after a case has been archived (may arrive up to 90 days after submission).

**Household Size**: Number of individuals (1 or 2) used for resource limit calculations in AVS.

**Pending Review**: Case status indicating the 10-day processing cycle has completed and the case is ready for worker action.

**Case Correction**: Function to update specific fields in a request that hasn't been sent yet, without incurring additional costs.

---

## Lifecycle of a Case in AVS

The AVS process follows a structured workflow from initial determination through final decision.

### Process Flow

**Step 1: Initial Determination**
- Determine if AVS is required based on individual characteristics
- Verify AVS consent has been obtained and recorded in NFOCUS

**Step 2: Request Submission**
- Submit ad hoc request for applicant
- Add spouse if applicable and household size is 2
- Submit direct request if known banks are not in search results

**Step 3: Monitoring and Review**
- Monitor for bank and real property responses (3-5 days)
- Review searched banks to determine if direct request is necessary
- Verify ownership of real property if applicable

**Step 4: Eligibility Determination**
- Review account responses and flag indicators
- Determine Medicaid eligibility in NFOCUS
- Make decision on AVS case
- Document all actions in narrative

### Processing Timeline

- **Day 0**: Ad hoc request submitted
- **Days 3-5**: Review banks searched, submit direct requests if needed
- **Day 10**: Processing cycle completes, case status changes to "Pending Review"
- **Up to 90 days**: Results After Decision may arrive

---

## Determine if AVS is Required

AVS is used for Non-MAGI individuals age 18 or over, with specific exceptions for SSI/1619(b) recipients.

### Eligibility for AVS

**Question 1: Is the individual Non-MAGI and age 18 or over?**

- If yes, proceed to Question 2
- If no, AVS will not be used

**Question 2: Is the individual current pay SSI or 1619(b) in the SDX interface?**

- If no, proceed to submit AVS request
- If yes, AVS would only be used to review the 60-month lookback period if the individual or their spouse:
  - Resides in a medical institution or nursing facility
  - Receives or requests Home and Community Based Services (HCBS waiver)
  - Participates in the Program for All-inclusive Care for the Elderly (PACE)

If the individual or their spouse are not in any of these living arrangements, AVS will not be used.

### Consent Requirements

Review the AVS consent window and ensure consent has been obtained and recorded in NFOCUS prior to sending a request in the AVS portal.

See also: Using the AVS Consent Window in NFOCUS.

---

## Submitting Ad Hoc Requests

Ad hoc requests must be submitted for all applications, renewals that were not included in the batch renewal process, and changes in bank accounts.

### Before Submitting

1. **Check for Existing Requests**
   - Conduct an AVS search of applicable SSN(s) to determine if a request has already been sent
   - If a request was previously sent (by the system or a worker) but not documented, add the required narrative to NFOCUS including the date it was sent
   - Do not send a new request unless the previous submission had an incorrect SSN

### Submission Steps

**Access the Ad Hoc Request Form:**

1. Click on the TOOLS icon in the upper right corner of the screen
2. Select "Ad hoc Request" from the drop down

**Complete Required Fields:**

**Applicant Type**
- The applicant should be entered first
- The spouse (whether an applicant or not) will be entered in a separate ad hoc action if appropriate and linked to the applicant's SSN after submitting the applicant first

**Application or Renewal**
- Select "Application" if it is an initial application or if the individual has moved to a long-term care situation
- Select "Renewal" if it is a renewal or a change report

**Region**
- Nebraska is the only option under region and will be pre-selected

**Request Type (RT Code)**
- Select the appropriate RT code using Appendix 1 (Initial Applications) or Appendix 2 (Renewals and Changes)
- The number of months provided in the AVS response is based on your selection made by the RT code
- It is important to use the correct RT code
- If the individual is in the hospital and is expected to go to a facility, use the appropriate RT code (NA or SA) to get the full 60-month lookback

**Household Size**
- Select a household size of 1 if the individual is not married or if it is a nursing home case, waiver case, or Spousal renewal case
- Select a household size of 2 if the individual is married which includes Spousal application cases
- AVS only allows a household size of 1 or 2 (NFOCUS will display the correct resource amount for households greater than 2)
- If the applicant was added with a household size of 1, a spouse cannot be linked without updating the household size to 2

**District**
- There is only one option: 01 Nebraska LTC and Non-MAGI

**Office and Unit**
- Leave blank

**Worker**
- Select your name in the drop down

**Name Fields**
- Enter the first, middle, and last name of the individual
- Up to six aliases or alternate names may be entered using the "plus" button to the right of the last name
- Consider alternate spellings and maiden names (Example: Michael/Mike, Robert/Bob)
- When entering an alternate name, you must enter the entire first and last name in the appropriate boxes

**Social Security Number (SSN)**
- The SSN should not contain any dashes (-) or slashes (/)
- If using copy/paste from NFOCUS, dashes should be removed
- The SSN must be verified prior to sending AVS requests or we will likely not get a response from the FI

**Gender**
- Select male or female in the drop down

**Date of Birth**
- Use the calendar pop up or enter manually in the following format: MMDDYYYY with no dashes or slashes

**Application Date**
- For changes, use the date the change was reported
- Use the calendar pop up or enter manually in the following format: MMDDYYYY with no dashes or slashes

**Applicant Address Information**
- Complete the applicant address information section with the information the individual has provided as their home address

**CIN**
- Leave blank

**Case Name**
- Enter the first and last name of individual (same name as entered above)

**Case #**
- Use the NFOCUS Person Number (found at the bottom of the Person Detail screen in NFOCUS)

**Registry#**
- Leave blank

**Applicant SSN to Link**
- If the applicant has a spouse, enter the spouse's SSN
- The SSN should not contain any dashes or slashes
- The SSN must be verified prior to sending AVS requests

### Review and Submit

**Review the fields in the ad hoc request to ensure accuracy.** If the following information is entered incorrectly, a new request must be sent which has additional costs associated:

- Applicant's name or any Aliases (addition of alias/removal of alias)
- Social Security Number
- Request type
- Household size
- Institutionalization date
- Application type
- Street, House/Apartment, City, State and Zip code
- Application date

**Click "Run Request" to submit the request. To cancel, click "Cancel."**

### After Submission

1. Submit an ad hoc request for the spouse if applicable (see Adding a Spouse section)
2. Set alerts as needed in NFOCUS per current directive
3. Narrate in NFOCUS (see Appendix 3)
4. Complete any other case actions (i.e., send verification request for other resource types not reported in AVS)

### Errors Requiring Resubmission

If a request was sent with, for example, an incorrect SSN or misspelled name (applicant or spouse), the case must be closed or withdrawn, and a new request will need to be submitted with the correct SSN.

Add a comment at the bottom of the "Application Information" section to document the reason for the withdrawal (comment box limited to 500 characters). Comments cannot be deleted once saved.

### Adding a Spouse

Once the participant's ad hoc request has been sent with a household size of 2, a spouse can be added and linked by SSN.

**Important:** A spouse should not be added to the case if it is Nursing Home/Waiver RT code (including Spousal renewals); the household size for the participant should be listed as 1.

**Steps:**

1. Click on the TOOLS icon in the upper right corner of the screen
2. Select "Ad hoc Request" from the drop down
3. Select "Spouse" for Applicant Type
4. Enter spouse's first, middle, and last name (including aliases if applicable)
5. Enter spouse's SSN (no dashes or slashes)
6. Select gender and enter date of birth
7. Complete spouse address information
8. Enter the previously entered applicant's SSN in "Applicant SSN to Link"
9. Review fields for accuracy
10. Click "Run Request" to submit

### Common Ad Hoc Request Errors

**Duplicate Submissions**

- When a duplicate ad hoc is submitted, the original request will be locked and archived
- There will be a locked folder icon next to the original case in the search list
- The case details will appear in the Eligibility History of the duplicate case
- This may delay processing time if the duplicate is sent on a later date than the original request (the 10-day window begins again)
- This may incur additional costs to the state
- **If a second request has been sent, do not close the duplicate case** - this would require a third request. Allow the duplicate case to continue processing.

**Data Mismatches**

AVS will allow entry of mismatched data:

- The system will allow a request type of NA (nursing home/waiver application) to be submitted with a household size of 2. The request will be sent, but asset limits and other data in the case will have "N/A" displayed.
- The system will allow a request type of SA (Spousal application) to be submitted with a household size of 1 but will display in the queue with an "error" and will not be sent until corrected. Use the case correction function to update the household size to 2. This will not incur additional costs, as the request was never sent.

**Application Type/Request Type Mismatch**

The system allows a data mismatch when entering the application/renewal and the request type fields. These will need to be withdrawn and resubmitted if the request type initially sent will not cover the needed lookback period.

- **Example 1 (No action needed):** Initial application is entered in the request as an application with a request type of AR (ABD Renewal). This would not need to be withdrawn, as the lookback period is the same for ABD Applications as it is for ABD Renewals.
- **Example 2 (Withdrawal required):** An initial application is entered in the request as an application with a request type of NR (Nursing Home/Waiver/Spousal Renewal). This does require a withdrawal of the initial request and resubmission with corrected data, as the lookback periods for NA and NR cases are different.

---

## Direct Requests and Account Responses

3-5 days after the request has been sent, AVS will begin to display FI account information found in the account information tab.

### Submitting a Direct Request

By reviewing the FI information, a determination will need to be made if a direct request is necessary (also called additional verification).

**Steps:**

1. Select the case in AVS for review
2. Go into the Account Information screen
3. Scroll to the bottom of the page and review the banks the request was sent to
4. Review the FI accounts the individual has reported and those that are being used in the budget to determine if a direct request is necessary
5. If the bank list does not display reported or known banks, you will need to complete the direct request
6. Follow the instructions in section 3.9 of the AVS User Guide 2.0 to submit the direct request
7. Utilize the FI Network Nebraska to assist with the search, if needed

**Searching for Financial Institutions:**

- The search of FIs can be conducted by FI name, city/state or zip code
- If the agency has knowledge the applicant or spouse previously lived in a different geographical area, a request should be sent for banks in that area by using city/state or zip code
- If there are multiple branches of a particular FI, it does not matter which one you select. They all use the same reporting hub.

**After Submission:**

- Review the fields in the direct request to ensure accuracy
- Document the additional request in an NFOCUS narrative

### Account Responses

The processing time for AVS responses is 10 days. Action cannot be taken on a case in AVS until the case status is "Pending Review".

Action will need to be taken if a red indicator is received along with a return of "will not respond" as described below.

**Three Possible Returns for Each FI Searched:**

**1. No accounts found**

- This means that no accounts were returned for any FI that the request was submitted to
- Determine if a verification request (phone or paper) is required based on what the individual reported (Review DI for existing information)
- Send an email to the policy questions mailbox (DHSS.MedicaidPolicyQuestions@Nebraska.gov) with the AVS case details along with the name of the FI that did not respond. This will be forwarded to the vendor and if a response is returned, Results After Decision (RAD) is issued.

**2. Account(s) found**

- This means that at least one of the FI's has found an account and has provided a response with the balance information
- Enter the account information in NFOCUS as it appears in the portal and select "AVS Portal Viewed" as the verification source in expert
- The balance displayed in the portal is a first minute of the first of the month balance
- If the individual is over resources, review to see if a resource spend down is applicable or if the individual may be under resources (i.e., an individual may be paying a facility privately and will be under resources after their facility payment)
- If paper verification is received, the amounts may differ from what appears in the portal due to transactions that were not processed as of the first minute of the first of the month

**3. Will not respond**

- This means that at least one of the FI's will not respond to the request
- Some FI's may give a response reason code; however, it is a free form response so the reason code will vary across FI's
- If this reason code indicates data was a mismatch, review all fields submitted in the request to ensure accuracy. You may need to resubmit the request.
- This typically means the individual does have an account at the FI, but some part of the data is different than what the FI has on file for them

### Processing Account Information

**After reviewing each response for each FI:**

- Determine if a verification request (phone or paper) is required based on what the individual reported
- Information may be received on another individual's account (including a minor) if the applicant or spouse is a signor on the account. Review to see if follow up verification is necessary.
- AVS will not determine if the account is excluded for eligibility or countable; that will need to be determined per 477 NAC regulations and may require additional verifications (i.e., ABLE account, burial, etc.)
- Annuities, Trusts, and IRAs will continue to require verification of the terms

**Marking Unreported Accounts:**

Responses received for accounts that were not declared on the application must be marked as "Unreported" within the Account Information tile.

- Select the account that was unreported and check the "unreported" line that displays to the right of the balance history
- The check mark will turn red after selecting it
- This update is needed to ensure AVS data and reporting is accurate

---

## Property and Flag Indicators

### Property Responses

After an AVS request has been submitted, the portal will automatically search for owned property.

**Property Information:**

- If AVS finds currently owned property, the results will populate in the Property Information window
- Information returned includes property value, address and listed owner
- A transfer or sale of a property for less than fair market value is subject to a deprivation of resources penalty, unless an exception at 477 NAC 23-003.04(K) or 477 NAC 23-003.04(L) as applicable

**Important Worker Responsibilities:**

- Workers must not advise individuals of property values provided by AVS
- Workers must reiterate that the property must be sold for fair market value based on a recent property valuation (within the last year)
- Staff must not advise individuals on the sale of property
- If property information is not returned, determine if further verification is required

See Policy Memo 23-16 for additional information.

### Flag Indicators

AVS will flag accounts that have excessive increases or decreases in balances for both "single" accounts, as well as for the total number of accounts.

**Location of Flag Indicators:**

- AVS Summary tile
- Account Information tile (by selecting an FI and reviewing the balance history)

There may be more than one flag present for a given account.

**Reviewing Flag Indicators:**

1. **Review the month the flag is indicating** an excessive increase or decrease to determine if it affects eligibility
   - Example: The transfer happened 2 months prior to the application for ABD Medicaid. There is no Retro Medicaid requested. Since there is no penalty for transfers in ABD, this flag does not require further action.

2. **Additional information may need to be gathered if the case is a long-term care case**
   - If the individual has been in a facility and paying privately, flags will likely occur every month payment was made. Determine if the transferred amount exceeds the facility payment and whether further verification is necessary.
   - Additional verification may be required if property transfer flags or flagged deed occurred within the five-year lookback.
   - If paper verification will be required, limit the request to the months surrounding the flag (not the entire lookback period), unless there is questionable information that deems requesting more than the flagged months (such as other resource type transfers).

3. **Document in NFOCUS** for action or inaction regarding the flag indicator

---

## Eligibility Decisions and Case Actions

### Medicaid Eligibility Decisions

Medicaid eligibility determinations will continue to be made in NFOCUS.

**Important Considerations:**

1. **Action should not be taken to make an eligibility determination in NFOCUS until the AVS case has finished processing**, unless there is a documented exception found in Expedited AVS Process Reasons.

2. **AVS information is considered verified**; however, the AVS system is not programmed with Nebraska Medicaid eligibility rules and cannot determine whether an account, or real property, is excluded or countable.

**AVS may display "over resources" even when eligible. Examples:**

- AVS displays a result of over resources for a household of 2, but the case in NFOCUS is a household size of 5. When running the budget in expert, NFOCUS will correctly allow additional resource limits based on the actual household size.
- AVS displays over resources, but the total includes an ABLE account. When the encumbrance is added in NFOCUS the resources may be within program limits.

Additional verification may be required to determine if an account, or real property, is excluded or countable.

### Taking Action on a Case in AVS

After a decision has been made in NFOCUS for Medicaid eligibility, action must be taken on the case in AVS. The case status in AVS will automatically display as "Pending Review" after the 10-day processing cycle has completed.

**Steps:**

1. **Go to the Current Case Status section** of the eligibility bar, click on the arrow and select the status of "Review in Progress" from the options. This selection can only be made after the 10-day processing cycle. Click Update Status to save the change.

2. **Once the "Review in Progress" status has been selected**, there are 4 options for selection based on the Medicaid eligibility decision:

**Transfer Penalty**
- Select if the long-term care budget in NFOCUS would otherwise be eligible, but a period of ineligibility is assessed due to deprivation

**Ineligible**
- Select if the NFOCUS budget failed for over resources
- Select the reason in the drop down and save

**Eligible**
- Select if the NFOCUS budget passes or passes for resources but fails for another reason other than transfer penalty

**Close/Withdraw**
- Select if the applicant has requested to have their case withdrawn
- Select if a new request must be sent due to an error in the data
- Select when the 10-day processing window has lapsed and the case in NFOCUS is being closed for Failure to Provide

3. **After the action is taken**, the system will move the case to the archived files

### Results After Decision (RAD)

If additional information is received from an FI after the case has been archived, it will move to the results after decision queue. Results may come in for 90 days from the date of submission.

**Steps:**

1. Select the results after decision queue (review section 3.8 of the AVS User Guide 2.0)
2. New information will display at the bottom of the Account Information screen
3. Check NFOCUS to determine whether this account information has been verified
4. Add the account information to NFOCUS if it has not already been verified and re-determine eligibility
5. Mark the case Reviewed by clicking on "No" to change it to "Yes" (it will turn blue)
6. Add a narrative to NFOCUS about action or inaction

---

## Long-Term Care and Change Reports

### Long-Term Care Case Considerations

The lookback period for Spousal and Nursing Home/Waiver application cases is 60 months, and a request will be sent for that amount of time if the RT code was entered correctly.

**Lookback Period**

- The system will automatically search for 60 months for NA and SA submissions
- If the individual is requesting Retro Medicaid:
  - If there is no indication of a transfer (no unexplainable flags, no narrative or documentation indicating a transfer, individual has not declared a transfer, etc.) the AVS result is sufficient
  - If there is any questionable information, paper or phone verification may be required for months 61-63

**Spousal Impoverishment: Transfer of Ownership**

Transfer of Ownership to the community spouse, if applicable, must be verified at the first annual renewal.

**At the time of the first annual renewal:**

- Submit a request for both spouses with the AR request type upon alert
- The system may have sent a batch request for the Medicaid spouse only; it is likely a new request will need to be submitted
- If the AVS results do not verify the change in ownership, follow up with paper or phone verification

**Subsequent renewals for the institutionalized spouse:**

- Will be submitted by the system or the worker using the NR request type
- Resources owned by the Community Spouse who is not an applicant/beneficiary would require verification if there have been additional transfers from the Medicaid spouse to the community spouse, or if there is a deprivation of assets that needs to be addressed
- If the Community Spouse is also a Non-MAGI applicant/beneficiary, a separate AVS request will be submitted using the appropriate RT code

**Other Considerations:**

- Requests for an assessment of resources that are not accompanied by an application should not be sent to AVS
- If a bank statement or other document on file shows transfers in and out of an account, follow up is required to ensure deprivation of resources is considered for individuals in an institutionalized living arrangement (For example: LTC or Waiver Cases)

### Change Reports

**If a reported change is received regarding a new FI account:**

1. Determine if the begin date of the account was in a prior month. Accounts opened in the current month will not come back in a request, as AVS reports only the first of the month balance.
   - If the account was in a prior month, submit to AVS
   - If in current month, staff must verify by phone or VR

**If the change report involves the individual going into a facility or receiving waiver services:**

1. Submit an AVS request with RT code "NA" or "SA", as applicable, for the month of change. This will return results for the correct lookback period. A "Renewal" RT code will only return 3 months. (NA-if not married/SA-if married)

### Additional Information

If staff are having issues accessing their AVS account (password/account information) or issues with site functionality, please contact DHHS.MedicaidPolicyQuestions@nebraska.gov.

**Closed Bank Accounts**

- An account previously verified by AVS may not return a result at change or renewal if it has closed and can be verified as closed
- An account closed during a prior month, but within the request date, will display a balance of $0 the month following closure
- The months after closure may return no results, or they may continue to return a balance of $0
- If whether an account is closed is unclear, additional verification of the closed account should be requested. However, failure to provide this additional verification should not result in closing the case.

**Interest Income**

- Will be verified in the account response by viewing the balance history
- Enter in NFOCUS as unearned income and use "Bank Records" as the verification source
- Narrate that AVS was used to verify this income

**Sponsor's Resources**

- Paper verification is required
- AVS will not verify this information as we do not have consent

**Individual Provides Paper Verification**

- Use AVS prior to using the paper verification as provided in the Medicaid Resource Verification Plan
- You may need to use the paper verification for other items (i.e., premium amounts)

**AVS Fails to Provide Complete Data Set**

- Paper verification would be appropriate any time there are unanswered questions

**AVS Submission Past the 90-Day Window**

- If a direct request has not been submitted and the initial AVS submission date is over 90 days old, a response will not be received
- A new ad hoc request must be made and followed up on for a direct request on days 3-5

---

## Key Takeaways

✓ **AVS is required for Non-MAGI individuals age 18 or over** - Exception for SSI/1619(b) recipients not in institutional settings

✓ **Verify consent has been obtained before submitting** - Review AVS consent window in NFOCUS

✓ **Check for existing requests before submitting** - Duplicate submissions incur additional costs and delay processing

✓ **Use correct RT code for proper lookback period** - 3 months for ABD, 60 months for long-term care (NA/SA)

✓ **Review accuracy before submission** - Certain fields cannot be corrected without withdrawing and resubmitting

✓ **Submit direct requests on days 3-5** - Review searched banks to determine if additional FI verification is needed

✓ **Wait for 10-day processing cycle to complete** - Case status must show "Pending Review" before taking action

✓ **AVS does not determine countability** - Workers must apply 477 NAC eligibility rules to determine if accounts/property are excluded or countable

✓ **Flag indicators require review and documentation** - Determine if transfers affect eligibility and document action or inaction

✓ **Results After Decision may arrive up to 90 days** - Monitor RAD queue and update NFOCUS as needed

---

## Forms and References

**AVS User Guide:**

- AVS User Guide 2.0 - Detailed login and navigation instructions
- Section 3.8 - Results After Decision queue
- Section 3.9 - Submitting direct requests

**NFOCUS Resources:**

- Using the AVS Consent Window in NFOCUS
- Medicaid Resource Verification Plan
- Expedited AVS Process Reasons

**Policy References:**

- 477 NAC 23-003.04(K) - Deprivation of resources exceptions
- 477 NAC 23-003.04(L) - Additional deprivation exceptions
- Policy Memo 23-16 - Property valuation guidance

**Appendices:**

- Appendix 1 - Initial Applications RT Codes
- Appendix 2 - Renewals and Changes RT Codes
- Appendix 3 - NFOCUS Narrative Requirements

**External Resources:**

- FI Network Nebraska - Financial institution search tool

**Questions and Support:**

Contact: DHHS.MedicaidPolicyQuestions@nebraska.gov

---

*[← Back to Index](README.md)*
