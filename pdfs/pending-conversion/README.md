# Pending PDF Conversion

This directory contains PDF documents that are awaiting conversion to Markdown format for inclusion in the MediWiki documentation system.

## How It Works

When you upload a PDF to this directory and push to GitHub, an automated workflow will:

1. Detect the new PDF file
2. Create a GitHub Issue with conversion instructions
3. Notify `@github-copilot` to handle the conversion
4. Copilot will create a PR with the converted document

## Quick Upload

To add a new PDF for conversion:

```bash
# Copy your PDF here
cp /path/to/document.pdf pdfs/pending-conversion/

# Commit and push
git add pdfs/pending-conversion/document.pdf
git commit -m "Add document.pdf for conversion"
git push
```

The workflow will automatically trigger and create an issue for conversion.

## What Happens Next

1. **Automated Detection**: GitHub Actions detects the new PDF
2. **Issue Created**: A conversion task issue is created with:
   - Document name and location
   - Complete conversion workflow
   - Quality checklist
   - `github-copilot` label
3. **Copilot Conversion**: GitHub Copilot picks up the task and:
   - Extracts PDF text
   - Converts to Markdown following formatting guidelines
   - Updates all necessary files
   - Creates a PR for review
4. **Your Review**: Review and merge the PR
5. **PDF Archived**: After conversion, the PDF is moved to `pdfs/archived/`

## Current Status

**Pending Conversions:** Check the [Issues page](../../issues?q=is%3Aissue+is%3Aopen+label%3Apdf-conversion) for active conversion tasks.

**Completed:** See `pdfs/archived/` for converted documents.

---

*This directory is monitored by the PDF notification workflow (`.github/workflows/pdf-notification.yml`)*
