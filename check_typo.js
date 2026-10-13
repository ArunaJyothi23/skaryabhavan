const fs = require('fs');
const html = fs.readFileSync('live_home.html', 'utf8');
const ids = ['0998e0f', '0a8c46d', '7feea6e', '6c1b568', '892a0a9', '36ac188', '56eb117', 'df75b1f', 'ac6350c', 'e7dc1ea'];
for (const id of ids) {
  const reg = new RegExp(`\\.elementor-element-${id}[^{]*\\{([^}]*)\\}`, 'g');
  let m;
  while ((m = reg.exec(html)) !== null) {
    console.log(id, m[0]);
  }
}
