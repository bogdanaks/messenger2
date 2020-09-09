import { SET_ALERT, CLEAR_ALERT } from './types'

export function setAlert(code, message) {
    return {
        type: SET_ALERT,
        payload: { code, message },
    }
}
export function clearAlert() {
    return { type: CLEAR_ALERT }
}
