const fs = require('fs');
const https = require('https');
const cheerio = require('cheerio');

async function fetchLiveHtml() {
  console.log('Fetching live homepage HTML from https://skaryabhavan.com/...');
  const res = await fetch('https://skaryabhavan.com/', {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const html = await res.text();
  fs.writeFileSync('live_home.html', html);
  console.log('Saved live_home.html (length:', html.length, ')');

  const $ = cheerio.load(html);

  // Find logo
  console.log('\n--- LOGO SEARCH ---');
  $('img').each((i, el) => {
    const src = $(el).attr('src') || '';
    const alt = $(el).attr('alt') || '';
    const cls = $(el).attr('class') || '';
    if (src.includes('logo') || src.includes('Arya') || src.includes('SAMKO') || alt.includes('logo') || cls.includes('logo')) {
      console.log('Logo candidate:', src, '| alt:', alt, '| class:', cls);
    }
  });

  // Find all header links
  console.log('\n--- HEADER NAVIGATION ---');
  $('header a, nav a, .elementor-nav-menu a').each((i, el) => {
    console.log($(el).text().trim(), '->', $(el).attr('href'));
  });

  // Find all images on homepage
  console.log('\n--- HOMEPAGE IMAGES ---');
  const homeImages = [];
  $('img').each((i, el) => {
    const src = $(el).attr('src');
    if (src && !src.startsWith('data:')) homeImages.push(src);
  });
  console.log('Found', homeImages.length, 'images on live homepage:');
  homeImages.slice(0, 30).forEach(img => console.log('-', img));

  fs.writeFileSync('live_homepage_images.json', JSON.stringify(homeImages, null, 2));
}

fetchLiveHtml().catch(console.error);
