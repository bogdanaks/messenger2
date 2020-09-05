import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrin } from '@fortawesome/free-regular-svg-icons'

import styles from './styles.module.scss'

import { Message } from '../Message/Message'

export const Dialog = () => {
    return (
        <div className={styles.dialogWrapper}>
            <div className={styles.header}>
                <div className={styles.userInfo}>
                    <h5>Name</h5>
                    <span>4 members</span>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.content__messages}>
                    <Message />
                    <Message me />
                    <Message />
                </div>
                <div className={styles.content__footer}>
                    <div className={styles.input}>
                        <input type="text" placeholder="Type text..." />
                    </div>
                    <div className={styles.icons}>
                        <FontAwesomeIcon icon={faGrin} />
                    </div>
                </div>
            </div>
        </div>
    )
}
