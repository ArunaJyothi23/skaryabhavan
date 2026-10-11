const fs = require('fs');

function findCssLinks(file) {
  const html = fs.readFileSync(file, 'utf8');
  console.log('=== CSS links for', file, '===');
  const links = [...html.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi)].map(m => m[1]);
  const postCss = links.filter(l => l.includes('elementor/css/post-'));
  console.log('Post CSS:', postCss);
}

findCssLinks('outdoor_catering_raw.html');
findCssLinks('live_dosa_catering_raw.html');
