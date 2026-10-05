const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('live_home.html', 'utf8'));

$('#top-header .menu-item, header .menu-item').each((i, el) => {
  const text = $(el).find('> a').text().trim();
  const href = $(el).find('> a').attr('href');
  const hasSub = $(el).find('> .sub-menu, > div > .sub-menu, > ul').length > 0;
  console.log(`${' '.repeat($(el).parents('ul, .sub-menu').length * 2)}[Item] ${text} -> ${href} (hasSub: ${hasSub})`);
});
