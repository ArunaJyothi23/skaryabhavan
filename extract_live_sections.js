const fs = require('fs');
const data = JSON.parse(fs.readFileSync('elementor_home_data.json', 'utf8'));

function findWidget(elements, predicate) {
  for (const el of elements) {
    if (predicate(el)) return el;
    if (el.elements) {
      const found = findWidget(el.elements, predicate);
      if (found) return found;
    }
  }
  return null;
}

function findAll(elements, predicate, results = []) {
  for (const el of elements) {
    if (predicate(el)) results.push(el);
    if (el.elements) findAll(el.elements, predicate, results);
  }
  return results;
}

// 1. Find Gallery
const galleryWidget = findWidget(data, el => el.widgetType === 'gallery');
if (galleryWidget) {
  console.log('--- GALLERY WIDGET SETTINGS ---');
  console.log(JSON.stringify(galleryWidget.settings, null, 2));
}

// 2. Find Locations section
const locSection = findWidget(data, el => JSON.stringify(el).includes('Our Locations in the UK'));
if (locSection) {
  console.log('--- LOCATIONS SECTION FOUND ---');
  fs.writeFileSync('locations_elementor_tree.json', JSON.stringify(locSection, null, 2));
}

// 3. Find About section
const aboutSection = findWidget(data, el => JSON.stringify(el).includes('About Samko'));
if (aboutSection) {
  console.log('--- ABOUT SECTION FOUND ---');
  fs.writeFileSync('about_elementor_tree.json', JSON.stringify(aboutSection, null, 2));
}

// 4. Find Feature cards
const featureCards = findWidget(data, el => JSON.stringify(el).includes('Pure Vegetarian'));
if (featureCards) {
  console.log('--- FEATURE CARDS FOUND ---');
  fs.writeFileSync('features_elementor_tree.json', JSON.stringify(featureCards, null, 2));
}
