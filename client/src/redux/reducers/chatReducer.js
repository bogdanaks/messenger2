import { INIT_CHAT, NEW_CHAT, DELETE_CHAT, SET_ACTIVE_CHAT } from '../actions/types'

const initialState = {
    chats: [],
    activeChat: {},
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_CHAT:
            return { ...state, chats: action.payload }
        case NEW_CHAT:
            return { ...state, chats: state.chats.concat(action.payload) }
        case DELETE_CHAT:
            const res = state.chats.filter((chat) => chat._id !== action.payload)
            return { ...state, chats: res }
        case SET_ACTIVE_CHAT:
            return { ...state, activeChat: action.payload }
        default:
            return state
    }
}
