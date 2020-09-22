import React from 'react'

import styles from './styles.module.scss'

export const ChatInfo = ({ activeChat }) => {
    return (
        <div className={styles.chatInfo}>
            <h5>{activeChat.name}</h5>
            <span>{activeChat.users.length + ' members'}</span>
        </div>
    )
}
