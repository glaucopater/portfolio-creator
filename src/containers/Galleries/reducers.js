import actionTypes from './actionTypes';

const initState = {
  data: null,
};
export function fetchGalleriesReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GALLERIES_LOADED: {
      return {
        data: action.data.galleries,
      };
    }
    default:
      return state;
  }
}
