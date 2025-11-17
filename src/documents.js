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
  'Changes Reported During 90 Day Redetermination Period.md': 'changes-90day-redetermination',
  'Child Support Referral Guide.md': 'child-support-referral',
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
  'Duplicate Applications.md': 'duplicate-applications',
  'Edge Cases & Special Scenarios.md': 'faq',
  'EMSA Process Guide.md': 'emsa-process',
  'Expedited AVS Process Reasons.md': 'expedited-avs',
  'Former Foster Care Guide.md': 'former-foster-care',
  'G-845 Immigration Documentation Process.md': 'g845-immigration',
  'Living Arrangement Guide.md': 'living-arrangement',
  'Long-Term Care (LTC) Q&A.md': 'ltc-qa',
  'LTC Insurance Payment Recovery Process.md': 'ltc-insurance',
  'Medicaid Position Numbers for Case Assignments.md': 'position-numbers',
  'Medicaid Renewal Notice Language.md': 'renewal-notice-language',
  'Medicare Part D Co-pay Deductions.md': 'medicare-part-d',
  'MIWD Eligibility Process Guide.md': 'miwd-eligibility',
  'MLTC Citizenship and Immigration Guide.md': 'mltc-citizenship-immigration',
  'MLTC Consent Line Process Guide.md': 'consent-line',
  'MLTC Processing Guide.md': 'mltc-processing-guide',
  'MLTC Program Standards Chart.md': 'mltc-standards',
  'Qualified Non-Citizen Status Eligibility Guide.md': 'qualified-non-citizen',
  'Reasonable Opportunity Examples.md': 'reasonable-opportunity-examples',
  'Reasonable Opportunity Period.md': 'reasonable-opportunity-period',
  'Refugee Process.md': 'refugee-process',
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
  'Unanswered Questions.md': 'unanswered-questions',
  'Using the AVS Consent Window in NFOCUS.md': 'avs-consent-window',
  'Valid Application Signature.md': 'valid-signature',
  'Voter Registration SOP 7.2021.md': 'voter-registration-sop',
  'Waiver Process Guide.md': 'waiver-process',
  'WINK-ed Retroactive Medicaid.md': 'wink-ed-retro'
};

// Map document IDs to titles (for display)
const idToTitleMap = {
  'home': 'Home',
  'abd-hha-flow': 'ABD or HHA Process Flow',
  'ad-waiver-transition': 'AD Waiver Transition Guide',
  'changes-90day-redetermination': 'Changes Reported During 90 Day Redetermination',
  'child-support-referral': 'Child Support Referral Guide',
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
  'duplicate-applications': 'Duplicate Applications',
  'emsa-process': 'EMSA Process Guide',
  'expedited-avs': 'Expedited AVS Process Reasons',
  'faq': 'Edge Cases & Special Scenarios',
  'former-foster-care': 'Former Foster Care Guide',
  'g845-immigration': 'G-845 Immigration Documentation Process',
  'living-arrangement': 'Living Arrangement Guide',
  'ltc-qa': 'Long-Term Care Q&A',
  'ltc-insurance': 'LTC Insurance Payment Recovery',
  'medicare-part-d': 'Medicare Part D Co-pay Deductions',
  'miwd-eligibility': 'MIWD Eligibility Process Guide',
  'mltc-citizenship-immigration': 'MLTC Citizenship and Immigration Guide',
  'position-numbers': 'Medicaid Position Numbers for Case Assignments',
  'renewal-notice-language': 'Medicaid Renewal Notice Language',
  'mltc-processing-guide': 'MLTC Processing Guide',
  'mltc-standards': 'MLTC Program Standards Chart',
  'qualified-non-citizen': 'Qualified Non-Citizen Status Eligibility Guide',
  'reasonable-opportunity-examples': 'Reasonable Opportunity Examples',
  'reasonable-opportunity-period': 'Reasonable Opportunity Period',
  'refugee-process': 'Refugee Process',
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
  'unanswered-questions': 'Unanswered Questions',
  'valid-signature': 'Valid Application Signature',
  'voter-registration-sop': 'Voter Registration SOP',
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
