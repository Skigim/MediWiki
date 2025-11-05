import { marked } from 'marked';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import Fuse from 'fuse.js';
import './style.css';

// Import all markdown files as raw text
import readme from '../docs/README.md?raw';
import adWaiverTransition from '../docs/AD Waiver Transition Guide.md?raw';
import additionalExcessIncome from '../docs/Additional Excess Income Guide.md?raw';
import adultAdInitial from '../docs/Adult AD Waiver Initial Determination Process.md?raw';
import adultAdRenewal from '../docs/Adult AD Waiver Renewal Determination Process.md?raw';
import bdeProcess from '../docs/BDE Process Guide.md?raw';
import charitableGiving from '../docs/Charitable Giving Guidance.md?raw';
import childrensAdInitial from '../docs/Childrens AD Waiver Initial Determination Process.md?raw';
import childrensAdRenewal from '../docs/Childrens AD Waiver Renewal Determination Process.md?raw';
import dacGuide from '../docs/DAC Guide.md?raw';
import deprivationProcess from '../docs/Deprivation of Resources Process Guide.md?raw';
import deprivationQA from '../docs/Deprivation of Resources Q&A.md?raw';
import ltcQA from '../docs/Long-Term Care (LTC) Q&A.md?raw';
import ltcInsurance from '../docs/LTC Insurance Payment Recovery Process.md?raw';
import medicarePartD from '../docs/Medicare Part D Co-pay Deductions.md?raw';
import sdxGuide from '../docs/SDX Guide.md?raw';
import selfEmployment from '../docs/Self-Employment Guide.md?raw';
import simpBudgeting from '../docs/SIMP Budgeting Q & A.md?raw';
import trustAnnuity from '../docs/Trust and Annuity Process Guide.md?raw';
import waiverProcess from '../docs/Waiver Process Guide.md?raw';

// Document data structure with embedded content
const documentsData = {
  'ad-waiver-transition': { title: 'AD Waiver Transition Guide', content: adWaiverTransition },
  'additional-excess-income': { title: 'Additional Excess Income Guide', content: additionalExcessIncome },
  'adult-ad-initial': { title: 'Adult AD Waiver Initial Process', content: adultAdInitial },
  'adult-ad-renewal': { title: 'Adult AD Waiver Renewal Process', content: adultAdRenewal },
  'bde-process': { title: 'BDE Process Guide', content: bdeProcess },
  'charitable-giving': { title: 'Charitable Giving Guidance', content: charitableGiving },
  'childrens-ad-initial': { title: 'Children\'s AD Waiver Initial Process', content: childrensAdInitial },
  'childrens-ad-renewal': { title: 'Children\'s AD Waiver Renewal Process', content: childrensAdRenewal },
  'dac-guide': { title: 'DAC Guide', content: dacGuide },
  'deprivation-process': { title: 'Deprivation of Resources Process', content: deprivationProcess },
  'deprivation-qa': { title: 'Deprivation of Resources Q&A', content: deprivationQA },
  'ltc-qa': { title: 'Long-Term Care Q&A', content: ltcQA },
  'ltc-insurance': { title: 'LTC Insurance Payment Recovery', content: ltcInsurance },
  'medicare-part-d': { title: 'Medicare Part D Co-pay Deductions', content: medicarePartD },
  'sdx-guide': { title: 'SDX Guide', content: sdxGuide },
  'self-employment': { title: 'Self-Employment Guide', content: selfEmployment },
  'simp-budgeting': { title: 'SIMP Budgeting Q&A', content: simpBudgeting },
  'trust-annuity': { title: 'Trust and Annuity Process Guide', content: trustAnnuity },
  'waiver-process': { title: 'Waiver Process Guide', content: waiverProcess }
};

// Initialize marked.js options
marked.use(gfmHeadingId());
marked.setOptions({
  breaks: true,
  gfm: true
});

// Get elements
const contentContainer = document.getElementById('contentContainer');
const navLinks = document.querySelectorAll('.nav-link');
const searchInput = document.getElementById('searchInput');
const backToTopBtn = document.getElementById('backToTop');

// Create search index for Fuse.js
const searchIndex = Object.keys(documentsData).map(docId => ({
  id: docId,
  title: documentsData[docId].title,
  content: documentsData[docId].content
}));

// Initialize Fuse.js with search options
const fuse = new Fuse(searchIndex, {
  keys: [
    { name: 'title', weight: 2 },
    { name: 'content', weight: 1 }
  ],
  threshold: 0.3,
  includeScore: true,
  includeMatches: true,
  minMatchCharLength: 3,
  ignoreLocation: true
});

