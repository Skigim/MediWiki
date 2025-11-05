import './style.css';
import { renderDocument } from './renderer.js';
import { performSearch, displaySearchResults, clearSearch } from './search.js';
import { initNavigation, processInternalLinks } from './navigation.js';

// Get DOM elements
const contentContainer = document.getElementById('contentContainer');
const navLinks = document.querySelectorAll('.nav-link');
const searchInput = document.getElementById('searchInput');
const backToTopBtn = document.getElementById('backToTop');

// Initialize navigation system
initNavigation(backToTopBtn);

// Load and display markdown document
function loadMarkdown(docId) {
  renderDocument(docId, contentContainer, () => {
    processInternalLinks(contentContainer, loadMarkdown);
  });
}

// Set up navigation link handlers
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Update active state
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    
    // Update URL hash
    const hash = link.getAttribute('href');
    window.location.hash = hash;
    
    // Load the document
    const docId = link.getAttribute('data-doc');
    loadMarkdown(docId);
    
    // Clear search if active
    if (searchInput.value) {
      searchInput.value = '';
      clearSearch();
    }
  });
});

// Set up search handler
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.trim();
  
  if (!query || query.length < 3) {
    clearSearch();
    return;
  }
  
  // Perform search
  const results = performSearch(query);
  
  // Display results with click handler
  displaySearchResults(results, (docId) => {
    // Find and trigger the corresponding nav link
    const navLink = document.querySelector(`.nav-link[data-doc="${docId}"]`);
    if (navLink) {
      navLinks.forEach(l => l.classList.remove('active'));
      navLink.classList.add('active');
      window.location.hash = navLink.getAttribute('href');
      loadMarkdown(docId);
      
      // Clear search
      searchInput.value = '';
      clearSearch();
    }
  });
});

// Initialize - check for hash on load
const hash = window.location.hash || '#home';
const initialLink = document.querySelector(`a[href="${hash}"]`);
if (initialLink) {
  navLinks.forEach(l => l.classList.remove('active'));
  initialLink.classList.add('active');
  const docId = initialLink.getAttribute('data-doc');
  loadMarkdown(docId);
}
