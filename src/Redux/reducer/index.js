import { combineReducers } from "redux";
import assetsReducer from './assetsReducer';

const rootReducer = combineReducers({ assetsReducer });

export default rootReducer;
