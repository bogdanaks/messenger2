import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './styles.module.scss'

import { DialogsItem } from './DialogsItem'
import { initChat } from '../../redux/actions/chatActions'

export const DialogsList = () => {
    const dispatch = useDispatch()
    const chats = useSelector((state) => state.chat.chats)
    React.useEffect(() => {
        dispatch(initChat())
        // eslint-disable-next-line
    }, [])
    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.find}>
                <input type="text" placeholder="Find" />
            </div>
            <div className={styles.dialogs}>
                <ul>
                    {chats.map((item) => (
                        <DialogsItem active key={item._id} {...item} />
                    ))}
                </ul>
            </div>
        </div>
    )
}
