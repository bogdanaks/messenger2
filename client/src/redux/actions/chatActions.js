import { INIT_CHAT, NEW_CHAT, DELETE_CHAT, SET_ACTIVE_CHAT } from './types'

import api from '../../utils/helpers/axios'
import { authHeader } from '../../utils/helpers/authHeader'
import { showAlert, hideAlert, hideModal } from './appActions'

export function initChats(chatId) {
    return async (dispatch) => {
        try {
            // const userId = JSON.parse(localStorage.getItem('user'))._id
            const res = await api.get(`/api/chats`, { headers: authHeader() })
            dispatch({ type: INIT_CHAT, payload: res.data })

            // If the argument chat id is passed, then we set it as an active chat
            if (chatId) {
                const activeChat = res.data.filter((chat) => chat._id === chatId)
                dispatch(setActiveChat({ ...activeChat[0] }))
            }
        } catch (error) {
            console.log(error)
            dispatch(showAlert(error.response.status, error.response.data.message))
            setTimeout(() => {
                dispatch(hideAlert())
            }, 2000)
        }
    }
}

export function createChat(name, history) {
    return async (dispatch) => {
        try {
            const userId = JSON.parse(localStorage.getItem('user'))._id
            const res = await api.post('/api/chats', { name, userId }, { headers: authHeader() })
            dispatch({ type: NEW_CHAT, payload: { ...res.data } })
            dispatch(setActiveChat(res.data))
            history.push('/chats/' + res.data._id)
            dispatch(hideModal())
        } catch (error) {
            dispatch(showAlert(error.response.status, error.response.data.message))
            setTimeout(() => {
                dispatch(hideAlert())
            }, 2000)
        }
    }
}

export function deleteChat(chatId, history) {
    return async (dispatch) => {
        try {
            const res = await api.delete(`/api/chats/${chatId}`, { headers: authHeader() })
            history.push('/')
            dispatch({ type: DELETE_CHAT, payload: res.data })
            dispatch(setActiveChat({}))
        } catch (error) {
            console.log(error)
            dispatch(showAlert(error.response.status, error.response.data.message))
            setTimeout(() => {
                dispatch(hideAlert())
            }, 2000)
        }
    }
}

export function leaveChat(chatId, history) {
    return async (dispatch) => {
        try {
            const userId = JSON.parse(localStorage.getItem('user'))._id
            const res = await api.delete(`/api/chats/${chatId}/users/${userId}`, {
                headers: authHeader(),
            })
            history.push('/')
            dispatch({ type: DELETE_CHAT, payload: res.data })
            dispatch(setActiveChat({}))
        } catch (error) {
            console.log(error)
            dispatch(showAlert(error.response.status, error.response.data.message))
            setTimeout(() => {
                dispatch(hideAlert())
            }, 2000)
        }
    }
}

export function setActiveChat(chat) {
    return {
        type: SET_ACTIVE_CHAT,
        payload: chat,
    }
}
