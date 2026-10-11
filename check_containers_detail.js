const fs = require('fs');

function inspectContainerHtml(file, parentId) {
  const html = fs.readFileSync(file, 'utf8');
  console.log(`\n=================== Container ${parentId} in ${file} ===================`);
  const idx = html.indexOf(`data-id="${parentId}"`);
  if (idx !== -1) {
    const endIdx = html.indexOf('data-element_type="container" data-e-type="container"', idx + 2000);
    const snippet = html.substring(idx, idx + 10000);
    // Print all headings and text in this container
    const headings = [...snippet.matchAll(/<(?:h[1-4])[^>]*>(.*?)<\/(?:h[1-4])>/gi)].map(h => h[1].replace(/<[^>]+>/g, '').trim());
    console.log('Headings:', headings);
    // Find all background colors or styles in this container
    const styles = [...snippet.matchAll(/class="([^"]*)"/g)].map(m => m[1]);
    console.log('First 500 chars text:');
    console.log(snippet.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 500));
  }
}

inspectContainerHtml('outdoor_extracted.html', '4dc758f');
inspectContainerHtml('outdoor_extracted.html', '9e89c9e');
inspectContainerHtml('live_dosa_extracted.html', 'c1b5322');
inspectContainerHtml('live_dosa_extracted.html', 'd94c6a6');
