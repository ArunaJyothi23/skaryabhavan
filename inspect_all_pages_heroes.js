const fs = require('fs');

const pages = [
  'about-us',
  'branches',
  'central-london',
  'wembley',
  'tooting',
  'live-dosa-catering',
  'outdoor-catering',
  'franchise',
  'contact-us'
];

pages.forEach(slug => {
  const file = `extracted_pages/${slug}.json`;
  if (!fs.existsSync(file)) return;
  const p = JSON.parse(fs.readFileSync(file, 'utf8'));
  console.log(`\n=================== ${slug.toUpperCase()} ===================`);
  console.log('Title:', p.title);
  
  // Find background images in elementorData
  const bgImages = [];
  function findBgs(node) {
    if (!node) return;
    if (Array.isArray(node)) return node.forEach(findBgs);
    if (node.settings?.background_image?.url) bgImages.push(node.settings.background_image.url);
    if (node.settings?.slides) {
      node.settings.slides.forEach(s => {
        if (s.background_image?.url) bgImages.push(s.background_image.url);
      });
    }
    if (node.elements) node.elements.forEach(findBgs);
  }
  findBgs(p.elementorData);
  console.log('Background Images:', Array.from(new Set(bgImages)));
});
