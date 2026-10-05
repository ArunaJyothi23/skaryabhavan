const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

let cookieJar = {};

function updateCookies(res) {
  const setCookies = res.headers['set-cookie'];
  if (setCookies) {
    setCookies.forEach(sc => {
      const parts = sc.split(';')[0].split('=');
      const name = parts[0].trim();
      const val = parts.slice(1).join('=');
      cookieJar[name] = val;
    });
  }
}

function getCookieHeader() {
  return Object.entries(cookieJar).map(([k, v]) => `${k}=${v}`).join('; ');
}

function makeRequest(urlStr, options = {}, postData = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlStr);
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
      ...options.headers
    };
    const cookieHeader = getCookieHeader();
    if (cookieHeader) {
      headers['Cookie'] = cookieHeader;
    }

    const reqOptions = {
      hostname: url.hostname,
      port: url.port || 443,
      path: url.pathname + url.search,
      method: options.method || 'GET',
      headers: headers
    };

    const req = https.request(reqOptions, (res) => {
      updateCookies(res);

      if (options.downloadDest) {
        const fileStream = fs.createWriteStream(options.downloadDest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve({ statusCode: res.statusCode, headers: res.headers, downloadedTo: options.downloadDest });
        });
        return;
      }

      let data = [];
      res.on('data', (chunk) => data.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(data);
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: buffer.toString('utf8'),
          raw: buffer
        });
      });
    });

    req.on('error', reject);

    if (postData) {
      req.write(postData);
    }
    req.end();
  });
}

async function run() {
  console.log('Step 1: Fetching login page...');
  const loginPageRes = await makeRequest('https://skaryabhavan.com/wp-login.php');
  console.log('Login page status:', loginPageRes.statusCode);

  console.log('Step 2: Submitting login credentials...');
  const postParams = querystring.stringify({
    'log': 'eventsnkab',
    'pwd': '0k07nvYbQy82',
    'wp-submit': 'Log In',
    'redirect_to': 'https://skaryabhavan.com/wp-admin/',
    'testcookie': '1'
  });

  const loginRes = await makeRequest('https://skaryabhavan.com/wp-login.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postParams),
      'Referer': 'https://skaryabhavan.com/wp-login.php'
    }
  }, postParams);

  console.log('Login response status:', loginRes.statusCode);
  console.log('Redirect location:', loginRes.headers.location);

  let adminUrl = loginRes.headers.location || 'https://skaryabhavan.com/wp-admin/';
  const adminRes = await makeRequest(adminUrl);
  console.log('Admin page status:', adminRes.statusCode);

  console.log('Step 3: Checking Plugins page...');
  const pluginsRes = await makeRequest('https://skaryabhavan.com/wp-admin/plugins.php');
  console.log('Plugins page status:', pluginsRes.statusCode);
  fs.writeFileSync('plugins_raw.html', pluginsRes.body);
  console.log('Saved plugins_raw.html (length:', pluginsRes.body.length, ')');

  console.log('Step 4: Checking export page...');
  const exportPageRes = await makeRequest('https://skaryabhavan.com/wp-admin/export.php');
  console.log('Export page status:', exportPageRes.statusCode);
  fs.writeFileSync('export_page.html', exportPageRes.body);

  // Check download export
  console.log('Step 5: Downloading WordPress Export XML...');
  const exportDownloadRes = await makeRequest('https://skaryabhavan.com/wp-admin/export.php?download=true&content=all', {
    downloadDest: path.resolve(__dirname, 'skaryabhavan.WordPress.export.xml')
  });
  console.log('Export XML status:', exportDownloadRes.statusCode);

  // Check file size
  const stats = fs.statSync('skaryabhavan.WordPress.export.xml');
  console.log('Export file size:', stats.size, 'bytes');

  // Peek first 500 characters
  const head = fs.readFileSync('skaryabhavan.WordPress.export.xml', 'utf8').substring(0, 500);
  console.log('Export header preview:\n', head);
}

run().catch(console.error);
