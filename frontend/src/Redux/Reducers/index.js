import { combineReducers } from 'redux'
import locationReducer from './LoactionReducer';
import loginUserReducer from './LoginUserReducer';
import InsuranceReducer from './InsuranceReducer';

export default combineReducers({
    locationReducer,
    loginUserReducer,
    allInsurancesReducer : InsuranceReducer,
});