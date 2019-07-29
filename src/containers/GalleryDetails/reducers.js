import actionTypes from './actionTypes';

const initState = {
  data: null,
};
export function fetchGalleryDetailsReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GALLERY_DETAILS_LOADED: {
      console.log('TCL: fetchGalleryDetailsReducer -> action', action);
      return {
        data: action.data.galleryDetails,
      };
    }
    default:
      return state;
  }
}
