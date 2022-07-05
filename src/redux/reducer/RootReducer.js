import {combineReducers} from "redux";
import {userReducer} from "./Reducer";


export const rootReducer = combineReducers({
    user:userReducer
});