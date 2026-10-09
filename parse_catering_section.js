const fs = require('fs');
const html = fs.readFileSync('catering_full_section.html', 'utf8');

// Find headings
const headings = [...html.matchAll(/<h\d[^>]*>([\s\S]*?)<\/h\d>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('Headings in catering section:', headings);

// Find forms
const forms = [...html.matchAll(/<form[\s\S]*?<\/form>/gi)].map(m => m[0]);
console.log('Forms found:', forms.length);
if (forms.length > 0) {
  fs.writeFileSync('catering_form.html', forms[0]);
  console.log('Saved catering_form.html');
}

// Find SVGs
const svgs = [...html.matchAll(/<svg[\s\S]*?<\/svg>/gi)].map(m => m[0]);
console.log('SVGs count:', svgs.length);
svgs.forEach((svg, i) => {
  fs.writeFileSync(`catering_icon_${i}.svg`, svg);
});
