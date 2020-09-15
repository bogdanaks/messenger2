import React from 'react'
import { useParams } from 'react-router-dom'

import styles from './styles.module.scss'

export const DialogsItem = ({ _id, name, updatedAt, color }) => {
    const { id } = useParams()
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
                    <span>
                        {new Date(updatedAt).getHours()}:{new Date(updatedAt).getMinutes()}
                    </span>
                </div>
                <p>Message last</p>
            </div>
        </li>
    )
}
