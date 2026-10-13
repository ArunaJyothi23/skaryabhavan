const fs = require('fs');

const html = fs.readFileSync('outdoor_catering_raw.html', 'utf8');

// Look for package styling in outdoor_catering
const pkgIdx = html.indexOf('£15.99');
if (pkgIdx !== -1) {
  console.log('=== OUTDOOR PACKAGES HTML SNIPPET ===');
  console.log(html.substring(pkgIdx - 500, pkgIdx + 2000));
}

// Look for dishes styling in outdoor_catering
const dishIdx = html.indexOf('Arya Bhavan Special Idly');
if (dishIdx !== -1) {
  console.log('=== OUTDOOR DISHES HTML SNIPPET ===');
  console.log(html.substring(dishIdx - 500, dishIdx + 1500));
}

// Look for FAQ styling in outdoor_catering
const faqIdx = html.indexOf('Do you cater South and North Indian');
if (faqIdx !== -1) {
  console.log('=== OUTDOOR FAQ HTML SNIPPET ===');
  console.log(html.substring(faqIdx - 500, faqIdx + 1000));
}
