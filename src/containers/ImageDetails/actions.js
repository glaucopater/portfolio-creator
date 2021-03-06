import actionTypes from './actionTypes.js';
import axios from 'axios';
import { IMAGE_DETAILS_ENDPOINT, OFFLINE } from '../../constants';
import { transformImageDetails } from '../../utils/helpers';
import { data } from '../../mockup/data';

export function fetchStaticImageDetails() {
  return dispatch => {
    return dispatch({
      type: actionTypes.IMAGE_DETAILS_LOADED,
      data: transformImageDetails(data),
    });
  };
}

export function fetchImageDetails() {
  return dispatch => {
    if (OFFLINE) {
      return dispatch(fetchStaticImageDetails());
    }
    return axios
      .get(IMAGE_DETAILS_ENDPOINT, { crossDomain: true })
      .then(resp => {
        dispatch({
          type: actionTypes.IMAGE_DETAILS_LOADED,
          data: resp.data.galleryDetails,
        });
      })
      .catch(error => {
        console.error('error:', error);
      });
  };
}
