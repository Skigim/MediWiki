import { filenameToDocId } from './documents.js';

// Navigation bar and button references
let navBar = null;
let backBtn = null;
let toTopBtn = null;
let toIndexBtn = null;
let lastAnchorPosition = null;
let loadMarkdownFunc = null;

// Initialize navigation system
export function initNavigation(navBarElement, backButton, toTopButton, toIndexButton, loadMarkdownCallback) {
  navBar = navBarElement;
  backBtn = backButton;
  toTopBtn = toTopButton;
  toIndexBtn = toIndexButton;
  loadMarkdownFunc = loadMarkdownCallback;
  
  // Set up button click handlers
  if (backBtn) {
    backBtn.addEventListener('click', goBack);
  }
  
  if (toTopBtn) {
    toTopBtn.addEventListener('click', scrollToTop);
  }
  
  if (toIndexBtn) {
    toIndexBtn.addEventListener('click', goToIndex);
  }
  
  // Listen for scroll to update button states
  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
    mainContent.addEventListener('scroll', () => {
      updateTopButtonState();
    });
  }
  
  // Hide navigation bar when hash changes to home
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '' || window.location.hash === '#home') {
      hideNavBar();
      lastAnchorPosition = null;
      updateBackButtonState();
    }
  });
  
  // Update button states initially
  updateBackButtonState();
  updateTopButtonState();
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
          // Save current scroll position before navigating
          const mainContent = document.querySelector('.main-content');
          lastAnchorPosition = mainContent ? mainContent.scrollTop : 0;
          
          targetElement.scrollIntoView({ behavior: 'smooth' });
          
          // Update back button state
          updateBackButtonState();
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

// Show navigation bar
function showNavBar() {
  if (navBar) {
    navBar.classList.add('visible');
  }
}

// Hide navigation bar
function hideNavBar() {
  if (navBar) {
    navBar.classList.remove('visible');
  }
}

// Export function to update nav bar visibility based on current page
export function updateNavBarVisibility(isHomePage) {
  if (isHomePage) {
    hideNavBar();
  } else {
    showNavBar();
    updateBackButtonState();
    updateTopButtonState();
  }
}

// Update back button state
function updateBackButtonState() {
  if (backBtn) {
    if (lastAnchorPosition !== null && lastAnchorPosition !== undefined) {
      backBtn.classList.remove('disabled');
    } else {
      backBtn.classList.add('disabled');
    }
  }
}

// Update top button state based on scroll position
function updateTopButtonState() {
  if (toTopBtn) {
    const mainContent = document.querySelector('.main-content');
    if (mainContent && mainContent.scrollTop > 100) {
      toTopBtn.classList.remove('disabled');
    } else {
      toTopBtn.classList.add('disabled');
    }
  }
}

// Go back to last anchor position
function goBack() {
  if (lastAnchorPosition !== null) {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTo({ top: lastAnchorPosition, behavior: 'smooth' });
      lastAnchorPosition = null;
      updateBackButtonState();
    }
  }
}

// Scroll to top of current page
function scrollToTop() {
  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
    mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    // Update button state after scroll
    setTimeout(() => {
      updateTopButtonState();
    }, 300);
  }
}

// Go to index/home page
function goToIndex() {
  // Clear last position
  lastAnchorPosition = null;
  updateBackButtonState();
  
  // Navigate to home
  window.location.hash = '#home';
  
  // Find and activate home nav link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(l => l.classList.remove('active'));
  const homeLink = document.querySelector('.nav-link[data-doc="home"]');
  if (homeLink) {
    homeLink.classList.add('active');
  }
  
  // Load home content if callback exists
  if (loadMarkdownFunc) {
    loadMarkdownFunc('home');
  }
  
  // Scroll to top of home page
  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
    mainContent.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  hideNavBar();
}
