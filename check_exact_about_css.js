const fs = require('fs');

const html = fs.readFileSync('live_home.html', 'utf8');

// Find all CSS rules related to e379276, d8f4d61, e1fa8fe, 126a1ff
const ids = ['e379276', 'd8f4d61', 'e1fa8fe', '126a1ff'];
ids.forEach(id => {
  const reg = new RegExp(`[^}]*${id}[^}]*\\}`, 'g');
  const matches = [...html.matchAll(reg)].map(m => m[0].trim());
  console.log(`=== Rules for ${id} ===`);
  matches.forEach(m => console.log('  ', m));
});

// Also check the HTML structure of this section
const idx = html.indexOf('data-id="e379276"');
if (idx !== -1) {
  console.log('HTML structure:');
  console.log(html.substring(idx, idx + 2500));
}
