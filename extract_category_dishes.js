const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const html = fs.readFileSync('live_menu.html', 'utf8');
const $ = cheerio.load(html);

const imageMapping = fs.existsSync('image_mapping.json') ? JSON.parse(fs.readFileSync('image_mapping.json', 'utf8')) : {};

// Helper to resolve local image
function getLocalImage(src) {
  if (!src || src.startsWith('data:')) return '';
  const clean = src.split('?')[0];
  if (imageMapping[src]) return imageMapping[src];
  if (imageMapping[clean]) return imageMapping[clean];
  const fn = path.basename(new URL(clean).pathname);
  if (fs.existsSync(path.resolve(__dirname, 'public', 'images', 'migrated', fn))) {
    return `/images/migrated/${fn}`;
  }
  return src;
}

// Find all tabs
// Elementor nested tabs structure: .e-n-tab-title or buttons
const categoriesMap = {};
let currentCategory = 'South Indian Staters';

// Let's inspect all containers with data-tab or tab titles
const tabTitles = [];
$('[role="tab"], .e-n-tab-title').each((i, el) => {
  const title = $(el).text().trim();
  const id = $(el).attr('id');
  const controls = $(el).attr('aria-controls');
  if (title && !title.includes('English') && !title.includes('French')) {
    tabTitles.push({ title, id, controls });
  }
});

console.log(`Found ${tabTitles.length} tab titles:`, tabTitles.map(t => t.title));

// Let's parse each tab content panel
tabTitles.forEach((tab) => {
  const panelId = tab.controls || tab.id?.replace('title', 'content');
  const $panel = $(`#${panelId}`);
  const dishes = [];

  $panel.find('.elementor-widget-image-box').each((j, el) => {
    const titleRaw = $(el).find('.elementor-image-box-title').html() || '';
    const descRaw = $(el).find('.elementor-image-box-description').text().trim() || '';
    const imgEl = $(el).find('img');
    const rawSrc = imgEl.attr('data-src') || imgEl.attr('data-lazy-src') || imgEl.attr('src') || '';
    const localImg = getLocalImage(rawSrc);

    if (titleRaw.trim()) {
      dishes.push({
        titleHtml: titleRaw.trim(),
        titleText: titleRaw.replace(/<[^>]*>/g, '').trim(),
        description: descRaw,
        image: localImg,
        rawImage: rawSrc
      });
    }
  });

  console.log(`Category "${tab.title}": ${dishes.length} dishes`);
  categoriesMap[tab.title] = dishes;
});

// Check if any categories were empty, fallback to scanning sections
const emptyCats = Object.keys(categoriesMap).filter(k => categoriesMap[k].length === 0);
if (emptyCats.length > 0) {
  console.log('Some tabs were empty via selector, investigating alternatives...');
}

fs.writeFileSync('exact_menu_categories.json', JSON.stringify(categoriesMap, null, 2));
console.log('Saved exact_menu_categories.json!');
