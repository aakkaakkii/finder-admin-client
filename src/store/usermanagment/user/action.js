import {load, getByUsername, getById, add, update, deleteUser, loadByGroup} from "../../../api/auth/user";

export const FETCH_USER_PROCESSING = "FETCH_USER_PROCESSING"
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE"

export const GET_USER_PROCESSING = "GET_USER_PROCESSING"
export const GET_USER_SUCCESS = "GET_USER_SUCCESS"
export const GET_USER_FAILURE = "GET_USER_FAILURE"

export const ADD_USER_PROCESSING = "ADD_USER_PROCESSING"
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS"
export const ADD_USER_FAILURE = "ADD_USER_FAILURE"

export const loadUserSuccess = (users)=>({
    type:FETCH_USER_SUCCESS,
    payload: users
})

export const loadUserProgressing = ()=>({
    type:FETCH_USER_PROCESSING,
})

export const loadUserFailure = ()=>({
    type:FETCH_USER_FAILURE,
})

export const getUserSuccess = (user)=>({
    type:GET_USER_SUCCESS,
    payload: user
})

export const getUserProgressing = ()=>({
    type:GET_USER_PROCESSING,
})

export const getUserFailure = ()=>({
    type:GET_USER_FAILURE,
})

export const loadUsers = (start, limit) => async dispatch => {
    try {
        dispatch(loadUserProgressing())
        let response = await load();
        let user = response.data;
        dispatch(loadUserSuccess(user))
    } catch (e) {
        console.log(e)

    }
}

export const getUserByUsername = (username) => async dispatch => {
    try {
        dispatch(getUserProgressing())
        let response = await getByUsername(username);
        let user = response.data;
        dispatch(getUserSuccess(user))
    } catch (e) {
        console.log(e)

    }
}

export const getUserById = (id) => async dispatch => {
    try {
        dispatch(getUserProgressing())
        let response = await getById(id);
        let user = response.data;
        dispatch(getUserSuccess(user))
    } catch (e) {
        console.log(e)

    }
}
