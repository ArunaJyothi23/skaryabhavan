const fs = require('fs');

const html = fs.readFileSync('live_home.html', 'utf8');

['e1fa8fe', '126a1ff'].forEach(id => {
  const matches = [...html.matchAll(new RegExp(`\\.elementor-element-${id}[^}]*\\}`, 'g'))].map(m => m[0]);
  console.log(`=== ${id} ===`);
  matches.forEach(m => console.log(' ', m));
});
