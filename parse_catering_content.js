const fs = require('fs');

function parseElements(file) {
  const html = fs.readFileSync(file, 'utf8');
  console.log(`\n=================== PARSING ${file} ===================`);

  // Find all top-level e-con containers
  const containers = [...html.matchAll(/<div class="elementor-element elementor-element-([a-z0-9]+) e-con-boxed e-con e-parent"[\s\S]*?(?=<div class="elementor-element elementor-element-[a-z0-9]+ e-con-boxed e-con e-parent"|$)/g)];
  console.log('Top-level containers found:', containers.length);

  // Let's print out all images with their contexts
  const imgMatches = [...html.matchAll(/<img[^>]+src="([^">]+)"[^>]*alt="([^">]*)"[^>]*>/gi)];
  console.log('\n--- Images ---');
  imgMatches.forEach(m => console.log('IMG:', m[1], '| ALT:', m[2]));

  // Let's print out all FAQs if any (Elementor accordion / toggle)
  console.log('\n--- FAQ / Accordions ---');
  const faqs = [...html.matchAll(/class="elementor-tab-title[^"]*"[^>]*>[\s\S]*?<a[^>]*>(.*?)<\/a>[\s\S]*?<div class="elementor-tab-content[^"]*"[^>]*>([\s\S]*?)<\/div>/gi)];
  faqs.forEach(f => {
    const q = f[1].replace(/<[^>]+>/g, '').trim();
    const a = f[2].replace(/<[^>]+>/g, '').trim();
    console.log(`Q: ${q}\nA: ${a}\n`);
  });

  // Let's print form fields
  console.log('\n--- Forms ---');
  const forms = [...html.matchAll(/<form[\s\S]*?<\/form>/gi)];
  forms.forEach(f => {
    const inputs = [...f[0].matchAll(/<(?:input|textarea|select)[^>]+(?:name|placeholder|id)="([^">]+)"[^>]*>/gi)].map(i => i[0]);
    console.log('FORM INPUTS:', inputs);
  });
}

parseElements('outdoor_extracted.html');
parseElements('live_dosa_extracted.html');
