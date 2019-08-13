const outputPath = 'output/images';
const imageToSlices = require('image-to-slices');
const lineXArray = [100, 200];
const lineYArray = [100, 200];
const source = outputPath + 'fashion.jpg'; // width: 300, height: 300

imageToSlices(
  source,
  lineXArray,
  lineYArray,
  {
    saveToDir: '/sliced/',
  },
  function() {
    console.log('the source image has been sliced into 9 sections!');
  },
);
