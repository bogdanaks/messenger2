const { Router } = require('express')
const router = Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const verifyToken = require('../../middleware/verifyJwt') // Import Verify middleware
const Users = require('../../models/Users.model') // Import Users Model

/*
@route   POST api/users/
@desc    Create New User
@access  Public
*/
router.post('/', async (req, res) => {
    // Checking if user is already in the db
    const loginExist = await Users.findOne({ name: req.body.name })
    if (loginExist) return res.status(400).send({ message: 'Login already exists' })

    // Add new user in database
    try {
        const newUser = new Users({
            name: req.body.name,
            password: bcrypt.hashSync(req.body.password, 10),
        })
        await newUser.save((err, user) => {
            if (err) return res.status(409).send({ message: 'Save error: ' + err })

            // Get token
            const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY)
            return res.status(201).send({ _id: user._id, name: user.name, token })
        })
    } catch (err) {
        return res.status(500).send({ message: 'Server error: ' + err })
    }
})

/*
@route   POST api/users/login
@desc    Login user
@access  Public
*/
router.post('/login', async (req, res) => {
    try {
        // Checking if login exists
        const user = await Users.findOne({ name: req.body.name })
        if (!user) return res.status(404).send({ message: 'User is not found' })

        // Check password
        let validPassword = bcrypt.compareSync(req.body.password, user.password)
        if (!validPassword) return res.status(401).send({ message: 'Invalid password' })

        // Get token
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY)
        return res.status(200).send({ _id: user._id, name: user.name, token })
    } catch (err) {
        return res.status(400).send({ message: 'Server error: ' + err })
    }
})

/*
@route   GET api/users/
@desc    Get All Users
@access  Private
*/
router.get('/', verifyToken, async (req, res) => {
    try {
        const allUsers = await Users.find()
        return res.status(200).send(allUsers)
    } catch (err) {
        return res.status(500).send({ message: 'Server error: ' + err })
    }
})

module.exports = router
