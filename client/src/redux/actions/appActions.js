import { SHOW_ALERT, HIDE_ALERT, SHOW_MODAL, HIDE_MODAL } from './types'

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

// Modal actions
export function showModal(header, text) {
    return {
        type: SHOW_MODAL,
        payload: { visible: true, header, text },
    }
}
export function hideModal() {
    return { type: HIDE_MODAL }
}
