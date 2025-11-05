# MediWiki Professional Reformatting Task - GitHub Copilot Coding Agent Prompt

## Task Overview

Complete the professional reformatting of remaining Medicaid/Long-Term Care (MLTC) documentation files for the MediWiki project. The goal is to transform raw PDF-converted Markdown files into professionally formatted, highly navigable reference documents with consistent structure, comprehensive organization, and excellent readability.

**Project Status:** 9 of 24 files completed (37.5%)  
**Completed Files Reference:** See `/docs/` folder for quality standards (BDE Process Guide, DAC Guide, SDX Guide, Adult AD Waiver Initial/Renewal, Children's AD Waiver Initial)

---

## Professional Formatting Template (ESTABLISHED & PROVEN)

All completed files follow this exact structure. **Maintain this format for all remaining files.**

### 1. Header Section
```
# Document Title
*Descriptive Subtitle Explaining Purpose*

## Overview

2-3 paragraph description of document purpose, scope, and key context. Include:
- What the document covers
- Who should use it
- Key regulatory or administrative context

**Effective Date:** [Date]  
**Scope:** [Description of applicability]
```

### 2. Table of Contents
- Always include numbered TOC with anchor links to all major sections
- Format: `1. [Section Name](#section-name-anchor)`
- Ensure 6-10 major sections for comprehensive navigation

### 3. Key Definitions Section
- **Must include** 8-15 relevant terms specific to the document domain
- Format each definition with:
  - **Term in Bold** – Full definition paragraph explaining the term clearly
  - Include abbreviations and relevant context
  - Provide cross-references to related terms where helpful
- Alphabetize or organize by logical grouping

### 4. Legal Authority & Purpose Section (if applicable)
- List applicable regulations/statutes with specific citation codes
- Include purpose statement explaining why the process/guidance exists
- For procedural documents: include scope and key regulatory requirements

### 5. Main Content Sections
Organize as 4-7 major H2 sections with H3 subsections:

**For Procedural Documents:**
- Break complex procedures into numbered steps
- Use H3 for major procedure phases
- Use numbered lists for sequential steps (1, 2, 3...)
- Use bulleted lists for options/considerations
- Include decision trees where procedures branch
- Add explicit instructions like "If X: do Y; If not X: do Z"

**For Guidance Documents:**
- Organize by topic or category
- Use H3 for subtopics
- Include practical examples where applicable
- Reference forms, systems, or processes mentioned
- Provide context for each section's purpose

**For System/Reference Guides:**
- Organize by interface, alert type, or category
- Use H3 for specific alerts/procedures
- Include numbered procedures for each type
- Add context boxes for important prerequisites or notes

### 6. Key Takeaways Section
- Always include at the end before forms reference
- 6-10 key bullet points with checkmark (✓)
- Format: `✓ **Bold title:** Brief explanation of takeaway`
- Cover: Critical timelines, two-part requirements, common errors, best practices
- Make actionable and practical for end users

### 7. Forms and References Section
- List all forms referenced in the document
- List all related guides/processes
- Format:
  ```
  **Forms Used:**
  - Form Code (Form Name)
  
  **Related Guides:**
  - Guide Name
  ```

### 8. Footer
- Always end with: `*[← Back to Index](README.md)*`

---

## Tone & Language Standards

- **Clarity Over Complexity:** Use clear, direct language. Replace jargon with explanations where possible.
- **Active Voice:** Prefer "The worker must" over "It must be" or "There is a requirement to"
- **Parallel Structure:** Use consistent structure for similar procedures
- **Examples:** Include realistic examples where they clarify complex concepts
- **Emphasis:** Use **bold** for form names, position numbers, and critical requirements; use *italic* for emphasis only
- **Headings:** Make descriptive and specific (e.g., "If Records Are NOT Submitted" rather than "Non-Submission")

---

## Specific Formatting Rules

### Numbers and Lists
- Use **numbered lists** for sequential, ordered procedures
- Use **bulleted lists** for options, considerations, or non-sequential items
- Use **nested numbering** for sub-steps: 1., 1.1, 1.1.1, etc.

### Forms and References
- Format form references as: `Form Name (Form Code)` or `[Form Code] Form Name`
- Format email addresses as: `dhhs.email@nebraska.gov`
- Format URLs as: `www.example.com`
- Format position numbers as: `position number 1234567` (highlighted in context)

### Important Information
- Use **bold** for critical requirements and deadlines
- Use *italic* for emphasis on definitions
- Use blocked text (>quote) for important regulatory notes (sparingly)

### Procedures with Conditions
Use clear if/then structure:
```
**If [condition]:**
- Action 1
- Action 2

**If NOT [condition]:**
- Action 3
```

---

## Document-Specific Requirements

### Procedural Documents (Processes, Determinations, Initial/Renewal Guides)

**Structure Required:**
1. Overview with document date and scope
2. Key Definitions (10-15 terms)
3. Legal Authority & Purpose
4. 5-7 major sections with numbered procedures
5. Key Takeaways (8-10 items)
6. Forms and References
7. Footer

**Content Focus:**
- Break down complex workflows into clear, numbered steps
- Use decision trees for branching procedures
- Include explicit timelines and due dates
- Reference forms and systems by name and code
- Provide context for why each step matters
- Include all pertinent instructions from original document

**Example Documents to Reference:**
- Adult AD Waiver Initial Determination Process (576 original lines → comprehensive reformatted version)
- Adult AD Waiver Renewal Determination Process (472 original lines → comprehensive reformatted version)
- Children's AD Waiver Initial Determination Process (532 original lines → comprehensive reformatted version)

### Guidance Documents (Guides, Q&As, Processes)

**Structure Required:**
1. Overview with purpose and context
2. Key Definitions (8-12 terms)
3. Legal Authority & Purpose (if applicable)
4. 4-6 major sections organized by topic/category
5. Key Takeaways (6-8 items)
6. Forms and References
7. Footer

**Content Focus:**
- Organize information for easy reference
- Include real-world scenarios and examples
- Explain "why" not just "what"
- Provide cross-references between related topics
- Include practical tips and common considerations

**Example Documents to Reference:**
- BDE Process Guide (308 lines, 5 sections, 8 definitions)
- DAC Guide (professional formatting with 11 example scenarios)
- SDX Guide (438 lines, complex alert procedures)

### Q&A Documents (Long-Term Care Q&A, SIMP Budgeting Q&A, Deprivation Q&A)

**Structure Required:**
1. Overview with context
2. Key Definitions (6-10 terms)
3. 4-6 sections organized by topic
4. Q&A items within each section
5. Key Takeaways
6. References
7. Footer

**Content Focus:**
- Format as topic-based sections, each containing related Q&As
- Include "Why" explanations in answers
- Cross-reference between Q&A items
- Provide practical examples in answers
- Use consistent Q/A formatting throughout

---

## Files Remaining to Complete (14 files)

### High Priority (Complete these in order for Batch 4)

1. **Childrens AD Waiver Renewal Determination Process.md** (469 lines)
   - Type: Procedural/Renewal Process
   - Context: Companion to Children's Initial (already completed)
   - Special Considerations: MOE Unwind provisions, children-specific LOC reviews, service coordination coordination

2. **Charitable Giving Guidance.md** (Unknown size)
   - Type: Guidance Document
   - Context: Rules about charitable gifts and resource implications
   - Special Considerations: Regulatory exceptions, documentation requirements

3. **Deprivation of Resources Process Guide.md** (Unknown size)
   - Type: Procedural Process
   - Context: 60-month lookback procedures for AD Waiver resource eligibility
   - Special Considerations: Complex calculation procedures, exceptions

### Medium Priority (Batch 5)

4. **Deprivation of Resources Q&A.md** (Unknown size)
   - Type: Q&A/Guidance
   - Context: Companion to Deprivation Process Guide
   - Special Considerations: Common questions, clarifications

5. **Long-Term Care (LTC) Q&A.md** (Unknown size)
   - Type: Q&A Document
   - Context: LTC program questions and answers
   - Special Considerations: Multiple topics, cross-references

6. **LTC Insurance Payment Recovery Process.md** (Unknown size)
   - Type: Procedural Process
   - Context: Process for recovering Medicaid payments from LTC insurance
   - Special Considerations: Timeline requirements, coordination with insurers

7. **Medical Documentation Guide for Members.md** (Unknown size)
   - Type: Guidance Document
   - Context: What documentation members need to provide
   - Special Considerations: Clear for lay audience, practical examples

8. **Medical Documentation Guide for Parents and Guardians.md** (Unknown size)
   - Type: Guidance Document
   - Context: What parents/guardians need to provide for child applicants
   - Special Considerations: Age-appropriate examples, educational records guidance

### Lower Priority (Batch 6)

9. **Medical Documentation Guide for Providers-Adults.md** (Unknown size)
   - Type: Guidance Document
   - Context: What medical providers should document/submit
   - Special Considerations: Clinical guidance, form references

10. **Medical Documentation Guide for Providers-Children.md** (Unknown size)
    - Type: Guidance Document
    - Context: What providers should document for children
    - Special Considerations: Developmental considerations, IEP/IFSP references

11. **Medical Documentation Guide for Members-2.21.23.ENG-SPA.md** (Unknown size)
    - Type: Reference/Bilingual Guide
    - Context: English-Spanish version
    - Special Considerations: Maintain bilingual formatting if present

12. **Medical Documentation Guide for Parents and Guardians-2.21.23.ENG-SPA.md** (Unknown size)
    - Type: Reference/Bilingual Guide
    - Context: English-Spanish version
    - Special Considerations: Maintain bilingual formatting if present

13. **Medicare Part D Co-pay Deductions.md** (Unknown size)
    - Type: Guidance Document
    - Context: Medicare Part D cost-sharing rules
    - Special Considerations: Complex regulations, calculation procedures

14. **SIMP Budgeting Q & A.md** (Unknown size)
    - Type: Q&A Document
    - Context: Self-Initiated Maintenance Plan budgeting questions
    - Special Considerations: Complex calculations, multiple scenarios

15. **Trust and Annuity Process Guide.md** (Unknown size)
    - Type: Procedural Guide
    - Context: How trusts and annuities affect eligibility
    - Special Considerations: Legal/financial complexity, exceptions

16. **Waiver Process Guide.md** (Unknown size)
    - Type: Procedural Process
    - Context: General AD Waiver process overview/summary
    - Special Considerations: Integration point for other processes

---

## Quality Assurance Checklist

For each file completed, verify:

- [ ] Header includes title, subtitle, and overview (2-3 paragraphs)
- [ ] Effective date or document date included
- [ ] Table of Contents present with 6-10 items and anchor links
- [ ] Key Definitions section with 8-15 terms, each with bold term and full description
- [ ] All procedures clearly organized with numbered steps
- [ ] Decision trees present where procedures branch (If X / If not X format)
- [ ] All forms mentioned are listed in Forms and References section
- [ ] All related guides/processes are listed in References section
- [ ] Key Takeaways section present with 6-10 checkmark items
- [ ] Footer with index link: `*[← Back to Index](README.md)*`
- [ ] Consistent formatting throughout (bold, italics, lists)
- [ ] All email addresses, URLs, and position numbers formatted correctly
- [ ] Content is accurate to original document
- [ ] All original procedural/guidance information is preserved
- [ ] Professional tone maintained throughout
- [ ] No grammatical errors or typos
- [ ] Readability improved significantly from original

---

## Critical Success Factors

1. **Consistency:** Every file must follow the established template exactly. Do not deviate from the structure shown in completed examples.

2. **Completeness:** Preserve ALL procedural information and guidance from original documents. Do not omit details, regulations, or exceptions.

3. **Clarity:** Rewrite unclear passages for clarity. Use simple language. Explain acronyms on first use (in Key Definitions and in context).

4. **Organization:** Use hierarchical heading structure (H1 title, H2 sections, H3 subsections). No more than 2 levels deep for most content.

5. **Usability:** Make documents scannable. Use bullets, numbering, and bold for quick reference. Readers should be able to find information quickly.

6. **Quality:** Match the professional presentation quality of completed examples (BDE, DAC, SDX, Adult AD Waiver Initial/Renewal, Children's AD Waiver Initial).

---

## Files to Exclude from Reformatting (Already Complete)

✅ AD Waiver Transition Guide.md  
✅ Additional Excess Income Guide.md  
✅ BDE Process Guide.md  
✅ DAC Guide.md  
✅ SDX Guide.md  
✅ Adult AD Waiver Initial Determination Process.md  
✅ Adult AD Waiver Renewal Determination Process.md  
✅ Childrens AD Waiver Initial Determination Process.md  
✅ README.md (Index - do not modify)

---

## Deliverables

Upon completion, the codebase will have:

1. All 24 Medicaid/LTC documentation files professionally reformatted
2. Consistent professional presentation across all documents
3. Comprehensive Table of Contents in each file with anchor links
4. Key Definitions sections with domain-specific terminology
5. Clear procedural guidance with numbered steps and decision trees
6. Key Takeaways highlighting critical information for end users
7. Complete Forms and References sections
8. All files properly linked to README.md index

---

## Execution Instructions

1. Start with Batch 4 files (Childrens Renewal, Charitable Giving, Deprivation Process)
2. For each file:
   - Read the original file completely to understand content
   - Identify key sections, procedures, and guidance
   - Apply the professional formatting template
   - Organize content logically within the template structure
   - Ensure all original information is preserved
   - Verify against quality assurance checklist

3. Proceed to Batch 5 and Batch 6 following same process

4. Create pull request with all changes when complete

---

## Reference Examples (Review These for Quality Standards)

The following completed files demonstrate the expected quality and format:

1. **BDE Process Guide.md** - System alert procedures with 5 specific alerts documented
2. **DAC Guide.md** - Eligibility guidance with 11 detailed example scenarios
3. **SDX Guide.md** - Complex alert procedures with 9 specific alerts and decision trees
4. **Adult AD Waiver Initial Determination Process.md** - 24-step procedural process with clear workflow
5. **Adult AD Waiver Renewal Determination Process.md** - MOE Unwind specific procedures with parallel processing
6. **Childrens AD Waiver Initial Determination Process.md** - Family-centered procedural process with special provisions

Review the structure, formatting, and organization of these files as your quality benchmark. All remaining files should match this presentation level.

---

## Success Criteria

✅ All 14 remaining files professionally reformatted  
✅ All files follow established template structure  
✅ All original content preserved and accurately represented  
✅ Consistent formatting and tone across all documents  
✅ Comprehensive navigability (TOC, anchor links, clear headings)  
✅ Professional presentation suitable for official DHHS reference documentation  
✅ Quality matches or exceeds completed examples  
✅ All files linked properly to README.md index  

**Estimated Completion:** Batch 4 (3 files), Batch 5 (6 files), Batch 6 (5 files)  
**Total Files After Completion:** 24 of 24 (100%) professionally reformatted
