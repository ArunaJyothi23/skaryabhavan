const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('live_home.html', 'utf8'));

const footer = $('[data-elementor-type="footer"]');
console.log('Heading 1:', footer.find('.elementor-element-5064087').html());
console.log('Heading 2:', footer.find('.elementor-element-d31e988').html());
console.log('Divider:', footer.find('.elementor-element-b631d25').html());
