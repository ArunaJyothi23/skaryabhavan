const fs = require('fs');

function dumpStructure(file, outSummaryFile) {
  const html = fs.readFileSync(file, 'utf8');
  
  // Find all widgets
  const widgetRegex = /<div class="elementor-element elementor-element-([a-z0-9]+)[^"]*elementor-widget elementor-widget-([^"\s]+)[^"]*"[\s\S]*?<div class="elementor-widget-container">([\s\S]*?)<\/div>\s*<\/div>/g;
  let match;
  let widgets = [];
  while ((match = widgetRegex.exec(html)) !== null) {
    const id = match[1];
    const type = match[2];
    const content = match[3].replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').trim();
    widgets.push({ id, type, contentSnippet: content.slice(0, 300) });
  }

  fs.writeFileSync(outSummaryFile, JSON.stringify(widgets, null, 2));
  console.log(`${file}: found ${widgets.length} widgets, saved to ${outSummaryFile}`);
}

dumpStructure('outdoor_extracted.html', 'outdoor_widgets.json');
dumpStructure('live_dosa_extracted.html', 'live_dosa_widgets.json');
