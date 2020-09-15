import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import styles from './styles.module.scss'

import { deleteChat } from '../../redux/actions/chatActions'

export const ChatSettings = ({ chatId, setChatSettings }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const divRef = React.useRef()
    const handleLeaveChat = (chatId) => {
        dispatch(deleteChat(chatId, history))
    }
    React.useEffect(() => {
        function handleClickOutside(event) {
            if (divRef.current && !divRef.current.contains(event.target)) {
                setChatSettings(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className={styles.wrapper} ref={divRef}>
            <ul>
                <li onClick={() => handleLeaveChat(chatId)}>Покинуть чат</li>
            </ul>
        </div>
    )
}
