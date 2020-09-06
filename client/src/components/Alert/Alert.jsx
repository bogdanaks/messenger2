import React from 'react'

import styles from './styles.module.scss'

export const Alert = ({ text, type }) => {
    if (text) {
        return (
            <div className={styles.alertWrapper}>
                <span>{text}</span>
            </div>
        )
    } else {
        return <></>
    }
}
