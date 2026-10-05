const fs = require('fs');

const menuPage = JSON.parse(fs.readFileSync('extracted_pages/menu.json', 'utf8'));

console.log('Menu title:', menuPage.title);
console.log('Menu SEO:', menuPage.seo);

// Let's parse all dishes from Elementor data
const dishes = [];
let currentCategory = 'General';

function traverse(node) {
  if (!node) return;
  if (Array.isArray(node)) {
    node.forEach(traverse);
    return;
  }

  // Check if heading or section title
  if (node.widgetType === 'heading') {
    const title = node.settings?.title || '';
    if (title && title.length < 50 && !title.includes('<style')) {
      currentCategory = title.replace(/<[^>]*>/g, '').trim();
    }
  }

  // Check if image-box or custom widget with dish info
  if (node.widgetType === 'image-box') {
    const titleRaw = node.settings?.title_text || '';
    const descRaw = node.settings?.description_text || '';
    const imgUrl = node.settings?.image?.url || '';
    
    // Extract dietary tags like (V, G, J)
    let isVegan = /V/i.test(titleRaw) || /vegan/i.test(descRaw);
    let isGlutenFree = /G/i.test(titleRaw) || /gluten/i.test(descRaw);
    let isJain = /J/i.test(titleRaw) || /jain/i.test(descRaw);

    const titleClean = titleRaw.replace(/<[^>]*>/g, '').trim();
    const descClean = descRaw.replace(/<[^>]*>/g, '').trim();

    if (titleClean) {
      dishes.push({
        category: currentCategory,
        name: titleClean,
        description: descClean,
        image: imgUrl,
        vegan: isVegan,
        glutenFree: isGlutenFree,
        jain: isJain
      });
    }
  }

  if (node.elements) traverse(node.elements);
}

if (menuPage.elementorData) {
  traverse(menuPage.elementorData);
}

console.log(`Extracted ${dishes.length} menu items from menu.json!`);

// Let's also check menu-scan.json
const qrPage = JSON.parse(fs.readFileSync('extracted_pages/menu-scan.json', 'utf8'));
const qrDishes = [];
if (qrPage.elementorData) {
  currentCategory = 'General';
  traverse(qrPage.elementorData);
}
console.log(`Extracted ${dishes.length} dishes in total.`);

const categories = {};
dishes.forEach(d => {
  categories[d.category] = (categories[d.category] || 0) + 1;
});
console.log('Categories found:', categories);
console.log('\nSample Dishes:');
console.log(dishes.slice(0, 5));

fs.writeFileSync('parsed_menu.json', JSON.stringify({ dishes, categories: Object.keys(categories) }, null, 2));
