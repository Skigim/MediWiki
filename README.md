# MediWiki
*Professional Medicaid & Long-Term Care Documentation Repository*

## Overview

MediWiki is a consolidated documentation repository that converts Medicaid and Long-Term Care (MLTC) policy documents from PDF format into professionally formatted, highly navigable Markdown reference documents. The project emphasizes consistent structure, comprehensive organization, and excellent readability for government policy documentation.

**Status:** Active Development - 9 of 24 files completed (37.5%)

## Project Structure

```
MediWiki/
├── docs/                    # Formatted Markdown documentation (24 files)
├── pdfs/                    # Source PDF files (24 documents)
├── .github/                 # GitHub configuration
│   └── copilot-instructions.md  # AI assistant instructions
├── README.md               # This file
└── CODING_AGENT_PROMPT.md  # Detailed formatting specifications
```

## Quick Start

### Prerequisites

- Git
- A Markdown viewer or editor (VS Code recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Skigim/MediWiki.git
   cd MediWiki
   ```

2. **View documentation:**
   ```bash
   cd docs
   # Open any .md file in your preferred Markdown viewer
   ```

## Usage

### Viewing Documentation

All documentation is in Markdown format in the `docs/` directory. You can:

- Browse files directly on GitHub
- Clone the repository and view locally in any Markdown viewer
- Use VS Code with Markdown preview
- View the documentation index in `docs/README.md`

## Documentation Standards

All documents follow a professional template with:

1. **Header** - Title, subtitle, and overview
2. **Table of Contents** - With anchor links
3. **Key Definitions** - Domain-specific terminology
4. **Main Content** - Organized sections with procedures
5. **Key Takeaways** - Critical points summary
6. **Forms & References** - Related resources
7. **Footer** - Navigation back to index

For detailed formatting specifications, see [`CODING_AGENT_PROMPT.md`](CODING_AGENT_PROMPT.md).

## Completed Documents

✅ AD Waiver Transition Guide  
✅ Additional Excess Income Guide  
✅ BDE Process Guide  
✅ DAC Guide  
✅ SDX Guide  
✅ Adult AD Waiver Initial Determination Process  
✅ Adult AD Waiver Renewal Determination Process  
✅ Childrens AD Waiver Initial Determination Process  

View all documents in the [`docs/`](docs/) directory.

## Contributing

### Document Formatting Workflow

1. Review `CODING_AGENT_PROMPT.md` for formatting standards
2. Check completed documents for quality reference
3. Format documents following the established template
4. Verify against quality checklist
5. Submit pull request with changes

### Quality Checklist

- [ ] Header with title, subtitle, overview
- [ ] Table of contents with anchor links
- [ ] Key definitions section (8-15 terms)
- [ ] Numbered procedures for sequential steps
- [ ] Decision trees for branching logic
- [ ] Forms and references listed
- [ ] Key takeaways section (6-10 items)
- [ ] Footer with index link
- [ ] Consistent formatting throughout
- [ ] All original content preserved

## Development

### Git Workflow

- **Main Branch:** `main` (protected)
- **Commit Format:** "Format: Complete [Document Name]"
- **Pull Requests:** Include quality checklist verification

## Domain Knowledge

### Key Acronyms

- **AD Waiver** - Aged & Disabled Waiver
- **BDE** - Beneficiary Data Exchange
- **DAC** - Disabled Adult Child
- **DHHS** - Department of Health and Human Services
- **LTC** - Long-Term Care
- **MLTC** - Medicaid Long-Term Care
- **SDX** - State Data Exchange
- **SIMP** - Spousal Impoverishment

### Document Categories

- **Procedural Documents** - Step-by-step processes
- **Guidance Documents** - Topic-organized references
- **Q&A Documents** - Question-answer format guides

## License

This repository contains government policy documentation. All content is derived from official DHHS sources and maintains accuracy to original policy documents.

## Support

For questions or issues:

1. Check existing documentation in `docs/`
2. Review formatting guide in `CODING_AGENT_PROMPT.md`
3. Consult GitHub Copilot instructions in `.github/copilot-instructions.md`
4. Open an issue on GitHub

## Acknowledgments

- **Source Organization:** Nebraska Department of Health and Human Services (DHHS)
- **Document Type:** Medicaid and Long-Term Care Policy Guides
- **Format:** Professional Markdown documentation

---

*Last Updated: November 2025*  
*Repository: [github.com/Skigim/MediWiki](https://github.com/Skigim/MediWiki)*

