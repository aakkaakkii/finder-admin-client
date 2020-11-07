import {load} from "../../../api/auth/permission";

export const FETCH_PERMISSIONS = "FETCH_PERMISSIONS"

export const loadPermissionsSuccess = (permissions) => ({
    type: FETCH_PERMISSIONS,
    payload: permissions
})

export const loadPermissions = () => async dispatch => {
    try {
        let response = await load();
        let groups = response.data;
        dispatch(loadPermissionsSuccess(groups))
    } catch (e) {
        console.log(e)

    }
}
