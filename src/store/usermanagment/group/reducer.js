import {ADD_GROUP, FETCH_GROUP, GET_GROUP, SET_GROUP_CHANGE, UPDATE_GROUP} from "./action";

const defaultState = {
    groups: [],
    group: {
        id: null,
        name: '',
        permissions: []
    }
}

export const groupReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_GROUP:
            return {
                ...state,
                groups: action.payload
            }
        case GET_GROUP:
            return {
                ...state,
                group: action.payload
            }
        case SET_GROUP_CHANGE:
            return {
                ...state,
                group: {...action.payload}
            }
        case ADD_GROUP:
            return {
                ...state,
                groups: [action.payload, ...state.groups]
            }
        case UPDATE_GROUP:
            let newArray = state.groups;
            let element = newArray.find((el)=> el.id === action.payload.id);
            newArray[newArray.indexOf(element)] = action.payload;
            console.log(newArray)
            return {
                ...state,
                groups: newArray,
                group: {...action.payload}
            }
        default:
            return state;
    }
}
