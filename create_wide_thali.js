const sharp = require('sharp');

async function createWideThali() {
  const input = 'public/images/migrated/thali-cropped-test.jpg';
  // thali-cropped-test is 480 x 495
  const meta = await sharp(input).metadata();
  console.log('thali-cropped-test:', meta.width, 'x', meta.height);

  // Let's create an image that is 720 wide x 495 tall (aspect ratio ~1.45 : 1)
  // Left extension: 120px wide
  // Right extension: 120px wide
  // Total: 120 + 480 + 120 = 720px width, 495px height!

  // How to make the left extension natural?
  // Take a 120px strip from the left edge of thali-cropped-test (which is pure slate table),
  // flip it horizontally and blend!
  const leftStrip = await sharp(input)
    .extract({ left: 0, top: 0, width: 80, height: meta.height })
    .flop() // mirror horizontally
    .resize(120, meta.height, { fit: 'fill' })
    .toBuffer();

  const rightStrip = await sharp(input)
    .extract({ left: meta.width - 80, top: 0, width: 80, height: meta.height })
    .flop() // mirror horizontally
    .resize(120, meta.height, { fit: 'fill' })
    .toBuffer();

  // Create 720 x 495 canvas
  const canvas = await sharp({
    create: {
      width: 720,
      height: 495,
      channels: 3,
      background: { r: 37, g: 32, b: 29 }
    }
  }).png().toBuffer();

  await sharp(canvas)
    .composite([
      { input: leftStrip, left: 0, top: 0 },
      { input: input, left: 120, top: 0 },
      { input: rightStrip, left: 600, top: 0 }
    ])
    .jpeg({ quality: 95 })
    .toFile('public/images/migrated/thali-wide-seamless.jpg');

  console.log('Saved thali-wide-seamless.jpg');
}

createWideThali();
