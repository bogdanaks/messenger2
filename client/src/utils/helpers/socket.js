import io from 'socket.io-client'
import { store } from '../../redux/store'
import { ADD_MESSAGE } from '../../redux/actions/types'

const socket = io('http://localhost:5000')

export const socketJoinChat = (chatId, userId, name) => {
    socket.emit('CHAT:JOIN', {
        chatId,
        userId,
        name,
    })
}

export const socketLeaveChat = (chatId) => {
    socket.emit('CHAT:LEAVE', { chatId })
}

export const socketGetMessages = () => {
    socket.on('CHAT:GET_MESSAGE', (payload) => {
        store.dispatch({ type: ADD_MESSAGE, payload })
    })
}

export const socketSendMessage = (msg) => {
    socket.emit('CHAT:SEND_MESSAGE', msg)
}
