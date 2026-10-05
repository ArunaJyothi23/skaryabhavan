const fs = require('fs');

async function fetchLiveMenu() {
  console.log('Fetching live menu page HTML from https://skaryabhavan.com/menu/...');
  const res = await fetch('https://skaryabhavan.com/menu/', {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const html = await res.text();
  fs.writeFileSync('live_menu.html', html);
  console.log('Saved live_menu.html (length:', html.length, ')');

  // Find all image URLs on menu page
  const regex = /https?:\/\/skaryabhavan\.com\/wp-content\/uploads\/[^\s\"\'\)\>\<]+/gi;
  const matches = Array.from(new Set(html.match(regex) || []));
  console.log(`Found ${matches.length} upload URLs in live_menu.html`);
  fs.writeFileSync('live_menu_uploads.json', JSON.stringify(matches, null, 2));
}

fetchLiveMenu().catch(console.error);
