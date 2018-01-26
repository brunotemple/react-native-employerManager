
import * as actionsType from '../actions/type';

const INITIAL_STATE = {
  
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsType.EMPLOYEES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

