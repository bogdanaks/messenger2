export const validations = (values) => {
    let errors = {}
    if (!values.email) {
        errors.email = 'Email address is required'
    }
    if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid'
    }
    if (!values.password) {
        errors.password = 'Password is required'
    }
    if (values.password && values.password.length < 6) {
        errors.password = 'Password at least 6 characters'
    }
    return errors
}
