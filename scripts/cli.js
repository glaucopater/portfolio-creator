const directoryTree = require('directory-tree');
const fs = require('fs');
const path = require('path');
var hash = require('object-hash');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const outputPath = './output';
const extension = '.jpg';
const indexFile = 'index.js';
const namePrefix = 'img_';

const cbItem = item => {
  item.hash = hash(item);
  compressImage(item);
  return item;
};

const sanitizeFileName = fileName => {
  return `${namePrefix}${fileName.replace(extension, '')}`;
};

const writeIndex = content => {
  fs.writeFileSync(`${outputPath}/${indexFile}`, `${content}`, 'utf8', function(
    err,
  ) {
    if (err) {
      return console.warn(err);
    }
  });
};

const renameFile = (destinationPath, hash) => {
  const originalFilename = destinationPath;
  const destinationFilename = `${outputPath}/${hash}.jpg`;
  fs.rename(originalFilename, destinationFilename, function(err) {
    if (err) throw err;
    fs.stat(destinationFilename, function(err, stats) {
      if (err) throw err;
    });
  });
};

const compressImage = async item => {
  const { path } = item;
  const files = await imagemin([`${path}`], {
    destination: outputPath,
    plugins: [imageminMozjpeg({ quality: 70 })],
  });

  if (files && files.length > 0) {
    renameFile(files[0].destinationPath, item.hash);
  }
};

//create image index file

const createImagesIndex = () => {
  const folderPath = outputPath;
  const images = fs.readdirSync(folderPath).filter(fileName => {
    return path.extname(fileName).toLowerCase() === extension;
  });

  const importImages = images.map(fileName => {
    const name = sanitizeFileName(fileName);
    return `import ${name} from  './${fileName}';`;
  });
  const importContent = importImages.join('\r');
  const exportImages = images.map(fileName => {
    const name = sanitizeFileName(fileName);
    return `${name}`;
  });
  const exportContent = `const images = [${exportImages.join(
    ',\r',
  )}];\rexport default images;`;
  const content = `${importContent}\r${exportContent}`;
  writeIndex(content);
};
const sourceFolder = process.argv[2];

if (sourceFolder) {
  const tree = directoryTree(
    sourceFolder,
    {
      extensions: /\.jpg/,
      normalizePath: true,
    },
    (item, PATH, stats) => {
      //this will finish into the output!!!
      return cbItem(item, PATH, stats);
    },
  );

  //create data file
  console.log(JSON.stringify(tree));
} else if (fs.existsSync(`${outputPath}`)) {
  createImagesIndex();
}
