// Auto-discover all markdown documents
const markdownModules = import.meta.glob('../docs/*.md', { 
  eager: true,
  query: '?raw',
  import: 'default'
});

// Extract filename without extension
function getDocId(filename) {
  const name = filename.replace('../docs/', '').replace('.md', '');
  
  // Convert filename to kebab-case ID
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
    .replace(/&/g, 'and');
}

// Extract title from filename (keep original formatting)
function getTitleFromFilename(filename) {
  return filename.replace('../docs/', '').replace('.md', '');
}

// Build documents data structure
export const documentsData = {};
export const filenameToDocId = {};

for (const [path, content] of Object.entries(markdownModules)) {
  const filename = path.replace('../docs/', '');
  const docId = getDocId(path);
  const title = getTitleFromFilename(path);
  
  // Skip README (it's handled as 'home')
  if (filename === 'README.md') {
    documentsData['home'] = { title: 'Home', content };
    filenameToDocId['README.md'] = 'home';
    continue;
  }
  
  // Add to documents
  documentsData[docId] = { title, content };
  
  // Add both plain and URL-encoded versions to filename mapping
  filenameToDocId[filename] = docId;
  filenameToDocId[encodeURIComponent(filename)] = docId;
}

// Export README content separately for welcome screen
export const readmeContent = documentsData['home']?.content || '';
