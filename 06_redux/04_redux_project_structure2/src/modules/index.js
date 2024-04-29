import { combineReducers } from "redux";
import userReducer from "./UserModuls";
import menuReducer from "./MenuModule";


const rootReducer = combineReducers({
    userReducer,
    menuReducer
});


export default rootReducer;
