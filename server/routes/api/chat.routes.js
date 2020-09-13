const { Router } = require('express')
const router = Router()

const verifyToken = require('../../middleware/verifyJwt') // Import Verify middleware
const Chats = require('../../models/Chats.model') // Import Chats Model

/*
@route   POST api/chats/
@desc    Create New Chat
@access  Private
*/
router.post('/', verifyToken, async (req, res) => {
    // Add new chat in database
    try {
        const newChat = new Chats({
            name: req.body.name,
            creatorId: req.body.userId,
        })
        await newChat.save((err, chat) => {
            if (err) res.status(409).send({ message: 'Save error: ' + err })
            return res.status(201).send({ id: chat._id, name: chat.name })
        })
    } catch (err) {
        return res.status(500).send({ message: 'Server error: ' + err })
    }
})

module.exports = router
