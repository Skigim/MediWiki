#!/usr/bin/env python3
"""
Format converted PDF markdown files for consistency and readability.
Applies professional documentation standards.
"""

import re
from pathlib import Path
from typing import List, Tuple

def extract_title(content: str) -> str:
    """Extract the main title from the document."""
    match = re.search(r'^# (.+)$', content, re.MULTILINE)
    return match.group(1) if match else "Document"

def extract_metadata(content: str) -> Tuple[str, int]:
    """Extract PDF filename and page count from metadata."""
    # Look for original PDF metadata
    filename_match = re.search(r'Converted from PDF: (.+?)\.pdf', content)
    pages_match = re.search(r'Total Pages: (\d+)', content)
    
    # Fallback: try to get from Source field (after formatting)
    if not filename_match:
        source_match = re.search(r'\*Source: (.+?)\*', content)
        if source_match:
            filename = source_match.group(1)
        else:
            filename = ""
    else:
        filename = filename_match.group(1)
    
    pages = int(pages_match.group(1)) if pages_match else 0
    
    return filename, pages

def remove_page_markers(content: str) -> str:
    """Remove 'Page X' section headers and excessive page numbers."""
    # Remove "## Page X" markers
    content = re.sub(r'^## Page \d+\n+', '', content, flags=re.MULTILINE)
    # Remove standalone page numbers
    content = re.sub(r'^\d+\n+', '', content, flags=re.MULTILINE)
    return content

def extract_sections(content: str) -> List[str]:
    """Extract meaningful section headers (H2 and H3)."""
    sections = []
    for match in re.finditer(r'^## (.+)$', content, re.MULTILINE):
        sections.append(match.group(1))
    return sections

def build_toc(sections: List[str]) -> str:
    """Build a table of contents from sections."""
    if not sections:
        return ""
    
    toc = "\n---\n\n## Table of Contents\n\n"
    for section in sections:
        # Create anchor link
        anchor = section.lower().replace(' ', '-').replace('(', '').replace(')', '')
        toc += f"- [{section}](#{anchor})\n"
    
    return toc + "\n---\n"

def format_document(content: str) -> str:
    """Apply formatting standards to document."""
    
    # Extract metadata before any modifications
    title = extract_title(content)
    filename, pages = extract_metadata(content)
    
    # Extract sections before cleaning
    sections = extract_sections(content)
    
    # Remove ALL metadata lines (both old format and new format)
    content = re.sub(r'\*Converted from PDF: .+?\*\n', '', content)
    content = re.sub(r'\*Total Pages: \d+\*\n', '', content)
    content = re.sub(r'\*Source: .+?\*\n', '', content)
    content = re.sub(r'\*Pages: \d+\*\n', '', content)
    
    # Remove page markers
    content = remove_page_markers(content)
    
    # Remove the first H1 title since we'll rebuild it cleanly
    content = re.sub(r'^# .+?\n+', '', content)
    
    # Clean up excessive blank lines
    content = re.sub(r'\n{4,}', '\n\n\n', content)
    
    # Rebuild document with clean metadata
    header = f"# {title}\n\n"
    if filename:
        header += f"*Source: {filename}*\n"
    if pages > 0:
        header += f"*Pages: {pages}*\n"
    header += "\n"
    
    # Add TOC if we have sections
    toc = build_toc(sections) if len(sections) > 2 else ""
    
    # Reconstruct
    formatted = header + toc + content.strip() + "\n\n---\n\n"
    formatted += "*[← Back to Index](README.md)*\n"
    
    return formatted

def main():
    """Process all markdown files in docs directory."""
    docs_dir = Path(__file__).parent.parent / "docs"
    
    if not docs_dir.exists():
        print(f"Error: docs directory not found at {docs_dir}")
        return 1
    
    md_files = sorted(docs_dir.glob("*.md"))
    
    if not md_files:
        print("No markdown files found.")
        return 1
    
    print(f"Found {len(md_files)} markdown files to format\n")
    
    for filepath in md_files:
        print(f"Processing: {filepath.name}")
        
        try:
            # Read original content
            with open(filepath, 'r', encoding='utf-8') as f:
                original = f.read()
            
            # Format
            formatted = format_document(original)
            
            # Write back
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(formatted)
            
            print(f"  ✓ Formatted successfully\n")
            
        except Exception as e:
            print(f"  ✗ Error: {e}\n")
            return 1
    
    print(f"✓ Successfully formatted {len(md_files)} files")
    return 0

if __name__ == '__main__':
    import sys
    sys.exit(main())
