const fs = require('fs');

const html = fs.readFileSync('live_home.html', 'utf8');

const regex = /<style[^>]*id="elementor-post-9289"[^>]*>([\s\S]*?)<\/style>/;
const match = html.match(regex);
if (match) {
  const css = match[1];
  const rules = css.split('}').filter(r => 
    r.includes('e379276') || r.includes('d8f4d61') || r.includes('e1fa8fe') || r.includes('126a1ff')
  );
  rules.forEach(r => console.log(r.trim() + '}'));
} else {
  console.log('Post 9289 style not found by ID, searching all styles...');
  const allStyles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map(m => m[1]);
  allStyles.forEach((s, idx) => {
    if (s.includes('e1fa8fe')) {
      console.log(`Found in style tag ${idx}:`);
      s.split('}').filter(r => r.includes('e1fa8fe') || r.includes('d8f4d61')).forEach(r => console.log('  ' + r.trim() + '}'));
    }
  });
}
