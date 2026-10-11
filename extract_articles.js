const fs = require('fs');

function extractArticle(file, outFile) {
  const html = fs.readFileSync(file, 'utf8');
  const startIdx = html.indexOf('<div data-elementor-type="wp-page"');
  if (startIdx !== -1) {
    const footerIdx = html.indexOf('<footer');
    const content = html.substring(startIdx, footerIdx !== -1 ? footerIdx : startIdx + 200000);
    fs.writeFileSync(outFile, content);
    console.log(`Saved ${outFile}, length: ${content.length}`);
  } else {
    console.log(`No elementor wp-page found in ${file}`);
  }
}

extractArticle('outdoor_catering_raw.html', 'outdoor_extracted.html');
extractArticle('live_dosa_catering_raw.html', 'live_dosa_extracted.html');
