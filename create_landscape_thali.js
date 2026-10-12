const sharp = require('sharp');

async function createSeamlessLandscapeThali() {
  const input = 'public/images/migrated/menu-north-thali-e1772186014264.jpg';
  
  // Extract plate: y=68 to y=560 (height=492, width=480)
  // This keeps the entire silver plate and all bowls with some padding
  const plateBuffer = await sharp(input)
    .extract({ left: 0, top: 68, width: 480, height: 492 })
    .toBuffer();

  // The edges of this plateBuffer:
  // top: y=68, color is dark slate
  // bottom: y=560, color is dark slate
  // left: x=0, color is dark slate
  // right: x=479, color is dark slate

  // Let's create an image of size 960 x 640 (aspect ratio 3:2, 1.5:1, ideal for landscape half-column)
  // Average slate color is rgb(54, 50, 48) #363230
  // Let's create a blurred background from the original image itself to get the exact texture and lighting!
  const background = await sharp(input)
    .resize(960, 640, { fit: 'cover' })
    .blur(30)
    .modulate({ brightness: 0.7 })
    .toBuffer();

  // Now composite the sharp plate in the center
  const targetWidth = 960;
  const targetHeight = 640;
  
  // Plate height should be about 92% of target height to give a nice breathing room
  // Plate is 480 x 492. If we scale it to height=580, width=565:
  const resizedPlate = await sharp(plateBuffer)
    .resize({ height: 580 })
    .toBuffer();
    
  const plateMeta = await sharp(resizedPlate).metadata();
  const left = Math.round((targetWidth - plateMeta.width) / 2);
  const top = Math.round((targetHeight - plateMeta.height) / 2);

  await sharp(background)
    .composite([
      {
        input: resizedPlate,
        top: top,
        left: left,
      }
    ])
    .jpeg({ quality: 95 })
    .toFile('public/images/migrated/thali-landscape-perfect.jpg');

  console.log('Created thali-landscape-perfect.jpg');
}

createSeamlessLandscapeThali();
