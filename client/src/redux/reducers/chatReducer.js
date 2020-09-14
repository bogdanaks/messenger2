import { INIT_CHAT, NEW_CHAT } from '../actions/types'

const initialState = {
    chats: [],
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_CHAT:
            return { ...state, chats: action.payload }
        case NEW_CHAT:
            return { ...state, chats: state.chats.concat(action.payload) }
        default:
            return state
    }
}
