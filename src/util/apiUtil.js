import {getFullJwt} from "./jwtUtil";

export const APP_URL = 'http://localhost:5555'
export const APP_API_URL = APP_URL + '/api'
export const APP_AUTH_API_URL = APP_API_URL + '/auth/rest/v1'
export const APP_FINDER_API_URL = APP_API_URL + '/finder/rest/v1'

export const parseError = error => {
    console.error(error);

    if (error.response
        && error.response.data
        && error.response.data.message) {
        return error.response.data.message;
    }
    //TODO change error message
    return 'some';
}

export const addAuthorizationToHeaders = (header) => {
    if (header) {
        return {...header, Authorization: getFullJwt()}
    }
    return {Authorization: getFullJwt()}
}

