const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('live_home.html', 'utf8');
const $ = cheerio.load(html);

const formContainer = $('[data-id="ac6350c"]').closest('.e-con-child');
console.log('Form container classes & id:', formContainer.attr('class'), formContainer.attr('data-id'));

// Let's find headings and cards in f3c57b5
const cardsContainer = $('[data-id="f3c57b5"]');
console.log('Cards container:', cardsContainer.attr('class'), cardsContainer.attr('data-id'));

cardsContainer.find('h2, h3, h4, p').each((i, el) => {
  console.log(`${el.tagName} (${$(el).attr('class')}): "${$(el).text().trim()}"`);
});

// Let's check CSS for cards inside f3c57b5
const ids = [];
cardsContainer.find('[data-id]').each((i, el) => ids.push($(el).attr('data-id')));
console.log('Child IDs inside f3c57b5:', ids);

for (const id of ids) {
  const reg = new RegExp(`\\.elementor-element-${id}[^{]*\\{([^}]*)\\}`, 'g');
  let m;
  while ((m = reg.exec(html)) !== null) {
    if (m[0].includes('font') || m[0].includes('border') || m[0].includes('color')) {
      console.log(m[0]);
    }
  }
}
