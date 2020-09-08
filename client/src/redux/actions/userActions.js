import { SET_USER } from './types'

import api from '../../utils/functions/axios'

export function registerUser(name, password) {
    return async (dispatch) => {
        try {
            const res = await api.post('/api/user/register', {
                name,
                password,
            })
            dispatch({ type: SET_USER, payload: res.data })
        } catch (error) {
            alert('Error')
        }
    }
}