// Load and display markdown
function loadMarkdown(docId) {
  if (docId === 'home') {
    showWelcomeScreen();
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
    processInternalLinks();
  }, 100);
}

// Show welcome screen
function showWelcomeScreen() {
  // Parse the README markdown
  const html = marked.parse(readme);
  
  // Wrap it in a special welcome container with enhanced styling
  contentContainer.innerHTML = `<div class="welcome-page markdown-content">${html}</div>`;
  contentContainer.scrollTop = 0;
  
  // Process internal links in the README
  processInternalLinks();
}

// Map markdown filenames to document IDs
const filenameToDocId = {
  'README.md': 'home',
  'AD Waiver Transition Guide.md': 'ad-waiver-transition',
  'AD%20Waiver%20Transition%20Guide.md': 'ad-waiver-transition',
  'Additional Excess Income Guide.md': 'additional-excess-income',
  'Additional%20Excess%20Income%20Guide.md': 'additional-excess-income',
  'Adult AD Waiver Initial Determination Process.md': 'adult-ad-initial',
  'Adult%20AD%20Waiver%20Initial%20Determination%20Process.md': 'adult-ad-initial',
  'Adult AD Waiver Renewal Determination Process.md': 'adult-ad-renewal',
  'Adult%20AD%20Waiver%20Renewal%20Determination%20Process.md': 'adult-ad-renewal',
  'BDE Process Guide.md': 'bde-process',
  'BDE%20Process%20Guide.md': 'bde-process',
  'Charitable Giving Guidance.md': 'charitable-giving',
  'Charitable%20Giving%20Guidance.md': 'charitable-giving',
  'Childrens AD Waiver Initial Determination Process.md': 'childrens-ad-initial',
  'Childrens%20AD%20Waiver%20Initial%20Determination%20Process.md': 'childrens-ad-initial',
  'Childrens AD Waiver Renewal Determination Process.md': 'childrens-ad-renewal',
  'Childrens%20AD%20Waiver%20Renewal%20Determination%20Process.md': 'childrens-ad-renewal',
  'DAC Guide.md': 'dac-guide',
  'DAC%20Guide.md': 'dac-guide',
  'Deprivation of Resources Process Guide.md': 'deprivation-process',
  'Deprivation%20of%20Resources%20Process%20Guide.md': 'deprivation-process',
  'Deprivation of Resources Q&A.md': 'deprivation-qa',
  'Deprivation%20of%20Resources%20Q&A.md': 'deprivation-qa',
  'Long-Term Care (LTC) Q&A.md': 'ltc-qa',
  'Long-Term%20Care%20(LTC)%20Q&A.md': 'ltc-qa',
  'LTC Insurance Payment Recovery Process.md': 'ltc-insurance',
  'LTC%20Insurance%20Payment%20Recovery%20Process.md': 'ltc-insurance',
  'Medicare Part D Co-pay Deductions.md': 'medicare-part-d',
  'Medicare%20Part%20D%20Co-pay%20Deductions.md': 'medicare-part-d',
  'SDX Guide.md': 'sdx-guide',
  'SDX%20Guide.md': 'sdx-guide',
  'Self-Employment Guide.md': 'self-employment',
  'Self-Employment%20Guide.md': 'self-employment',
  'SIMP Budgeting Q & A.md': 'simp-budgeting',
  'SIMP%20Budgeting%20Q%20&%20A.md': 'simp-budgeting',
  'Trust and Annuity Process Guide.md': 'trust-annuity',
  'Trust%20and%20Annuity%20Process%20Guide.md': 'trust-annuity',
  'Waiver Process Guide.md': 'waiver-process',
  'Waiver%20Process%20Guide.md': 'waiver-process'
};

// Process internal links in markdown
function processInternalLinks() {
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
          // If decoding fails, continue
          console.error('Failed to decode URL:', href, err);
        }
      }
      
      if (docId) {
        // Add event listener to navigate
        link.addEventListener('click', (e) => {
          e.preventDefault();
          
          // Find the corresponding nav link and trigger it
          const navLink = document.querySelector(`.nav-link[data-doc="${docId}"]`);
          if (navLink) {
            navLinks.forEach(l => l.classList.remove('active'));
            navLink.classList.add('active');
            window.location.hash = navLink.getAttribute('href');
            loadMarkdown(docId);
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

// Handle navigation clicks
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const docId = link.getAttribute('data-doc');
    
    // Update active state
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    
    // Update URL hash
    const hash = link.getAttribute('href');
    window.location.hash = hash;
    
    // Load content
    loadMarkdown(docId);
  });
});

