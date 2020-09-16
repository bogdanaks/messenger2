import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

import styles from './styles.module.scss'

import { hideModal } from '../../redux/actions/appActions'
import { createChat } from '../../redux/actions/chatActions'

export const Modal = () => {
    const modal = useSelector((state) => state.app.modal)
    const dispatch = useDispatch()
    const history = useHistory()
    const modalRef = React.useRef()
    const [input, setInput] = React.useState('')
    const [colorNum, setColorNum] = React.useState(0)
    const colors = ['#7965c1', '#cb4f87', '#4388b9', '#00A876', '#d3a924']

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

    const handleBtnCreate = () => {
        dispatch(createChat(input, colors[colorNum], history))
    }
    const handleColorClick = (index) => {
        setColorNum(index)
    }

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
                    <input
                        type="text"
                        placeholder="Chat name"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <div className={styles.colors}>
                        <ul>
                            {colors.map((color, index) => (
                                <li
                                    className={[
                                        styles.color,
                                        colorNum === index && styles.active,
                                    ].join(' ')}
                                    style={{ backgroundColor: color }}
                                    onClick={() => handleColorClick(index)}
                                    key={index}></li>
                            ))}
                        </ul>
                    </div>
                    <button type="submit" onClick={handleBtnCreate}>
                        Create
                    </button>
                </div>
            </div>
        </div>
    )
}
