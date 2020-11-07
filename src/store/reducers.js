import {combineReducers} from "redux";
import usermanagment from "./usermanagment/reducers"
import {loginReducer} from "./login/reducers"

export default combineReducers({
    usermanagment: usermanagment,
    login: loginReducer
})
