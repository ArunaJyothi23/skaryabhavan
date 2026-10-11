const fs = require('fs');

function inspectSectionLayout(file) {
  const html = fs.readFileSync(file, 'utf8');
  console.log(`\n=== CONTAINER TREE FOR ${file} ===`);
  
  // Find top level containers
  const reg = /<div class="elementor-element elementor-element-([a-z0-9]+) e-con-boxed e-con e-parent"[\s\S]*?(?=(?:<div class="elementor-element elementor-element-[a-z0-9]+ e-con-boxed e-con e-parent"|$))/g;
  let match;
  let count = 0;
  while ((match = reg.exec(html)) !== null) {
    const conHtml = match[0];
    const text = conHtml.replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`Parent Container [${count++}] (length ${conHtml.length}): ${text.slice(0, 150)}...`);
  }
}

inspectSectionLayout('outdoor_extracted.html');
inspectSectionLayout('live_dosa_extracted.html');
