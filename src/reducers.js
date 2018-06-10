import {combineReducers} from "redux";
import {CompDataReducer} from 'compdata';
import {QueryReducer} from 'axios-redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const compDataConfig = {
  key: 'CompData',
  storage,
  // blacklist: ['isLoggingIn']
};
const queryConfig = {
  key: 'Queries',
  storage,
  // blacklist: ['isLoggingIn']
};

export default combineReducers({
  CompData: persistReducer(compDataConfig, CompDataReducer),
  Queries: persistReducer(queryConfig, QueryReducer)
});