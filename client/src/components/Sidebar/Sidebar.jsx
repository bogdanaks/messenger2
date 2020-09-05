import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faComments } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'

import styles from './styles.module.scss'

export const Sidebar = () => {
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
                <li>
                    <FontAwesomeIcon icon={faPlusSquare} />
                    <span>New</span>
                </li>
            </ul>
        </div>
    )
}
