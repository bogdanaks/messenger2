import { ADD_MESSAGE } from './types'

import api from '../../utils/helpers/axios'
import { showAlert, hideAlert } from './appActions'
import { authHeader } from '../../utils/helpers/authHeader'

export function sendMessage(chatId, text) {
    return async (dispatch) => {
        try {
            // const { _id: userId, name } = JSON.parse(localStorage.getItem('user'))
            const res = await api.post(
                `/api/chats/${chatId}/messages`,
                { text },
                { headers: authHeader() },
            )
            console.log(res.data)
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
