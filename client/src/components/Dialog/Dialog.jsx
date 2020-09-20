import React from 'react'
import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

import { Message } from '../Message/Message'
import { ChatSettings } from '../ChatSettings/ChatSettings'
import { InputMessage } from '../InputMessage/InputMessage'

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
                    <ul>
                        {activeChat.messages.map((message) => (
                            <li key={message._id}>
                                <Message message={message} />
                            </li>
                        ))}
                    </ul>
                </div>
                <InputMessage chat={activeChat} />
            </div>
        </div>
    )
}
