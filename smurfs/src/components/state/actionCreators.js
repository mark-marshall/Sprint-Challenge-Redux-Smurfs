import axios from 'axios';

import * as types from './actionTypes';

const smurfURL = 'http://localhost:3333/smurfs';

export const getSmurfsAsync = () => dispatch => {
  dispatch(spinnerOn());
  axios
    .get(smurfURL)
    .then(smurfs => {
      dispatch(getSmurfs(smurfs.data));
      dispatch(spinnerOff());
    })
    .catch(error => {
      dispatch(throwError(error.message));
    });
};

export const addSmurfAsync = smurf => dispatch => {
  dispatch(spinnerOn());
  axios
    .post(smurfURL, smurf)
    .then(smurfs => {
      dispatch(getSmurfs(smurfs.data));
      dispatch(spinnerOff());
    })
    .catch(error => {
      dispatch(throwError(error.message));
    });
};

export const editSmurfAsync = smurf => dispatch => {
  dispatch(spinnerOn());
  axios
    .put(`${smurfURL}/${smurf.id}`, smurf)
    .then(smurfs => {
      dispatch(getSmurfs(smurfs.data));
      dispatch(spinnerOff());
    })
    .catch(error => {
      dispatch(throwError(error.message));
    });
};

export const deleteSmurfAsync = id => dispatch => {
  dispatch(spinnerOn());
  axios
    .delete(`${smurfURL}/${id}`)
    .then(smurfs => {
      dispatch(getSmurfs(smurfs.data));
      dispatch(spinnerOff());
    })
    .catch(error => {
      dispatch(throwError(error.message));
    });
};

export function getSmurfs(smurfs) {
  return {
    type: types.GET_SMURFS,
    payload: smurfs,
  };
}

export function spinnerOn() {
  return {
    type: types.SPINNER_ON,
  };
}

export function spinnerOff() {
  return {
    type: types.SPINNER_OFF,
  };
}

export function throwError(error) {
  return {
    type: types.THROW_ERROR,
    payload: error,
  };
}
