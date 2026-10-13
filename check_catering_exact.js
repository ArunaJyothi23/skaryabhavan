const fs = require('fs');
const html = fs.readFileSync('live_home.html', 'utf8');

const idx = html.indexOf('data-id="0e882f6"');
console.log('=== CATERING SECTION HTML ===');
console.log(html.substring(idx, idx + 4000));

// Find all CSS rules for elements in catering section
const matches = [...html.matchAll(/\.elementor-element-(?:0e882f6|24c453f|f3c57b5|ac6350c)[^{]*\{([^}]*)\}/g)].map(m => m[0]);
console.log('\n=== CATERING SECTION CSS ===');
matches.forEach(m => console.log(m));
