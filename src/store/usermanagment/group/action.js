import {load, getById, add, update, deleteUser} from "../../../api/auth/group";

export const FETCH_GROUP = "FETCH_GROUP"
export const GET_GROUP = "GET_GROUP"
export const ADD_GROUP = "ADD_GROUP"
export const UPDATE_GROUP = "UPDATE_GROUP"
export const SET_GROUP_CHANGE = "SET_GROUP_CHANGE"

export const loadGroupSuccess = (groups) => ({
    type: FETCH_GROUP,
    payload: groups
})

export const getGroupSuccess = (group) => ({
    type: GET_GROUP,
    payload: group
})

export const setGroupChange = (group) => ({
    type: SET_GROUP_CHANGE,
    payload: group
})

export const addGroupSuccess = (group) => ({
    type: ADD_GROUP,
    payload: group
})

export const updateGroupSuccess = (group) => ({
    type: UPDATE_GROUP,
    payload: group
})

export const loadGroup = () => async dispatch => {
    try {
        let response = await load();
        let groups = response.data;
        dispatch(loadGroupSuccess(groups))
    } catch (e) {
        console.log(e)
    }
}

export const getGroup = (id) => async dispatch => {
    try {
        let response = await getById(id);
        let group = response.data;
        dispatch(getGroupSuccess(group))
    } catch (e) {
        console.log(e)
    }
}


export const addGroup = (group) => async dispatch => {
    try {
        let response = await add(group);
        dispatch(addGroupSuccess(response.data))
    } catch (e) {
        console.log(e)
    }
}

export const updateGroup = (group) => async dispatch => {
    try {
        let response = await update(group);
        dispatch(updateGroupSuccess(response.data))
    } catch (e) {
        console.error(e)
    }
}

