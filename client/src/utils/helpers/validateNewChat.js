export const validateNewChat = (values) => {
    let errors = {}
    if (!values) {
        errors = 'Chat name is required'
    }
    if (values && parseInt(values[0])) {
        errors = 'The chat name must start with a letter, not a number'
    }
    if (values && values.length < 3) {
        errors = 'Chat name at least 3 characters'
    }
    if (values && values.length >= 10) {
        errors = 'Chat name up to 10 characters'
    }
    return errors
}
