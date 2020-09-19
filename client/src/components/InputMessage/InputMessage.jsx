import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrin } from '@fortawesome/free-regular-svg-icons'

import styles from './styles.module.scss'

export const InputMessage = () => {
    return (
        <div className={styles.content__footer}>
            <div className={styles.input}>
                <input type="text" placeholder="Type text..." />
            </div>
            <div className={styles.icons}>
                <FontAwesomeIcon icon={faGrin} />
            </div>
        </div>
    )
}
