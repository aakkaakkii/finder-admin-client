import axios from "axios";
import {addAuthorizationToHeaders, APP_AUTH_API_URL} from "../../util/apiUtil";

export const load = () => {
    // return axios.get(`${APP_AUTH_API_URL}/groups`, {headers: addAuthorizationToHeaders()})
    return axios.get(`${APP_AUTH_API_URL}/groups`, {headers: addAuthorizationToHeaders()})
}

export const getById = (id) => {
    return axios.get(`${APP_AUTH_API_URL}/groups/${id}`, {headers: addAuthorizationToHeaders()})
}

export const add = (group) => {
    return axios.post(`${APP_AUTH_API_URL}/groups`, group, {headers: addAuthorizationToHeaders()})
}

export const update = (group) => {
    return axios.put(`${APP_AUTH_API_URL}/groups/${group.id}`, group, {headers: addAuthorizationToHeaders()})
}

export const deleteUser = (id) => {
    return axios.delete(`${APP_AUTH_API_URL}/groups/${id}`, {headers: addAuthorizationToHeaders()})
}
