const fs = require('fs');

function parseAccordion(file) {
  const html = fs.readFileSync(file, 'utf8');
  console.log('=== FAQs for', file, '===');
  
  const details = [...html.matchAll(/<details id="e-n-accordion-item-[^"]*"[\s\S]*?<\/details>/g)];
  details.forEach((d, idx) => {
    const qMatch = d[0].match(/class="e-n-accordion-item-title-text">\s*(.*?)\s*<\/div>/);
    // answer text is in text-editor inside
    const aMatch = d[0].match(/<div class="elementor-widget-container">\s*<p>(.*?)<\/p>/) || d[0].match(/<div class="elementor-widget-container">\s*(?:<article[^>]*>)?\s*<p>(.*?)<\/p>/);
    const q = qMatch ? qMatch[1].trim() : '';
    const a = aMatch ? aMatch[1].replace(/<[^>]+>/g, '').trim() : '';
    console.log(`[${idx + 1}] Q: ${q}\nA: ${a}\n`);
  });
}

parseAccordion('outdoor_extracted.html');
parseAccordion('live_dosa_extracted.html');
