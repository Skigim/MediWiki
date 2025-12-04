import './style.css';
import './home-styles.css';
import { renderDocument } from './renderer.js';
import { performSearch, displaySearchResults, clearSearch } from './search.js';
import { initNavigation, processInternalLinks, updateNavBarVisibility } from './navigation.js';

// Debounce utility for search performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Get DOM elements
const contentContainer = document.getElementById('contentContainer');
const navLinks = document.querySelectorAll('.nav-link');
const searchInput = document.getElementById('searchInput');
const navBar = document.getElementById('navBar');
const backBtn = document.getElementById('backBtn');
const toTopBtn = document.getElementById('toTopBtn');
const toIndexBtn = document.getElementById('toIndexBtn');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const homePage = document.getElementById('homePage');
const markdownContent = document.getElementById('markdownContent');
const sidebarToggleFloating = document.getElementById('sidebarToggleFloating');

// Initialize navigation system
initNavigation(navBar, backBtn, toTopBtn, toIndexBtn, loadMarkdown);

// Sidebar toggle functionality
sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  updateFloatingToggle();
});

// Floating sidebar toggle
if (sidebarToggleFloating) {
  sidebarToggleFloating.addEventListener('click', () => {
    sidebar.classList.remove('collapsed');
    updateFloatingToggle();
  });
}

// Update floating toggle visibility
function updateFloatingToggle() {
  if (sidebar.classList.contains('collapsed')) {
    sidebarToggleFloating.style.display = 'flex';
  } else {
    sidebarToggleFloating.style.display = 'none';
  }
}

// Show home page, hide markdown
function showHomePage() {
  if (homePage) homePage.style.display = 'block';
  if (markdownContent) markdownContent.style.display = 'none';
  // Auto-collapse sidebar on homepage
  sidebar.classList.add('collapsed');
  updateFloatingToggle();
  // Hide navigation bar on home page
  updateNavBarVisibility(true);
}

// Show markdown, hide home page
function showMarkdown() {
  if (homePage) homePage.style.display = 'none';
  if (markdownContent) markdownContent.style.display = 'block';
  // Expand sidebar when viewing docs
  sidebar.classList.remove('collapsed');
  updateFloatingToggle();
  // Show navigation bar when viewing docs
  updateNavBarVisibility(false);
}

// Load and display markdown document
function loadMarkdown(docId) {
  if (docId === 'home') {
    showHomePage();
    // Scroll to top
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  } else {
    showMarkdown();
    renderDocument(docId, markdownContent, () => {
      processInternalLinks(markdownContent, loadMarkdown);
    });
  }
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

// Set up home page card click handlers
function setupHomePageHandlers() {
  // Quick access doc cards
  document.querySelectorAll('.doc-card').forEach(card => {
    card.addEventListener('click', () => {
      const docId = card.getAttribute('data-doc');
      if (docId) {
        const navLink = document.querySelector(`.nav-link[data-doc="${docId}"]`);
        if (navLink) {
          navLink.click();
        }
      }
    });
  });

  // Category cards - expand to show documents
  document.querySelectorAll('.category-card').forEach(card => {
    // Click on card to expand
    const collapsedContent = card.querySelector('.category-collapsed-content');
    if (collapsedContent) {
      collapsedContent.addEventListener('click', (e) => {
        e.stopPropagation();
        // Collapse all other cards
        document.querySelectorAll('.category-card.expanded').forEach(other => {
          if (other !== card) {
            other.classList.remove('expanded');
          }
        });
        // Expand this card
        card.classList.add('expanded');
      });
    }

    // Back button to collapse
    const backBtn = card.querySelector('.category-back-btn');
    if (backBtn) {
      backBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.remove('expanded');
      });
    }

    // Document items navigate to document
    card.querySelectorAll('.category-doc-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const docId = item.getAttribute('data-doc');
        if (docId) {
          const navLink = document.querySelector(`.nav-link[data-doc="${docId}"]`);
          if (navLink) {
            navLink.click();
          }
        }
      });
    });
  });
}

// Set up search handler with debounce
const handleSidebarSearch = debounce((query) => {
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
}, 150);

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.trim();
  handleSidebarSearch(query);
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

// Setup home page handlers after DOM is ready
setupHomePageHandlers();

// Setup home page search
function setupHomePageSearch() {
  const homeSearchInput = document.getElementById('homeSearchInput');
  const homeSearchResults = document.getElementById('homeSearchResults');
  
  if (!homeSearchInput || !homeSearchResults) return;

  const handleHomeSearch = debounce((query) => {
    if (!query || query.length < 3) {
      homeSearchResults.classList.remove('active');
      homeSearchResults.innerHTML = '';
      return;
    }
    
    // Perform search
    const results = performSearch(query);
    
    // Display results
    if (results.length === 0) {
      homeSearchResults.innerHTML = '<div class="home-search-no-results">No results found. Try different keywords.</div>';
      homeSearchResults.classList.add('active');
    } else {
      homeSearchResults.innerHTML = '';
      homeSearchResults.classList.add('active');
      
      results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'home-search-result-item';
        
        const title = document.createElement('div');
        title.className = 'home-search-result-title';
        title.textContent = result.item.title;
        
        const snippet = document.createElement('div');
        snippet.className = 'home-search-result-snippet';
        const contentSnippet = result.item.content.substring(0, 150).trim() + '...';
        snippet.textContent = contentSnippet;
        
        const score = document.createElement('div');
        score.className = 'home-search-result-score';
        const relevance = Math.round((1 - result.score) * 100);
        score.textContent = `Relevance: ${relevance}%`;
        
        resultItem.appendChild(title);
        resultItem.appendChild(snippet);
        resultItem.appendChild(score);
        
        resultItem.addEventListener('click', () => {
          // Find and trigger the corresponding nav link
          const navLink = document.querySelector(`.nav-link[data-doc="${result.item.id}"]`);
          if (navLink) {
            navLinks.forEach(l => l.classList.remove('active'));
            navLink.classList.add('active');
            window.location.hash = navLink.getAttribute('href');
            loadMarkdown(result.item.id);
            
            // Clear search
            homeSearchInput.value = '';
            homeSearchResults.classList.remove('active');
            homeSearchResults.innerHTML = '';
          }
        });
        
        homeSearchResults.appendChild(resultItem);
      });
    }
  }, 150);

  homeSearchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    handleHomeSearch(query);
  });

  // Close results when clicking outside
  document.addEventListener('click', (e) => {
    if (!homeSearchInput.contains(e.target) && !homeSearchResults.contains(e.target)) {
      homeSearchResults.classList.remove('active');
    }
  });
}

setupHomePageSearch();
