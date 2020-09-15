import React from 'react'
import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrin } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

import { Message } from '../Message/Message'
import { ChatSettings } from '../ChatSettings/ChatSettings'

export const Dialog = () => {
    const [chatSettigs, setChatSettings] = React.useState(false)
    const activeChat = useSelector((state) => state.chat.activeChat)
    const handleSettingsChat = () => {
        setChatSettings(!chatSettigs)
    }
    if (Object.keys(activeChat).length === 0) {
        return (
            <div className={styles.emptyChat}>
                <h3>Select chat</h3>
            </div>
        )
    }
    return (
        <div className={styles.dialogWrapper}>
            <div className={styles.header}>
                <div className={styles.openList}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className={styles.userInfo}>
                    <h5>{activeChat.name}</h5>
                    <span>{activeChat.users.length + ' members'}</span>
                </div>
                <div className={styles.chatSettings} onClick={handleSettingsChat}>
                    <FontAwesomeIcon icon={faEllipsisV} />
                </div>
                {chatSettigs && (
                    <ChatSettings chat={activeChat} setChatSettings={setChatSettings} />
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.content__messages}>
                    <Message />
                    <Message me />
                    <Message />
                </div>
                <div className={styles.content__footer}>
                    <div className={styles.input}>
                        <input type="text" placeholder="Type text..." />
                    </div>
                    <div className={styles.icons}>
                        <FontAwesomeIcon icon={faGrin} />
                    </div>
                </div>
            </div>
        </div>
    )
}
