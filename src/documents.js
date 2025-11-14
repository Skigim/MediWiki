// Auto-discover all markdown documents
const markdownModules = import.meta.glob('../docs/*.md', { 
  eager: true,
  query: '?raw',
  import: 'default'
});

// Map filenames to their expected document IDs (matching index.html)
const filenameToIdMap = {
  'README.md': 'home',
  'ABD or HHA Process Flow.md': 'abd-hha-flow',
  'AD Waiver Transition Guide.md': 'ad-waiver-transition',
  'Additional Excess Income Guide.md': 'additional-excess-income',
  'Adult AD Waiver Initial Determination Process.md': 'adult-ad-initial',
  'Adult AD Waiver Renewal Determination Process.md': 'adult-ad-renewal',
  'AVS Procedural Guide.md': 'avs-guide',
  'BDE Process Guide.md': 'bde-process',
  'C1 TPL Quick Reference Guide.md': 'c1-tpl-guide',
  'Charitable Giving Guidance.md': 'charitable-giving',
  'Childrens AD Waiver Initial Determination Process.md': 'childrens-ad-initial',
  'Childrens AD Waiver Renewal Determination Process.md': 'childrens-ad-renewal',
  'Continuous Eligibility Guide.md': 'continuous-eligibility',
  'DAC Guide.md': 'dac-guide',
  'Deprivation of Resources Process Guide.md': 'deprivation-process',
  'Deprivation of Resources Q&A.md': 'deprivation-qa',
  'Edge Cases & Special Scenarios.md': 'faq',
  'Expedited AVS Process Reasons.md': 'expedited-avs',
  'Living Arrangement Guide.md': 'living-arrangement',
  'Long-Term Care (LTC) Q&A.md': 'ltc-qa',
  'LTC Insurance Payment Recovery Process.md': 'ltc-insurance',
  'Medicare Part D Co-pay Deductions.md': 'medicare-part-d',
  'MLTC Consent Line Process Guide.md': 'consent-line',
  'MLTC Program Standards Chart.md': 'mltc-standards',  
  'Resource Verification.md': 'resource-verification',
  'Retroactive Medicaid Process.md': 'retro-medicaid-process',
  'SDX Guide.md': 'sdx-guide',
  'Self-Employment Guide.md': 'self-employment',
  'SIMP Budgeting Q & A.md': 'simp-budgeting',
  'Spousal Impoverishment.md': 'spousal-impoverishment',
  'SRT Process Guide.md': 'srt-process',
  'Standalone Application Chart.md': 'standalone-app-chart',
  'TPL Guide.md': 'tpl-guide',
  'Trust and Annuity Process Guide.md': 'trust-annuity',
  'Using the AVS Consent Window in NFOCUS.md': 'avs-consent-window',
  'Valid Application Signature.md': 'valid-signature',
  'Waiver Process Guide.md': 'waiver-process',
  'WINK-ed Retroactive Medicaid.md': 'wink-ed-retro'
};

// Map document IDs to titles (for display)
const idToTitleMap = {
  'home': 'Home',
  'abd-hha-flow': 'ABD or HHA Process Flow',
  'ad-waiver-transition': 'AD Waiver Transition Guide',
  'additional-excess-income': 'Additional Excess Income Guide',
  'adult-ad-initial': 'Adult AD Waiver Initial Process',
  'adult-ad-renewal': 'Adult AD Waiver Renewal Process',
  'avs-consent-window': 'Using the AVS Consent Window in NFOCUS',
  'avs-guide': 'AVS Procedural Guide',
  'bde-process': 'BDE Process Guide',
  'c1-tpl-guide': 'C1 TPL Quick Reference Guide',
  'charitable-giving': 'Charitable Giving Guidance',
  'childrens-ad-initial': "Children's AD Waiver Initial Process",
  'childrens-ad-renewal': "Children's AD Waiver Renewal Process",
  'consent-line': 'MLTC Consent Line Process Guide',
  'continuous-eligibility': 'Continuous Eligibility Guide',
  'dac-guide': 'DAC Guide',
  'deprivation-process': 'Deprivation of Resources Process',
  'deprivation-qa': 'Deprivation of Resources Q&A',
  'expedited-avs': 'Expedited AVS Process Reasons',
  'faq': 'Edge Cases & Special Scenarios',
  'living-arrangement': 'Living Arrangement Guide',
  'ltc-qa': 'Long-Term Care Q&A',
  'ltc-insurance': 'LTC Insurance Payment Recovery',
  'medicare-part-d': 'Medicare Part D Co-pay Deductions',
  'mltc-standards': 'MLTC Program Standards Chart',
  'resource-verification': 'Resource Verification',
  'retro-medicaid-process': 'Retroactive Medicaid Process',
  'sdx-guide': 'SDX Guide',
  'self-employment': 'Self-Employment Guide',
  'simp-budgeting': 'SIMP Budgeting Q&A',
  'spousal-impoverishment': 'Spousal Impoverishment',
  'srt-process': 'SRT Process Guide',
  'standalone-app-chart': 'Standalone Application Chart',
  'tpl-guide': 'TPL Guide',
  'trust-annuity': 'Trust and Annuity Process Guide',
  'valid-signature': 'Valid Application Signature',
  'waiver-process': 'Waiver Process Guide',
  'wink-ed-retro': 'WINK-ed Retroactive Medicaid'
};

// Build documents data structure
export const documentsData = {};
export const filenameToDocId = {};

for (const [path, content] of Object.entries(markdownModules)) {
  const filename = path.replace('../docs/', '');
  const docId = filenameToIdMap[filename];
  
  if (!docId) {
    console.warn(`No mapping found for file: ${filename}`);
    continue;
  }
  
  const title = idToTitleMap[docId] || filename.replace('.md', '');
  
  // Add to documents
  documentsData[docId] = { title, content };
  
  // Add both plain and URL-encoded versions to filename mapping
  filenameToDocId[filename] = docId;
  filenameToDocId[encodeURIComponent(filename)] = docId;
}

// Export README content separately for welcome screen
export const readmeContent = documentsData['home']?.content || '';
