const fs = require('fs');

function inspectStyles(file) {
  const html = fs.readFileSync(file, 'utf8');
  console.log('=== CSS INSPECTION for', file, '===');
  
  // Look for inline styles and color codes (#...)
  const colors = [...html.matchAll(/#([0-9a-fA-F]{3,8})\b/g)].map(m => m[0].toLowerCase());
  const colorCounts = {};
  colors.forEach(c => colorCounts[c] = (colorCounts[c] || 0) + 1);
  console.log('Top colors:', Object.entries(colorCounts).sort((a,b) => b[1] - a[1]).slice(0, 15));

  // Find font families
  const fonts = [...html.matchAll(/font-family:\s*([^;"]+)/gi)].map(m => m[1].trim());
  console.log('Fonts:', [...new Set(fonts)]);
}

inspectStyles('outdoor_extracted.html');
inspectStyles('live_dosa_extracted.html');
