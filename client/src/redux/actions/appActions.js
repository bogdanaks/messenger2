import { SHOW_ALERT, HIDE_ALERT } from './types'

// Alert actions
export function showAlert(code, message) {
    return {
        type: SHOW_ALERT,
        payload: { code, message },
    }
}
export function hideAlert() {
    return { type: HIDE_ALERT }
}
