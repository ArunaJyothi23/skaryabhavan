const fs = require('fs');

const html = fs.readFileSync('live_dosa_latest.html', 'utf8');
const customCss = fs.existsSync('custom-frontend.min.css') ? fs.readFileSync('custom-frontend.min.css', 'utf8') : '';
const inlineCss = fs.existsSync('extracted_elementor-frontend-inline-css.css') ? fs.readFileSync('extracted_elementor-frontend-inline-css.css', 'utf8') : '';
const allCss = customCss + '\n' + inlineCss;

// Let's search for the main sections in HTML
// Find container elements for Why Choose, Form, Menu, Pricing, Badges, Columns
console.log('--- SEARCHING FOR HTML SECTIONS ---');

function printSnippet(title, searchStr, len = 2000) {
  const idx = html.indexOf(searchStr);
  console.log(`\n=================== ${title} (index: ${idx}) ===================`);
  if (idx !== -1) {
    const snippet = html.substring(Math.max(0, idx - 200), idx + len);
    console.log(snippet.substring(0, 1500));
    return snippet;
  } else {
    console.log('NOT FOUND');
    return null;
  }
}

const whyChooseHtml = printSnippet('WHY CHOOSE', 'Why Choose Our Live Dosa Station Catering');
const enquireHtml = printSnippet('ENQUIRE NOW', 'Enquire Now');
const menuTitleHtml = printSnippet('LIVE DOSA MENU TITLE', 'Live Dosa Catering Menu');
const monFriHtml = printSnippet('MONDAY TO FRIDAY', 'Monday to Friday');
const badgesHtml = printSnippet('BADGES', 'All Add-ons Are Charged Separately Per Person');
const columnsHtml = printSnippet('MENU COLUMNS', 'Sweet (Pongal / Payasam / Kesari)');

fs.writeFileSync('extracted_sections_debug.txt', JSON.stringify({
  whyChooseHtml,
  enquireHtml,
  menuTitleHtml,
  monFriHtml,
  badgesHtml,
  columnsHtml
}, null, 2));
