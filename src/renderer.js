import { marked } from 'marked';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import { documentsData, readmeContent } from './documents.js';

// Initialize marked.js with extensions and options
marked.use(gfmHeadingId());
marked.setOptions({
  breaks: true,
  gfm: true
});

// Render markdown document by ID
export function renderDocument(docId, contentContainer, processLinksCallback) {
  if (docId === 'home') {
    renderWelcomeScreen(contentContainer, processLinksCallback);
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
    contentContainer.innerHTML = `<div class="markdown-content">${html}</div>`;
    contentContainer.scrollTop = 0;
    processLinksCallback();
  }, 100);
}

// Render welcome screen with README content
function renderWelcomeScreen(contentContainer, processLinksCallback) {
  // Parse the README markdown
  const html = marked.parse(readmeContent);
  
  // Wrap it in a special welcome container with enhanced styling
  contentContainer.innerHTML = `<div class="welcome-page markdown-content">${html}</div>`;
  contentContainer.scrollTop = 0;
  
  // Process internal links in the README
  processLinksCallback();
}
