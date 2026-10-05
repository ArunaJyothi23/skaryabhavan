const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('live_home.html', 'utf8');
const $ = cheerio.load(html);

// Remove scripts and styles
$('script, style, noscript').remove();

// Iterate through top-level elementor sections
$('.elementor-section-wrap > div, .elementor > div, main > div').each((i, el) => {
  const text = $(el).text().replace(/\s+/g, ' ').trim();
  if (text.length > 20) {
    console.log(`\n=================== BLOCK ${i} ===================`);
    console.log(text.slice(0, 400));
  }
});
