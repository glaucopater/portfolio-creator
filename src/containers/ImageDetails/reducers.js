import actionTypes from './actionTypes';

const initState = {
  data: null,
};
export function fetchImageDetailsReducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.IMAGE_DETAILS_LOADED: {
      return {
        data: action.data.imageDetails,
      };
    }
    default:
      return state;
  }
}
