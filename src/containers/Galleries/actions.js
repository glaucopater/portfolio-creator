import actionTypes from './actionTypes.js';
import axios from 'axios';
import { GALLERIES_ENDPOINT, OFFLINE } from '../../constants';
import { data } from '../../mockup/data';

export function fetchStaticGalleries() {
  return dispatch => {
    return dispatch({
      type: actionTypes.GALLERIES_LOADED,
      data: data,
    });
  };
}

export function fetchGalleries() {
  return dispatch => {
    if (OFFLINE) {
      return dispatch(fetchStaticGalleries());
    }
    return axios
      .get(GALLERIES_ENDPOINT, { crossDomain: true })
      .then(resp => {
        dispatch({
          type: actionTypes.GALLERIES_LOADED,
          data: resp.data.galleries,
        });
      })
      .catch(error => {
        console.error('error:', error);
      });
  };
}
