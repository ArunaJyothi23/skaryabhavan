const fs = require('fs');
const https = require('https');
const path = require('path');

const liveDosaImages = [
  'https://skaryabhavan.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-08-at-14.54.23-1.jpeg',
  'https://skaryabhavan.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-08-at-14.54.23.jpeg',
  'https://skaryabhavan.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-08-at-14.54.22.jpeg',
  'https://skaryabhavan.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-08-at-14.52.47.jpeg',
  'https://skaryabhavan.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-08-at-14.52.20.jpeg',
  'https://skaryabhavan.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-08-at-14.51.18-2.jpeg'
];

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
  for (const url of liveDosaImages) {
    await download(url);
    await new Promise(r => setTimeout(r, 100));
  }
  console.log('Live dosa gallery done!');
}

run();
