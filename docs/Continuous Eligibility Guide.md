# Continuous Eligibility Guide

**Continuous Eligibility (CE) for Children, Deemed Newborns, and Pregnant/Postpartum Individuals**  
*12-month coverage periods to prevent gaps in essential health care*

---

## Overview

**Continuous Eligibility (CE)** provides uninterrupted Medicaid coverage for specified periods regardless of changes in income or circumstances. This policy ensures vulnerable populations maintain access to critical health services during key life stages.

**Three CE Types**:
1. **Children's Continuous Eligibility** – 12 months from approval/renewal
2. **Deemed Newborn Continuous Eligibility** – 12 months from birth
3. **Pregnant CE & Postpartum Coverage** – 12 months postpartum (effective 1/1/2024)

**Purpose**: Prevent coverage gaps during critical periods of child development, pregnancy, and postpartum recovery. CE reduces administrative burden and ensures continuous access to preventive care, prenatal services, and postpartum health management.

**NFOCUS Integration**: As of **2/16/2025**, NFOCUS flexible budgeting automatically handles CE cases with automatic Lock/Save features and Expiry Date tracking.

**Version History**:
- **12/2023** – Created (MLTC EO)
- **8/2024** – Updated (MLTC EO) with clarifications on category changes and TPL
- **2/2025** – Updated (MLTC EO) for Flexible Budgeting integration

---

## Table of Contents

