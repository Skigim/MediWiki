#!/usr/bin/env python3
"""
Clean and professionally format converted PDF markdown files.
Removes metadata duplication, page markers, and reorganizes content.
"""

import re
from pathlib import Path

def clean_markdown(content: str) -> str:
    """Apply professional formatting to markdown content."""
    
    # Remove all duplicate metadata lines
    content = re.sub(r'\*Source: [^*]*\*\n', '', content)
    content = re.sub(r'\*Pages: \d+\*\n', '', content)
    
    # Remove broken TOC that references page markers
    lines = content.split('\n')
    in_toc = False
    new_lines = []
    
    for line in lines:
        # Skip TOC pointing to pages
        if '## Table of Contents' in line and any('Page' in l for l in lines[lines.index(line):lines.index(line)+20]):
            in_toc = True
            continue
        if in_toc and line.startswith('- [Page'):
            continue
        if in_toc and line.strip() == '---':
            in_toc = False
            continue
        if not in_toc or not line.startswith('- [Page'):
            new_lines.append(line)
    
    content = '\n'.join(new_lines)
    
    # Remove page number markers (## Page X)
    content = re.sub(r'^## Page \d+\s*\n', '', content, flags=re.MULTILINE)
    
    # Remove standalone page numbers on their own line
    content = re.sub(r'^\d+\s*\n', '', content, flags=re.MULTILINE)
    
    # Remove orphaned "MLTC" date stamps that appear mid-document
    content = re.sub(r'MLTC \d+/\d+\s*\n', '', content)
    content = re.sub(r'NEW MLTC PAS \d+/\d+\s*\n', '', content)
    content = re.sub(r'MLTC PAS Updated \d+/\d+\s*\n', '', content)
    
    # Remove duplicate H1 titles
    h1_matches = list(re.finditer(r'^# [^\n]+$', content, re.MULTILINE))
    if len(h1_matches) > 1:
        # Keep first, remove duplicates
        for match in reversed(h1_matches[1:]):
            content = content[:match.start()] + content[match.end()+1:]
    
    # Clean up excessive blank lines
    content = re.sub(r'\n{4,}', '\n\n\n', content)
    
    # Remove triple back-to-back index links
    content = re.sub(r'(\*\[← Back to Index\]\(README\.md\)\*\n)+', '', content)
    
    # Ensure single ending  
    content = content.rstrip() + '\n\n---\n\n*[← Back to Index](README.md)*\n'
    
    return content

def main():
    docs_dir = Path(__file__).parent.parent / "docs"
    
    if not docs_dir.exists():
        print(f"Error: docs directory not found at {docs_dir}")
        return 1
    
    md_files = sorted([f for f in docs_dir.glob("*.md") if f.name != "README.md"])
    
    print(f"Cleaning {len(md_files)} markdown files...\n")
    
    for filepath in md_files:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                original = f.read()
            
            cleaned = clean_markdown(original)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(cleaned)
            
            print(f"✓ {filepath.name}")
            
        except Exception as e:
            print(f"✗ {filepath.name}: {e}")
            return 1
    
    print(f"\n✓ Successfully cleaned {len(md_files)} files")
    return 0

if __name__ == '__main__':
    import sys
    sys.exit(main())
