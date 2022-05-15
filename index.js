const express = require('express')
const Message = require('./models/messages')
const path = require('path')
const {dbConnection} = require('./database/config')
require('dotenv').config()

// App de Express
const app = express()

//Database
dbConnection()

// Node Server
const server = require('http').createServer(app)
module.exports.io = require('socket.io')(server)
require('./sockets/socket')

// Path público
const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath))

app.use('/api/messages', require('./routes/get_messages'))

server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err)

  console.log('Servidor corriendo en puerto', process.env.PORT)
})
