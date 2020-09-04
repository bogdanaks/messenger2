import React from 'react'

import styles from './styles.module.scss'

export const DialogsList = () => {
    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.find}>
                <input type="text" placeholder="Find" />
            </div>
            <div className={styles.dialogs}>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}
