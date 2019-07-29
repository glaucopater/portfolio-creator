import { combineReducers } from 'redux';
import { fetchGalleriesReducer } from '../containers/Galleries/reducers';
import { fetchGalleryDetailsReducer } from '../containers/GalleryDetails/reducers';

const reducers = combineReducers({
  fetchGalleries: fetchGalleriesReducer,
  fetchGalleryDetails: fetchGalleryDetailsReducer,
});

export default reducers;
