const fs = require('fs');

const html = fs.readFileSync('outdoor_catering_raw.html', 'utf8');
const dishHeaderIdx = html.indexOf('Starter');
const snippet = html.substring(dishHeaderIdx - 600, dishHeaderIdx + 400);
const ids = [...snippet.matchAll(/data-id="([a-z0-9]+)"/g)].map(m => m[1]);
console.log('Dish container IDs:', ids);
ids.forEach(id => {
  const m = html.match(new RegExp('\\.elementor-element-' + id + '[^}]+}', 'g'));
  if (m) console.log(id, ':', m.join(' | '));
});
