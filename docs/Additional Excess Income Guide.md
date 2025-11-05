# Additional Excess Income Guide

**Managing Excess Income in Long-Term Care Medicaid Budgets**

---

## Overview

This guide provides staff with comprehensive guidance for navigating Long-Term Care (LTC) Medically Needy budgets that contain Additional Excess Income. The guide consolidates all relevant information into a single, concise resource and is organized into four sections addressing different aspects of excess income budgeting.

**Document Date:** July 2024 (NEW MLTC PAS)

---

## Table of Contents

1. [Key Definitions](#key-definitions)
2. [Purpose & Scope](#purpose--scope)
3. [Section 1: Additional Excess Income Introduction](#section-1-additional-excess-income-introduction)
4. [Section 2: Calculating Private Pay Days](#section-2-calculating-private-pay-days)
5. [Section 3: Finding Additional Excess Income](#section-3-finding-additional-excess-income)
6. [Section 4: Budget Changes & Ongoing Monitoring](#section-4-budget-changes--ongoing-monitoring)

---

## Key Definitions

**Additional Excess Income**
The dollar amount shown in the Medicaid budget that exceeds the Medicaid rate. This amount is in addition to the adjusted share of cost (SOC) amount listed in the budget.

**Long Term Care (LTC)**
A variety of services designated to meet a person's needs during a short or long period of time. These services help individuals live as independently and safely as possible when it's not possible for them to complete activities on their own. Patients in a hospital may be discharged to a LTC facility for rehabilitation services, prior to returning to the community.

**Medicaid Nursing Home Per Diem**
Medicaid typically pays less than private paying individuals do for any given level of care. Not all types of health providers are reimbursed for services at the same rate. Facilities may understand this as the Medicaid reimbursement rate for the daily cost of care.

**Mass Expert System Architecture (MESA)**
A process of NFOCUS recalculating eligibility budgets without the help of an SSW to update information, based on a table of program variables. MESA is currently scheduled to run monthly, quarterly, and annually for various reported information.

**Private Nursing Home Per Diem**
The private rate for the daily cost of care in a nursing home. In a nursing facility, the patient's level of care determines the cost of care; this cost may vary throughout the patient's stay depending on the care needs.

---

## Purpose & Scope

The purpose of this guide is to provide guidance for staff when navigating a LTC Medically Needy budget with Additional Excess Income, and to combine all information on the topic into a single, concise document. This guide is separated into four different sections:

- **Section 1** provides a general introduction to Additional Excess Income
- **Section 2** steps out the process of how to calculate the care rate that may cause the budget to have private pay days
- **Section 3** provides direction on what to look for in an Additional Excess Income budget, to determine if worker action is necessary
- **Section 4** discusses budget changes when Additional Excess Income or Private Pay Days are involved in budgeting

---

## Section 1: Additional Excess Income Introduction

### Overview

When a participant is budgeted with a living arrangement of nursing home, the worker must review the case to ensure the Medicaid Rate for LTC is in the budget. If there is no rate in the budget or the rate is lower than the calculated SOC, the budget will reflect an Additional Excess Income amount.

> **Important:** See the budget examples in Section 3 for detailed references. The worker may need to take further action on nursing home cases that reflect Additional Excess Income in the budget summary.

### Benefit Error Prevention

Authorizing a budget without the current per diem rates entered into expert, and with an Additional Excess Income amount showing in the budget summary, is a **benefit error**. 

**Required Actions:**
- The Medicaid Nursing Home Per Diem rate must be entered at initial eligibility
- If the Medicaid rate is unknown or the budget is reflecting Additional Excess Income, the Private Nursing Home Per Diem rate must be entered

---

## Section 2: Calculating Private Pay Days

### Overview

For instruction on identifying Additional Excess Income, review Section 3. If Additional Excess Income has been identified and budgeting updates are necessary, follow these steps.

### Step 1: Contact the Facility

While on the phone with the facility, gather both:
- Private Nursing Home Per Diem rate
- Medicaid Nursing Home Per Diem rate for the dates Medicaid budgets require processing

#### Entering Facility Rates

Each of the rates provided by the facility must be entered under the category of **Medical**:
- Type of expense: **Private Nursing Home Per Diem**
- Type of expense: **Medicaid Nursing Home Per Diem**

#### Multiple Rate Scenarios

There may be multiple Medicaid and/or private per diem rates for the same month, depending on the participant's level of care throughout the month.

**When Multiple Rates Apply:**
1. Contact the facility and obtain the per diem rates for each care level
2. Enter the specific date ranges in Expert for the multiple per diem rates
3. If updating a rate, there should only be one per diem rate showing for the same time frame

> **Note:** Ongoing expenses should not be end-dated in Expert. If there is a prior expense entry that has been end-dated, the system will not allow the same expense entry to be created a second time. The original expense entry, found under the History tab, will need to be updated with the new date.

### Step 2: Proceed to Budgeting

Prior to authorizing, review the budget summary.

#### Process

1. Now that the rates are entered, the budget may reflect **Private Pay Days**
2. Double-click the **Additional Excess Income** line to review the detail
3. Review the Expense module in Expert, making sure both per diem rates are correctly listed

#### NFOCUS Calculations

- NFOCUS determines the Medicaid Rate for LTC by calculating the Medicaid Nursing Home Per Diem with the number of days in the budget month
- If the Adjusted Share of Cost remains higher than the Medicaid Rate for LTC, the budget summary will reflect Additional Excess Income
- NFOCUS will automatically calculate Additional Excess Income against the Private Per Diem rate to determine the number of Private Pay Days

> **Important:** If there are private pay days, the Additional Excess Income is obligated to the facility within the private pay days. This calculation is not viewable to the worker. Private Pay Days are only viewable on the Benefit Summary.

> **If No Private Pay Days Display:** Confirm that the Private Nursing Home Per Diem amount has been entered.

### Step 3: Verify Payment Capability

If budgeted income exceeds the Medicaid Rate for LTC in the month:
- The participant must pay their full cost of care at the Medicaid rate
- The participant must obligate the excess income
- NFOCUS will limit the number of Private Pay Days displayed in the budget to the number of days in the month when the income is equal to or in excess of the monthly private pay rate
- When the individual has income to pay privately for the cost of care and there is not a demonstrated medical need, the case must be denied/closed for "Share of Cost Exceeds Need"

### Step 4: Adjust MESA Indicator

If the budget reflects any number of Private Pay Days, the MESA indicator must be changed to **Process by Worker**. This allows the case to be bypassed during monthly MESA, yearly COLA, and FPL system budget runs.

#### Changing MESA Indicator in NFOCUS

1. Open the NFOCUS Detail Master Case window
2. From the **Detail** drop-down menu, select **Mass Change**
3. The Mass Change Detail window displays
4. From the **Actions** drop-down menu, select **Mass Change Indicator**
5. The Mass Change Indicator box displays
6. Select **Process by Worker**
7. Select **OK** to close the window

> **Note:** The MESA indicator should be set back to "Process by System" when there are no private pay days.

#### Case Assignment for Private Pay Days

- Cases with Private Pay days are assigned for monitoring
- Refer to the **Medicaid Position Numbers for Case Assignments** document for case assignment details
- Manual budgeting must occur each time the number of days in the month changes and when a MESA not run alert appears in the case
- Create an alert for the next time the number of days in the month changes

### Step 5: Verify Benefit Notices

If there is a change in benefit (including, but not limited to the number of private pay days or the SOC amount), confirm that a notice is going out from the agency to notify:
- The Medicaid recipient
- All administrative roles of the change

### Step 6: Case Narration

Documentation must include:

- **Outside Agency Contact:** Name and phone number of the contact person
- **Per Diem Rates:** Medicaid and private per diem rate amounts
  - Include date ranges for any per diem rate changes (if multiple levels of care)
- **Private Pay Days:** Number of days identified
- **Final Results:** Summary of case outcomes and actions taken

---

## Section 3: Finding Additional Excess Income

### Overview

This section explains how to identify Additional Excess Income in the budget, if the Medicaid Rate for LTC is being used, and how to determine if worker action is necessary.

### Step 1: Locate Additional Excess Income in Budget Summary

From the Detail Master Case window in NFOCUS:

1. Open the **Budget Summary**
2. Locate the **Additional Excess Income** line
3. Double-click the Additional Excess Income line to view the **Expense Details**
4. NFOCUS automatically converts and displays the Medicaid Rate for LTC when per diem rates are listed in Expert

### Identifying Additional Excess Income: Three Examples

#### Example 1: Additional Action Required
- **Budget Summary:** Shows Additional Excess Income
- **Expense Details:** No Medicaid Rate for LTC
- **Worker Action Required:** Yes—enter the per diem rates as outlined in Section 2 of this guide

#### Example 2: No Action Required
- **Budget Summary:** Shows no Additional Excess Income
- **Medicaid Rate:** LTC is more than the Share of Cost
- **Worker Action Required:** No—no further action needed unless a change occurs

#### Example 3: Monitor for Changes
- **Budget Summary:** Shows Additional Excess Income
- **Medicaid Rate:** LTC is less than the Share of Cost
- **Worker Action Required:** Only if Private Pay Days have not been calculated or if a change occurs

> **Important:** A change in the number of days in a month is also considered a change that requires budgeting.

---

## Section 4: Budget Changes & Ongoing Monitoring

### Overview

Budgets must be recalculated by the worker anytime there is updated information on a participant's income or expenses. Budgets must also be recalculated when the number of days in the month changes. The worker must take into consideration timely and adequate notice.

### Alerts from Long-Term Care Interface

Various alerts may be generated by the Long-Term Care Interface. This interface creates, updates, and possibly closes expenses in NFOCUS based on a sweep of MMIS. These changes may affect:
- Share of Cost (SOC)
- Private Pay Days
- Additional Excess Income in the current budget

### Step 1: Process Budget Changes

Upon reviewing a change:

1. **Verify Accuracy:** Prior to authorizing the budget, review the budget summary for income and/or expense changes, comparing prior budget information for accuracy
2. **Identify Additional Excess Income:** Review the steps in Section 3 of this guide
3. **Calculate Changes:** Follow the steps in Section 2 of this guide

### Step 2: Verify Benefit Notices

If there is a change in benefit (including, but not limited to the number of private pay days or the SOC), confirm that a notice is going out from the agency to notify:
- The Medicaid recipient
- All administrative roles of the change

### Step 3: Case Narration

Documentation must include:

- **Information Received:** Any outside agency contact, including name and phone number
- **Change Description:** What change occurred
- **Actions Taken:** Actions taken in the case
- **Final Results:** Final case results and outcomes

### Step 4: Case Assignment for Ongoing Monitoring

Cases with Private Pay Day(s) are assigned for monitoring. Refer to the **Medicaid Position Numbers for Case Assignments** document for assignment details.

### Step 5: Ongoing Monitoring Procedures

An alert must be created to process the budget in advance of each calendar month where the number of days will change, to ensure correct Private Pay Day calculation in the budget.

#### Alert Schedule Example

- Alert set for 9/1/2023 to process the 10/2023 budget (31 days in the month is a change)
- Alert set for 10/1/2023 to process the 11/2023 budget (30 days in the month is a change)
- Continue this pattern for all months with day-count changes
- *Alerts are not required for months where the number of days will not change (July to August, December to January)*

#### Critical Review Requirement

Any month where the number of Private Pay Days in the budget exceed the number of days in the month must be reviewed to determine if a medical need exists. Refer to Section 2 of this guide for detailed guidance.

---

## Key Takeaways

✓ Always verify Medicaid and private per diem rates are entered in Expert
✓ Update MESA indicator to "Process by Worker" for cases with Private Pay Days
✓ Send appropriate notices when benefits change
✓ Maintain detailed case narration with contact information and rates
✓ Create alerts for months with changing day counts
✓ Review excess income cases monthly during MESA runs

---

*[← Back to Index](README.md)*
rate. This amount is in addition to the adjusted share of cost (SOC) amount listed in the budget.
Long Term Care (LTC) - A variety of services designated to meet a person’s needs during a short or
long period of time. These services help individuals live as independently and safely as possible when it’s
not possible for them to complete activities on their own. Patients in a hospital may be discharged to a
LTC facility for rehabilitation services, prior to returning to the community.
Medicaid Nursing Home Per Diem - Medicaid typically pays less than private paying individuals do for
any given level of care. Not all types of health providers are reimbursed for services at the same rate.
Facilities may understand this as the Medicaid reimbursement rate for the daily cost of care.
Mass Expert System Architecture (MESA) - A process of NFOCUS recalculating eligibility budgets
without the help of an SSW to update information, based on a table of program variables. MESA is
currently scheduled to run monthly, quarterly, and annually for various reported information.
Private Nursing Home Per Diem - The private rate for the daily cost of care in a nursing home. In a
nursing facility, the patient’s level of care determines the cost of care; this cost may vary throughout the
patients stay depending on the care needs.
Purpose:
The purpose of this guide is to provide guidance for staff when navigating a LTC Medically Needy
budget with Additional Excess Income, and to combine all information on the topic into a single, concise
document. This guide is separated into four different Sections. Section 1 provides a general introduction
to Additional Excess Income. Section 2 steps out the process of how to calculate the care rate that may
cause the budget to have private pay days. Section 3 provides direction on what to look for in an
Additional Excess Income budget, to determine if worker action is necessary. Section 4 discusses budget
changes when Additional Excess Income or Private Pay Days are involved in budgeting.
Section 1: Additional Excess Income Introduction
When a participant is budgeted with a living arrangement of nursing home, the worker must review the
case to ensure the Medicaid Rate for LTC is in the budget. If there is no rate in the budget or the rate is
lower than the calculated SOC, the budget will reflect an Additional Excess Income amount. See the
budget examples in Section 3. The worker may need to take further action on nursing home cases that
reflect Additional Excess Income in the budget summary.
Authorizing a budget without the current per diem rates entered into expert, and with an Additional Excess
Income amount showing in the budget summary, is a benefit error. The Medicaid Nursing Home Per
Diem rate must be entered at initial eligibility. If the Medicaid rate is unknown or the budget is
reflecting Additional Excess Income, the Private Nursing Home Per Diem rate must be entered.
Section 2: Calculating Private Pay Days
For instruction on identifying Additional Excess Income, review Section 3. If Additional Excess Income
has been identified and budgeting updates are necessary, follow steps 1-7 in this section.
1. Contact the facility: while on the phone, gather both the Private Nursing Home Per Diem rate, as well
as the Medicaid Nursing Home Per Diem rate for the dates Medicaid budgets require processing.
a. Each of the rates provided by the facility must be entered under the category of Medical, the
type of expense is Private Nursing Home Per Diem and Medicaid Nursing Home Per Diem.
b. There may be multiple Medicaid and/or private per diem rates for the same month, depending
on the participant’s level of care throughout the month. Staff will contact the facility and obtain
the per diem rates.
i. Enter the specific date ranges in expert for the multiple per diem rates. If the staff is
updating the rate, there should only be one per diem rate showing for the same time frame.
NOTE: Ongoing expenses should not be end dated in expert. If there is a prior
expense entry and it has been end dated, the system will not allow the same expense
entry to be created a second time. The original expense entry, found under the
History tab, will need to be updated with the new date.
ii. Below is an example of multiple expenses entered for both per diem rates.
Review the Expense module in Expert, making sure both per diem rates are correctly listed.
2. Proceed to budgeting: prior to authorizing, review the budget summary.
a. Now that the rates are entered, the budget may reflect Private Pay Days, as shown in the
example below.
b. Double click the Additional Excess Income line to review the detail.
i. NFOCUS determines the Medicaid Rate for 6
LTC by calculating the Medicaid Nursing
Home Per Diem with the number of days in ii. If the Adjusted Share of Cost
the budget month. remains higher than the
Medicaid Rate for LTC, the
budget summary will reflect
Additional Excess Income.
iii. NFOCUS will automatically
calculate Additional Excess
Income against the Private
Per Diem rate to determine
the number of Private Pay
Days.
a. If there are private pay
days, the Additional
Excess Income is
obligated to the facility
within the private pay
days.
b. This calculation is not
viewable to the worker.
c. Private Pay Days are
only viewable on the
Benefit Summary.
*If the budget results in Additional
Excess Income but there are no
Private Pay Days displayed, confirm
the Private Nursing Home Per Diem
amount has been entered.
c. If budgeted income exceeds the Medicaid Rate for LTC in the month, the participant must pay
their full cost of care of $6,830.00 at the Medicaid rate; in addition, the participant must
obligate the excess income. In this situation, the recipient would not have enough funds to pay
the full cost of care at the monthly private rate since there is only 1 Private Pay Day indicated.
3. NFOCUS will limit the number of Private Pay Days displayed in the budget to the number of days in
the month when the income is equal, or in excess of the monthly private pay rate. When the
individual has income to pay privately for the cost of care, and there is not a demonstrated medical
need, the case must be denied/closed for Share of Cost Exceeds Need.
Example of February budgeting:
4. If the budget reflects any number of Private Pay Days, the MESA indicator will need to be changed
to Process by Worker. Updating the MESA indicator will allow the case to be bypassed during the
monthly MESA, yearly COLA, and FPL system budget runs.
a. In the NFOCUS Detail Master Case window, From the Detail
drop-down menu, select Mass Change.
i. The Mass Change Detail window displays.
ii. From Actions drop-down menu, Select Mass Change
Indicator
iii. The Mass Change Indicator box displays.
iv. Select Process by Worker
v. Select the Ok to close the window.
NOTE: The MESA indicator should be set back to
Process by System when there are no private pay days.
b. Cases with Private Pay days are assigned see the Medicaid Position Numbers for Case
Assignments document for monitoring.
i. Manual budgeting will need to occur each time the number of days in the month changes
and when a MESA not run alert appears in the case.
ii. Create an alert allowing for the next time the number of days in the month changes.
5. If there is a change in benefit (including, but not limited to the number of private pay days or the SOC
amount) confirm that a notice is going out from the agency to notify the Medicaid recipient and all
administrative roles of the change.
6. Narrate in the case:
a. Documentation needs to include any outside agency contact including name and phone
number of the contact;
b. Medicaid and private per diem rate amounts;
i. Include date ranges for any per diem rate changes (if multiple levels of care);
c. Number of Private Pay Days; and
d. Final case results.
Section 3: Finding Additional Excess Income
This Section explains how to identify Additional Excess Income in the budget, if the Medicaid Rate for
LTC is being used, and how to determine if a worker needs to take additional action.
1. From The Detail Master Case window in NFOCUS, open the Budget Summary. Locate the
Additional Excess Income line.
a. Double click the Additional Excess Income line to view the Expense Details. NFOCUS
automatically converts and displays the Medicaid Rate for LTC when the per diem rates are
listed in expert.
b. Below are three examples in identifying Additional Excess Income.
Example 1: The budget summary below shows Additional Excess Income. The Expense
Details show no Medicaid Rate for LTC, therefore additional action is required. The worker
will need to enter the per diem rates as outlined in Section 2 of this guide.
Example 2: The budget summary below shows no Additional Excess Income. The Medicaid
Rate for LTC is more than the Share of Cost. No further action is needed unless a change
occurs.
Example 3: The budget summary below shows Additional Excess Income. The Medicaid
Rate for LTC is less than the Share of Cost, therefore this budget has Additional Excess
Income. If the number of Private Pay Days have been calculated, no further action is needed
unless a change occurs.
NOTE: A change in the number of days in a month would also be considered a change
that requires budgeting.
Section 4: Budget Changes
Budgets must be recalculated by the worker anytime there is updated information on a participant’s
income or expenses. Budgets must also be recalculated when the number of days in the month change.
The worker must take into consideration timely and adequate notice.
There may be various alerts generated in a case by the Long-Term Care Interface. This interface creates,
updates, and could possibly close expenses in NFOCUS based on a sweep of MMIS. These changes may
affect the SOC, Private Pay Days and the Additional Excess Income in the current budget.
1. Upon reviewing the change, proceed to process the budget.
a. Prior to authorizing the budget, review the budget summary for income and/or expense
changes in the budget, comparing prior budget information for accuracy.
b. For information on identifying Additional Excess Income review the steps in Section 3 of this
guide.
c. For calculating Additional Excess Income follow the steps in Section 2 of this guide.
2. If there is a change in benefit (including, but not limited to the number of private pay days or the
SOC) confirm that a notice is going out from the agency to notify the Medicaid recipient and all
administrative roles of the change.
3. Narrate in the case:
a. Information received, include any outside agency contact including name and phone number
of the contact;
b. Change that occurred;
c. Actions taken in the case, and
d. Final case results.
4. Cases with Private Pay Day(s) are assigned see the Medicaid Position Numbers for Case
Assignments document for monitoring.
5. for ongoing monitoring.
a. An alert must be created to process the budget in advance of each calendar month where the
number of days in the month will change, to ensure the correct Private Pay Day calculation in
the budget.
i. Example: Alert is set for 9/1/2023 to process the 10/2023 budget (31 days in the
month is a change), for 10/1/2023 to process the 11/2023 budget (30 days in the
month is a change), etc. Alerts would not be required for instances where the number
of days in the month will not change (July to August, December to January).
b. Any month where the number of Private Pay Days in the budget exceed the number of days
in the month must be reviewed to determine if a medical need exists. Refer to Section 2 of
this guide.
---


---

*[← Back to Index](README.md)*
