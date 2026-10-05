const fs = require('fs');

const menuPage = JSON.parse(fs.readFileSync('extracted_pages/menu.json', 'utf8'));

function findCategories(node, depth = 0) {
  if (!node) return;
  if (Array.isArray(node)) {
    node.forEach(n => findCategories(n, depth));
    return;
  }
  if (node.widgetType === 'heading' || node.widgetType === 'text-editor') {
    const text = node.settings?.title || node.settings?.editor || '';
    const clean = text.replace(/<[^>]*>/g, '').trim();
    if (clean.length > 0 && clean.length < 80 && !clean.includes('function') && !clean.includes('{')) {
      console.log(`${'  '.repeat(depth)}[${node.widgetType}] ${clean}`);
    }
  }
  if (node.elements) {
    node.elements.forEach(n => findCategories(n, depth + 1));
  }
}

console.log('--- Headings and Category Labels in Menu Page ---');
findCategories(menuPage.elementorData);
