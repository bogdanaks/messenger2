import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import styles from './styles.module.scss'

import { useForm } from '../../utils/hooks/useForm'
import { validateNewChat } from '../../utils/helpers/validateNewChat'

import { createChat } from '../../redux/actions/chatActions'

export const NewChat = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [colorNum, setColorNum] = React.useState(0)
    const colors = ['#7965c1', '#cb4f87', '#4388b9', '#00A876', '#d3a924']
    const { errors, values, handleSubmit, handleChange } = useForm(callback, validateNewChat)
    const handleColorClick = (index) => {
        setColorNum(index)
    }
    function callback() {
        dispatch(createChat(values.newchat, colors[colorNum], history))
    }
    return (
        <div className={styles.modalContent}>
            <form onSubmit={handleSubmit}>
                <div className={[styles.inputForm, errors.newchat && styles.errorInput].join(' ')}>
                    <input
                        type="text"
                        placeholder="Chat name"
                        name="newchat"
                        value={values.newchat || ''}
                        onChange={handleChange}
                    />
                    {errors.newchat && <span className={styles.errorText}>{errors.newchat}</span>}
                </div>

                <div className={styles.colors}>
                    <ul>
                        {colors.map((color, index) => (
                            <li
                                className={[styles.color, colorNum === index && styles.active].join(
                                    ' ',
                                )}
                                style={{ backgroundColor: color }}
                                onClick={() => handleColorClick(index)}
                                key={index}></li>
                        ))}
                    </ul>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
