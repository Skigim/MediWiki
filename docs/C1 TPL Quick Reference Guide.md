# C1 Third Party Liability (TPL) Quick Reference Guide

**C1 System TPL Management**  
*For Eligibility Workers - Adding, updating, and managing third-party insurance information*

---

## Overview

The C1 system is the database within the Medicaid Management Information System (MMIS) that we use to add, update, and change insurance information. It is important that eligibility workers enter insurance information into the C1 system for any Medicaid active individuals and that the coverage dates entered in C1 match the coverage requested dates (e.g., Retro Medicaid dates). Eligibility workers do not enter premium amounts in C1.

**Coordination of Benefits (COB)** is the process of identifying third-party resources, ensuring that claims are properly paid, and ensuring that Medicaid only pays when every other liable party has paid first. **Medicaid program, by law, is intended to be the payor of last resort.** All other available third-party resources must meet their legal obligation to pay claims before the Medicaid program pays for the care of an individual eligible for Medicaid.

After entering information into the C1 system, it is sent to the TPL/COB unit(s) who verify and enter or correct information as necessary.

---

## Table of Contents

- [Policies NOT Added to C1](#policies-not-added-to-c1)
- [Accessing C1 TPL Subsystem](#accessing-c1-tpl-subsystem)
- [Navigating C1](#navigating-c1)
- [Adding a Policy](#adding-a-policy-to-c1)
- [Closing a Policy](#closing-a-policy-in-c1)
- [Reopening a Policy](#reopening-a-policy-in-c1)
- [Finding Managed Care Policies](#finding-managed-care-policies)
- [Lock-In Pharmacy and Medical](#lock-in-pharmacy-and-medical)
- [Important Reminders](#important-reminders--helpful-hints)
- [C1 Code Reference](#c1-code-reference)

---

## Key Definitions

**Third Party Liability (TPL)**: Any entity that is or may be liable to pay all or part of the medical cost of injury, disease, or disability of an applicant for or recipient of medical assistance.

**C1 System**: The database within the Medicaid Management Information System (MMIS) used to add, update, and change insurance information for Medicaid-eligible individuals.

**Coordination of Benefits (COB)**: The process of identifying third-party resources and ensuring that claims are properly paid with Medicaid as the payor of last resort.

**Coverage Verification Code**: Code entered in C1 to indicate verification status of insurance policy (V for most policies, VX for CHAMPUS/TRICARE/CHAMPVA).

**Premium Payor Code**: Code indicating who pays the insurance premium (01-49 for household members, 70 for employer, 90 for HIPP Program, etc.).

**Carrier Code**: Numeric identifier for insurance company in C1 system; must not start with alpha character (e.g., 88888 360 is correct, B0004 045 is incorrect).

**Lock-In**: Status assigned by Utilization Review Committee restricting individual to specific provider(s) due to misuse or overutilization of medical assistance services.

**Medicare Advantage Plan (Part C)**: Medicare managed care plan that provides all Medicare Part A and Part B benefits; must be added to C1 with coverage type code 375.

**HIPP (Health Insurance Premium Payment)**: State-paid premium program; policies with HIPP as premium payor cannot be closed by workers - must contact HIPP unit.

---

## Policies NOT Added to C1

### Do NOT Add the Following Policies

✗ **Medicare Part D Policies** (including standalone Part D Policies)

✗ **Medicare Parts A & B Coverage**

✗ **Accidental Death & Dismemberment Policies (AD&D)**

✗ **First Diagnosis Policies with no additional benefits**

✗ **Medicaid Managed Care Coverage**

### Exception

✓ **Medicare Part C plans** that also include medical and/or hospital benefits **MUST be added** to C1

---

## Accessing C1 TPL Subsystem

### Step 1: Open C1 Mainframe

1. Double-click **State of Nebraska Mainframe** application
2. Type **C1** in lower left-hand corner
3. Press **Enter**

### Step 2: Log In

1. Enter login information
2. Press **Enter**

### Step 3: Navigate to TPL Subsystem

1. Select number of **"MMIS and DHHS Applications"** option
2. Press **Enter**
3. Select number of **"Transactions MC10 – RSS1"** option
4. Press **Enter**
5. Select number of **"RFS1 – Third Party Liability"** option
6. Press **Enter**

**NOTE:** Workers have different authorities in program, so number of each menu may be different on each screen.

---

## Navigating C1

### Navigation Basics

**Use Tab Key, NOT Mouse:**
- Navigate to different menus and areas of C1 system using **Tab key**, not mouse
- Some options use keys past F12 (F15-16 not on keyboard) - Tab over to option and hit Enter
- If cursor not in correct location, entry may be invalid and require re-entry

**Menu Navigation:**
- Use number option and Enter key to navigate between menus

**Screen Navigation:**
- Different 'codes' can be used in each field along with Enter key
- Code options described at bottom of each page
- Press **F1 key** for information and options on what to enter in field where cursor is located

### Search Functions

#### "S" – Search Function (Master Case Overview)

**Location:** "Health Insurance/Medical Liability" screen

**Steps:**
1. Type letter **S**
2. Tab to **Master Case** field
3. Enter MC #
4. Hit **Enter**

**Result:**
- Overview of everyone ever added into Master Case and any known insurances
- **Names appear white** if currently active in Medicaid (NOTE: May take time for C1 to correctly reflect status if individual recently approved or reopened)
- If multiple names for same individual found – check Medicaid Number and compare to NFOCUS for which is more recent

**Best Use:** Quick summary of multiple individuals' known insurance

#### "I" – Inquiry Function (Individual Detail)

**Location:** "Health Insurance/Medical Liability" screen

**Steps:**
1. Type letter **I**
2. Tab to **Medicaid No** field
3. Enter first 9 digits (C1 should automatically advance to 'ID' field below)
4. Continue entering remaining two digits from MMIS
5. Hit **Enter**

**Result:**
- Detail summary page of most recent insurance policy for this individual
- If individual has **no known TPL**: "No policies found for case and client" will appear in blue at bottom of screen
  - If no TPL policies listed on C1 and Provider showing TPL, refer them to their Managed Care provider
- If individual has multiple policies, enter **F11** to advance to next policy
- **Must review both Coverage End Date AND Premium End Date** - possible if both numbers not updated correctly that insurance may still appear active when reporting out of C1

**Best Use:** Detailed research into individual's TPL for error resolution

---

## Adding a Policy to C1

### Step 1: Access Health Insurance/Medical Liability

Choose number of **"Health Insurance/Medical Liability"** option

### Step 2: Search for Individual

**On Health Insurance/Medical Liability screen:**

1. In **Action Code** field: Input **"S"** (to search)
2. Tab over to **Master Case** field
3. Input Master Case number for individual
4. Press **Enter**

### Step 3: Select Individual

1. Tab over to applicable individual name (name of individual covered by policy)
2. Input **"X"** in space to left of individual name
3. Press **Enter** (screen returns to Case Activity Screen)

### Step 4: Add Policy Action

1. Input **"A"** in Action Code field to add policy
2. Tab to area directly below **"LAST NAME"**
3. Enter health insurance company name
4. Press **Enter** (insurance company name should turn white)
5. At bottom of screen: "PRESS PF4 FOR CARRIER NAME SEARCH"
6. Press **F4**

### Step 5: Find Insurance Company

**Tab over until cursor is next to insurance company being added**

**Tips to Match Insurance Company:**
- Company Name
- City
- Telephone Number

**IMPORTANT:** Do NOT add carrier codes that start with alpha character
- ✗ **Incorrect:** B0004 045
- ✓ **Correct:** 88888 360

### Step 6: Select Insurance Company

1. When cursor next to correct insurance company: Input **"S"** (to select)
2. Press **Enter**
3. Case Activity Screen displays
4. Press **Enter** again

### Step 7: Enter Policy Information

**On Health Insurance/Medical Liability screen, enter following information (Press Tab to move between fields):**

**a. Name of Policy Holder** (First, Middle Initial, Last)

**b. Social Security Number**
- **NOTE:** Do NOT press F11 to system generate SSN - Always use individual's actual SSN
- If unable to find individual's SSN, email: **DHHS.MedicaidCOBHelpDesk@nebraska.gov**

**c. Information Source Code**
- **Caseworker is 01**

**d. Policy Number**

**e. Group Name and Group Number** (if available)

**f. Coverage Verification Code** (Only these codes used):
- **V** – Policies except Champus/Tricare
- **VX** – Only CHAMPUS, CHAMPVA, TRICARE policies

**g. Premium Payor** (see [C1 Code Reference](#c1-code-reference) or press F11)

**h. Relationship to Policyholder** (see [C1 Code Reference](#c1-code-reference) or press F11)

**i. Coverage Type** (see [C1 Code Reference](#c1-code-reference) or press F11)
- Ensure accurate coverage type is used
- **Example:** PPO or HMO plan can be added with different coverage codes to indicate with dental, without dental, with Rx, and without Rx
- Using accurate coverage type ensures Medicaid is always payor of last resort
- If questions regarding coverage type, email: **DHHS.MedicaidCOBHelpDesk@nebraska.gov**

**j. Coverage From and Coverage To**
- Leave **Coverage To blank** for active policy
- **NOTE:** Ensure policy coverage dates match up with any requests for Medicaid (e.g., dates cover any requested retroactive months)

### Step 8: Save and Verify

1. Press **Enter**
2. At very bottom of screen should say **"Record Added"**
3. Click **S** (for Search) and **Enter** to verify
4. On screen that appears, new policy should be visible next to individual's name with no end date

---

## Closing a Policy in C1

### Important Notes

**When closing TPL policy:**
- Enter **actual date policy terminated**
- Providers still filing older claims
- Medicaid still trying to get reimbursed on older dates
- If unsure of actual termination date, closest reasonable date may be entered
- Questionnaire letter may be sent to carrier for actual coverage dates

### Closing Procedure

**Step 1: Access Health Insurance/Medical Liability**

After logging into C1, choose # of **"Health Insurance/Medical Liability"** option

**Step 2: Search for Individual**

1. In **Action Code** field: Input **"S"** (to search)
2. Tab over to **Master Case** field
3. Input Master Case number for individual
4. Press **Enter**

**Step 3: Select Policy**

1. Tab over to applicable individual name (name of individual covered by policy being closed)
2. Input **"X"** in space to left of **policy code**
3. Press **Enter** (screen returns to Case Activity Screen)

**Step 4: Change Policy**

1. On Case Activity screen, in **Action Code** field: Input **"C"** (to change)
2. Press **Enter**

**Step 5: Enter End Dates**

1. Tab down to **"Coverage To"**
2. Input date policy ended
   - **NOTE:** Future date cannot be used
   - Worker must set reminder for day after policy ends/terminates to update codes in C1
   - Do NOT attempt to enter or alter different end date for policy in C1
3. Tab down to **"Premium To"**
4. Input date policy ended again

**Step 6: Confirm Information Source**

1. System will ask for **Info Source Code**
2. Input **"01"**
3. Press **Enter**
4. Closing date will be highlighted in red
5. At very bottom of screen should say **"Information Changed"**

### Correcting Closing Errors

**If closed policy with wrong date or closed wrong individual's TPL:**
1. Go back to policy information
2. Change end date to **12/31/9999** (removes end date)
3. If issues persist, email: **DHHS.MedicaidCOBHelpDesk@nebraska.gov**

---

## Reopening a Policy in C1

If error occurred while closing policy, or policy needs to be reopened, and **all policy information is same** (policy number, company, payor, etc.), follow these steps:

**Step 1: Access Health Insurance/Medical Liability**

After logging into C1, choose # of **"Health Insurance/Medical Liability"** option

**Step 2: Search for Individual**

1. In **Action Code** field: Input **"S"** (to search)
2. Tab over to **Master Case** field
3. Input Master Case number for individual
4. Press **Enter**

**Step 3: Select Policy**

1. Tab over to applicable individual name (name of individual covered by policy being reopened)
2. Input **"X"** in space to left of policy code
3. Press **Enter** (screen returns to Case Activity Screen)

**Step 4: Change Policy**

1. On Case Activity screen, in **Action Code** field: Input **"C"** (to change)
2. Press **Enter**

**Step 5: Remove End Date**

1. Tab down to **"Coverage To"**
2. Change end date to **12-31-9999** (removes end date for policy)

---

## Finding Managed Care Policies

### NFOCUS Method

**Workers can view individual's Managed Care provider and plan in NFOCUS:**

1. Navigate to **Person Detail** screen of any active participants
2. Click on **"MMIS/MCE History"** button
3. Current MCO information available in **Managed Care Entity Details** box

**NOTE:** NFOCUS may not be updated yet with managed care plan if individual was recently approved

### C1 Method

**C1 program can also be used to research if MCO has been assigned to individual:**

**Step 1: Access C1**

1. Double-click on **State of Nebraska C-1 icon**
2. Type **C1** in lower right corner and use **Enter**
3. Type in User ID and Password and use **Enter**

**Step 2: Navigate to Client Eligibility**

1. Select # of **"MMIS and DHHS Applications"** option and use **Enter**
2. Select # of **"Transactions MC10 – RSS1"** option and use **Enter**
3. Select # for **"Client Eligibility/Auth"** and use **Enter**
4. Select # for **"Inquire by Recipient Number"** option and press **Enter**

**Step 3: View Eligibility**

1. Under **Recipient Number**, enter individual's MMIS# (view on NFOCUS Detail Program Case window)
2. Press **Enter**
3. If there is **no End Date** at bottom of screen stating "Medicaid Eligibility Date Sets," individual is active in Medicaid

**Step 4: View Managed Care Details**

1. Press **F4** to view Managed Care details
2. Shows which managed care plan individual has and effective dates

**Managed Care Options:**
- **Nebraska Total Care (NTC)**
- **United Healthcare (UHC)**
- **Heritage Health (AHS)**
- **Magellan** - Mental Health Contractor
- **Radiology** - Straight Medicaid/No Managed Care

### MCO History

**Begin Date and End Date columns** show dates individual was eligible with each provider

**Use Cases:**
- If individual had billing issues about previous care and contacted current provider without success - review if making correct referral and if provider using MCO policy not effective for given time frame
- Research who individual's previous MCO was and when changes to MCO were effective
- Helpful around open enrollment periods when individuals can opt for new MCO

---

## Lock-In Pharmacy and Medical

### Overview

**471 NAC 2-004 Client Lock-In:**

The Department investigates individuals who through utilization review, provider referral, or local office referral are identified as misutilizing medical assistance services. If investigation establishes that individual has abused or overutilized services provided through Nebraska Medical Assistance Program, individual may be locked in. Department's Utilization Review Committee makes decision to lock in individual.

### Lock-In Rules

**Provider Selection:**
- Individual allowed to choose lock-in provider
- Can change once every **three months** (unless Utilization Review Committee determines individual has good cause)

**Changing Lock-In Provider:**
- Individual can fill out **MC-66 form** to change lock-in provider
- Get assistance completing form by calling Pharmacy Unit at **1-877-255-3092, Option 2**
- Forms can be mailed to:
  ```
  DHHS – Attn: Pharmacy Unit
  P.O. Box 95026
  Lincoln, NE 68509-5026
  ```

**Verification:**
- Lock-in status may be verified by calling NMES line or Medicaid Inquiry Line

### Services by Other Providers

**471 NAC 2-004.04 Services by Other Providers:**

Claims for services provided to lock-in individual by other than chosen provider(s) will **not be approved**, with following exceptions:
- Medical emergencies
- Primary physician referrals
- Osteopaths
- Dentists
- Podiatrists

**Notice:** Individual will receive at least **10 days' notice** before lock-in is imposed

### Finding Lock-In Policies in C1

**Step 1-7:** Follow same steps as "Finding Managed Care Policies" above to get to Recipient Number screen

**Step 8: Check Lock-In Status**

1. Type individual's MMIS# under **Recipient Number**
2. Press **Enter**
3. Tab over to **"RESTRCTD CD"**
4. Press **F1** for Help menu
   - Help menu shows coding numbers for lock-in category individual has (if any)
   - **0** means **No Lock-In** for individual

**NOTE:** If individual wants to know WHICH pharmacy they are locked in to, refer them to **Pharmacy Unit 1-877-255-3092**

---

## Important Reminders / Helpful Hints

### Account Access

**Locked out of account or need to change C1 password:**
- Contact **DHHS Help Desk** at **(402) 471-9069**

### First Diagnosis Policies

**Coverage must be verified** (especially policies offered by Aetna)
- If policy pays single, one-time benefit with **no additional coverage** for medical services:
  - Do NOT add policy to C1
  - Policy should also NOT be allowed as expense in budget

### Long-Term Care Policies

**If information received about LTC policy:**

1. **Add LTC plan to C1** with coverage type code of **'150'**
   - **Must be done prior** to sending email to mailbox or file can't be started

2. **Send email to:** DHHS.MedicaidLTCInsurance@Nebraska.gov with following information (needed to send Assignment of Benefit Letter):
   - Advise Medicaid-eligible individual has entered nursing home or assisted living facility
   - Full contact information for Power of Attorney
   - Who Authorized Representative is

See: [LTC Insurance Payment Recovery Process](LTC%20Insurance%20Payment%20Recovery%20Process.md)

### Medicare Advantage Plans

**All Medicare Advantage plans must be added to C1:**
- Medicare Advantage plans change each year
- **United Healthcare Dual Complete plans** are Medicare Advantage plans
  - **NOTE:** For Nebraska UHC Dual Complete policies, default to using carrier code **88889-184** (address matches information on insurance card)
- Additional information: [Nebraska SHIP website](https://doi.nebraska.gov/consumer/senior-health)

**If individual has Medicare Advantage Plan (Part C):**
1. Add plan to C1 with coverage type code of **'130'**
2. Send email with Master Case Name and Medicaid ID number to: **DHHS.MedicaidCOBHelpDesk@nebraska.gov**
3. Indicate code should be changed to **'375'**

### HIPP Premium Payor

**Workers unable to close policy where HIPP is premium payor**

If this issue encountered, email **DHHS.MedicaidHIPP@Nebraska.gov** with following information:
- Include any information on change/update
- Include any documentation provided by individual

### Prescription (Rx) Policies

**Should be added to C1 if:**
- Company administers prescription plan separately from full policy
- Information found on back of medical card
- **Example:** United Health Care policies might have prescription benefits with Optum Rx - these are two separate policies
- Rx policy should be added to C1 separately with Coverage Code **'552'**

### Special Cases

**Citizen Security Life policies:** Should be added to C1

**'Midlands Choice':** Not an insurance company

**Rider Policy numbers:** If same policy number as original, add **"A"** at end of policy number

**Insurance cards:** Look closely - sometimes they can be tricky

### Getting Help

**For clarification or questions, email:** DHHS.MedicaidCOBHelpDesk@nebraska.gov

**To assist COB Help Desk, include:**
- Master Case number
- Medicaid ID number (if exists)
- Brief description of issue
- Attach policy information or other related documents (use "Print to PDF" feature)
- **NOTE:** COB Help Desk does not have full access to NFOCUS - any information provided in email is helpful

---

## C1 Code Reference

### Premium Payor Codes

| **Code** | **Description** |
|----------|-----------------|
| 01-49 | If premium payor is in MC, enter 2-digit suffix of their Medicaid number |
| 50 | Parent (Natural or Adoptive) |
| 51 | Stepparent |
| 52 | Grandparent |
| 53 | Foster parent |
| 60 | Spouse - not legally separated or divorced |
| 61 | Ex-spouse - legally separated or divorced |
| 70 | Employer/Union pays entire premium |
| 80 | Voluntary - payor is not related and has no legal obligation to pay premium |
| 90 | HIPP Program - state pays premium |
| 98 | BCBS data match (payor is unidentified) |

### Relationship to Policyholder Codes

| **Code** | **Description** |
|----------|-----------------|
| 10 | Self |
| 11 | Eligible spouse living in home with this individual under this or another Medicaid number |
| 12 | Ineligible spouse living in home with this individual |
| 13 | Spouse not in home, but not separated or divorced |
| 14 | Ex-spouse not in home, legally separated or divorced |
| 15 | Common-law spouse, friend or roommate living in home |
| 20 | Parent (natural, adoptive or step) living in home and not part of this or any other Med case |
| 21 | Parent (natural, adoptive or step) living in home and part of this or any MED case |
| 22 | Parent (step) not in home |
| 23 | Parent (natural or adoptive) not in home |
| 31 | Grandparent living in home |
| 32 | Grandparent not living in home |
| 50 | Adoptive parent – financially responsible |
| 51 | Other person with legal obligation to pay |

### Coverage Type Codes

| **Code** | **Description** |
|----------|-----------------|
| 101 | Group or standard individual plan |
| 120 | HMO (Except SHARE Seniorcare) |
| 130 | Medicare Supplement |
| 140 | Hospital (inpatient) |
| 149 | Hospital/surgical/medical LIMITED (Ex. Urgent Care and ER Only) |
| 150 | Nursing Home – Confinement/Long Term Care |
| 160 | PPO |
| 301 | HMO/PPO without dental |
| 375 | Medicare Advantage Plan |
| 500 | CHAMPUS/CHAMPVA |
| 501 | Indemnity Policies |
| 533 | Hospital Policies |
| 550 | Dental Plan |
| 551 | Vision Plan |
| 552 | Rx Plan |
| 554 | Vision and Dental Plan |
| 560 | Cancer Plan |
| 600 | Heart Policy (Caseworkers can't use, must call TPL Dept) |

---

## Related Guides

- [TPL Guide](TPL%20Guide.md) - Third Party Liability procedures and best practices
- [LTC Insurance Payment Recovery Process](LTC%20Insurance%20Payment%20Recovery%20Process.md) - Long-term care insurance assignment of benefits
- [Continuous Eligibility Guide](Continuous%20Eligibility%20Guide.md) - Continuous eligibility and TPL considerations
- [Retroactive Medicaid Process](Retroactive%20Medicaid%20Process.md) - Ensuring coverage dates match retro periods

---

## Contact Information

**DHHS Help Desk (C1 password/lockout):** (402) 471-9069

**Pharmacy Unit (Lock-In):** 1-877-255-3092, Option 2

**COB Help Desk:** DHHS.MedicaidCOBHelpDesk@nebraska.gov

**LTC Insurance:** DHHS.MedicaidLTCInsurance@Nebraska.gov

**HIPP Program:** DHHS.MedicaidHIPP@Nebraska.gov

**Updated:** May 2025

---

*[← Back to Index](README.md)*
