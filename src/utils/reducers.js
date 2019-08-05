import { combineReducers } from 'redux';
import { fetchGalleriesReducer } from '../containers/Galleries/reducers';
import { fetchGalleryDetailsReducer } from '../containers/GalleryDetails/reducers';
import { fetchImageDetailsReducer } from '../containers/ImageDetails/reducers';

const reducers = combineReducers({
  fetchGalleries: fetchGalleriesReducer,
  fetchGalleryDetails: fetchGalleryDetailsReducer,
  fetchImageDetails: fetchImageDetailsReducer,
});

export default reducers;
