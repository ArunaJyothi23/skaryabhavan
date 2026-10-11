const fs = require('fs');

function inspectHeroBg(file) {
  const html = fs.readFileSync(file, 'utf8');
  console.log(`=== HERO BG FOR ${file} ===`);
  
  // Find the first container or section
  const firstCon = html.substring(0, 15000);
  const bgMatches = [...firstCon.matchAll(/background-image:\s*url\((?:&quot;|["'])?([^'")]+)(?:&quot;|["'])?\)/gi)].map(m => m[1]);
  console.log('Hero backgrounds in first 15k chars:', bgMatches);
  
  // Look for any data-settings with background_image
  const dataSettingsBg = [...firstCon.matchAll(/&quot;background_image&quot;:{[^}]*&quot;url&quot;:&quot;([^&]+)&quot;/g)].map(m => m[1]);
  console.log('data-settings background_image:', dataSettingsBg);
}

inspectHeroBg('live_dosa_catering_raw.html');
inspectHeroBg('outdoor_catering_raw.html');
