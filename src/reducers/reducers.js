import { combineReducers } from 'redux';
import storeAppReducer from './storeApp/storeApp.reducer';

export default combineReducers({
    storeApp: storeAppReducer
});
