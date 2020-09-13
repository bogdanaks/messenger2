const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChatsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        creatorId: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
)

module.exports = Chats = mongoose.model('chats', ChatsSchema)
