import React from 'react'

import styles from './styles.module.scss'
import { validations } from '../../utils/functions/validations'
import { useForm } from '../../utils/hooks/useForm'

export const Register = () => {
    const { errors, values, handleSubmit, handleChange } = useForm(callback, validations)
    function callback() {
        console.log(values)
    }
    return (
        <div className={styles.authWrapper}>
            <h2>Register</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={[styles.inputForm, errors.name && styles.errorInput].join(' ')}>
                    <input
                        type="text"
                        placeholder="Nickname"
                        name="name"
                        onChange={handleChange}
                        value={values.name || ''}
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>
                <div className={[styles.inputForm, errors.password && styles.errorInput].join(' ')}>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={values.password || ''}
                    />
                    {errors.password && <span className={styles.errorText}>{errors.password}</span>}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
