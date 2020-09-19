import React from 'react'
import { useDispatch } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrin } from '@fortawesome/free-regular-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss'

import { useForm } from '../../utils/hooks/useForm'
import { sendMessage } from '../../redux/actions/messageActions'

export const InputMessage = ({ chat }) => {
    const { values, handleChange, handleSubmit } = useForm(callback)
    const dispatch = useDispatch()
    function callback() {
        dispatch(sendMessage(chat._id, values.message))
        values.message = ''
    }
    return (
        <div className={styles.content__footer}>
            <form onSubmit={handleSubmit}>
                <div className={styles.input}>
                    <input
                        type="text"
                        placeholder="Type text..."
                        autoComplete="off"
                        name="message"
                        value={values.message || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.icons}>
                    <FontAwesomeIcon icon={faGrin} />
                    <button className={styles.iconSend} type="submit">
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </div>
            </form>
        </div>
    )
}
