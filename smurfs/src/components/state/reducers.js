import * as types from './actionTypes';

export function smurfs(smurfsArray = [], action) {
  switch (action.type) {
    case types.GET_SMURFS:
      return action.payload;
    default:
      return smurfsArray;
  }
}

export function spinner(isOn = false, action) {
  switch (action.tpye) {
    case types.SPINNER_ON:
      return true;
    case types.SPINNER_OFF:
      return false;
    default:
      return isOn;
  }
}

export function error(error = null, action) {
  switch (action.type) {
    case types.THROW_ERROR:
      return action.payload;
    default:
      return error;
  }
}
