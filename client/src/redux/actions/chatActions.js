import { NEW_CHAT } from './types'

import { showAlert, hideAlert } from './appActions'

export function createChat(name, history) {
    return async (dispatch) => {
        try {
            const res = await api.post('/api/chats', { name, password })
            dispatch({ type: NEW_CHAT, payload: { _id: res.data._id, name: res.data.name } })
            history.push('/chats')
        } catch (error) {
            dispatch(showAlert(error.response.status, error.response.data.message))
            setTimeout(() => {
                dispatch(hideAlert())
            }, 2000)
        }
    }
}
