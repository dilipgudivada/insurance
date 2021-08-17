import {  RECEIVE_INSURANCES_GET, REQUEST_INSURANCES_GET } from '../Actions/InsuranceActions';
const InsuranceReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_INSURANCES_GET:
       return { ...state, loading: true };
    case RECEIVE_INSURANCES_GET:
       return { ...state, data: action.data, loading: false };
    default:
       return state;
  }
};
export default InsuranceReducer;