
import * as actionsType from '../actions/type';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsType.EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case actionsType.EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case actionsType.EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
