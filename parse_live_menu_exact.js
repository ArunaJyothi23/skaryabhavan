const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const html = fs.readFileSync('live_menu.html', 'utf8');
const $ = cheerio.load(html);

console.log('--- PARSING MENU HERO & HEADER ---');
// Hero section
const heroBg = html.match(/url\(['"]?(https?:\/\/skaryabhavan\.com\/wp-content\/uploads\/[^'")\s]+)['"]?\)/i);
console.log('Hero background candidate:', heroBg ? heroBg[1] : 'None');

// Check all image tags
console.log('\n--- CHECKING CHUTNEY BANNER & TOP IMAGES ---');
$('img').slice(0, 10).each((i, el) => {
  console.log($(el).attr('src'));
});

// Check buttons / category pills
console.log('\n--- CATEGORY TABS / BUTTONS ---');
const categoryTabs = [];
$('button, .elementor-tab-title, a[role="tab"], .elementor-button').each((i, el) => {
  const text = $(el).text().trim();
  if (text && text.length < 35 && !text.includes('Menu') && !text.includes('Home')) {
    categoryTabs.push(text);
  }
});
console.log('Found category candidates:', Array.from(new Set(categoryTabs)));

// Let's check how dishes are organized
console.log('\n--- INSPECTING DISH WIDGETS ---');
const sampleBoxes = [];
$('.elementor-widget-image-box').slice(0, 5).each((i, el) => {
  const title = $(el).find('.elementor-image-box-title').html()?.trim();
  const desc = $(el).find('.elementor-image-box-description').text().trim();
  const img = $(el).find('img').attr('src');
  sampleBoxes.push({ title, desc, img });
});
console.log('Sample dish boxes:', sampleBoxes);
