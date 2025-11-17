# MLTC Processing Guide - Part 3

**Pages 11-15: Tax Household, Living Arrangement, Income Verification**

---

## Continued: Family Relationships / Household Composition

**Pregnancy (continued):**

- **Add a new pregnancy** for the new Expected Date of Delivery (EDD)
- **NEVER change the EDD** on a previous pregnancy for a new pregnancy
- For applications that do not contain an estimated due date, use a default date of **6 months from the date of the application**

**If the pregnant individual is requesting Retroactive Medicaid:**
- Attempt to reach individual by phone to obtain the due date to determine if they were pregnant during the retro months
- If unable to reach the individual, send a VR with the following language:

```
VR Wording - In order to process your request for retroactive Medicaid for (Enter Months). 
Please contact us regarding your estimated due date. Please note that failure to provide 
this information could lead to denial of medical coverage for these months only. Thank you.
```

**After the application is submitted:**
- If the individual indicates pregnancy in the month after the application date, and case has not yet been processed, they will need to be determined under MAGI Expansion

---

### Step 7: Tax Household & Tax Permission {#magi-tax-household}

**Tax Household:**

Set up tax HH as listed on the application for all household members that are identified as part of the Medicaid household. For assistance use the Medicaid Household Construction Chart.

- Tax filing status can be accepted as declared on the application
- If tax HH is missing or unclear for any HH members, attempt a call to the HH to clarify
- If unable to reach the HH send a VR requesting that the Tax Information Form (TIF) be completed for all members of the household
- If there is already an existing tax HH on the case that matches the information attested to by the HH on the application, a new tax HH does not need to be set up. Update the tax permissions from the application on the existing tax HH

**NOTE:** Tax permission and tax household for individual's age 19 or older needs to be provided by the individual, financially responsible family member, tax filer in the same tax household or authorized representative, POA or guardian.

**Tax Permissions:**

Enter or update the signature date and number of future year(s) permission to the tax HH by clicking on "Tax Permission" button located in the "Detail Tax Household" screen. See Understanding Tax Permissions for further information.

**Paper applications:**
- The signature date is the date the individual signs the application
- If the individual did not date their signature, the signature date is the date the application was received
- Review and update the number of future years the individual agreed to
- If the future year(s) permission is left blank, enter '0' in this field

**Electronic Applications:**
- The signature date is the date the application was SUBMITTED
- Review and update the number of future years the individual agreed to
- If the future year(s) permission is left blank, enter '0' in this field

**Tax Information Form (TIF):**
- The signature date is the date the individual signed the TIF
- Review and update the number of future years the individual agreed to
- Unless otherwise noted by the individual, **5 years of permission** is granted from a signed TIF

**Pinging the IRS Tax/Hub (only done on MAGI initial applications):**

After entering the tax HH, tax permission date and number of future year(s), click the "Submit to INTERFACE" button from the Detail Tax Household screen.

- VCI/TALX should also be sent for all applicable participants at the same time, to speed up processing
- Pinging the Tax/Hub is not required for applicants who declare no tax filing status or applicants who declare $0 income. Staff should move on to other electronic verification sources (VCI/TALX, SEW)

**RESOURCES & TOOLS:**
- Tax Household & MAGI Budgets WINK-ed and the Tax Household & MAGI Budgets Q&A
- Understanding Tax Permissions
- Medicaid Household Construction Chart
- Tax Information Form
  - **If the form is signed:**
    - The Signature Date must be updated
    - The Tax Permission field in NFOCUS must be updated to 5 years, unless otherwise noted
  - **If the form is not signed:**
    - The Signature Date would not be updated
    - Tax Permission field in NFOCUS must be set to zero ('0')
    - We will not utilize the Tax/Hub to complete the next renewal

---

### Step 8: Living Arrangement {#magi-living-arrangement}

• All living arrangements are eligible to be processed as MAGI and Non-MAGI.

**If Living Arrangement is in a facility or hospital – Is the individual age 19 or older?**
- **Yes:** determine MAGI Expansion eligibility
- **No:** Consider relative responsibility with others in household. Referral to AD Waiver or DD may be appropriate

**MAGI Expansion: All Living Arrangements**
- Homeless, verified by attestation. Confirm mailing address
- Disabled by Social Security, not eligible for Medicare
- If the individual indicates disability on application and is not currently determined disabled by Social Security, refer to apply for Social Security

• All other living arrangements can be processed as MAGI without AVS information. See the [Living Arrangement Guide](Living%20Arrangement%20Guide.md) for further information.

**Incarcerated Individuals:**

Applications must be accepted and Medicaid eligibility determined for individuals who are residing in a 24 hour facility that are being discharged either the month the application was submitted or the month after the application was submitted. Examples of these facilities include Youth Rehabilitation and Treatment Centers, Regional Centers, Department of Corrections facilities, County Jails, and County Youth facilities.

**IMPORTANT NOTE:** The SUPPORT Act of October 2018 added a provision that applies to applications received for juveniles (defined as individuals under age 21 and individuals who may be eligible under Former Foster Care). The state is required to accept and process applications for individuals up to age 26 at any point during their period of incarceration.

