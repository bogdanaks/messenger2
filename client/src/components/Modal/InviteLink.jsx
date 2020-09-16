import React from 'react'

import styles from './styles.module.scss'

export const InviteLink = () => {
    const [alertCopy, setAlertCopy] = React.useState(false)
    const linkRef = React.useRef()
    const handleCopyClick = () => {
        linkRef.current.select()
        document.execCommand('copy')
        setAlertCopy(true)
        setTimeout(() => {
            setAlertCopy(false)
        }, 1500)
    }
    return (
        <div className={styles.modalContent}>
            <div className={styles.inviteBlock}>
                <input
                    ref={linkRef}
                    className={styles.inviteLink}
                    type="text"
                    defaultValue={
                        'http://' + window.location.hostname + ':3000/invite/akwjbk12j3k1j2hv3'
                    }
                />
                <button className={styles.inviteBtn} onClick={handleCopyClick}>
                    Copy
                </button>
                <div className={[styles.copied, alertCopy && styles.show].join(' ')}>Copied!</div>
            </div>
        </div>
    )
}
