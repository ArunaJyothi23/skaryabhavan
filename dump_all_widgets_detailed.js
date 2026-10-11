const fs = require('fs');

function inspectAllHtml(file) {
  const html = fs.readFileSync(file, 'utf8');
  console.log(`\n=================== ALL SECTIONS IN ${file} ===================`);
  
  // Find all elementor containers at depth 1
  const matches = [...html.matchAll(/<div class="elementor-element elementor-element-([a-z0-9]+) [^"]*e-con-boxed[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g)];
  console.log('Containers count:', matches.length);

  // Let's dump all text blocks and widget types in order
  const widgetRegex = /<div class="elementor-element elementor-element-([a-z0-9]+) [^"]*elementor-widget-([a-z0-9_-]+)[^"]*"[\s\S]*?<div class="elementor-widget-container">([\s\S]*?)<\/div>\s*<\/div>/g;
  let w;
  let idx = 0;
  while ((w = widgetRegex.exec(html)) !== null) {
    const id = w[1];
    const type = w[2];
    const rawContent = w[3];
    // check if it has images
    const imgs = [...rawContent.matchAll(/<img[^>]+src=["']([^"']+)["']/g)].map(m => m[1]);
    // clean text
    const text = rawContent.replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`[#${idx++}] [${type}] (imgs: ${imgs.length}): ${text.slice(0, 120)}`);
    if (imgs.length) console.log('    IMG:', imgs);
  }
}

inspectAllHtml('outdoor_catering_raw.html');
inspectAllHtml('live_dosa_catering_raw.html');
