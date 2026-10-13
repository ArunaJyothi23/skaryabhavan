const fs = require('fs');
const html = fs.readFileSync('live_home.html', 'utf8');

console.log('=== HERO STYLES IN LIVE SITE ===');
// Search for hero slides (elementor-lakit-slides or 8c8169e or 96c04c7)
const heroMatches = [...html.matchAll(/\.elementor-element-(?:8c8169e|96c04c7)[^{]*\{([^}]*)\}/g)].map(m => m[0]);
heroMatches.forEach(m => console.log(m));

// Search for overlay in lakit-slides
const overlayMatches = [...html.matchAll(/([^{}]*lakit-slide[^{}]*\{[^}]*\})/g)].map(m => m[0]);
console.log('\n=== LAKIT SLIDES RULES ===');
overlayMatches.slice(0, 15).forEach(m => console.log(m));

console.log('\n=== HEADER NAV STYLES IN LIVE SITE ===');
// Search for nav menu (c7caf48, 7862812, a4e6329, etc.)
const navMatches = [...html.matchAll(/([^{}]*(?:lakit-nav|menu-item|\.elementor-element-7862812)[^{}]*\{[^}]*\})/g)].map(m => m[0]);
navMatches.slice(0, 20).forEach(m => console.log(m));
