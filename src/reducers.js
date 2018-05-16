import {combineReducers} from "redux";
import {CompDataReducer} from 'compdata';

export default combineReducers({
  CompData: CompDataReducer
});