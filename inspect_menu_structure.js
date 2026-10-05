const fs = require('fs');

const menuPage = JSON.parse(fs.readFileSync('extracted_pages/menu.json', 'utf8'));

// Look at the top level containers
menuPage.elementorData.forEach((section, idx) => {
  console.log(`\nSection ${idx}: ID=${section.id}, elType=${section.elType}`);
  // check widgets inside
  function checkWidgets(el) {
    if (el.widgetType) {
      console.log(`  -> Widget: ${el.widgetType}, title: ${el.settings?.title || el.settings?.title_text || el.settings?.heading_title || ''}`);
      if (el.settings?.tabs) {
        console.log(`     Tabs:`, el.settings.tabs.map(t => t.tab_title));
      }
    }
    if (el.elements) el.elements.forEach(checkWidgets);
  }
  checkWidgets(section);
});
