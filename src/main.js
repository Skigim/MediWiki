import { marked } from 'marked';
import './style.css';

// Import all markdown files as raw text
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
  'simp-budgeting': { title: 'SIMP Budgeting Q&A', content: simpBudgeting },
  'trust-annuity': { title: 'Trust and Annuity Process Guide', content: trustAnnuity },
  'waiver-process': { title: 'Waiver Process Guide', content: waiverProcess }
};

// Initialize marked.js options
marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: true
});

// Get elements
const contentContainer = document.getElementById('contentContainer');
const navLinks = document.querySelectorAll('.nav-link');
const searchInput = document.getElementById('searchInput');

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
  contentContainer.innerHTML = `
    <div class="welcome-screen">
      <h1>Welcome to MediWiki</h1>
      <p>Your comprehensive resource for Medicaid and Long-Term Care policy and process documentation.</p>
      
      <div class="stats">
        <div class="stat-item">
          <div class="stat-number">18</div>
          <div class="stat-label">Documentation Files</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">6</div>
          <div class="stat-label">Major Categories</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">100%</div>
          <div class="stat-label">Professionally Formatted</div>
        </div>
      </div>

      <div class="category-grid">
        <div class="category-card">
          <h3>🏥 Waiver Programs</h3>
          <p>Comprehensive guides for AD Waiver initial and renewal processes for both adults and children.</p>
          <div class="doc-count">6 Documents</div>
        </div>
        <div class="category-card">
          <h3>💰 Income & Resources</h3>
          <p>Detailed guidance on excess income, deprivation of resources, trusts, annuities, and SIMP budgeting.</p>
          <div class="doc-count">6 Documents</div>
        </div>
        <div class="category-card">
          <h3>🔄 Benefits & Interfaces</h3>
          <p>Process guides for BDE, DAC, SDX interfaces and Medicare Part D coordination.</p>
          <div class="doc-count">4 Documents</div>
        </div>
        <div class="category-card">
          <h3>🏡 Long-Term Care</h3>
          <p>Q&A resources and insurance payment recovery procedures for LTC services.</p>
          <div class="doc-count">2 Documents</div>
        </div>
      </div>
    </div>
  `;
  contentContainer.scrollTop = 0;
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
        } catch (e) {
          // If decoding fails, continue
        }
      }
      
      if (docId) {
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

// Search functionality
searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const allNavItems = document.querySelectorAll('.nav-item');
  
  allNavItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    const text = link.textContent.toLowerCase();
    
    if (text.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
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
