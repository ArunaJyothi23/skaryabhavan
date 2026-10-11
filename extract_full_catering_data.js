const fs = require('fs');

function extractData(file, jsonOut) {
  const html = fs.readFileSync(file, 'utf8');
  
  // Extract all accordion items
  // Modern Elementor n-accordion uses:
  // <details class="e-n-accordion-item">
  //   <summary ...><span class="e-n-accordion-item-title-text">Question</span></summary>
  //   <div class="e-n-accordion-item-content">Answer</div>
  // </details>
  const faqs = [];
  const accordionMatches = [...html.matchAll(/<details[^>]*class="[^"]*e-n-accordion-item[^"]*"[^>]*>([\s\S]*?)<\/details>/gi)];
  
  accordionMatches.forEach(acc => {
    const titleMatch = acc[1].match(/<span class="e-n-accordion-item-title-text">(.*?)<\/span>/i);
    const contentMatch = acc[1].match(/<div class="e-n-accordion-item-content"[\s\S]*?>([\s\S]*?)<\/div>/i);
    if (titleMatch) {
      faqs.push({
        q: titleMatch[1].replace(/<[^>]+>/g, '').trim(),
        a: contentMatch ? contentMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : ''
      });
    }
  });

  // Extract gallery images
  const galleryMatches = [...html.matchAll(/<a[^>]*class="[^"]*e-gallery-item[^"]*"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)];
  const gallery = galleryMatches.map(m => {
    const imgMatch = m[2].match(/src="([^"]+)"/i);
    return {
      href: m[1],
      src: imgMatch ? imgMatch[1] : m[1]
    };
  });

  // Extract all icon-list items
  const iconLists = [];
  const listMatches = [...html.matchAll(/<ul class="elementor-icon-list-items">([\s\S]*?)<\/ul>/gi)];
  listMatches.forEach((ul, i) => {
    const items = [...ul[1].matchAll(/<span class="elementor-icon-list-text">(.*?)<\/span>/gi)].map(item => item[1].trim());
    iconLists.push(items);
  });

  const result = {
    faqs,
    gallery,
    iconLists
  };

  fs.writeFileSync(jsonOut, JSON.stringify(result, null, 2));
  console.log(`Saved ${jsonOut}: ${faqs.length} FAQs, ${gallery.length} Gallery items, ${iconLists.length} Icon lists.`);
}

extractData('outdoor_extracted.html', 'outdoor_parsed_data.json');
extractData('live_dosa_extracted.html', 'live_dosa_parsed_data.json');
