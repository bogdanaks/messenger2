import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import styles from './styles.module.scss'

import { deleteChat, leaveChat } from '../../redux/actions/chatActions'

import { Modal } from '../Modal/Modal'
import { ModalHeader } from '../Modal/ModalHeader'
import { ModalDescription } from '../Modal/ModalDescription'
import { InviteLink } from '../InviteLink/InviteLink'

export const ChatSettings = ({ chat, setChatSettings }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const divRef = React.useRef()
    const [modalOpen, setModalOpen] = React.useState(false)

    const handleLeaveChat = (chatId) => {
        dispatch(leaveChat(chatId, history))
    }
    const handleDeleteChat = (chatId) => {
        dispatch(deleteChat(chatId, history))
    }
    const handleInviteLink = () => {
        setModalOpen(true)
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
            setChatSettings(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <div className={styles.wrapper} ref={divRef}>
                <ul>
                    <li onClick={handleInviteLink}>Инвайт ссылка</li>
                    {chat.creatorId === JSON.parse(localStorage.getItem('user'))._id ? (
                        <li onClick={() => handleDeleteChat(chat._id)}>Удалить чат</li>
                    ) : (
                        <li onClick={() => handleLeaveChat(chat._id)}>Покинуть чат</li>
                    )}
                </ul>
            </div>
            <Modal open={modalOpen} setOpen={setModalOpen}>
                <ModalHeader>Invite Link</ModalHeader>
                <ModalDescription>This is an invitation link to this chat</ModalDescription>
                <InviteLink />
            </Modal>
        </>
    )
}
