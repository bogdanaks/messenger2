import { NEW_CHAT } from './types'

const initialState = {
    chats: [],
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_CHAT:
            return { ...state, chats: action.payload }
        default:
            return state
    }
}
