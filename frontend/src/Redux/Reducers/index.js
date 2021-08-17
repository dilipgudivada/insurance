import { combineReducers } from 'redux'
import locationReducer from './LoactionReducer';
import loginUserReducer from './LoginUserReducer';

export default combineReducers({
    locationReducer,
    loginUserReducer,
});