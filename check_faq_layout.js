const fs = require('fs');

function inspectFaqSection(file, id) {
  const html = fs.readFileSync(file, 'utf8');
  console.log(`\n=== FAQ SECTION FOR ${file} (${id}) ===`);
  const idx = html.indexOf(`data-id="${id}"`);
  const snippet = html.substring(idx, idx + 8000);
  console.log('Snippet:');
  console.log(snippet.slice(0, 1500));
}

inspectFaqSection('outdoor_extracted.html', 'ee14354');
inspectFaqSection('live_dosa_extracted.html', '5ab95b6');
