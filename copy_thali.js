const fs = require('fs');

fs.copyFileSync('public/images/migrated/thali-cropped-test.jpg', 'public/images/migrated/about-thali-complete.jpg');
console.log('Copied thali-cropped-test.jpg to about-thali-complete.jpg');
