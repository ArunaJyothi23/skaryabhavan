const fs = require('fs');

function findAllBgs(file) {
  const html = fs.readFileSync(file, 'utf8');
  console.log(`=== ALL BGS IN ${file} ===`);
  const bgs = [...html.matchAll(/([a-zA-Z0-9_.-]+)\s*\{[^}]*background-image:\s*url\(([^)]+)\)[^}]*\}/gi)];
  bgs.forEach(m => {
    console.log(`Selector: ${m[1]} -> URL: ${m[2].slice(0, 150)}`);
  });
}

findAllBgs('live_dosa_catering_raw.html');
findAllBgs('outdoor_catering_raw.html');
