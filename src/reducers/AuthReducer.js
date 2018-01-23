import * as actionTypes from '../actions/type';

const INITIAL_STATE = { 
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case actionTypes.PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case actionTypes.LOGIN_USER_SUCCESS:
      // return { ...state,
      //   user: action.payload,
      //   error: '',
      //   loading: false,
      //   email: '',
      //   password: ''
      // };
      return { ...state,
        ...INITIAL_STATE,
        user: action.payload
      };
    case actionTypes.LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', loading: false};
    case actionTypes.LOGIN_USER:
      return { ...state, loading: true, error: ''}
    default:
      return state;
  }
};

