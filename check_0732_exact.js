const fs = require('fs');
const html = fs.readFileSync('live_home.html', 'utf8');

const idx = html.indexOf('data-id="0732abe"');
console.log('Snippet of 0732abe:');
console.log(html.substring(idx, idx + 1000));

const reg = /\.elementor-element-0732abe[^{]*\{([^}]*)\}/g;
let m;
while ((m = reg.exec(html)) !== null) {
  console.log(m[0]);
}
