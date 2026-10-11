const fs = require('fs');

function inspectPage(file) {
  const html = fs.readFileSync(file, 'utf8');
  console.log('====================================');
  console.log('=== FILE:', file, '===');
  console.log('====================================');
  
  // Extract all img src
  const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
  const wpImages = imgMatches.map(m => m[1]).filter(src => src.includes('wp-content/uploads'));
  console.log('WP upload images unique:', [...new Set(wpImages)]);
  
  // Extract background-image urls
  const bgMatches = [...html.matchAll(/background-image:\s*url\(["']?([^"')]+)["']?\)/gi)];
  console.log('BG images:', [...new Set(bgMatches.map(m => m[1]))]);

  // Extract Elementor headings (h1, h2, h3, h4)
  const headings = [...html.matchAll(/<(h[1-4])[^>]*>(.*?)<\/\1>/gi)].map(m => m[1] + ': ' + m[2].replace(/<[^>]+>/g, '').trim());
  console.log('Headings count:', headings.length);
  console.log('Headings:', headings);

  // Check elementor widget types or main sections
  const sections = [...html.matchAll(/class="elementor-widget-container"[\s\S]*?<\/div>/gi)];
  console.log('Widget container count:', sections.length);
}

inspectPage('outdoor_catering_raw.html');
inspectPage('live_dosa_catering_raw.html');
