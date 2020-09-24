const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')
const socketio = require('socket.io')
const path = require('path')

const app = express()
const server = http.createServer(app)
const staticPath = path.join(__dirname, '../client/build')
const io = socketio(server)
const PORT = process.env.PORT || 5000

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(staticPath))
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

app.use(cors())
app.use(express.json())

//routes
app.use('/api/users', require('./routes/api/user.routes'))
app.use('/api/chats', require('./routes/api/chat.routes'))

//socket
io.on('connection', (socket) => {
    socket.on('CHAT:JOIN', (data) => {
        socket.join(data.chatId)
    })

    socket.on('CHAT:LEAVE', (data) => {
        socket.leave(data.chatId)
    })

    socket.on('CHAT:SEND_MESSAGE', (data) => {
        socket.to(data.inChatId).emit('CHAT:GET_MESSAGE', data)
    })

    socket.on('disconnect', () => {})
})

//start server
async function start() {
    try {
        await mongoose
            .connect(process.env.DB_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false,
            })
            .then((res) => console.log(`Mongo start success`))
            .catch((err) => console.log(`Mongo error: ${err}`))
        await server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
    } catch (error) {
        console.log(`Server error: ${error}`)
        process.exit(1)
    }
}

start()
