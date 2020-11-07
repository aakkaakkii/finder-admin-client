import {setJwt} from "../../util/jwtUtil";
import {login as loginApi} from "../../api/auth/login";
import {parseError} from "../../util/apiUtil";


export const LOGIN_CHANGE_USERNAME_TEXT = 'LOGIN_CHANGE_USERNAME_TEXT';
export const LOGIN_CHANGE_PASSWORD_TEXT = 'LOGIN_CHANGE_PASSWORD_TEXT';

export const LOGIN_PROCESSING = 'LOGIN_PROCESSING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const setUsernameText = username => ({
    type: LOGIN_CHANGE_USERNAME_TEXT,
    payload: username
});

export const setPasswordText = password => ({
    type: LOGIN_CHANGE_PASSWORD_TEXT,
    payload: password
});

export const loginError = error => ({
    type: LOGIN_ERROR,
    payload: parseError(error)
});

export const login = (user, callback) => async dispatch => {
    try {
        dispatch({type: LOGIN_PROCESSING})
        let response = await loginApi(user);
        let token = response.data;

        setJwt(token);

        if(callback) {
            callback()
        }
    } catch (error) {
        dispatch(loginError(error))
    }
}
