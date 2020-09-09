import { SET_USER } from './types'

import api from '../../utils/functions/axios'
import { setAlert, clearAlert } from './appActions'

export function registerUser(name, password) {
    return async (dispatch) => {
        try {
            const res = await api.post('/api/users', { name, password })
            localStorage.setItem('token', res.data.token)
            dispatch({ type: SET_USER, payload: { _id: res.data._id, name: res.data.name } })
        } catch (error) {
            dispatch(setAlert(error.response.status, error.response.data.message))
            setTimeout(() => {
                dispatch(clearAlert())
            }, 2000)
        }
    }
}
