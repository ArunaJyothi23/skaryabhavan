const fs = require('fs');
const html = fs.readFileSync('sk_home_live.html', 'utf8');
const faqStart = html.indexOf('Do you serve vegan food?');
const beforeFaq = html.substring(faqStart - 3000, faqStart);
const unescaped = beforeFaq.replace(/&quot;/g, '"');
const match = unescaped.match(/"background_slideshow_gallery":\s*(\[[^\]]+\])/);
if (match) {
  console.log('Slideshow items:');
  const items = JSON.parse(match[1]);
  console.log(JSON.stringify(items, null, 2));
} else {
  console.log('No direct json match, searching urls:');
  const regex = /https:\/\/[^"\s]+\.(?:jpeg|jpg|png)/gi;
  let m;
  while ((m = regex.exec(unescaped)) !== null) {
    console.log(m[0]);
  }
}
