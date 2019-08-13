const sharp = require('sharp');

sharp('./output/images/fashion1.jpg')
  .png()
  .tile({
    size: 512,
  })
  .toFile('output.dz', function(err, info) {
    // output.dzi is the Deep Zoom XML definition
    // output_files contains 512x512 tiles grouped by zoom level
  });
