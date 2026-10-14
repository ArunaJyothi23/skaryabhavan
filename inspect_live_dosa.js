const fs = require('fs');

const html = fs.readFileSync('live_dosa_latest.html', 'utf8');

// Find all css links
const linkRegex = /<link\s+[^>]*rel=['"]stylesheet['"][^>]*href=['"]([^'"]+)['"]/gi;
let match;
const links = [];
while ((match = linkRegex.exec(html)) !== null) {
  links.push(match[1]);
}
console.log('Total stylesheets:', links.length);
const elementorCss = links.filter(l => l.includes('elementor') || l.includes('post-'));
console.log('Elementor stylesheets:', elementorCss);

// Let's find Google Fonts loaded
const fonts = links.filter(l => l.includes('fonts.googleapis.com'));
console.log('Google fonts:', fonts);

// Search for the section: "Why Choose Our Live Dosa Station Catering?"
const idx = html.indexOf('Why Choose Our Live Dosa Station Catering');
if (idx !== -1) {
  console.log('\n--- FOUND SECTION AROUND "Why Choose" ---');
  // Get 4000 characters before and 8000 after
  const start = Math.max(0, idx - 1000);
  const end = Math.min(html.length, idx + 8000);
  fs.writeFileSync('why_choose_section.html', html.substring(start, end));
  console.log('Wrote why_choose_section.html');
}

// Search for "Live Dosa Catering Menu"
const idx2 = html.indexOf('Live Dosa Catering Menu');
if (idx2 !== -1) {
  console.log('\n--- FOUND "Live Dosa Catering Menu" ---');
  const start2 = Math.max(0, idx2 - 500);
  const end2 = Math.min(html.length, idx2 + 15000);
  fs.writeFileSync('live_menu_section.html', html.substring(start2, end2));
  console.log('Wrote live_menu_section.html');
}
