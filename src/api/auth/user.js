import axios from "axios";
import {addAuthorizationToHeaders, APP_AUTH_API_URL} from "../../util/apiUtil";

export const load = (start, limit) => {
    return axios.get(`${APP_AUTH_API_URL}/users`, {params: {start, limit}, headers: addAuthorizationToHeaders()})
}

export const getById = (id) => {
    return axios.get(`${APP_AUTH_API_URL}/users/${id}`, {headers: addAuthorizationToHeaders()})
}

export const getByUsername = (username) => {
    return axios.get(`${APP_AUTH_API_URL}/users/username/${username}`, {headers: addAuthorizationToHeaders()})
}

export const loadByGroup = (groupId, start, limit) => {
    return axios.get(`${APP_AUTH_API_URL}/users/group/${groupId}`, {params: {start, limit}, headers: addAuthorizationToHeaders()})
}

export const add = (user) => {
    return axios.post(`${APP_AUTH_API_URL}/users`, user, {headers: addAuthorizationToHeaders()})
}

export const update = (user) => {
    return axios.put(`${APP_AUTH_API_URL}/users/${user.id}`, user, {headers: addAuthorizationToHeaders()})
}

export const deleteUser = (id) => {
    return axios.delete(`${APP_AUTH_API_URL}/users/${id}`, {headers: addAuthorizationToHeaders()})
}
