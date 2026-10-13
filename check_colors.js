const fs = require('fs');
const html = fs.readFileSync('live_home.html', 'utf8');
['f7d0aa6', 'd725b51', '43b9505', 'ef7cb2f'].forEach(id => {
  const reg = new RegExp(`--e-global-color-${id}:\\s*([^;]+);`);
  const m = html.match(reg);
  console.log(id, m ? m[1] : 'not found');
});
