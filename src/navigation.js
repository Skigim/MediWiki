import { filenameToDocId } from './documents.js';

// Back to top button reference
let backToTopBtn = null;

// Initialize navigation system
export function initNavigation(backToTopButton) {
  backToTopBtn = backToTopButton;
  
  // Set up back to top button click handler
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', scrollToTableOfContents);
  }
  
  // Hide button when hash changes
  window.addEventListener('hashchange', hideBackToTop);
}

// Process internal links in rendered markdown
export function processInternalLinks(contentContainer, loadMarkdownCallback) {
  const links = contentContainer.querySelectorAll('a');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    
    // Handle anchor links (same page navigation)
    if (href && href.startsWith('#')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          // Show back to top button when user clicks an anchor link
          showBackToTop();
        }
      });
    }
    // Handle .md file links (cross-document navigation)
    else if (href && href.endsWith('.md')) {
      // Try to find docId - check both encoded and decoded versions
      let docId = filenameToDocId[href];
      if (!docId) {
        // Try decoding the URL
        try {
          const decoded = decodeURIComponent(href);
          docId = filenameToDocId[decoded];
        } catch (err) {
          console.error('Failed to decode URL:', href, err);
        }
      }
      
      if (docId) {
        // Add event listener to navigate
        link.addEventListener('click', (e) => {
          e.preventDefault();
          
          // Find the corresponding nav link and trigger it
          const navLinks = document.querySelectorAll('.nav-link');
          const navLink = document.querySelector(`.nav-link[data-doc="${docId}"]`);
          if (navLink) {
            navLinks.forEach(l => l.classList.remove('active'));
            navLink.classList.add('active');
            window.location.hash = navLink.getAttribute('href');
            loadMarkdownCallback(docId);
          }
        });
        
        // Add a visual indicator that this link is interactive
        link.setAttribute('data-doc-link', docId);
        link.style.cursor = 'pointer';
      } else {
        // Link to unknown document - log it
        console.warn('No docId mapping found for:', href);
        link.style.color = '#dc3545'; // Red color for unmapped links
        link.title = `No mapping found for: ${href}`;
      }
    }
  });
}

// Show back to top button
function showBackToTop() {
  if (backToTopBtn) {
    backToTopBtn.classList.add('visible');
  }
}

// Hide back to top button
function hideBackToTop() {
  if (backToTopBtn) {
    backToTopBtn.classList.remove('visible');
  }
}

// Scroll to table of contents or top of page
function scrollToTableOfContents() {
  // Find the table of contents heading (usually h2 with "table-of-contents" id)
  const toc = document.getElementById('table-of-contents');
  if (toc) {
    toc.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Fallback: scroll to top of content
    const contentContainer = document.getElementById('contentContainer');
    if (contentContainer) {
      contentContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  hideBackToTop();
}
