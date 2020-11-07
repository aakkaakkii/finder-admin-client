import {combineReducers} from "redux";
import {userReducer} from "./user/reducer"
import {groupReducer} from "./group/reducer"
import {permissionReducer} from "./permission/reducer"

export default combineReducers({
    user: userReducer,
    group: groupReducer,
    permission: permissionReducer
})
