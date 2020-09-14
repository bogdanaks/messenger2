const { Router } = require('express')
const router = Router()

const verifyToken = require('../../middleware/verifyJwt')
const Chats = require('../../models/Chats.model')

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
            users: req.body.userId,
        })
        await newChat.save((err, chat) => {
            if (err) return res.status(409).send({ message: 'Save error: ' + err })
            return res.status(201).send(chat)
        })
    } catch (err) {
        return res.status(500).send({ message: 'Server error: ' + err })
    }
})

/*
@route          GET api/chats/
@queryParams    userId
@desc           Get all chats
@access         Private
*/
router.get('/', verifyToken, async (req, res) => {
    try {
        const allUsers = await Chats.find()
        return res.status(200).send(allUsers)
    } catch (err) {
        return res.status(500).send({ message: 'Server error: ' + err })
    }
})

module.exports = router
