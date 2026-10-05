const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const allUrls = JSON.parse(fs.readFileSync('all_image_urls.json', 'utf8'));
const targetDir = path.resolve(__dirname, 'public', 'images', 'migrated');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log(`Total URLs to download: ${allUrls.length}`);

function downloadOne(url, dest) {
  return new Promise((resolve) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
      return resolve({ url, success: true, cached: true });
    }

    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;

    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 15000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const base = new URL(url);
          redirectUrl = new URL(redirectUrl, base.origin).toString();
        }
        file.close();
        fs.unlink(dest, () => {});
        return downloadOne(redirectUrl, dest).then(resolve);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        return resolve({ url, success: false, status: res.statusCode });
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve({ url, success: true });
      });
    });

    req.on('error', (err) => {
      file.close();
      fs.unlink(dest, () => {});
      resolve({ url, success: false, error: err.message });
    });

    req.on('timeout', () => {
      req.destroy();
      file.close();
      fs.unlink(dest, () => {});
      resolve({ url, success: false, error: 'Timeout' });
    });
  });
}

async function run() {
  const mapping = {};
  const CONCURRENCY = 15;
  let index = 0;
  let completed = 0;
  let successful = 0;

  async function worker() {
    while (index < allUrls.length) {
      const url = allUrls[index++];
      const cleanUrl = url.split('?')[0];
      const filename = path.basename(new URL(cleanUrl).pathname);
      const dest = path.join(targetDir, filename);
      const localWebPath = `/images/migrated/${filename}`;

      const res = await downloadOne(url, dest);
      completed++;
      if (res.success) {
        successful++;
        mapping[url] = localWebPath;
        mapping[cleanUrl] = localWebPath;
      }
      if (completed % 50 === 0 || completed === allUrls.length) {
        console.log(`Progress: ${completed}/${allUrls.length} downloaded (${successful} succeeded)...`);
      }
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);

  fs.writeFileSync('image_mapping.json', JSON.stringify(mapping, null, 2));
  console.log(`Finished downloading! ${successful}/${allUrls.length} saved to public/images/migrated/`);
}

run().catch(console.error);
