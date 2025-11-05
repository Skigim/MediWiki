# MediWiki - GitHub Copilot Instructions

## Project Overview

Single-file web application for Medicaid and Long-Term Care (MLTC) policy documentation. Converts PDFs to Markdown, builds into standalone HTML with fuzzy search.

**Tech Stack:** Vite, Marked.js, Fuse.js, marked-gfm-heading-id  
**Build Output:** Single 530KB HTML file  
**Status:** 19 documents converted

## Project Structure

```
MediWiki/
├── docs/              # Markdown documentation
│   ├── README.md      # Home page content
│   └── *.md          # Individual guides
├── pdfs/
│   ├── archived/              # Converted PDFs
│   └── pending-conversion/    # Unconverted PDFs
├── src/
│   ├── documents.js  # Document registry & auto-discovery
│   ├── search.js     # Fuse.js search logic
│   ├── navigation.js # Link handling & back-to-top
│   ├── renderer.js   # Markdown rendering
│   ├── main.js       # App orchestrator
│   └── style.css     # Styling
├── dist/
│   └── index.html    # Built single-file app
├── index.html        # HTML template
├── vite.config.js    # Build config
└── FORMATTING_GUIDELINES.md  # Document spec
```

## Build System

**Build command:** `npm run build`

**Features:**
- Full-text fuzzy search (Fuse.js)
- Anchor link navigation
- Cross-document linking
- Responsive sidebar nav
- Single downloadable file

## Adding New Documents

1. **Extract PDF text** (pdfplumber is installed):
   ```python
   import pdfplumber
   with pdfplumber.open('pdfs/pending-conversion/filename.pdf') as pdf:
       text = '\n\n'.join(page.extract_text() for page in pdf.pages)
   ```
2. **Convert to Markdown** (follow `FORMATTING_GUIDELINES.md`)
3. **Save** as `docs/[Document Name].md`
4. **Move** PDF from `pdfs/pending-conversion/` to `pdfs/archived/`
5. **Update `docs/README.md`** - Add link with URL-encoded filename
6. **Update `src/documents.js`:**
   ```javascript
   // Add to filenameToIdMap
   'New Document.md': 'new-doc-id',
   
   // Add to idToTitleMap
   'new-doc-id': 'New Document Title',
   ```
7. **Update `index.html`** - Add nav link in appropriate section with matching `data-doc="new-doc-id"`
8. **Build:** `npm run build`
9. **Test:** Open `dist/index.html`, verify navigation, search, and links

**Note:** Documents are auto-discovered via `import.meta.glob` - no manual imports needed!

## Document Formatting

See `FORMATTING_GUIDELINES.md` for complete specification.

**Required sections:**
1. Header with title, subtitle, overview
2. Table of Contents (6-10 items with anchors)
3. Key Definitions (8-15 terms)
4. Main Content (4-7 H2 sections)
5. Key Takeaways (6-10 checkmark items)
6. Forms and References
7. Footer: `*[← Back to Index](README.md)*`

**Standards:**
- Clear, direct language
- Active voice
- Preserve all original information
- Professional tone

## Completed Documents (19)

AD Waiver Transition Guide • Additional Excess Income Guide • Adult AD Waiver Initial/Renewal • BDE Process Guide • Charitable Giving Guidance • Children's AD Waiver Initial/Renewal • DAC Guide • Deprivation of Resources Process/Q&A • LTC Q&A • LTC Insurance Payment Recovery • Medicare Part D Co-pay • SDX Guide • Self-Employment Guide • SIMP Budgeting Q&A • Trust and Annuity Process Guide • Waiver Process Guide

Check `pdfs/pending-conversion/` for unconverted documents.

## Domain Knowledge

**Key Acronyms:** AD Waiver, BDE, DAC, DHHS, LTC, MLTC, MOE, SDX, SIMP

**Common Terms:**
- **Level of Care (LOC):** Medical necessity for waiver services
- **Deprivation of Resources:** Asset transfer within 60-month lookback
- **Excess Income:** Income above limits requiring spend-down
- **Position Number:** Case identifier in NFOCUS

## Quality Standards

**Document formatting:**
- Follow `FORMATTING_GUIDELINES.md` exactly
- Match structure of completed files
- Preserve all original content

**Integration:**
- Appears in sidebar navigation
- Searchable via fuzzy search
- Working anchor links (TOC)
- Working "Back to Index" link
- Included in single-file build

## Special Considerations

1. **Accuracy Critical:** Official government documents - preserve all policy content
2. **Cross-References:** Maintain links between related documents
3. **Regulatory Citations:** Keep all CFR, WAC, statute references accurate

---

*For formatting details: `FORMATTING_GUIDELINES.md`*
