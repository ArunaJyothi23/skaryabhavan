const sharp = require('sharp');

async function inspectImg() {
  const meta = await sharp('public/images/migrated/menu-north-thali-e1772186014264.jpg').metadata();
  console.log('Metadata:', meta);
}

inspectImg();
