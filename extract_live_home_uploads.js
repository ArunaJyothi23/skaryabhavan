const fs = require('fs');

const html = fs.readFileSync('live_home.html', 'utf8');

// Find all wp-content/uploads URLs in live_home.html
const regex = /https?:\/\/skaryabhavan\.com\/wp-content\/uploads\/[^\s\"\'\)\>\<]+/gi;
const matches = Array.from(new Set(html.match(regex) || []));
console.log(`Found ${matches.length} upload URLs in live_home.html:`);
matches.forEach(m => console.log('-', m));

fs.writeFileSync('live_home_uploads.json', JSON.stringify(matches, null, 2));
