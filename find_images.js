const fs = require('fs');

const xml = fs.readFileSync('skaryabhavan.WordPress.export.xml', 'utf8');
const regex = /https?:\/\/skaryabhavan\.com\/wp-content\/uploads\/[^\s\"\'\)\>\<]+/g;
const matches = xml.match(regex) || [];
const uniqueUrls = Array.from(new Set(matches));

console.log(`Total occurrences: ${matches.length}`);
console.log(`Total unique upload URLs: ${uniqueUrls.length}`);

// Filter by extensions (jpg, jpeg, png, webp, svg, pdf, gif)
const mediaUrls = uniqueUrls.filter(u => /\.(jpg|jpeg|png|webp|svg|gif|pdf|avif)$/i.test(u.split('?')[0]));
console.log(`Image / Document media URLs: ${mediaUrls.length}`);

fs.writeFileSync('all_image_urls.json', JSON.stringify(mediaUrls, null, 2));

// Breakdown by year/folder
const folders = {};
mediaUrls.forEach(u => {
  const match = u.match(/\/uploads\/(\d{4}\/\d{2})/);
  const folder = match ? match[1] : 'root';
  folders[folder] = (folders[folder] || 0) + 1;
});
console.log('Media by upload folder:', folders);
