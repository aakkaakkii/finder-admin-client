import {FETCH_PERMISSIONS} from "./action";

const defaultState = {
    permissions: []
}

export const permissionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_PERMISSIONS:
            return {
                ...state,
                permissions: action.payload
            }
        default:
            return state;
    }
}
