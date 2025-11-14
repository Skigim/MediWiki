# Edge Cases & Special Scenarios

**Niche Scenarios and Procedural Edge Cases**  
*Worker reference for unusual situations and special processing requirements*

---

## Overview

This document provides guidance for edge cases and special scenarios that don't fit neatly into standard processing guides. These are unusual or niche situations that workers may encounter occasionally. Topics are organized by category for easy reference.

---

## Table of Contents

- [Expert System](#expert-system)
- [Income Processing](#income-processing)
- [Resource Verification](#resource-verification)
- [NFOCUS Procedures](#nfocus-procedures)

---

## Expert System

### SSI/FBR Entry Procedure

**Scenario:** Adding SSI income to Expert system requires special handling for the Federal Benefit Rate.

**Procedure:** After adding SSI to Expert, you must go back in and add **SSI/FBR** (Federal Benefit Rate) afterward.

**Steps:**
1. Add initial SSI income entry in Expert
2. Return to income section
3. Add second entry for **SSI/FBR**
4. **Value**: Use the Federal Benefit Rate from the **MLTC Program Standards Chart**
5. **Claim Number**: Use the same **Social Security Number** for both SSI and SSI/FBR entries
6. **Keep the case assigned** to yourself
7. **Set an alert for 21 days**
8. **After 21 days**: Check if SSI has interfaced automatically
   - If SSI interfaced automatically: **Close the manual entry**
   - If SSI has not interfaced: Keep manual entry and follow up

**Why?** The Federal Benefit Rate must be tracked separately for proper budget calculations. SSI typically interfaces automatically within 21 days through SDX/BDE, at which point the manual entry should be removed to avoid duplication.

**Reference**: [MLTC Program Standards Chart](MLTC%20Program%20Standards%20Chart.md) (for current FBR values)

---

## Income Processing

*Additional edge cases will be added here*

---

## Resource Verification

*Additional edge cases will be added here*

---

## NFOCUS Procedures

*Additional edge cases will be added here*

---

## Related Guides

- [MLTC Program Standards Chart](MLTC%20Program%20Standards%20Chart.md) - Federal Benefit Rates and income limits
- [SDX Guide](SDX%20Guide.md) - SSI verification through State Data Exchange
- [BDE Process Guide](BDE%20Process%20Guide.md) - Beneficiary Data Exchange procedures

---

**Updated**: November 2025

---

*[← Back to Index](README.md)*
