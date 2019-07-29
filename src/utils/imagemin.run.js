const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async () => {
  const files = await imagemin(['../assets/images/*.{jpg}'], {
    destination: 'build/images',
    plugins: [imageminMozjpeg({ quality: 70 })],
  });

  console.log(files);
})();
