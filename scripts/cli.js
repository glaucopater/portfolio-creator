const fs = require('fs');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const baseOutputPath = 'output';
const importsFile = 'imports.js';
const exportsFile = 'exports.js';
const indexFile = 'imagesImport.js'; // --> should be moved to mockup folder
const jsonFile = 'data.js'; // --> should be moved to mockup folder

function appendJson(json) {
  if (!fs.existsSync(`${baseOutputPath}/${jsonFile}`)) {
    const content = 'export const data = { galleries: [';
    fs.writeFileSync(`${baseOutputPath}/${jsonFile}`, content, 'utf8', function(
      err,
    ) {
      if (err) {
        return console.warn(err);
      }
    });
  }

  const content = JSON.stringify(json).replace(/"/g, "'");
  fs.appendFileSync(
    `${baseOutputPath}/${jsonFile}`,
    `${content},`,
    'utf8',
    function(err) {
      if (err) {
        return console.warn(err);
      }
    },
  );
}

function closeJson() {
  if (fs.existsSync(`${baseOutputPath}/${jsonFile}`)) {
    const content = ']};';
    fs.appendFileSync(
      `${baseOutputPath}/${jsonFile}`,
      content,
      'utf8',
      function(err) {
        if (err) {
          return console.warn(err);
        }
      },
    );
  }
}

//recursive helper
function getFiles(dir, files_) {
  files_ = files_ || [];
  const files = fs.readdirSync(dir);
  for (const i in files) {
    const name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
      analyzeFolder(name + '/');
    } else {
      files_.push(name);
    }
  }
  return files_;
}

function createIndexContent(files, folderName, outputPath, baseSourcePath) {
  const importContent = [];
  const exportContent = [];
  const images = [];

  files.map(f => {
    const imageFilename = `${f.sourcePath.replace(baseSourcePath, '')}`;
    const imageName = imageFilename.replace('.jpg', '').replace(/\//g, '_');
    importContent.push(
      `import ${imageName} from '.${folderName}${imageFilename}';`,
    );
    images.push({
      name: imageName,
      description: '',
      location: '',
      published_at: '2019',
    });
    exportContent.push(`${imageName}`);
  });
  const exportName = folderName.replace(/\//g, '_');

  appendJson({ name: exportName, images: images });
  return { importContent, exportContent, exportName };
}

function createIndex(files, folderName, outputPath, baseSourcePath) {
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }

  const { importContent, exportContent, exportName } = createIndexContent(
    files,
    folderName,
    outputPath,
    baseSourcePath,
  );

  const importContentString = [`${importContent.join('\r')}\r`];
  const exportContentString = [
    `export const ${exportName} = [${exportContent.join(',')}];\r`,
  ];

  //imports
  fs.appendFileSync(
    `${baseOutputPath}/${importsFile}`,
    importContentString.join('\r'),
    function(err) {
      if (err) {
        return console.warn(err);
      }
    },
  );

  //exports
  fs.appendFileSync(
    `${baseOutputPath}/${exportsFile}`,
    exportContentString.join('\r'),
    function(err) {
      if (err) {
        return console.warn(err);
      }
    },
  );
}

//analyze the folder and minimize the images
function analyzeFolder(baseSourcePath) {
  (async () => {
    if (baseSourcePath.substr(baseSourcePath.length) === '/') {
      baseSourcePath = baseSourcePath.substr(-1);
    }

    const folderName = baseSourcePath.replace('../src/assets', '');
    const outputPath = baseOutputPath + folderName;
    const files = await imagemin([`${baseSourcePath}*.{jpg|JPG}`], {
      destination: outputPath,
      plugins: [imageminMozjpeg({ quality: 70 })],
    });

    if (files.length > 0) {
      createIndex(files, folderName, outputPath, baseSourcePath);
    }
  })();
}

function consolidateIndex() {
  if (
    fs.existsSync(`${baseOutputPath}/${importsFile}`) &&
    fs.existsSync(`${baseOutputPath}/${exportsFile}`)
  ) {
    const importsFileContent = fs.readFileSync(
      `${baseOutputPath}/${importsFile}`,
      'utf8',
    );
    const exportsFileContent = fs.readFileSync(
      `${baseOutputPath}/${exportsFile}`,
      'utf8',
    );

    fs.appendFileSync(
      `${baseOutputPath}/${indexFile}`,
      importsFileContent + '\r' + exportsFileContent,
      function(err) {
        if (err) {
          return console.warn(err);
        }
      },
    );

    fs.unlinkSync(`${baseOutputPath}/${importsFile}`);
    fs.unlinkSync(`${baseOutputPath}/${exportsFile}`);
  }
}

if (process.argv[2]) {
  const baseSourcePath = process.argv[2];
  //main
  getFiles(baseSourcePath);
}

//else

//consolidate import and export into index
//exports
else {
  consolidateIndex();
  closeJson();
}

//remove temporary files
