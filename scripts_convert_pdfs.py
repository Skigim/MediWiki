#!/usr/bin/env python3
"""
Convert PDF files to Markdown format
Processes all PDFs in the repository and outputs to docs/ folder
"""

import os
import sys
from pathlib import Path
import pdfplumber
import re

def clean_text(text):
    """Clean extracted text for better Markdown formatting"""
    if not text:
        return ""
    
    # Remove excessive whitespace
    text = re.sub(r'\n{3,}', '\n\n', text)
    text = re.sub(r' {2,}', ' ', text)
    
    return text.strip()

def extract_pdf_to_markdown(pdf_path, output_dir='docs'):
    """Extract text from PDF and convert to Markdown"""
    
    pdf_path = Path(pdf_path)
    output_dir = Path(output_dir)
    output_dir.mkdir(exist_ok=True)
    
    # Create output filename
    output_filename = pdf_path.stem + '.md'
    output_path = output_dir / output_filename
    
    print(f"Processing: {pdf_path}")
    
    try:
        with pdfplumber.open(pdf_path) as pdf:
            markdown_content = []
            
            # Add header with metadata
            markdown_content.append(f"# {pdf_path.stem.replace('-', ' ').replace('_', ' ')}\n")
            markdown_content.append(f"*Converted from PDF: {pdf_path.name}*\n")
            markdown_content.append(f"*Total Pages: {len(pdf.pages)}*\n")
            markdown_content.append("---\n")
            
            # Extract text from each page
            for page_num, page in enumerate(pdf.pages, 1):
                text = page.extract_text()
                
                if text:
                    cleaned_text = clean_text(text)
                    if cleaned_text:
                        # Add page marker for long documents
                        if len(pdf.pages) > 5:
                            markdown_content.append(f"\n## Page {page_num}\n")
                        markdown_content.append(cleaned_text)
                        markdown_content.append("\n")
            
            # Write to file
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(markdown_content))
            
            print(f"✓ Created: {output_path}")
            return output_path
            
    except Exception as e:
        print(f"✗ Error processing {pdf_path}: {e}", file=sys.stderr)
        return None

def find_pdfs(root_dir='.'):
    """Find all PDF files in repository"""
    root = Path(root_dir)
    
    # Exclude common directories
    exclude_dirs = {'.git', 'node_modules', '__pycache__', '.venv', 'venv'}
    
    pdfs = []
    for pdf in root.rglob('*.pdf'):
        # Check if any parent directory is in exclude list
        if not any(part in exclude_dirs for part in pdf.parts):
            pdfs.append(pdf)
    
    return pdfs

def main():
    """Main conversion process"""
    print("🔍 Searching for PDF files...")
    
    pdfs = find_pdfs()
    
    if not pdfs:
        print("No PDF files found.")
        return 0
    
    print(f"Found {len(pdfs)} PDF file(s)")
    
    success_count = 0
    for pdf_path in pdfs:
        result = extract_pdf_to_markdown(pdf_path)
        if result:
            success_count += 1
    
    print(f"\n✓ Successfully converted {success_count}/{len(pdfs)} files")
    return 0 if success_count == len(pdfs) else 1

if __name__ == '__main__':
    sys.exit(main())