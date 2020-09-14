import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './styles.module.scss'

import { Sidebar } from '../../components/Sidebar/Sidebar'
import { DialogsList } from '../../components/DialogsList/DialogsList'
import { Dialog } from '../../components/Dialog/Dialog'

import { initChat } from '../../redux/actions/chatActions'

export const Main = () => {
    const dispatch = useDispatch()
    const chats = useSelector((state) => state.chat.chats)
    React.useEffect(() => {
        dispatch(initChat())
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <Sidebar />
            <div className={styles.mainWrapper}>
                <DialogsList chats={chats} />
                <Dialog />
            </div>
        </>
    )
}
