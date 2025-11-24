import { marked } from 'marked';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import { documentsData, readmeContent } from './documents.js';

// Initialize marked.js with extensions and options
// The gfmHeadingId extension supports {#custom-id} syntax
marked.use(gfmHeadingId({
  prefix: '' // No prefix for IDs
}));
marked.setOptions({
  breaks: true,
  gfm: true
});

// Render markdown document by ID
export function renderDocument(docId, contentContainer, processLinksCallback) {
  // Skip rendering if no container (home page is static HTML)
  if (!contentContainer || docId === 'home') {
    return;
  }

  const doc = documentsData[docId];
  if (!doc) {
    contentContainer.innerHTML = `
      <div class="error-message">
        <strong>Error:</strong> Document not found.
      </div>
    `;
    return;
  }

  // Show loading state briefly for smooth transition
  contentContainer.innerHTML = `
    <div class="loading">
      <div class="loading-spinner"></div>
      <p>Loading documentation...</p>
    </div>
  `;

  // Use setTimeout to show loading state briefly
  setTimeout(() => {
    const html = marked.parse(doc.content);
    contentContainer.innerHTML = html;
    
    // Post-process to fix custom ID anchors
    // The {#custom-id} syntax should create proper IDs on headings
    const headings = contentContainer.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
      const text = heading.textContent;
      const match = text.match(/\{#([^}]+)\}/);
      if (match) {
        const customId = match[1];
        // Set the ID on the heading
        heading.id = customId;
        // Remove the {#id} syntax from the visible text
        heading.textContent = text.replace(/\s*\{#[^}]+\}/, '');
      }
    });
    
    // Scroll parent container to top
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
    
    processLinksCallback();
  }, 100);
}
