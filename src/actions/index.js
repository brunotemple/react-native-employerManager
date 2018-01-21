import firebase from 'firebase';

import * as actionTypes from './type';

export const emailChanged = (text) => {
  return {
    type: actionTypes.EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: actionTypes.PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => console.log(user));
};