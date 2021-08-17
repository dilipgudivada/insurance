import {  REQUEST_LOGIN_USER_POST,  RECEIVE_LOGIN_USER_POST} from '../Actions/LoginUserActions';
const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_LOGIN_USER_POST:
       return { ...state, loading: true };
    case RECEIVE_LOGIN_USER_POST:
       return { ...state, data: action.data, loading: false };
    default:
       return state;
  }
};
export default loginUserReducer;