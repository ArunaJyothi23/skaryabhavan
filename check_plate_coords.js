const sharp = require('sharp');

async function checkPlatePosition() {
  const { data, info } = await sharp('public/images/migrated/menu-north-thali-e1772186014264.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  
  // Let's sample pixels down the vertical center line (x = 240)
  for (let y = 0; y < height; y += 20) {
    const idx = (y * width + 240) * 3;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    console.log(`y=${y}: rgb(${r},${g},${b})`);
  }
}

checkPlatePosition();
