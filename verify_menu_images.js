const fs = require('fs');
const path = require('path');
const https = require('https');

const data = JSON.parse(fs.readFileSync('exact_menu_categories.json', 'utf8'));
const targetDir = path.resolve(__dirname, 'public', 'images', 'migrated');

const missingUrls = [];

Object.values(data).forEach(dishes => {
  dishes.forEach(d => {
    if (d.rawImage && d.rawImage.startsWith('http')) {
      const fn = path.basename(new URL(d.rawImage.split('?')[0]).pathname);
      const localFile = path.join(targetDir, fn);
      if (!fs.existsSync(localFile) || fs.statSync(localFile).size === 0) {
        missingUrls.push(d.rawImage);
      }
    }
  });
});

console.log(`Missing dish images: ${missingUrls.length}`);
if (missingUrls.length > 0) {
  console.log('Downloading missing images...');
  const uniqueMissing = Array.from(new Set(missingUrls));
  
  function dl(url, dest) {
    return new Promise(res => {
      const f = fs.createWriteStream(dest);
      https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, r => {
        if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) {
          f.close();
          fs.unlink(dest, () => {});
          return dl(r.headers.location, dest).then(res);
        }
        if (r.statusCode !== 200) {
          f.close();
          fs.unlink(dest, () => {});
          return res(false);
        }
        r.pipe(f);
        f.on('finish', () => { f.close(); res(true); });
      }).on('error', () => { f.close(); fs.unlink(dest, () => {}); res(false); });
    });
  }

  async function downloadAll() {
    for (const u of uniqueMissing) {
      const fn = path.basename(new URL(u.split('?')[0]).pathname);
      const dest = path.join(targetDir, fn);
      await dl(u, dest);
      console.log('Downloaded:', fn);
    }
    console.log('Done downloading missing dish images!');
  }
  downloadAll();
}
