# MLTC Processing Guide - Part 6

**Pages 26-30: Non-MAGI Application Processing, Verification Plan, Disability**

---

## Continued: Check for Valid Application

**SSA LIS Application (continued):**

**Subsidy Denial Reason (continued):**
- **Income** - The applicant's countable income exceeds LIS guidelines

**Additional information included:**
- Applicant Name, Gender, DOB & SSN
- **SSA/RRB Claim Number** - Claim number the applicant's Medicare/Social Security or Railroad Retirement Board benefit records are filed under
  - SSA does not provide the claim number for Veteran's benefits
  - **Do not enter the claim number shown in the Expert System Medicare task if the applicant is receiving Railroad Retirement benefits.** The number sent from SSA for Railroad beneficiaries is a converted number and is not accurate. You will need to obtain the Medicare claim number from the Railroad beneficiary

---

### Step 3: Compare Application to System {#non-magi-compare-application}

• Review NFOCUS entries with information provided on current application (see also the Non-MAGI Initial Processing Checklist). If information does not match, make corrections to the information in NFOCUS:

**Review the following:**
- Screen for Duplicate Application (see below)
- Screen to determine if the application is considered a renewal form (e.g., case was previously closed less than 90 days ago during the review process for not providing a renewal form). See [Changes Reported During 90 Day Redetermination Period](Changes%20Reported%20During%2090%20Day%20Redetermination%20Period.md) for further information
- Voter registration requested
- Comments section
- Address (physical and mailing), telephone and email information
- Notification preferences: mail, email, text (SMS)
- Correct applicants pended?
- Screen to ensure application is a Non-MAGI application and review for age and/or disability
- Add Authorized Representative, if listed
- Review for Retroactive Medicaid request. If requested follow the steps in the [Retroactive Medicaid Process](Retroactive%20Medicaid%20Process.md) document
- Review Sanctions
- Review Work Tasks and Alerts

**Duplicate Applications:**

An application that is:
1. Received on an active case participant with no review due; or,
2. Received within 90 days of the closure or denial date is considered a duplicate application

Duplicate applications received must be reviewed for changes and action taken on these reported changes. See [Duplicate Applications](Duplicate%20Applications.md) and "Is a New Medicaid Application Needed?" for further information.

**Once an application has been identified as a duplicate, the following steps must be taken:**

1. If the case was pended, deny the pending case for 'Other' and send a notice
2. If the case was not pended, a Generic Notice must be created
3. Include comments on the Notice:
   - Manual reference 477 NAC 3-005.06
   - Explanation that the application is being denied as it was identified as duplicate
   - Inform the applicant of verification(s) needed to complete determination and the deadline for the 90 days, calculated from the date of the original application
   - **TOOL:** Calculator for Days 30, 45, 60, and 90

4. Check Program Case Mode: it may be necessary to update it to Change Management
5. Change the application tie reason from initial to duplicate:
   - From the detail master case window, select the program applications
   - Highlight the duplicate application window and select update
   - Change the application reason from initial to duplicate

**Active Individuals:**

If an individual is active in a Medicaid program case and would be transitioning to a different Medicaid category a new application is not required. Application forms can be used as a tool for staff to obtain information from an individual however, it cannot be a required form that the agency obtains from an active individual unless it is at the applicable renewal time.

**Example:** An individual is in MAGI Expansion and begins receiving Medicare. The individual needs to be reviewed for eligibility in a Non-MAGI category. A new application cannot be required.

---

### Step 4: Social Security Number (SSN) {#non-magi-ssn}

• Check applicant's blue SSA interface to ensure they have HUB SSN Verified.

**If not verified:**
- First check demographic information (name, DOB and SSN) has been entered correctly in NFOCUS
- If further clarification is needed after comparing with the application, call the individual
- If call to individual does not resolve the issue, send a VR
- **Do not request copies of Social Security cards for individuals**

