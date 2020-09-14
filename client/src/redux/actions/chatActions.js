import { INIT_CHAT, NEW_CHAT } from './types'

import api from '../../utils/helpers/axios'
import { authHeader } from '../../utils/helpers/authHeader'
import { showAlert, hideAlert, hideModal } from './appActions'

export function initChat() {
    return async (dispatch) => {
        try {
            // const userId = JSON.parse(localStorage.getItem('user'))._id
            const res = await api.get(`/api/chats`, { headers: authHeader() })
            dispatch({ type: INIT_CHAT, payload: res.data })
        } catch (error) {
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
            dispatch({ type: NEW_CHAT, payload: { id: res.data.id, name: res.data.name } })
            history.push('/chats/' + res.data.id)
            dispatch(hideModal())
        } catch (error) {
            dispatch(showAlert(error.response.status, error.response.data.message))
            setTimeout(() => {
                dispatch(hideAlert())
            }, 2000)
        }
    }
}