**Universal Staff Duties:**
- For any application received where an individual indicates they are incarcerated, staff must assign the case to the **INC ASSIST position number (66118075)**
- See [Medicaid Position Numbers for Case Assignments](Medicaid%20Position%20Numbers%20for%20Case%20Assignments.md) for further information

**Assigned Staff Duties:**
- Verification of the release date from the facility is required prior to processing the application
- Verifications can be provided from staff at the facility
- The assigned worker will also need to know where the individual will be residing upon discharge, household composition, tax household information, and verification of income of any individual who would be financially responsible for the client based on the tax filing status

---

### Step 9: Income Verification Plan {#magi-income-verification}

• Create a monthly budget. When determining eligibility for any participant, ALL income must be verified using Medicaid's Income Verification Hierarchy. See the Medicaid Income Handling Guide for further information.

**Income Verification Hierarchy:**

**1. TAX/HUB INTERFACE:** This should be used as the first level of income verification on ALL MAGI Initial Applications. The Tax/Hub compares the attested income against the household's most recent tax return.

a. Applications submitted for an individual on an already active case (add a person) may not use the Tax/Hub, except in certain circumstances - if the individual is being added during the renewal period, was part of the Tax HH and was submitted to the Tax/Hub as part of the RRV batch process. See the MAGI Renewal Process Guide for further information.

b. If the Tax/Hub does not verify income, move to the next step (VCI/TALX).

**2. VCI / TALX:** This is the second level of verification on the Income Verification Hierarchy.

a. If used to verify income the Verification source should be entered as 'TALX file viewed' in the Expert system.

b. If there is no income information found or income is unable to verified through this interface, move to the next step (SEW).

**3. SEW (STATE EMPLOYER WAGE):** Income reported quarterly by the Department of Labor.

a. Compare the attested income to the SEW reported wages (divide SEW by 3 to obtain a monthly total). See the SEW Compatibility Calculator for further information. If SEW is used to verify income, the "Verified by SEW" box must be checked in the Expert system when running the budget.

b. If SEW is unable to verify income, move to the next step (Paper Verification).

**4. PAPER VERIFICATION (DOCUMENT IMAGING, EMPLOYER CONTACT & NARRATIVES):** Review Document Imaging for paystubs or Employer Verification, review recent narratives for employment information / verification, both EA and MEDICAID narratives. If unsuccessful, attempt to verify the employment by placing a call to the employer.

**5. VERIFICATION REQUEST (VR):** As a last resort, send a VR for all unverified income

---

### Step 10: Income and Deductions Verified by IRS Tax/Hub {#magi-hub-income}

• IRS Tax/Hub is a verification tool that is allowed for MAGI Initial Applications. This should be used as the first source of income verification on ALL MAGI Initial Applications. See the Medicaid Income Handling Guide for further information.

**Earned Income:**
- Checkout the case to the expert system and enter the attested earned income leaving all entries "unverified"
- If income does not pass the Tax/Hub, move on and attempt to verify income via VCI/TALX

**Self-Employment:**
- Enter the attested self-employment income under the "Other Income" module select "MED Self-Emp Gain" or "MED Self-Emp Loss" leaving "unverified"
- If income does not pass the Tax/Hub, attempt call to household to complete self-employment ledgers
- If unsuccessful, send a VR for verification (e.g., ledgers, tax return, SE records)

**Unearned Income:**
- Enter the attested unearned income under the "Other Income" module in financial section as "MED Unearned" leaving "unverified"
- If unearned income does not pass the Tax/Hub, further verification is needed
- View appropriate interfaces (BDE, IUC, CSE, etc.), document imaging, call to SSA, VA and narratives
- If unable to verify the unearned income send a VR for verification
- Examples of unearned income include alimony, retirement income, pensions, dividends, interest, unemployment income, etc. See the Income Handling Part II WINK-ed for additional information

**Deductions:**
- When processing initial applications, attested deductions must also be entered
- If attested income does not pass the Tax/Hub, change the verification source to "unverified" until the deduction is verified
- **If deductions are left unverified the deduction will not pull into budgets**
- For further information, including how to enter deductions, see the Deductions section of this guide

**Old instances of income in expert or old open VRs:**
- See Reasonable Explanation in the Income Handling Part II
- If prior income or VRs exist on the case determine if they still need to be addressed or can be closed
- Reach out to your Lead/Supervisor for help, if needed

**Minors and tax dependents with income:**
- All attested income should be entered into Expert, even for minors and adult tax dependents
- NFOCUS will determine whether filing requirements are met and either include or exclude this income in budgets
- The amount of income Medicaid allows minors and tax dependents to earn before including in budgets can change from year to year
- Find current amount in the Appendix: 477-000-010

**Retroactive Medicaid and the IRS Tax/Hub:**
- When income passes the Tax/Hub use the same attested income / deductions to process retroactive months
- If income does not pass the Tax/Hub for retro months proceed to the next verification source (VCI)
- See the [Retroactive Medicaid Process](Retroactive%20Medicaid%20Process.md) for further information

---

*Continue to Part 4 for Non-Hub Verified Income and remaining MAGI processing steps.*

---

*[← Back to Index](README.md) | [← Back to Part 1](MLTC%20Processing%20Guide%20-%20Part%201.md) | [← Back to Part 2](MLTC%20Processing%20Guide%20-%20Part%202.md)*
