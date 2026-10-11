const fs = require('fs');

const html = fs.readFileSync('outdoor_extracted.html', 'utf8');
const faqIdx = html.indexOf('Faqs');
console.log('Faqs index:', faqIdx);
if (faqIdx !== -1) {
  console.log(html.substring(faqIdx - 100, faqIdx + 3000));
}
