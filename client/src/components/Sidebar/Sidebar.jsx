import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import styles from './styles.module.scss'

import { showModal } from '../../redux/actions/appActions'

export const Sidebar = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleBtnNewChat = () => {
        dispatch(showModal('New Chat', 'Enter a name for the new chat'))
    }
    const handleBtnExit = () => {
        localStorage.removeItem('user')
        history.push('/login')
    }
    return (
        <div className={styles.sidebarWrapper}>
            <ul>
                <li className={styles.active}>
                    <FontAwesomeIcon icon={faComments} />
                    <span>Chats</span>
                </li>
                <li onClick={handleBtnNewChat}>
                    <FontAwesomeIcon icon={faPlusSquare} />
                    <span>New</span>
                </li>
                <li className={styles.exitBtn} onClick={handleBtnExit}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Exit</span>
                </li>
            </ul>
        </div>
    )
}
