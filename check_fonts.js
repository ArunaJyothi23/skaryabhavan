const fs = require('fs');
const html = fs.readFileSync('live_dosa_latest.html', 'utf8');
const customCss = fs.readFileSync('custom-frontend.min.css', 'utf8');

const typekitMatches = [...html.matchAll(/https?:\/\/[^\s"'>]+typekit[^\s"'>]*/gi)].map(m => m[0]);
console.log('Typekit in HTML:', typekitMatches);

// Check other font links
const fontLinks = [...html.matchAll(/https?:\/\/[^\s"'>]+font[^\s"'>]*/gi)].map(m => m[0]);
console.log('Font links in HTML:', [...new Set(fontLinks)]);

// Check where byol is used in customCss
const byolMatches = [...customCss.matchAll(/[^{};]*byol[^{};]*/gi)].map(m => m[0]);
console.log('byol in customCss count:', byolMatches.length);
console.log('Sample byol matches:', byolMatches.slice(0, 10));

// Let's find font-face definitions in all css files
const styleFiles = fs.readdirSync('.').filter(f => f.endsWith('.css'));
styleFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('@font-face')) {
    console.log(`@font-face found in ${f}`);
    const ff = [...content.matchAll(/@font-face\s*\{[^}]+\}/gi)].map(m => m[0]);
    console.log(ff);
  }
  if (content.includes('byol')) {
    console.log(`'byol' found in ${f}`);
  }
});