**Medicaid recipients must have a valid Social Security Number except for the following:**
- Infants less than a year old who were born to a Medicaid eligible mother
- 599 CHIP & EMSA participants
- Applicants with a "Well Established Religious Objection"
- Individuals who are not eligible to receive a SSN
- Individuals who do not have a SSN and may only be issues a SSN for a valid non-work reason
- An individual that is not requesting Medicaid is not required to provide their SSN

**For individuals who DO NOT CURRENTLY have a Social Security Number:**
- If the SSN is the only item needed to process – continue processing the application including submitting to AVS for resource verification, if possible
- If approved, create a Verification Request informing the individual they have 90 days from date of application to provide a SSN or verification that they have applied for a Social Security Number with the SSA
- The VR due date must be set for 90 days from the date the VR is being sent

---

### Step 5: Citizenship & Immigration {#non-magi-citizenship-immigration}

• Check that all applicants either have verified U.S. citizenship or verified eligible immigration status. If citizenship or immigration status has not been verified, submit all applicants for verification:

**Verification sources:**
- The Citizenship and Immigration screen (Actions menu > US Citizenship and Immigration) and the blue SSA interface can be reviewed for citizenship verification
- The VLP interface can be reviewed for eligible immigration status

**Reasonable Opportunity (RO) Period:**

If the applicant attests to being a US citizen or having a Medicaid eligible immigration status that cannot be verified because there are no available electronic data sources, VLP is in Step 2 or 3, or paper verifications are being requested; process the application as long as all other points of eligibility have been verified.

**RO Period procedures:**
- If additional information is needed from the applicant to verify citizenship or immigration status (e.g., copies of documents), send a VR for the information to be returned
- The VR due date must mirror the time allowed for the reasonable opportunity period
- Staff must set a manual 95 day alert for the individual's ongoing eligibility to be reviewed
  - RO policy allows for the 90 day clock to start on the date the individual receives the notice (generally 5 days after the date of notice)

**Notice Wording:**

On the approval notice, notify the applicant of the reasonable opportunity period using the language below. If an approval notice is not generated, send a Generic Notice with comments about the 90 day reasonable opportunity period. A notice is required to ensure the individual receives rights and responsibilities.

```
Citizenship or non-citizen status has not been verified for (NAME). A 90-day reasonable 
opportunity period (477 NAC 5-006) has been applied for the Department to conclude the 
electronic verification process and/or the applicant to provide the satisfactory citizenship 
or immigration documents. Retroactive Medicaid cannot be authorized during the reasonable 
opportunity period (42 CFR 435.956(a)(5)(iii)). If citizenship or non-citizen status has 
not been verified by (DATE; use the calculator on MERL), Medicaid benefits will be terminated.
```

See [Reasonable Opportunity Period](Reasonable%20Opportunity%20Period.md) and [Reasonable Opportunity Examples](Reasonable%20Opportunity%20Examples.md) for more information.

**Refugees:**

Individuals identified as refugees who have been in the country for 12 months or less should be assigned to the **Refugee Medicaid Referral position number (87055714)**. See the [Refugee Process](Refugee%20Process.md) for more information.

- If processing a refugee individual who has been in the country for more than 12 months, review the Citizenship/Immigration task in the Expert system
- If Refugee Resettlement Program (RRP) is listed, this is not a valid Medicaid immigration status and must be updated to the current immigration status or REF207 before processing any budgets

**EMSA:**

If no immigration status is indicated, consider eligibility for Emergency Medical Services Assistance (EMSA). See the [EMSA Process Guide](EMSA%20Process%20Guide.md) for further information.

**SAVE Documentation:**

For any situation where SAVE was utilized to verify immigration status, the SAVE documents must be uploaded to Document Imaging (DI).

**Process Guides and Tools:**
- [MLTC Citizenship and Immigration Guide](MLTC%20Citizenship%20and%20Immigration%20Guide.md)
- [Qualified Non-Citizen Status Eligibility Guide](Qualified%20Non-Citizen%20Status%20Eligibility%20Guide.md)
- How to submit G845: [G-845 Immigration Documentation Process](G-845%20Immigration%20Documentation%20Process.md)

