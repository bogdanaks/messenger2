import { SHOW_ALERT, HIDE_ALERT } from '../actions/types'

const initialState = {
    alert: {
        code: 0,
        message: '',
    },
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return { ...state, alert: { ...action.payload } }
        case HIDE_ALERT:
            return { ...state, alert: { ...initialState.alert } }
        default:
            return state
    }
}
