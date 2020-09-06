import React from 'react'

import styles from './styles.module.scss'

export const Auth = () => {
    const [input, setInput] = React.useState({ email: '', password: '' })
    const handlerInputChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handlerBtnCLick = (e) => {
        e.preventDefault()
        console.log(input)
    }

    return (
        <div className={styles.authWrapper}>
            <h2>Register</h2>
            <form className={styles.form}>
                <div className={styles.inputForm}>
                    <input
                        type="text"
                        placeholder="E-mail"
                        name="email"
                        onChange={handlerInputChange}
                        value={input.email}
                    />
                </div>
                <div className={styles.inputForm}>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handlerInputChange}
                        value={input.password}
                    />
                </div>
                <button type="submit" onClick={handlerBtnCLick}>
                    Register
                </button>
            </form>
        </div>
    )
}
