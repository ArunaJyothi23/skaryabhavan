const fs = require('fs');
const path = require('path');
const https = require('https');

const urls = [
  'https://skaryabhavan.com/wp-content/uploads/2025/05/Hero-banner-scaled.jpg',
  'https://skaryabhavan.com/wp-content/uploads/2024/11/erica-ab-bg1-a.jpg',
  'https://skaryabhavan.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-09-at-17.38.24.jpeg',
  'https://skaryabhavan.com/wp-content/uploads/2024/11/NKAryaBhavan-Wembley-3.jpeg',
  'https://skaryabhavan.com/wp-content/uploads/2025/05/enquire-banner-1-scaled.jpg',
  'https://skaryabhavan.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-28-at-16.21.58.jpeg',
  'https://skaryabhavan.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-09-at-16.13.11-1.jpeg'
];

const targetDir = path.resolve(__dirname, 'public', 'images', 'migrated');

function dl(url, dest) {
  return new Promise((resolve) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) return resolve(true);
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirect = res.headers.location;
        if (!redirect.startsWith('http')) redirect = new URL(redirect, url).toString();
        file.close();
        fs.unlink(dest, () => {});
        return dl(redirect, dest).then(resolve);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        return resolve(false);
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(true); });
    }).on('error', () => { file.close(); fs.unlink(dest, () => {}); resolve(false); });
  });
}

async function run() {
  for (const u of urls) {
    const fn = path.basename(new URL(u.split('?')[0]).pathname);
    const dest = path.join(targetDir, fn);
    const ok = await dl(u, dest);
    console.log(ok ? 'Downloaded:' : 'Failed:', fn);
  }
}

run();
