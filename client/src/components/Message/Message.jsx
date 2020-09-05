import React from 'react'

import styles from './styles.module.scss'

export const Message = ({ me }) => {
    return (
        <div className={[styles.msgWrapper, me && styles.me].join(' ')}>
            <span className={styles.msg}>
                Как будут заканчивать, напиши, креветки закину! Окей, я понял тебя.
            </span>
            <span className={styles.data}>18:55</span>
        </div>
    )
}
