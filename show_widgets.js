const fs = require('fs');

function inspectWidgets(jsonFile) {
  const widgets = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
  console.log(`\n================ ${jsonFile} (${widgets.length} widgets) ================`);
  widgets.forEach((w, idx) => {
    const text = w.contentSnippet.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`[#${idx}] Type: ${w.type} | ID: ${w.id} | Preview: ${text.slice(0, 100)}`);
  });
}

inspectWidgets('outdoor_widgets.json');
inspectWidgets('live_dosa_widgets.json');
