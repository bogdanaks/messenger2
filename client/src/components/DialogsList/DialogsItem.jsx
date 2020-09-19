import React from 'react'
import { useParams } from 'react-router-dom'

import styles from './styles.module.scss'

import { useDate } from '../../utils/hooks/useDate'

export const DialogsItem = ({ _id, name, updatedAt, color, messages }) => {
    const { id } = useParams()
    const { dateFormat } = useDate(updatedAt)
    return (
        <li className={id === _id ? styles.active : ''}>
            <div className={styles.chatImg}>
                <div className={styles.letter} style={{ backgroundColor: color || '#7965c1' }}>
                    <span>{name[0]}</span>
                </div>
            </div>
            <div className={styles.chatInfo}>
                <div className={styles.header}>
                    <h5>{name}</h5>
                    <span>{dateFormat}</span>
                </div>
                <p>{messages[messages.length - 1].text}</p>
            </div>
        </li>
    )
}
