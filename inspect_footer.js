const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('live_home.html', 'utf8');
const $ = cheerio.load(html);

console.log('=== HEADER HTML ===');
console.log($('header').html()?.slice(0, 1000) || 'No <header> tag');

console.log('\n=== FOOTER TEXT & LINKS ===');
$('footer a, .footer a, [data-elementor-type="footer"] a').each((i, el) => {
  console.log($(el).text().trim(), '->', $(el).attr('href'));
});

console.log('\n=== FOOTER RAW SNIPPET ===');
console.log($('[data-elementor-type="footer"]').text().slice(0, 1000));
