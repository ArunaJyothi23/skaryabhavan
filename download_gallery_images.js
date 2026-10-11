const fs = require('fs');
const https = require('https');
const path = require('path');

const outdoorData = JSON.parse(fs.readFileSync('outdoor_parsed_data.json', 'utf8'));
const liveDosaData = JSON.parse(fs.readFileSync('live_dosa_parsed_data.json', 'utf8'));

const allImages = [...new Set([
  ...outdoorData.gallery.map(g => g.src),
  ...liveDosaData.gallery.map(g => g.src)
])];

console.log('Total unique gallery images to download:', allImages.length);

const destDir = path.join(__dirname, 'public', 'images', 'catering', 'gallery');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function downloadFile(url) {
  return new Promise((resolve) => {
    const filename = path.basename(url);
    const dest = path.join(destDir, filename);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      return resolve();
    }
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Downloaded:', filename);
        resolve();
      });
    }).on('error', (err) => {
      console.error('Failed:', url, err.message);
      resolve();
    });
  });
}

async function main() {
  for (const url of allImages) {
    await downloadFile(url);
  }
  console.log('All gallery downloads done!');
}

main();
