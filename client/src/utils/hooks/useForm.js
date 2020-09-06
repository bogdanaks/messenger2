import { useState, useEffect } from 'react'

export const useForm = (callback, validations) => {
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
        // eslint-disable-next-line
    }, [errors])

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validations(values))
        setIsSubmitting(true)
    }
    const handleChange = (e) => {
        e.persist()
        setValues((prevValue) => ({ ...prevValue, [e.target.name]: e.target.value }))
    }
    return {
        handleSubmit,
        handleChange,
        values,
        errors,
    }
}