// Handle browser back/forward
window.addEventListener('hashchange', () => {
  const hash = window.location.hash || '#home';
  const link = document.querySelector(`a[href="${hash}"]`);
  if (link) {
    const docId = link.getAttribute('data-doc');
    
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    
    loadMarkdown(docId);
  }
});

// Search functionality with Fuse.js
let searchResultsContainer = null;

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.trim();
  const allNavItems = document.querySelectorAll('.nav-item');
  
  // Clear previous search results container
  if (searchResultsContainer) {
    searchResultsContainer.remove();
    searchResultsContainer = null;
  }
  
  if (searchTerm.length === 0) {
    // Show all nav items when search is empty
    allNavItems.forEach(item => {
      item.style.display = 'block';
    });
    return;
  }
  
  if (searchTerm.length < 3) {
    // For short queries, just filter nav items by title
    allNavItems.forEach(item => {
      const link = item.querySelector('.nav-link');
      const text = link.textContent.toLowerCase();
      
      if (text.includes(searchTerm.toLowerCase())) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
    return;
  }
  
  // For longer queries, use Fuse.js for fuzzy search
  const results = fuse.search(searchTerm);
  
  if (results.length > 0) {
    // Create search results container
    searchResultsContainer = document.createElement('div');
    searchResultsContainer.className = 'search-results';
    searchResultsContainer.innerHTML = `
      <div class="search-results-header">
        <strong>Search Results</strong> (${results.length} found)
      </div>
    `;
    
    // Add results
    results.slice(0, 10).forEach(result => {
      const docId = result.item.id;
      const title = result.item.title;
      const score = Math.round((1 - result.score) * 100);
      
      // Find matching content snippet
      let snippet = '';
      if (result.matches) {
        const contentMatch = result.matches.find(m => m.key === 'content');
        if (contentMatch && contentMatch.value) {
          const matchIndex = contentMatch.indices[0][0];
          const start = Math.max(0, matchIndex - 60);
          const end = Math.min(contentMatch.value.length, matchIndex + 60);
          snippet = '...' + contentMatch.value.substring(start, end) + '...';
        }
      }
      
      const resultItem = document.createElement('div');
      resultItem.className = 'search-result-item';
      resultItem.innerHTML = `
        <div class="search-result-title">${title}</div>
        ${snippet ? `<div class="search-result-snippet">${snippet}</div>` : ''}
        <div class="search-result-score">Relevance: ${score}%</div>
      `;
      
      resultItem.addEventListener('click', () => {
        // Navigate to the document
        const navLink = document.querySelector(`.nav-link[data-doc="${docId}"]`);
        if (navLink) {
          navLinks.forEach(l => l.classList.remove('active'));
          navLink.classList.add('active');
          window.location.hash = navLink.getAttribute('href');
          loadMarkdown(docId);
          
          // Clear search
          searchInput.value = '';
          searchResultsContainer.remove();
          searchResultsContainer = null;
          allNavItems.forEach(item => {
            item.style.display = 'block';
          });
        }
      });
      
      searchResultsContainer.appendChild(resultItem);
    });
    
    // Insert after search box
    const searchBox = document.querySelector('.search-box');
    searchBox.parentElement.insertBefore(searchResultsContainer, searchBox.nextSibling);
    
    // Hide all nav items to show only search results
    allNavItems.forEach(item => {
      item.style.display = 'none';
    });
  } else {
    // No results found
    allNavItems.forEach(item => {
      item.style.display = 'none';
    });
  }
});

// Initialize - check for hash on load
const hash = window.location.hash || '#home';
const link = document.querySelector(`a[href="${hash}"]`);
if (link) {
  navLinks.forEach(l => l.classList.remove('active'));
  link.classList.add('active');
  const docId = link.getAttribute('data-doc');
  loadMarkdown(docId);
}

// Back to Top button functionality
function showBackToTop() {
  backToTopBtn.classList.add('visible');
}

function hideBackToTop() {
  backToTopBtn.classList.remove('visible');
}

// Handle back to top button click
backToTopBtn.addEventListener('click', () => {
  // Find the table of contents heading (usually h2 with "table-of-contents" id)
  const toc = document.getElementById('table-of-contents');
  if (toc) {
    toc.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Fallback: scroll to top of content
    contentContainer.scrollTo({ top: 0, behavior: 'smooth' });
  }
  hideBackToTop();
});

// Hide button when navigating to a new document
const originalLoadMarkdown = loadMarkdown;
window.addEventListener('hashchange', () => {
  hideBackToTop();
});
