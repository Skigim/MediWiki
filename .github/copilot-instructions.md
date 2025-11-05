# MediWiki - GitHub Copilot Instructions

## Project Overview

MediWiki is a consolidated documentation repository for Medicaid and Long-Term Care (MLTC) policy and process guides. The project converts raw PDF documentation into professionally formatted, highly navigable Markdown reference documents with consistent structure and excellent readability.

**Project Type:** Documentation Repository  
**Primary Language:** Markdown  
**Status:** Active development - 9 of 24 files completed (37.5%)

## Project Structure

```
MediWiki/
├── docs/                    # Formatted Markdown documentation files
├── pdfs/                    # Source PDF files (24 documents)
├── README.md               # Repository overview
└── CODING_AGENT_PROMPT.md  # Detailed formatting specifications
```

## Core Responsibilities

When assisting with this project, GitHub Copilot should:

### 1. Document Formatting
- Follow the **Professional Formatting Template** exactly as specified in `CODING_AGENT_PROMPT.md`
- Maintain consistency with completed reference documents (BDE Process Guide, DAC Guide, SDX Guide, Adult/Children AD Waiver files)
- Preserve ALL original content while improving clarity and organization
- Use the established structure: Header → TOC → Definitions → Main Content → Key Takeaways → References → Footer

### 2. Content Standards
- **Clarity:** Use clear, direct language; replace jargon with explanations
- **Active Voice:** Prefer "The worker must..." over passive constructions
- **Consistency:** Maintain parallel structure for similar procedures
- **Accuracy:** Preserve all procedural information, regulations, and exceptions from original documents

### 3. Formatting Rules

#### Document Structure (Required)
1. **Header Section** with title, subtitle, and 2-3 paragraph overview
2. **Table of Contents** with 6-10 numbered items and anchor links
3. **Key Definitions** section with 8-15 domain-specific terms (bold term + full description)
4. **Legal Authority & Purpose** (if applicable)
5. **Main Content Sections** (4-7 H2 sections with H3 subsections)
6. **Key Takeaways** section with 6-10 checkmark (✓) items
7. **Forms and References** section
8. **Footer** with back-to-index link

#### Lists and Numbers
- Use **numbered lists** for sequential procedures
- Use **bulleted lists** for options or non-sequential items
- Use **nested numbering** for sub-steps (1., 1.1, 1.1.1)

#### Emphasis and References
- **Bold** for: form names, position numbers, critical requirements
- *Italic* for: emphasis on definitions or key concepts
- Format forms as: `Form Name (Form Code)` or `[Form Code] Form Name`
- Format emails as: `dhhs.email@nebraska.gov`

#### Conditional Procedures
Use clear if/then structure:
```markdown
**If [condition]:**
- Action 1
- Action 2

**If NOT [condition]:**
- Action 3
```

### 4. Document Types

#### Procedural Documents (Processes, Determinations)
- Focus: Step-by-step workflows with numbered steps
- Include: Decision trees, timelines, form references
- Example: Adult AD Waiver Initial Determination Process

#### Guidance Documents (Guides, Processes)
- Focus: Topic-organized reference information
- Include: Real-world scenarios, practical tips
- Example: BDE Process Guide, DAC Guide

#### Q&A Documents
- Focus: Topic-based sections with related Q&As
- Include: "Why" explanations, cross-references, examples
- Example: Long-Term Care Q&A, SIMP Budgeting Q&A

## Quality Checklist

For every document edit or creation, verify:

- [ ] Header with title, subtitle, and overview (2-3 paragraphs)
- [ ] Table of Contents with anchor links (6-10 items)
- [ ] Key Definitions section (8-15 terms with descriptions)
- [ ] Procedures organized with numbered steps
- [ ] Decision trees for branching procedures
- [ ] All forms listed in Forms and References section
- [ ] Key Takeaways section (6-10 checkmark items)
- [ ] Footer with index link
- [ ] Consistent formatting (bold, italics, lists)
- [ ] All original information preserved
- [ ] Professional tone maintained
- [ ] No grammatical errors

## Completed Files (Reference Standards)

✅ AD Waiver Transition Guide.md  
✅ Additional Excess Income Guide.md  
✅ BDE Process Guide.md  
✅ DAC Guide.md  
✅ SDX Guide.md  
✅ Adult AD Waiver Initial Determination Process.md  
✅ Adult AD Waiver Renewal Determination Process.md  
✅ Childrens AD Waiver Initial Determination Process.md  
✅ docs/README.md (Index - do not modify without consultation)

## Remaining Files (Priority Order)

### Batch 4 (High Priority)
1. Childrens AD Waiver Renewal Determination Process.md
2. Charitable Giving Guidance.md
3. Deprivation of Resources Process Guide.md

### Batch 5 (Medium Priority)
4. Deprivation of Resources Q&A.md
5. Long-Term Care (LTC) Q&A.md
6. LTC Insurance Payment Recovery Process.md
7. Medical Documentation Guide for Members.md
8. Medical Documentation Guide for Parents and Guardians.md

### Batch 6 (Lower Priority)
9-14. Medical Documentation Guides (Providers, Bilingual versions)
15. Medicare Part D Co-pay Deductions.md
16. SIMP Budgeting Q & A.md
17. Trust and Annuity Process Guide.md
18. Waiver Process Guide.md

## Domain Knowledge

### Key Acronyms
- **AD Waiver:** Aged & Disabled Waiver
- **BDE:** Beneficiary Data Exchange
- **DAC:** Disabled Adult Child
- **DHHS:** Department of Health and Human Services
- **LTC:** Long-Term Care
- **MLTC:** Medicaid Long-Term Care
- **MOE:** Maintenance of Effort
- **SDX:** State Data Exchange
- **SIMP:** Spousal Impoverishment

### Common Terms
- **Level of Care (LOC):** Medical necessity determination for waiver services
- **Deprivation of Resources:** Transfer of assets within 60-month lookback period
- **Excess Income:** Income above program limits requiring spend-down
- **Position Number:** Unique identifier for cases in NFOCUS system

## Git Workflow

- **Main Branch:** `main` (protected)
- **Commit Messages:** Use clear, descriptive messages (e.g., "Format: Complete Children's AD Waiver Renewal process")
- **Pull Requests:** Create PR for batch completions with quality checklist verification
- **File Naming:** Maintain exact filenames from original PDFs (with .md extension)

## Special Considerations

1. **Accuracy is Critical:** These are official government policy documents. Do not invent or modify policy content.
2. **Preserve All Information:** Even if content seems redundant, preserve original procedural details.
3. **Cross-References:** Maintain and enhance cross-references between related documents.
4. **Bilingual Content:** Preserve both English and Spanish content in bilingual guides.
5. **Regulatory Citations:** Keep all CFR, WAC, and statute references accurate and complete.

## When Asked to Help

### For Document Formatting
1. Read the original file completely
2. Review similar completed documents for quality standards
3. Apply the professional formatting template
4. Verify against quality checklist
5. Ensure all original content is preserved

### For Project Management
1. Reference `CODING_AGENT_PROMPT.md` for batch priorities
2. Track progress against 24-file completion goal
3. Maintain consistency across all documents
4. Flag any ambiguities or missing information

## Success Criteria

A successfully formatted document should:
- Match the structure and quality of completed reference examples
- Be easily navigable with clear TOC and headings
- Preserve all original policy/procedural information
- Use professional, clear language appropriate for government documentation
- Include comprehensive definitions for domain-specific terms
- Provide actionable takeaways for end users
- Be ready for use as official DHHS reference documentation

---

*For detailed formatting specifications, always refer to `CODING_AGENT_PROMPT.md`*
