const fs = require('fs');

const p = JSON.parse(fs.readFileSync('extracted_pages/nagerkovil-arya-bhavan.json', 'utf8'));

p.elementorData.forEach((section, idx) => {
  console.log(`\n=================== SECTION ${idx} (id: ${section.id}) ===================`);
  
  function inspect(el) {
    if (el.widgetType) {
      console.log(`  -> Widget: [${el.widgetType}]`);
      if (el.settings?.title) console.log(`     title:`, el.settings.title);
      if (el.settings?.title_text) console.log(`     title_text:`, el.settings.title_text);
      if (el.settings?.heading_title) console.log(`     heading_title:`, el.settings.heading_title);
      if (el.settings?.editor) console.log(`     editor:`, el.settings.editor.slice(0, 150));
      if (el.settings?.image?.url) console.log(`     image:`, el.settings.image.url);
      if (el.settings?.slides) {
        console.log(`     slides count:`, el.settings.slides.length);
        el.settings.slides.forEach((s, i) => console.log(`       Slide ${i+1}: "${s.heading}" | "${s.description}" | img: ${s.background_image?.url}`));
      }
    }
    if (el.elements) el.elements.forEach(inspect);
  }
  inspect(section);
});
