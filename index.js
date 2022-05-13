const express = require('express')
const Message = require('./models/messages')
const path = require('path')
const {saveMessage, getMessages} = require('./database/config')
require('dotenv').config()

// App de Express
const app = express()


// Node Server
const server = require('http').createServer(app)
module.exports.io = require('socket.io')(server)
require('./sockets/socket')

app.get('/api/messages/:from/:to', (req, res) => {
  const listOfMessages = getMessages(req.params)
  res.json({msg: listOfMessages})
})

// Path público
const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath))

server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err)

  console.log('Servidor corriendo en puerto', process.env.PORT)
})
