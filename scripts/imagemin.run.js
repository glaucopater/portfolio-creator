const fs = require('fs');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const baseSourcePath = '../src/assets/images/';
const outputPath = 'output/images';
const destFile = 'index.js';

(async () => {
  const files = await imagemin([`${baseSourcePath}*.{jpg}`], {
    destination: outputPath,
    plugins: [imageminMozjpeg({ quality: 70 })],
  });

  //create index file for import
  const importContent = [];
  const exportContent = [];
  files.map(f => {
    const imageFilename = `${f.sourcePath.replace(baseSourcePath, '')}`;
    const imageName = imageFilename.replace('.jpg', '');
    importContent.push(`import ${imageName} from './${imageFilename}';`);
    exportContent.push(`${imageName}`);
  });

  const content = [
    `${importContent.join('\r')}`,
    `const images = [${exportContent.join(',')}]`,
    'export default images;',
  ];

  fs.writeFileSync(`${outputPath}/${destFile}`, content.join('\r'), function(
    err,
  ) {
    if (err) {
      return console.warn(err);
    }
  });
})();
