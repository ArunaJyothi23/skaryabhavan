const sharp = require('sharp');

async function createPerfectThali() {
  const input = 'public/images/migrated/menu-north-thali-e1772186014264.jpg';
  
  // The plate bounding box in original (480x640):
  // left: 5, top: 75, width: 470, height: 480.
  // Center of the plate: x = 240, y = 315.
  
  // First, extract the plate cleanly from y=70 to y=560 (height=490, width=480)
  const plateBuffer = await sharp(input)
    .extract({ left: 0, top: 70, width: 480, height: 490 })
    .toBuffer();

  // Create a canvas with the dark slate background color rgb(60, 56, 54) #3c3836
  // Size: 700 width x 700 height (or 800 x 700)
  // Let's create an 800 x 700 image where the plate is centered with generous breathing room
  // so no matter the screen size or container ratio, the plate is NEVER clipped!
  const canvasWidth = 720;
  const canvasHeight = 650;
  const leftOffset = Math.round((canvasWidth - 480) / 2); // 120
  const topOffset = Math.round((canvasHeight - 490) / 2);  // 80

  // Create background
  const bg = await sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 3,
      background: { r: 62, g: 58, b: 55 }
    }
  }).png().toBuffer();

  // Composite plate onto background
  await sharp(bg)
    .composite([
      {
        input: plateBuffer,
        top: topOffset,
        left: leftOffset
      }
    ])
    .jpeg({ quality: 95 })
    .toFile('public/images/migrated/about-thali-complete.jpg');

  console.log('Created public/images/migrated/about-thali-complete.jpg');
}

createPerfectThali();
