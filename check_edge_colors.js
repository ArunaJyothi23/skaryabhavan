const sharp = require('sharp');

async function getEdgeColors() {
  const { data, info } = await sharp('public/images/migrated/thali-cropped-test.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;

  // Average color of column 0 (left edge)
  let rSum = 0, gSum = 0, bSum = 0;
  for (let y = 0; y < h; y++) {
    const idx = (y * w + 0) * 3;
    rSum += data[idx];
    gSum += data[idx + 1];
    bSum += data[idx + 2];
  }
  const avgLeft = [Math.round(rSum / h), Math.round(gSum / h), Math.round(bSum / h)];
  console.log('Left edge avg rgb:', avgLeft, 'hex:', rgbToHex(avgLeft));

  // Average color of column w-1 (right edge)
  rSum = 0; gSum = 0; bSum = 0;
  for (let y = 0; y < h; y++) {
    const idx = (y * w + (w - 1)) * 3;
    rSum += data[idx];
    gSum += data[idx + 1];
    bSum += data[idx + 2];
  }
  const avgRight = [Math.round(rSum / h), Math.round(gSum / h), Math.round(bSum / h)];
  console.log('Right edge avg rgb:', avgRight, 'hex:', rgbToHex(avgRight));

  // Top edge
  rSum = 0; gSum = 0; bSum = 0;
  for (let x = 0; x < w; x++) {
    const idx = (0 * w + x) * 3;
    rSum += data[idx];
    gSum += data[idx + 1];
    bSum += data[idx + 2];
  }
  const avgTop = [Math.round(rSum / w), Math.round(gSum / w), Math.round(bSum / w)];
  console.log('Top edge avg rgb:', avgTop, 'hex:', rgbToHex(avgTop));

  // Bottom edge
  rSum = 0; gSum = 0; bSum = 0;
  for (let x = 0; x < w; x++) {
    const idx = ((h - 1) * w + x) * 3;
    rSum += data[idx];
    gSum += data[idx + 1];
    bSum += data[idx + 2];
  }
  const avgBottom = [Math.round(rSum / w), Math.round(gSum / w), Math.round(bSum / w)];
  console.log('Bottom edge avg rgb:', avgBottom, 'hex:', rgbToHex(avgBottom));
}

function rgbToHex([r, g, b]) {
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

getEdgeColors();
