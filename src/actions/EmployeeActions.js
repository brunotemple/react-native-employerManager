import * as actionsType from './type';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: actionsType.EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};