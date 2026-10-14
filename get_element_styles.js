const fs = require('fs');

const customCss = fs.existsSync('custom-frontend.min.css') ? fs.readFileSync('custom-frontend.min.css', 'utf8') : '';
const inlineCss = fs.existsSync('extracted_elementor-frontend-inline-css.css') ? fs.readFileSync('extracted_elementor-frontend-inline-css.css', 'utf8') : '';
const allCss = customCss + '\n' + inlineCss;

// Read the entire live HTML to extract all data-ids of widgets/containers between index 145000 and 190000
const html = fs.readFileSync('live_dosa_latest.html', 'utf8');

// Find all data-id in that range
const contentSub = html.substring(140000, 200000);
const dataIdMatches = [...contentSub.matchAll(/data-id="([a-zA-Z0-9]+)"/g)].map(m => m[1]);
const uniqueIds = [...new Set(dataIdMatches)];

console.log('Found unique elementor IDs in section:', uniqueIds);

const foundRules = {};

uniqueIds.forEach(id => {
  // Regex to find CSS selector matching .elementor-element-${id}
  const regex = new RegExp(`\\.elementor-element-${id}[^{]*\\{[^}]*\\}`, 'g');
  const matches = allCss.match(regex);
  if (matches) {
    foundRules[id] = matches;
  }
});

fs.writeFileSync('elementor_matched_rules.json', JSON.stringify(foundRules, null, 2));
console.log('Saved elementor_matched_rules.json with matches for', Object.keys(foundRules).length, 'elements');

// Also print the whole container markup for the Why Choose + Enquire Now section
const whyChooseContainerIdx = html.indexOf('Why Choose Our Live Dosa Station Catering');
if (whyChooseContainerIdx !== -1) {
  // find closest preceding top section
  const sectionStart = html.lastIndexOf('elementor-top-section', whyChooseContainerIdx);
  const sectionEnd = html.indexOf('elementor-top-section', sectionStart + 100);
  console.log('Section start:', sectionStart, 'end:', sectionEnd);
  fs.writeFileSync('why_choose_full_container.html', html.substring(sectionStart - 100, sectionEnd !== -1 ? sectionEnd : sectionStart + 10000));
}

// And the menu section
const menuSectionIdx = html.indexOf('Live Dosa Catering Menu');
console.log('menuSectionIdx:', menuSectionIdx);
if (menuSectionIdx === -1) {
  // Let's find where Monday to Friday starts
  const mtfIdx = html.indexOf('Monday to Friday');
  const mtfStart = html.lastIndexOf('elementor-top-section', mtfIdx);
  const mtfEnd = html.indexOf('elementor-top-section', mtfIdx + 5000);
  fs.writeFileSync('mtf_full_container.html', html.substring(mtfStart - 100, mtfEnd !== -1 ? mtfEnd : mtfStart + 15000));
}
