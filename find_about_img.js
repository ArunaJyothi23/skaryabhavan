const fs = require('fs');

const html = fs.readFileSync('live_home.html', 'utf8');
const idx = html.indexOf('About Samko');
console.log('About Samko index:', idx);
if (idx !== -1) {
  const snippet = html.substring(Math.max(0, idx - 4000), idx + 1000);
  const containerMatches = [...snippet.matchAll(/data-id="([a-z0-9]+)"/g)].map(m => m[1]);
  console.log('Containers near About Samko:', containerMatches);

  // Check CSS for these containers
  containerMatches.forEach(id => {
    const cssReg = new RegExp(`\\.elementor-element-${id}[^}]*\\}`, 'g');
    const cssMatches = [...html.matchAll(cssReg)].map(m => m[0]);
    if (cssMatches.length > 0) {
      console.log(`CSS for ${id}:`, cssMatches);
    }
  });

  const imgs = [...snippet.matchAll(/<img[^>]+src="([^">]+)"/gi)].map(m => m[1]);
  console.log('Images directly in snippet:', imgs);
}
