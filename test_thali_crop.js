const sharp = require('sharp');

async function processImage() {
  // Let's inspect the original image
  const input = 'public/images/migrated/menu-north-thali-e1772186014264.jpg';
  
  // The plate is from roughly x=5 to 475, y=75 to 555
  // If we take the plate with generous padding of the dark tabletop background:
  // Let's create a perfectly framed version where the round platter is completely visual in the center
  const meta = await sharp(input).metadata();
  console.log('Original:', meta.width, 'x', meta.height);

  // Let's see what y=70 to y=560 looks like
  // If we extend the top and bottom with the same background color or clone:
  // Even simpler: let's test what y=70 to y=560 contains
  const extracted = await sharp(input)
    .extract({ left: 0, top: 70, width: 480, height: 495 })
    .toFile('public/images/migrated/thali-cropped-test.jpg');
    
  console.log('Saved thali-cropped-test.jpg');
}

processImage();
