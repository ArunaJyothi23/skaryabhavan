const fs = require('fs');
const https = require('https');

https.get('https://skaryabhavan.com/wp-content/uploads/elementor/css/custom-frontend.min.css?ver=1791927974', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('custom-frontend.min.css', data);
    console.log('Saved custom-frontend.min.css, length:', data.length);
  });
});
