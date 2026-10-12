const fs = require('fs');

const html = fs.readFileSync('live_home.html', 'utf8');

// Container e1fa8fe CSS
const cssSnippet = html.match(/\.elementor-element-e1fa8fe[^}]+}/g);
console.log('e1fa8fe CSS rules:', cssSnippet);

// What is the container size or HTML?
const idx = html.indexOf('data-id="e1fa8fe"');
console.log('e1fa8fe HTML:', html.substring(idx, idx + 400));
