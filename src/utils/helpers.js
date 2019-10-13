import { FILE_EXTENSION } from '../constants';

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getQueryStringVariable = (queryString, variable) => {
  const query = queryString;
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
};

const transformItem = item => {
  return {
    name: item.name,
    published_at: new Date().getFullYear(),
    images: item.children.map(im => {
      const item_name = im.name.replace(FILE_EXTENSION, '');
      return {
        name: item_name,
        hash: im.hash,
        description: item_name,
        location: '',
        published_at: new Date().getFullYear(),
      };
    }),
  };
};

export const transformGalleries = data => {
  const { children } = data;
  const basePath = '../src/assets/images/galleries/';
  const galleries = Object.values(children).map(item => {
    return {
      gallery: item.name,
      published_at: new Date().getFullYear(),
      url: item.path.replace(basePath, ''),
      cover: item.children.filter(im => im.name === item.name + '.jpg')[0],
    };
  });

  return { galleries: galleries };
};

export const transformGalleryDetails = data => {
  const { children } = data;
  const galleryDetails = Object.values(children).map(item =>
    transformItem(item),
  );

  return { galleryDetails: galleryDetails };
};

export const transformImageDetails = data => {
  const { children } = data;
  const imageDetails = Object.values(children).map(item => transformItem(item));
  return { imageDetails: imageDetails };
};
