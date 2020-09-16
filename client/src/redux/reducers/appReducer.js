import { SHOW_ALERT, HIDE_ALERT, SHOW_MODAL, HIDE_MODAL } from '../actions/types'

const initialState = {
    alert: {
        code: 0,
        message: '',
    },
    modal: {
        visible: false,
        type: '',
        header: '',
        text: '',
    },
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return { ...state, alert: { ...action.payload } }
        case HIDE_ALERT:
            return { ...state, alert: { ...initialState.alert } }
        case SHOW_MODAL:
            return { ...state, modal: { ...action.payload } }
        case HIDE_MODAL:
            return { ...state, modal: { ...initialState.modal } }
        default:
            return state
    }
}
