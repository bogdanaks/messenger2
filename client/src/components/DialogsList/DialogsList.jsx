import React from 'react'

import styles from './styles.module.scss'

import { DialogsItem } from './DialogsItem'

export const DialogsList = () => {
    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.find}>
                <input type="text" placeholder="Find" />
            </div>
            <div className={styles.dialogs}>
                <ul>
                    <DialogsItem />
                    <DialogsItem active />
                    <DialogsItem />
                    <DialogsItem />
                    <DialogsItem />
                </ul>
            </div>
        </div>
    )
}
