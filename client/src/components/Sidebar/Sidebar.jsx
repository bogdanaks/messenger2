import React from 'react'
import { useDispatch } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faComments } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import styles from './styles.module.scss'

import { showModal } from '../../redux/actions/appActions'

export const Sidebar = () => {
    const dispatch = useDispatch()
    const handleBtnNewChat = () => {
        dispatch(showModal('New Chat', 'Enter a name for the new chat'))
    }
    return (
        <div className={styles.sidebarWrapper}>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faBars} />
                </li>
                <li className={styles.active}>
                    <FontAwesomeIcon icon={faComments} />
                    <span>Chats</span>
                </li>
                <li onClick={handleBtnNewChat}>
                    <FontAwesomeIcon icon={faPlusSquare} />
                    <span>New</span>
                </li>
            </ul>
        </div>
    )
}
