const fs = require('fs');
const https = require('https');
const path = require('path');

const outdoorData = JSON.parse(fs.readFileSync('outdoor_parsed_data.json', 'utf8'));
const liveDosaData = JSON.parse(fs.readFileSync('live_dosa_parsed_data.json', 'utf8'));

const allImages = [...new Set([
  ...outdoorData.gallery.map(g => g.src),
  ...liveDosaData.gallery.map(g => g.src)
])];

const destDir = path.join(__dirname, 'public', 'images', 'catering', 'gallery');

function download(url) {
  return new Promise((resolve) => {
    const filename = path.basename(url);
    const dest = path.join(destDir, filename);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      return resolve();
    }
    const file = fs.createWriteStream(dest);
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode !== 200) {
        fs.unlink(dest, () => {});
        return resolve();
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log('Downloaded:', filename);
          resolve();
        });
      });
    });
    req.on('error', () => {
      fs.unlink(dest, () => {});
      resolve();
    });
  });
}

async function run() {
  for (const url of allImages) {
    await download(url);
    await new Promise(r => setTimeout(r, 200));
  }
  console.log('Retry done!');
}

run();
