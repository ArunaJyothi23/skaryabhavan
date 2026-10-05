const fs = require('fs');
const path = require('path');
const https = require('https');

const urls = JSON.parse(fs.readFileSync('live_home_uploads.json', 'utf8'))
  .filter(u => /\.(jpg|jpeg|png|webp)$/i.test(u.split('?')[0]));

const targetDir = path.resolve(__dirname, 'public', 'images', 'migrated');
if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

function downloadFile(url, dest) {
  return new Promise((resolve) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
      console.log('Already exists:', path.basename(dest));
      return resolve(true);
    }
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirect = res.headers.location;
        if (!redirect.startsWith('http')) {
          redirect = new URL(redirect, url).toString();
        }
        file.close();
        fs.unlink(dest, () => {});
        return downloadFile(redirect, dest).then(resolve);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        console.error('Failed', res.statusCode, url);
        return resolve(false);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Downloaded:', path.basename(dest));
        resolve(true);
      });
    }).on('error', err => {
      file.close();
      fs.unlink(dest, () => {});
      console.error('Error:', err.message, url);
      resolve(false);
    });
  });
}

async function run() {
  for (const u of urls) {
    const fn = path.basename(new URL(u.split('?')[0]).pathname);
    const dest = path.join(targetDir, fn);
    await downloadFile(u, dest);
  }
  console.log('Finished downloading exact homepage assets!');
}

run();
