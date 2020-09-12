import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

import styles from './styles.module.scss'

import { hideModal } from '../../redux/actions/appActions'

export const Modal = () => {
    const modal = useSelector((state) => state.app.modal)
    const dispatch = useDispatch()
    const modalRef = React.useRef()
    const handleCloseModal = () => {
        dispatch(hideModal())
    }
    React.useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                dispatch(hideModal())
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (!modal.visible) {
        return ''
    }

    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modalBlock} ref={modalRef}>
                <div className={styles.closeModal} onClick={handleCloseModal}>
                    <FontAwesomeIcon icon={faTimesCircle} />
                </div>
                <h3>{modal.header}</h3>
                <hr />
                <p>{modal.text}</p>
                <div className={styles.modalContent}>
                    <input type="text" placeholder="Chat name" />
                    <button type="submit">Create</button>
                </div>
            </div>
        </div>
    )
}
