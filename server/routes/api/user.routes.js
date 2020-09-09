const { Router } = require('express')
const router = Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// Import Verify middleware
const verifyJwt = require('../../middleware/verifyJwt')

// Import Users Model
const Users = require('../../models/Users.model')
const verifyToken = require('../../middleware/verifyJwt')

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
        await newUser.save()
        const currentUser = await Users.findOne({ name: newUser.name })

        // Get token
        const token = jwt.sign({ id: currentUser._id }, process.env.SECRET_KEY, {
            expiresIn: 2592000, // 30 days
        })

        return res.status(201).send({ id: currentUser._id, name: newUser.name, token })
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
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
            expiresIn: 2592000, // 30 days
        })
        return res.status(200).send({ id: user._id, name: user.name, token })
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
