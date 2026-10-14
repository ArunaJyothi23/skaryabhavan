const https = require('https');
const fs = require('fs');

https.get('https://use.typekit.net/jid7xtu.css?ver=1.6.2', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('typekit_jid7xtu.css', data);
    console.log('Saved typekit_jid7xtu.css, length:', data.length);
    console.log('Fonts in typekit:');
    const families = [...data.matchAll(/font-family:\s*["']?([^;"']+)["']?/gi)].map(m => m[1]);
    console.log([...new Set(families)]);
  });
});
