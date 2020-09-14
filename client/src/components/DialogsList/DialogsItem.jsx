import React from 'react'

import styles from './styles.module.scss'

import user from '../../assets/user.png'

export const DialogsItem = ({ active, name, updatedAt }) => {
    return (
        <li className={active && styles.active}>
            <div className={styles.userImg}>
                <img src={user} alt="User" />
            </div>
            <div className={styles.userInfo}>
                <div className={styles.userInfo__header}>
                    <h5>{name}</h5>
                    <span>
                        {new Date(updatedAt).getHours()}:{new Date(updatedAt).getMinutes()}
                    </span>
                </div>
                <p>Message</p>
            </div>
        </li>
    )
}
