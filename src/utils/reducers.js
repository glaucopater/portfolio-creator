import { combineReducers } from 'redux';
import { fetchGalleriesReducer } from '../containers/Galleries/reducers';

const reducers = combineReducers({
  fetchGalleries: fetchGalleriesReducer,
});

export default reducers;
