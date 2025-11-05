# MediWiki Document Formatting Specification

## Document Structure (Required)

### 1. Header
```markdown
# Document Title
**Descriptive Subtitle**

## Overview
2-3 paragraphs: purpose, scope, who should use, regulatory context

**Effective Date:** [Date]  
**Scope:** [Applicability]
```

### 2. Table of Contents
- 6-10 numbered items with anchor links
- Format: `1. [Section Name](#section-name)`

### 3. Key Definitions
- 8-15 domain-specific terms
- **Bold Term** – Full description with context
- Alphabetized or logically grouped

### 4. Legal Authority & Purpose (if applicable)
- Regulations/statutes with citations
- Purpose and scope statement

### 5. Main Content (4-7 H2 sections)

**Procedural Documents:**
- Numbered steps for sequences
- Decision trees for branches
- Explicit if/then statements

**Guidance Documents:**
- Topic-organized
- Practical examples
- Form/system references

**Q&A Documents:**
- Topic-based sections
- Related questions grouped
- Cross-references

### 6. Key Takeaways
- 6-10 checkmark (✓) items
- Format: `✓ **Title:** Explanation`
- Actionable and practical

### 7. Forms and References
```markdown
**Forms Used:**
- [Form Code] Form Name

**Related Guides:**
- Guide Name
```

### 8. Footer
```markdown
*[← Back to Index](README.md)*
```

---

## Formatting Rules

### Lists
- **Numbered:** Sequential procedures
- **Bulleted:** Options/non-sequential
- **Nested:** Sub-steps (1.1, 1.1.1)

### Emphasis
- **Bold:** Forms, position numbers, critical requirements
- *Italic:* Definitions, emphasis
- `Code:` Form codes, emails

### Conditional Logic
```markdown
**If [condition]:**
- Action 1
- Action 2

**If NOT [condition]:**
- Action 3
```

---

## Content Standards

- **Clarity:** Direct language, explain jargon
- **Active Voice:** "Worker must..." not passive
- **Consistency:** Parallel structure
- **Accuracy:** Preserve all original information
- **Cross-references:** Link related documents

---

## Quality Checklist

- [ ] Header with title, subtitle, overview
- [ ] Table of Contents (6-10 items)
- [ ] Key Definitions (8-15 terms)
- [ ] Main sections organized logically
- [ ] Key Takeaways (6-10 items)
- [ ] Forms and References listed
- [ ] Footer with back link
- [ ] All original content preserved
- [ ] Professional tone maintained
- [ ] No grammatical errors
