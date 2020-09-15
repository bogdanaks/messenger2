const { Router } = require('express')
const router = Router()
const jwt = require('jsonwebtoken')

const verifyToken = require('../../middleware/verifyJwt')
const Chats = require('../../models/Chats.model')

/*
@route   POST api/chats/
@desc    Create New Chat
@access  Private
*/
router.post('/', verifyToken, async (req, res) => {
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

/*
@route          DELETE api/chats/:chatId
@desc           Delete chat by _id
@access         Private
*/
router.delete('/:chatId', verifyToken, async (req, res) => {
    try {
        const userId = jwt.decode(req.headers.authorization.split(' ')[1]).id
        const chat = await Chats.findById(req.params.chatId)
        if (chat.creatorId !== userId)
            return res.status(403).send({ message: 'You are not the creator of this chat' })

        await chat.remove()
        return res.status(200).send(chat._id)
    } catch (err) {
        return res.status(500).send({ message: 'Server error: ' + err })
    }
})

/*
@route          DELETE api/chats/:chatId/users/:userId
@desc           Delete user from chat by chatId
@access         Private
*/
router.delete('/:chatId/users/:userId', verifyToken, async (req, res) => {
    try {
        const chat = await Chats.findById(req.params.chatId)
        await chat.users.pull(req.params.userId)
        await chat.save()
        return res.status(200).send(chat._id)
    } catch (err) {
        return res.status(500).send({ message: 'Server error: ' + err })
    }
})

module.exports = router
