import React from 'react'

import styles from './styles.module.scss'

import { DialogsList } from '../../components/DialogsList/DialogsList'
import { Dialog } from '../../components/Dialog/Dialog'

export const Main = () => {
    return (
        <div className={styles.mainWrapper}>
            <DialogsList />
            <Dialog />
        </div>
    )
}
