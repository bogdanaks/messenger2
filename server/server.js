const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')
require('dotenv').config()

const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

//routes
app.use('/api/user', require('./routes/api/user.routes'))

//start server
async function start() {
    try {
        await mongoose
            .connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
            .then((res) => console.log(`Mongo start success`))
            .catch((err) => console.log(`Mongo error: ${err}`))
        await server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
    } catch (error) {
        console.log(`Server error: ${error}`)
        process.exit(1)
    }
}

start()
