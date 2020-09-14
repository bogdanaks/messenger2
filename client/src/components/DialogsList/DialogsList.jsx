import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

import { DialogsItem } from './DialogsItem'

import { setActiveChat } from '../../redux/actions/chatActions'

export const DialogsList = ({ chats }) => {
    const dispatch = useDispatch()
    const handleChatCLick = (item) => {
        dispatch(setActiveChat(item))
    }
    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.find}>
                <input type="text" placeholder="Find" />
            </div>
            <div className={styles.dialogs}>
                <ul>
                    {chats.map((item) => (
                        <Link
                            to={'/chats/' + item._id}
                            key={item._id}
                            onClick={() => handleChatCLick(item)}>
                            <DialogsItem {...item} />
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}
