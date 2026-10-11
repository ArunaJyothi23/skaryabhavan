const fs = require('fs');

const html = fs.readFileSync('outdoor_catering_raw.html', 'utf8');
const links = [...html.matchAll(/<link[^>]+href=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]);
console.log('CSS links:', links.filter(l => l.includes('.css')));

const styles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]);
console.log('Inline styles count:', styles.length);
fs.writeFileSync('outdoor_inline_styles.css', styles.join('\n\n'));
console.log('Saved inline styles to outdoor_inline_styles.css');
