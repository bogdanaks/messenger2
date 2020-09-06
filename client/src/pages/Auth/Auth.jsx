import React from 'react'

import styles from './styles.module.scss'

export const Auth = () => {
    return (
        <div className={styles.authWrapper}>
            <form className={styles.form}>
                <div className={styles.inputForm}>
                    <input type="text" placeholder="E-mail" />
                </div>
                <div className={styles.inputForm}>
                    <input type="password" placeholder="Password" />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
