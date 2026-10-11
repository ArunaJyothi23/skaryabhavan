const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = [
  // Outdoor catering
  'https://skaryabhavan.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-09-at-17.38.24.jpeg',
  'https://skaryabhavan.com/wp-content/uploads/2025/12/closed-metal-pots-1.jpg',
  'https://skaryabhavan.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-09-at-18.12.25.jpeg',
  'https://skaryabhavan.com/wp-content/uploads/2025/12/selective-focus-point-catering-buffet-food-1.jpg',
  'https://skaryabhavan.com/wp-content/uploads/2025/12/two-serious-adult-business-men-discussing-issue-1.jpg',
  'https://skaryabhavan.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-09-at-17.36.52.jpeg',
  // Live Dosa
  'https://skaryabhavan.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-08-at-14.51.18-e1765205112699.jpeg',
  'https://skaryabhavan.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-09-at-16.13.11-1.jpeg'
];

const destDir = path.join(__dirname, 'public', 'images', 'catering');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function downloadFile(url) {
  return new Promise((resolve) => {
    const filename = path.basename(url);
    const dest = path.join(destDir, filename);
    if (fs.existsSync(dest)) {
      console.log('Already exists:', filename);
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
      console.error('Failed to download:', url, err.message);
      resolve();
    });
  });
}

async function main() {
  for (const u of urls) {
    await downloadFile(u);
  }
}

main();
