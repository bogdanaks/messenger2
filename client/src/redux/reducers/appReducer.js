import { SET_APP } from '../actions/types'

const initialState = {
    appState: false,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_APP:
            return { ...state, appState: action.payload }
        default:
            return state
    }
}
