import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

import { getUsersInChat } from '../../redux/actions/userActions'

import { Modal } from '../Modal/Modal'
import { ModalHeader } from '../Modal/ModalHeader'

export const ChatInfo = ({ activeChat }) => {
    const [showInfo, setShowInfo] = React.useState(false)
    const users = useSelector((state) => state.chat.activeChat.users)
    const dispatch = useDispatch()
    const handleInfoClick = () => {
        setShowInfo(!showInfo)
    }
    React.useEffect(() => {
        dispatch(getUsersInChat(activeChat._id))
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className={styles.chatInfo} onClick={handleInfoClick}>
                <h5>{activeChat.name}</h5>
                <span>{activeChat.users.length + ' members'}</span>
            </div>
            <Modal open={showInfo} setOpen={setShowInfo}>
                <ModalHeader>Информация о чате</ModalHeader>
                <div className={styles.chatInfoBlock}>
                    <div
                        className={styles.photo}
                        style={{ backgroundColor: activeChat.color || '#7965c1' }}>
                        <span>{activeChat.name[0]}</span>
                    </div>
                    <div className={styles.info}>
                        <h5>{activeChat.name}</h5>
                    </div>
                </div>
                <div className={styles.members}>
                    <div className={styles.membersHeader}>
                        <FontAwesomeIcon className={styles.users} icon={faUserFriends} />
                        <span>{activeChat.users.length + ' members'}</span>
                    </div>
                    <ul>
                        {users.map((user) => (
                            <div className={styles.userBlock} key={user._id || ''}>
                                <div className={styles.online}></div>
                                <li>{user.name}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            </Modal>
        </>
    )
}
