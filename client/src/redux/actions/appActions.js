import { SHOW_ALERT, HIDE_ALERT, SHOW_MODAL, HIDE_MODAL } from './types'

export function showAlert(code, message) {
    return {
        type: SHOW_ALERT,
        payload: { code, message },
    }
}
export function hideAlert() {
    return { type: HIDE_ALERT }
}
export function showModal(code, message) {
    return {
        type: SHOW_MODAL,
        payload: { code, message },
    }
}
export function hideModal() {
    return { type: HIDE_MODAL }
}
