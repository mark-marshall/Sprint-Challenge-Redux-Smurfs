/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

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
