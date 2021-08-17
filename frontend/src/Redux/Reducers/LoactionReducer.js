import {  REQUEST_LOCATIONS_GET, RECEIVE_LOCATIONS_GET } from '../Actions/LocationActions';
const locationReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_LOCATIONS_GET:
       return { ...state, loading: true };
    case RECEIVE_LOCATIONS_GET:
       return { ...state, data: action.data, loading: false };
    default:
       return state;
  }
};
export default locationReducer;