const fs = require('fs');

function deepInspect(rawFile, outFile) {
  const html = fs.readFileSync(rawFile, 'utf8');
  console.log(`\n=================== ${rawFile} ===================`);
  
  // Find all images in the entire page
  const allImgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]);
  console.log(`Total <img> tags: ${allImgs.length}`);
  
  // Find background-image: url(...)
  const bgUrls = [...html.matchAll(/url\((?:&quot;|["'])?([^'")]+)(?:&quot;|["'])?\)/gi)].map(m => m[1]);
  console.log(`Total url(...) references: ${bgUrls.length}`);
  
  // Combine all image URLs
  const combined = [...new Set([...allImgs, ...bgUrls])].filter(u => 
    u.includes('.jpg') || u.includes('.jpeg') || u.includes('.png') || u.includes('.webp') || u.includes('.svg')
  );
  console.log(`Unique image resources (${combined.length}):`);
  combined.forEach(u => console.log('  ', u));

  // Extract all section texts and classes
  const containers = [...html.matchAll(/<div class="elementor-element elementor-element-([a-z0-9]+)[^"]*e-con-boxed[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g)];
  console.log(`Boxed containers: ${containers.length}`);
  
  fs.writeFileSync(outFile, JSON.stringify({ combinedImages: combined }, null, 2));
}

deepInspect('live_dosa_catering_raw.html', 'live_dosa_all_imgs.json');
deepInspect('outdoor_catering_raw.html', 'outdoor_all_imgs.json');
