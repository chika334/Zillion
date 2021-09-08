import { SET_CUSTOMER } from "./type";

export const getCustomer = (value) => {
  return {
    type: SET_CUSTOMER,
    payload: value,
  };
};
