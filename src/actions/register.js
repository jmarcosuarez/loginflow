import * as actionTypes from '../constants/actionTypes';

/**
 * Checks if any elements of a JSON object are empty
 * @param  {object} elements The object that should be checked
 * @return {boolean}         True if there are empty elements, false if there aren't
 */
function anyElementsEmpty(elements) {
  for (const element in elements) {
    if (!elements[element]) {
      return true;
    }
  }
  return false;
}

/**
 * Sets the authentication state of the application
 * @param {boolean} newState True means a user is logged in, false means no user is logged in
 */
function setAuthState(newState) {
  return { type: actionTypes.SET_AUTH, newState };
}
/**
 * Registers User
 * @param  {string} username The username of the user to be logged in
 * @param  {string} password The password of the user to be logged in
 */
export function register(username, password) {
  console.log('register function called in register action creator file');
}
