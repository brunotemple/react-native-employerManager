import * as actionTypes from '../actions/type';

const INITIAL_STATE = { 
  email: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case actionTypes.PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

