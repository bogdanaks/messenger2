import { SET_ALERT, CLEAR_ALERT } from '../actions/types'

const initialState = {
    alert: {
        code: 0,
        message: '',
    },
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALERT:
            return { ...state, alert: { ...action.payload } }
        case CLEAR_ALERT:
            return { ...state, alert: { ...initialState.alert } }
        default:
            return state
    }
}
