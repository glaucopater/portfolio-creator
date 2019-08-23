import actionTypes from './actionTypes.js';
import axios from 'axios';
import { transformGalleryDetails } from '../../utils/helpers';
import { GALLERY_DETAILS_ENDPOINT, OFFLINE } from '../../constants';
import { data } from '../../mockup/dirTree';

export function fetchStaticGalleryDetails() {
  return dispatch => {
    return dispatch({
      type: actionTypes.GALLERY_DETAILS_LOADED,
      data: transformGalleryDetails(data),
    });
  };
}

export function fetchGalleryDetails() {
  return dispatch => {
    if (OFFLINE) {
      return dispatch(fetchStaticGalleryDetails());
    }
    return axios
      .get(GALLERY_DETAILS_ENDPOINT, { crossDomain: true })
      .then(resp => {
        dispatch({
          type: actionTypes.GALLERY_DETAILS_LOADED,
          data: resp.data.galleryDetails,
        });
      })
      .catch(error => {
        console.error('error:', error);
      });
  };
}
