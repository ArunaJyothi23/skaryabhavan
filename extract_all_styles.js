const fs = require('fs');

const html = fs.readFileSync('live_dosa_latest.html', 'utf8');

// Find all style tags
const styleRegex = /<style([^>]*)>([\s\S]*?)<\/style>/gi;
let match;
let i = 0;
while ((match = styleRegex.exec(html)) !== null) {
  const attrs = match[1];
  const css = match[2];
  const idMatch = attrs.match(/id=['"]([^'"]+)['"]/);
  const id = idMatch ? idMatch[1] : `style_${i}`;
  console.log(`Style ${i}: id=${id}, length=${css.length}`);
  fs.writeFileSync(`extracted_${id}.css`, css);
  i++;
}
