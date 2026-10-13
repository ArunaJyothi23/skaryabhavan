const fs = require('fs');

const html = fs.readFileSync('outdoor_catering_raw.html', 'utf8');

// Find container dc023a4 or package container
const idx = html.indexOf('£15.99 Packages');
if (idx !== -1) {
  const snippet = html.substring(Math.max(0, idx - 1500), idx + 2000);
  console.log('Snippet around £15.99:');
  const classes = [...snippet.matchAll(/class="([^"]*)"/g)].map(m => m[1]);
  console.log('Classes:', classes);
  
  // Find background color of dc023a4
  const cssMatch = html.match(/\.elementor-element-dc023a4[^}]*}/);
  if (cssMatch) console.log('dc023a4 CSS:', cssMatch[0]);

  // Find container of all 4 packages
  const parentCon = snippet.match(/data-id="([a-z0-9]+)"/g);
  console.log('Parent containers in snippet:', parentCon);
}
