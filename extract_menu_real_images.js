const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('live_menu.html', 'utf8');
const $ = cheerio.load(html);

// Check all image srcs and data-src
const allImages = [];
$('img').each((i, el) => {
  const src = $(el).attr('data-src') || $(el).attr('data-lazy-src') || $(el).attr('src') || '';
  if (src && !src.startsWith('data:')) {
    allImages.push(src);
  }
});
console.log(`Found ${allImages.length} real image sources in live_menu.html`);
console.log('First 20 images:');
console.log(allImages.slice(0, 20));

fs.writeFileSync('all_menu_page_images.json', JSON.stringify(Array.from(new Set(allImages)), null, 2));
