const fs = require('fs');
const html = fs.readFileSync('live_home.html', 'utf8');

const matches = [...html.matchAll(/--e-global-typography-([a-zA-Z0-9_-]+):\s*([^;]+);/g)];
console.log('Global typography count:', matches.length);
matches.forEach(m => console.log(m[0]));

// Also check form label and input typography in Elementor
const formMatches = [...html.matchAll(/([^{}]*(?:elementor-field|elementor-labels|elementor-form)[^{}]*\{[^}]*\})/g)].map(m => m[0]);
console.log('\nForm matches count:', formMatches.length);
formMatches.slice(0, 15).forEach(m => console.log(m));
