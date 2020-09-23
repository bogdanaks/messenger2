import { SET_USER, SET_USERS_IN_ACTIVE_CHAT } from './types'

import api from '../../utils/helpers/axios'
import { authHeader } from '../../utils/helpers/authHeader'
import { showAlert, hideAlert } from './appActions'

export function registerUser(name, password, history) {
    return async (dispatch) => {
        try {
            const res = await api.post('/api/users', { name, password })
            localStorage.setItem(
                'user',
                JSON.stringify({ _id: res.data._id, name: res.data.name, token: res.data.token }),
            )
            dispatch({ type: SET_USER, payload: { _id: res.data._id, name: res.data.name } })
            history.push('/')
        } catch (error) {
            if (error.response) {
                dispatch(showAlert(error.response.status, error.response.data.message))
                setTimeout(() => {
                    dispatch(hideAlert())
                }, 2000)
            } else {
                console.error(error)
            }
        }
    }
}
export function loginUser(name, password, history) {
    return async (dispatch) => {
        try {
            const res = await api.post('/api/users/login', { name, password })
            localStorage.setItem(
                'user',
                JSON.stringify({ _id: res.data._id, name: res.data.name, token: res.data.token }),
            )
            dispatch({ type: SET_USER, payload: { _id: res.data._id, name: res.data.name } })
            history.push('/')
        } catch (error) {
            if (error.response) {
                dispatch(showAlert(error.response.status, error.response.data.message))
                setTimeout(() => {
                    dispatch(hideAlert())
                }, 2000)
            } else {
                console.error(error)
            }
        }
    }
}

export function getUsersInChat(chatId) {
    return async (dispatch) => {
        try {
            const res = await api.get(`/api/chats/${chatId}/users/`, {
                headers: authHeader(),
            })
            dispatch({ type: SET_USERS_IN_ACTIVE_CHAT, payload: res.data })
        } catch (error) {
            if (error.response) {
                dispatch(showAlert(error.response.status, error.response.data.message))
                setTimeout(() => {
                    dispatch(hideAlert())
                }, 2000)
            } else {
                console.error(error)
            }
        }
    }
}
