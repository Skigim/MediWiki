import Fuse from 'fuse.js';
import { documentsData } from './documents.js';

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

// Perform search and return results
export function performSearch(query) {
  if (!query || query.length < 3) {
    return [];
  }
  return fuse.search(query);
}

// Display search results in the sidebar
export function displaySearchResults(results, onResultClick) {
  // Remove any existing search results
  const existingResults = document.querySelector('.search-results');
  if (existingResults) {
    existingResults.remove();
  }

  if (results.length === 0) {
    // Hide all nav items when no results
    const allNavItems = document.querySelectorAll('.nav-section');
    allNavItems.forEach(item => {
      item.style.display = 'none';
    });
    return;
  }

  // Create results container
  const searchResultsContainer = document.createElement('div');
  searchResultsContainer.className = 'search-results';

  // Add header
  const header = document.createElement('div');
  header.className = 'search-results-header';
  header.textContent = `Found ${results.length} result${results.length !== 1 ? 's' : ''}`;
  searchResultsContainer.appendChild(header);

  // Add each result
  results.forEach(result => {
    const resultItem = document.createElement('div');
    resultItem.className = 'search-result-item';

    const title = document.createElement('div');
    title.className = 'search-result-title';
    title.textContent = result.item.title;

    const snippet = document.createElement('div');
    snippet.className = 'search-result-snippet';
    // Get a snippet of the content
    const contentSnippet = result.item.content.substring(0, 150).trim() + '...';
    snippet.textContent = contentSnippet;

    const score = document.createElement('div');
    score.className = 'search-result-score';
    const relevance = Math.round((1 - result.score) * 100);
    score.textContent = `Relevance: ${relevance}%`;

    resultItem.appendChild(title);
    resultItem.appendChild(snippet);
    resultItem.appendChild(score);

    resultItem.addEventListener('click', () => {
      onResultClick(result.item.id);
    });

    searchResultsContainer.appendChild(resultItem);
  });

  // Insert after search box
  const searchBox = document.querySelector('.search-box');
  searchBox.parentElement.insertBefore(searchResultsContainer, searchBox.nextSibling);

  // Hide all nav items to show only search results
  const allNavItems = document.querySelectorAll('.nav-section');
  allNavItems.forEach(item => {
    item.style.display = 'none';
  });
}

// Clear search and restore navigation
export function clearSearch() {
  const searchResultsContainer = document.querySelector('.search-results');
  if (searchResultsContainer) {
    searchResultsContainer.remove();
  }

  // Restore all nav items
  const allNavItems = document.querySelectorAll('.nav-section');
  allNavItems.forEach(item => {
    item.style.display = '';
  });
}