---

### Step 6: Follow the Nebraska Verification Plan {#non-magi-verification-plan}

• Compare application information with Hub verification results. Attempt to contact the individual by phone for follow-up if areas on the application are left blank or further clarification is needed. See [Unanswered Questions](Unanswered%20Questions.md)

**Review application for:**

**Residency**

**Tribal membership**

**Family relationship(s)**

**Income (Unless individual has an SSI determination of eligibility):**
- Electronic data sources (e.g., VCI/TALX, SEW) and callouts, shall be utilized to verify income if available
- If the electronic data sources are not available, reasonably compatible or a reasonable explanation does not apply and call outs are not successful, paper documentation will be required (e.g., paystubs, employer form, etc.)
- See the Medicaid Income Handling Guide for further information on verification of income
- **For Non-MAGI, the IRS Tax/Hub is not utilized**

**Resources (Unless individual has an SSI determination of eligibility):**

**Follow the electronic AVS verification process:**

1. Check for AVS consent (applicant and/or non-applicant spouse) and update the AVS Consent window. See [Using the AVS Consent Window in NFOCUS](Using%20the%20AVS%20Consent%20Window%20in%20NFOCUS.md) for further information
   - If there is no consent, obtain consent as required and update the AVS Consent window
   - The MLTC Consent Line can be used to obtain AVS consent over phone

2. Refer to [AVS Procedural Guide](AVS%20Procedural%20Guide.md) for instructions on AVS and steps for AVS submission
   - Staff must wait the full AVS timeframe prior to requiring paper documentation from the HH
   - See the [Expedited AVS Process Reasons](Expedited%20AVS%20Process%20Reasons.md) for exceptions to waiting the full AVS timeframe
   - Staff must submit a direct request, if necessary (Section 5 of AVS Guide)
   - Once information is received, enter the AVS results in the Expert system
   - After a decision has been made in NFOCUS regarding Medicaid eligibility, action must be taken to update the results in AVS (Section 10 of AVS Guide)

3. Send Verification Request (VR) to applicant for resource types that will not be verified by AVS and any other required verifications (e.g., earned income). See the [Resource Verification](Resource%20Verification.md) Plan and the Resource Verification WINK-ed for further information

**NOTE:** If it appears that a member of the case may qualify for potential income, send a VR requiring the individual to apply for the potential benefit within 60 days of the date of the VR. Update the VR due date to 60 days from the date the VR is created.

---

### Step 7: Disability Determination {#non-magi-disability}

• Review for eligibility in the appropriate Medicaid category. See [ABD or HHA Process Flow](ABD%20or%20HHA%20Process%20Flow.md) for further information.

**If applicant is ineligible in a MAGI category and:**

**Has a current disability:**
- Move forward with a Non-MAGI determination

**Has filed an application with SSA and are pending a disability with no determination made:**
- See the [Medicaid Position Numbers for Case Assignments](Medicaid%20Position%20Numbers%20for%20Case%20Assignments.md) document

**Has applied for SSI and they have been denied:**
- Review the [SRT Process Guide](SRT%20Process%20Guide.md) for possible referral
- If an SRT referral is not appropriate, deny the case for failure to meet an eligibility category even if they have appealed with Social Security
- If they subsequently win their appeal then we will approve Medicaid retroactive to that date
- See the SRT Guide for additional information on notice requirements and a possible referral to SDP

**If applicant has won a disability appeal decision:**
- Check for Medicaid applications that have been filed back to the original disability date
- Change the application received date to the oldest possible date

---

*Continue to Part 7 for Retroactive Medicaid, Living Arrangement, TPL and remaining Non-MAGI processing steps.*

---

*[← Back to Index](README.md) | [← Back to Part 1](MLTC%20Processing%20Guide%20-%20Part%201.md)*