- [Key Definitions](#key-definitions)
- [Children's Continuous Eligibility](#childrens-continuous-eligibility)
- [Deemed Newborn Continuous Eligibility](#deemed-newborn-continuous-eligibility)
- [Pregnant CE & Postpartum Coverage](#pregnant-ce--postpartum-coverage)
- [Exceptions to Continuous Eligibility](#exceptions-to-continuous-eligibility)
- [Category Change Rules](#category-change-rules)
- [Age Change Alerts](#age-change-alerts)
- [NFOCUS Flexible Budgeting](#nfocus-flexible-budgeting)

---

## Key Definitions

**Continuous Eligibility (CE)**: Medicaid coverage period during which an individual cannot lose eligibility due to changes in income or circumstances (subject to specific exceptions).

**Children's CE Period**: 12 months from the date of initial approval or most recent renewal determination for children from infants through age 18.

**Deemed Newborn**: A child born to a mother who is Medicaid active at the time of the child's birth. The newborn is automatically deemed eligible for Medicaid without a separate application.

**Deemed Newborn CE Period**: 12 months from the date of birth for children born to Medicaid-active mothers.

**Pregnant CE**: Continuous eligibility period for pregnant individuals from approval through end of pregnancy.

**Postpartum Coverage**: 12 months of continuous Medicaid coverage following the end of pregnancy (effective 1/1/2024), regardless of income changes.

**Postpartum Period**: Begins the day after pregnancy ends and continues for 12 months.

**End of Pregnancy**: The day the pregnancy ends, whether through live birth, stillbirth, miscarriage, or termination.

**Expiry Date**: NFOCUS field that tracks when a CE period ends. System uses this date to determine when eligibility can be re-evaluated.

**Flexible Budgeting**: NFOCUS feature (implemented 2/16/2025) that automatically handles CE cases by preventing income/circumstance changes from affecting eligibility during CE period.

**Category Change**: Movement between different Medicaid eligibility categories (e.g., MAGI Child to CHIP, pregnant to postpartum).

**Exception to CE**: Circumstances under which continuous eligibility can be terminated before the end of the CE period (e.g., state residency loss, voluntary termination, death).

---

## Children's Continuous Eligibility

### CE Period Duration

**12-month period** from:
- Date of initial approval, OR
- Date of most recent renewal determination

**Applies to**: Children from **infants through age 18**

**Eligibility Categories Covered**:
- MAGI Child (0-5)
- MAGI Child (6-18)
- CHIP (Children's Health Insurance Program)
- Non-MAGI children (ABD, etc.)

### Applications

**Initial Application**: 
- Child is approved for Medicaid in any qualifying category
- CE period begins on date of approval
- 12-month period tracked in NFOCUS Expiry Date field

**Adding Child to Existing Case**:
- Child added via MILTC-63 or other valid application
- CE period begins on date child is added to case
- Each child has their own individual CE period

### Change Management During Children's CE

**Income Increases**: 
- Do NOT terminate eligibility during CE period
- Document change in narrative
- System will automatically maintain eligibility through Expiry Date

**Household Composition Changes**:
- Do NOT terminate eligibility during CE period
- Update household information in NFOCUS
- Child remains eligible through Expiry Date

**Reporting Changes**:
- Parents/guardians should still report changes
- Changes documented but do not affect eligibility during CE period
- Changes may affect eligibility at renewal

### Category Changes During Children's CE

**Movement Between MAGI Child Categories**:
- Child can move between MAGI Child (0-5) and MAGI Child (6-18)
- Child can move between MAGI Child and CHIP
- **CE period continues** – not broken by category change
- Example: Child turns 6 and moves from MAGI Child (0-5) to MAGI Child (6-18) – CE continues

**Movement to Non-MAGI Categories**:
- If child needs to move to Non-MAGI category (e.g., ABD due to disability determination)
- **CE period continues** – not broken by category change
- Example: Child approved for ABD during CE period – CE continues through original Expiry Date

**Movement from Non-MAGI to MAGI**:
- If child moves from Non-MAGI to MAGI category
- **CE period continues** – not broken by category change

**TMA (Transitional Medical Assistance)**:
- If child qualifies for TMA during CE period
- Child can be moved to TMA category
- **CE period continues** through original Expiry Date

### Age Change Alerts

**Child Turns 6**:
- System generates alert to move from MAGI Child (0-5) to MAGI Child (6-18)
- **Action**: Move to appropriate category
- **CE Impact**: CE period continues; not broken by age-related category change

**Child Turns 19**:
- **CE ends** at age 19 (unless child is pregnant or hospitalized)
- System generates alert prior to 19th birthday
- **Action**: Determine if child qualifies for adult coverage
- **Exception**: If child is pregnant, see Pregnant CE section
- **Exception**: If child is hospitalized at age 19, coverage continues through end of hospital stay

### Ineligible/Failure to Provide (FTP) During CE

**If Child Becomes Ineligible**:
- Due to income increase or other change during CE period
- **Do NOT close** – CE protects eligibility
- Document reason child would otherwise be ineligible
- Continue coverage through Expiry Date

**If Required Verification Not Provided**:
- During CE period, missing verifications do NOT result in closure
- Send verification requests as normal
- Document failure to provide in narrative
- Continue coverage through Expiry Date
- Address at renewal

### Third Party Liability (TPL) During Children's CE

**TPL Applies**:
- TPL requirements **continue during CE period**
- Child must cooperate with TPL requirements
- Failure to cooperate with TPL can result in **sanction** (see Exceptions)

**Action**: Process TPL sanctions as normal, even during CE period

### Renewals for Children on CE

**At Renewal (End of CE Period)**:
- Full eligibility redetermination required
- Verify income, household composition, residency
- Determine if child continues to qualify for Medicaid
- If approved, **new 12-month CE period begins**
- If denied, coverage ends at end of current CE period

**Expiry Date Tracking**:
- NFOCUS Expiry Date field shows when CE period ends
- Renewal due date should align with Expiry Date
- System generates renewal alerts prior to Expiry Date

**NFOCUS Flexible Budgeting (2/16/2025)**:
- System automatically tracks CE period
- Prevents closure during CE period
- Locks eligibility through Expiry Date
- See NFOCUS Flexible Budgeting section for details

---

## Deemed Newborn Continuous Eligibility

### CE Period Duration

**12-month period** from **date of birth**

**Applies to**: Children born to a mother who is Medicaid active at the time of birth

**Automatic Eligibility**: No application required – child is automatically deemed eligible

### Birth of Newborn Procedures

**When Mother is Medicaid Active at Birth**:
1. Add newborn to mother's case using birth verification (hospital record, birth certificate, etc.)
2. Newborn automatically deemed eligible
3. **CE period begins on date of birth**
4. Expiry Date set to 12 months from birth
5. No income verification required for newborn during CE period

**Documentation**:
- Verification of birth (hospital records, birth certificate)
- Confirmation that mother was Medicaid active at time of birth
- Narrative documentation of deemed newborn status and CE period

### Category Changes During Deemed Newborn CE

**Deemed Newborn Category**:
- Newborns begin in "MAGI Infant" or "Deemed Newborn" category
- **Must remain** in MAGI Infant category during deemed newborn CE period
- Cannot be moved to other categories during the 12-month deemed newborn CE period

**Exception - Child Reaches Age 1**:
- When child turns 1 year old (end of deemed newborn CE period)
- Renewal determination completed
- If child continues to qualify, moved to appropriate MAGI Child category
- **New 12-month Children's CE period begins** (separate from deemed newborn CE)

### Change Management During Deemed Newborn CE

**Mother's Eligibility Changes**:
- If mother loses Medicaid during newborn's CE period
- **Newborn's CE continues** – not affected by mother's loss of coverage
- Newborn remains eligible through 12 months from birth

**Income Changes**:
- Changes in household income do NOT affect deemed newborn CE
- Newborn remains eligible through Expiry Date

**Household Composition Changes**:
- Do NOT affect deemed newborn CE
- Newborn remains eligible through Expiry Date

### Renewals for Deemed Newborns

**At 12 Months (End of Deemed Newborn CE)**:
- Full eligibility redetermination required
- Verify income, household composition, residency for child
- Determine if child continues to qualify for Medicaid
- If approved, move to appropriate MAGI Child category
- **New 12-month Children's CE period begins**

**Transition to Children's CE**:
- Deemed Newborn CE ends at 12 months
- If child is approved at renewal, Children's CE begins
- Child receives **additional 12 months** of CE (total 24 months from birth if continuously eligible)

---

## Pregnant CE & Postpartum Coverage

### CE Period Duration

**Pregnant CE Period**: From date of approval through end of pregnancy

**Postpartum Coverage Period**: **12 months** from the day after pregnancy ends (effective 1/1/2024)

**Total Possible CE**: Pregnancy duration + 12 months postpartum

**Policy References**:
- 477 NAC 3-008 (Continuous Eligibility)
- Policy Memo 23-17 (12-Month Postpartum Coverage)

### Application/Report of Pregnancy Procedures

**When Pregnancy Reported**:
1. Document pregnancy in NFOCUS (Pregnancy indicator, expected due date)
2. Approve for appropriate pregnant category (MAGI Pregnant, Non-MAGI Pregnant, etc.)
3. **Pregnant CE begins** on date of approval
4. Coverage continues through end of pregnancy regardless of income changes

**Verification**:
- Medical verification of pregnancy required
- Expected due date documented

### Birth/End of Pregnancy

**When Pregnancy Ends**:
1. Document end of pregnancy (live birth, stillbirth, miscarriage, termination)
2. **Postpartum coverage begins** the day after pregnancy ends
3. **12-month postpartum CE period** automatically begins
4. Expiry Date set to 12 months from day after pregnancy ended
5. Individual moves to postpartum category or remains in pregnant category with postpartum coverage

**Examples**:
- Pregnancy ends on June 15, 2024
- Postpartum period begins June 16, 2024
- Postpartum CE expires June 15, 2025

### Category Changes During Pregnant/Postpartum CE

**During Pregnancy**:
- Individual **must remain** in the pregnant category they were approved in
- Cannot be moved to non-pregnant categories during pregnancy
- Example: MAGI Pregnant cannot be moved to MAGI Expansion during pregnancy

**During Postpartum Period**:
- Individual **must remain** in postpartum/pregnant category
- Cannot be moved to non-pregnant categories during 12-month postpartum CE
- Example: Cannot move to MAGI Expansion or ABD during postpartum CE period

**Exception - New Pregnancy During Postpartum**:
- If individual becomes pregnant again during postpartum CE period
- Can be moved to pregnant category
- **New pregnancy CE begins** (old postpartum CE ends)
- New 12-month postpartum CE will begin after new pregnancy ends

### New Pregnancy During Postpartum Coverage

**Scenario**: Individual becomes pregnant again during the 12-month postpartum CE period

**Process**:
1. Document new pregnancy
2. Update category to reflect pregnant status
3. **Current postpartum CE ends**
4. **New pregnant CE begins** (covers pregnancy through end)
5. When new pregnancy ends, **new 12-month postpartum CE begins**

**Example**:
- First pregnancy ended: January 15, 2024
- First postpartum CE: January 16, 2024 - January 15, 2025
- New pregnancy reported: June 1, 2024
- First postpartum CE ends: June 1, 2024
- New pregnant CE begins: June 1, 2024
- New pregnancy ends: February 1, 2025
- New postpartum CE: February 2, 2025 - February 1, 2026

### Sanctions During Pregnant/Postpartum CE

**TPL (Third Party Liability)**:
- TPL requirements **apply during pregnant/postpartum CE**
- Failure to cooperate with TPL can result in **sanction** during CE period
- TPL sanction is an **exception to CE** (see Exceptions section)

**Child Support Cooperation**:
- **NOT sanctioned** during postpartum CE period
- Failure to cooperate with child support does NOT result in sanction during CE
- Document non-cooperation but maintain coverage

**Potential Income**:
- **NOT sanctioned** during postpartum CE period
- Failure to pursue potential income does NOT result in sanction during CE
- Document failure to pursue but maintain coverage

### Renewals for Pregnant/Postpartum CE

**During Pregnancy**:
- If renewal due date occurs during pregnancy, **no renewal required**
- Pregnant CE continues through end of pregnancy
- Postpartum CE automatically begins after pregnancy ends

**During Postpartum CE**:
- If renewal due date occurs during 12-month postpartum period, **no renewal required**
- Postpartum CE continues through Expiry Date (12 months from day after pregnancy ended)

**At End of Postpartum CE (12 Months)**:
- Full eligibility redetermination required
- Verify income, household composition, residency
- Determine if individual continues to qualify for Medicaid (may move to different category)
- If denied, coverage ends at Expiry Date

---

## Exceptions to Continuous Eligibility

Continuous Eligibility can be terminated **before** the end of the CE period only under the following circumstances:

### Exceptions Applying to ALL CE Types

**1. No Longer Resident of Nebraska**:
- Individual moves out of state
- Coverage terminates at end of month of move
- Verification: Statement from individual, address verification from other state

**2. Voluntary Termination**:
- Individual requests to end Medicaid coverage
- Verbal or written request required
- Document in narrative
- Coverage terminates at end of month of request

**3. Death**:
- Coverage terminates at end of month of death
- Verification: Death certificate, obituary, SDX death match, etc.

**4. Agency Error or Fraud**:
- If individual was approved in error or through fraud
- Coverage can be terminated retroactively
- Requires supervisor approval and documentation
- Follow fraud investigation procedures if applicable

### Additional Exceptions for Pregnant/Postpartum CE

**5. TPL (Third Party Liability) Sanction**:
- Failure to cooperate with TPL requirements
- Sanction can be applied during pregnant/postpartum CE period
- Coverage terminates for failure to cooperate with TPL
- Does NOT apply to child support cooperation or potential income during postpartum

**6. Pregnancy Added in Error**:
- If pregnancy was documented incorrectly or in error
- Pregnant/Postpartum CE can be terminated
- Requires documentation and supervisor approval
- Individual may qualify for different category

### Additional Exceptions for Children's CE

**7. Child Ages Out at 19**:
- CE automatically ends when child turns 19
- Exception: If child is pregnant, see Pregnant CE
- Exception: If child is hospitalized on 19th birthday, coverage continues through end of hospital stay

**8. Child Becomes Ward of State or Receives Title IV-E**:
- If child becomes ward of state or receives Title IV-E foster care/adoption assistance
- Different Medicaid rules apply
- May be moved to foster care Medicaid category

---

## Category Change Rules

### General Principles

**During CE Period**: 
- Category changes **do not break** CE period
- Individual continues CE through original Expiry Date
- Exception: Pregnancy-related category changes (see below)

**CE Period Tracking**:
- Original Expiry Date remains in effect after category change
- NFOCUS tracks original CE period regardless of category movements

### Children's CE Category Changes

**MAGI Child (0-5) ↔ MAGI Child (6-18)**:
- ✅ Allowed during CE
- ✅ CE period continues
- Example: Child turns 6 – moves to MAGI Child (6-18) but CE continues

**MAGI Child ↔ CHIP**:
- ✅ Allowed during CE
- ✅ CE period continues
- Example: Income increases, child moves to CHIP – CE continues

**MAGI Child → Non-MAGI (ABD)**:
- ✅ Allowed during CE
- ✅ CE period continues
- Example: Child approved for disability – moves to ABD but CE continues

**Any Children's Category → TMA**:
- ✅ Allowed during CE
- ✅ CE period continues through original Expiry Date
- Example: Parent loses job, child moves to TMA – original Children's CE continues

### Deemed Newborn CE Category Changes

**Deemed Newborn/MAGI Infant → Other Categories**:
- ❌ **NOT allowed** during 12-month deemed newborn CE period
- Must remain in MAGI Infant category
- At renewal (12 months), can move to appropriate MAGI Child category

### Pregnant/Postpartum CE Category Changes

**Pregnant Category → Non-Pregnant Category**:
- ❌ **NOT allowed** during pregnancy or postpartum CE period
- Must remain in pregnant/postpartum category until CE period ends
- Example: Cannot move from MAGI Pregnant to MAGI Expansion during pregnancy

**Postpartum → Pregnant** (New Pregnancy):
- ✅ Allowed – see "New Pregnancy During Postpartum Coverage"
- Current postpartum CE ends
- New pregnant CE begins

**MAGI Pregnant ↔ Non-MAGI Pregnant**:
- ✅ Allowed if needed for coverage
- CE period continues through original pregnancy end date + 12 months postpartum

---

## Age Change Alerts

### Child Turns 6

**Alert Generated**: Approximately 30 days before 6th birthday

**Action Required**:
1. Review child's current category (should be MAGI Child 0-5)
2. Move to **MAGI Child (6-18)** category
3. **CE period continues** – not broken by age change
4. Update category effective on 6th birthday

**No Verification Required**: Category change is administrative only

### Child Turns 19

**Alert Generated**: Approximately 60 days before 19th birthday

**Action Required**:
1. **CE ends** at age 19 (unless exceptions apply)
2. Determine if individual qualifies for adult Medicaid coverage
3. If qualifies: Move to appropriate adult category (MAGI Expansion, ABD, etc.)
4. If does not qualify: Coverage terminates at end of month of 19th birthday

**Exceptions**:
- **If child is pregnant**: Move to pregnant category; pregnant CE begins
- **If child is hospitalized** on 19th birthday: Coverage continues through end of hospital stay

**Verification May Be Required**: For adult category, may need income/resource verification

---

## NFOCUS Flexible Budgeting

### Implementation Date

**Effective 2/16/2025**: NFOCUS Flexible Budgeting feature activated for CE cases

**Purpose**: Automate CE period protection, preventing inadvertent closures due to income or circumstance changes

### How Flexible Budgeting Works for CE

**Automatic Lock/Save**:
- When individual has active CE period, system automatically "locks" eligibility
- Income changes, household changes, and other circumstance changes are documented but **do not trigger closure**
- System maintains eligibility through Expiry Date

**Expiry Date Field**:
- NFOCUS tracks CE period end date in **Expiry Date** field
- Worker enters Expiry Date when CE period begins:
  - Children's CE: 12 months from approval/renewal
  - Deemed Newborn CE: 12 months from date of birth
  - Postpartum CE: 12 months from day after pregnancy ended
- System uses Expiry Date to determine when eligibility can be re-evaluated

**Change Processing**:
1. Change is reported (income increase, household composition, etc.)
2. Worker enters change in NFOCUS
3. System recognizes active CE period (Expiry Date)
4. System documents change but **maintains eligibility**
5. Change documented in narrative for future renewal processing

### Worker Responsibilities with Flexible Budgeting

**Setting Expiry Date**:
- **Critical**: Worker must accurately set Expiry Date when CE begins
- Children's CE: Date of approval + 12 months OR Date of renewal + 12 months
- Deemed Newborn CE: Date of birth + 12 months
- Postpartum CE: (End of pregnancy date + 1 day) + 12 months

**Documenting Changes**:
- Continue to enter all reported changes in NFOCUS
- System will maintain eligibility despite changes
- Document in narrative that change does not affect CE
- Change information will be used at renewal

**Monitoring Exceptions**:
- System does NOT prevent closure for exceptions (death, move out of state, voluntary termination, etc.)
- Worker must still process exception closures manually

**Renewal Alerts**:
- System generates renewal alerts prior to Expiry Date
- Worker must complete full redetermination at renewal
- If approved, set **new Expiry Date** for new CE period

### Common Scenarios with Flexible Budgeting

**Scenario 1: Income Increase During Children's CE**
- Parent reports income increase that would make child over income
- Worker enters income change in NFOCUS
- System recognizes Expiry Date
- System maintains eligibility (no closure)
- Worker documents in narrative: "Income change entered. Child remains eligible due to Children's CE through [Expiry Date]."

**Scenario 2: Mother Loses Medicaid During Deemed Newborn CE**
- Mother loses Medicaid 6 months after baby's birth
- Newborn has Expiry Date of 12 months from birth
- Worker closes mother's coverage
- System recognizes newborn's Expiry Date
- Newborn remains eligible through Expiry Date

**Scenario 3: Postpartum Individual Gets Job**
- Individual reports new job during postpartum CE period
- Income would make individual over income for MAGI Pregnant
- Worker enters income in NFOCUS
- System recognizes Postpartum CE Expiry Date
- Individual remains eligible through postpartum CE period
- Worker documents: "Income change entered. Individual remains eligible due to Postpartum CE through [Expiry Date]."

---

## Related Guides

- [MAGI Renewal Process Guide](MAGI%20Renewal%20Process%20Guide.md) - MAGI renewal procedures including CE considerations
- [MLTC Change Management Guide](MLTC%20Change%20Management%20Guide.md) - Processing changes during active coverage periods
- [ABD or HHA Process Flow](ABD%20or%20HHA%20Process%20Flow.md) - Determining appropriate category for children and adults
- [Standalone Application Chart](Standalone%20Application%20Chart.md) - Valid application types for different populations
- [TPL Guide](TPL%20Guide.md) - Third Party Liability requirements and sanctions
- [Valid Application Signature](Valid%20Application%20Signature.md) - Application signature requirements
- [599 CHIP Process Guide](599%20CHIP%20Process%20Guide.md) - CHIP eligibility and transitions

---

## Policy References

- **477 NAC 3-008** - Continuous Eligibility (complete regulation)
- **Policy Memo 23-18** (December 2023) - 12-Month Continuous Eligibility for Children
- **Policy Memo 23-17** (December 2023) - 12-Month Postpartum Coverage

**NFOCUS Release Notes**: 2/16/2025 - Flexible Budgeting for Continuous Eligibility

**Contact**: dhhs.medicaidpolicyquestions@nebraska.gov

**Updated**: February 2025 (MLTC EO)

---

*[← Back to Index](README.md)*
