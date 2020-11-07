import axios from "axios";
import {addAuthorizationToHeaders, APP_AUTH_API_URL} from "../../util/apiUtil";

export const load = () => {
    return axios.get(`${APP_AUTH_API_URL}/permissions`,{ headers: addAuthorizationToHeaders()})
}
