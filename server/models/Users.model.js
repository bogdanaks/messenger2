const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsersSchema = new Schema(
    {
        userId: {
            type: Number,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
)

module.exports = Users = mongoose.model('users', UsersSchema)