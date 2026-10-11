const fs = require('fs');

function findContainerForBg(file, imageName) {
  const html = fs.readFileSync(file, 'utf8');
  console.log(`\n=== Finding container for ${imageName} in ${file} ===`);
  
  // Find where imageName appears in CSS
  const idx = html.indexOf(imageName);
  if (idx !== -1) {
    const cssSnippet = html.substring(Math.max(0, idx - 200), idx + 200);
    console.log('CSS snippet:', cssSnippet);
    // Find the class or ID that contains this rule
    const classMatch = cssSnippet.match(/\.elementor-element-([a-z0-9]+)/);
    if (classMatch) {
      const elId = classMatch[1];
      console.log('Element ID:', elId);
      // Find where this element appears in HTML
      const elIdx = html.indexOf(`data-id="${elId}"`);
      if (elIdx !== -1) {
        console.log('HTML Element snippet:', html.substring(elIdx, elIdx + 400));
      }
    }
  }
}

findContainerForBg('live_dosa_catering_raw.html', 'WhatsApp-Image-2025-12-08-at-14.51.18-e1765205112699.jpeg');
findContainerForBg('live_dosa_catering_raw.html', 'WhatsApp-Image-2025-12-09-at-16.13.11-1.jpeg');
findContainerForBg('outdoor_catering_raw.html', 'WhatsApp-Image-2025-12-09-at-17.38.24.jpeg');
findContainerForBg('outdoor_catering_raw.html', 'WhatsApp-Image-2025-12-09-at-17.36.52.jpeg');
