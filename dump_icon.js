const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('live_home.html', 'utf8'));

$('link[rel*="icon"]').each((i, el) => {
  console.log('Icon href:', $(el).attr('href'), 'sizes:', $(el).attr('sizes'));
});
