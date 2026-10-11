const fs = require('fs');

function inspectEParents(file) {
  const html = fs.readFileSync(file, 'utf8');
  console.log('===', file, '===');
  const matches = [...html.matchAll(/<div class="elementor-element elementor-element-([a-z0-9]+)[^"]*e-parent[^"]*"[^>]*>/g)];
  console.log('e-parent count:', matches.length);
  matches.forEach((m, idx) => {
    const elId = m[1];
    const pos = html.indexOf(m[0]);
    const snippet = html.substring(pos, pos + 2500);
    // Find headings inside this container
    const headings = [...snippet.matchAll(/<(?:h[1-4]|summary)[^>]*>(.*?)<\/(?:h[1-4]|summary)>/gi)].map(h => h[1].replace(/<[^>]+>/g, '').trim());
    console.log(`[${idx}] ID: ${elId} | Headings: ${headings.join(' | ')}`);
  });
}

inspectEParents('outdoor_extracted.html');
inspectEParents('live_dosa_extracted.html');
