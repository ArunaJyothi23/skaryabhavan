const fs = require('fs');

function inspectDataSettings(file) {
  const html = fs.readFileSync(file, 'utf8');
  console.log(`\n=================== DATA SETTINGS FOR ${file} ===================`);
  
  // Find gallery widget data-settings
  const galleryMatches = [...html.matchAll(/data-widget_type="gallery\.default"[\s\S]*?data-settings="([^"]*)"/g)];
  galleryMatches.forEach((m, idx) => {
    const decoded = m[1].replace(/&quot;/g, '"');
    console.log(`Gallery ${idx}:`, decoded.slice(0, 500));
  });

  // Find all image URLs in the raw HTML by regex on wp-content/uploads
  const allUploads = [...html.matchAll(/https?:\/\/[^\s"'<>\\]+wp-content\/uploads\/[^\s"'<>\\]+\.(?:jpg|jpeg|png|webp)/gi)].map(m => m[0]);
  const uniqueUploads = [...new Set(allUploads)];
  console.log(`All uploads (${uniqueUploads.length}):`);
  uniqueUploads.forEach(u => console.log('  ', u));
}

inspectDataSettings('outdoor_catering_raw.html');
inspectDataSettings('live_dosa_catering_raw.html');
