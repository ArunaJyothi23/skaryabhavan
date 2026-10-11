const fs = require('fs');

function analyzeDetailed(file) {
  const html = fs.readFileSync(file, 'utf8');
  console.log('=== DETAILED ANALYZE:', file, '===');
  
  // Find main content container
  // In WordPress / Elementor it's usually inside <div data-elementor-type="wp-page" ...> or similar
  const mainMatch = html.match(/<div data-elementor-type="wp-page"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/main>/) 
    || html.match(/<div class="elementor elementor-[\s\S]*?<\/article>/)
    || html.match(/<div class="entry-content"[\s\S]*?<\/div><!-- \.entry-content -->/);

  // Let's find all elementor sections
  const sections = [...html.matchAll(/<section class="elementor-section[\s\S]*?<\/section>/g)];
  console.log('Found sections count:', sections.length);

  // Let's write out cleaned text/HTML of each section
  sections.forEach((sec, i) => {
    // get some identifying text
    const textSnippet = sec[0].replace(/<style[\s\S]*?<\/style>/g, '').replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 150);
    console.log(`Section ${i}:`, textSnippet);
  });
}

analyzeDetailed('outdoor_catering_raw.html');
analyzeDetailed('live_dosa_catering_raw.html');
