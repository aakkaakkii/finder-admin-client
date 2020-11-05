import axios from "axios";
import {APP_AUTH_API_URL} from "../../util/apiUtil";

export const login = (auth) => {
    return axios.post(`${APP_AUTH_API_URL}/auth`, auth)
}
