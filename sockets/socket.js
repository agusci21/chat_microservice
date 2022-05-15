const { io } = require('../index')
const Message = require('../models/messages')

// Mensajes de Sockets
io.on('connection', (client) => {
  console.log('Cliente conectado')

  client.on('disconnect', () => {
    console.log('Cliente desconectado')
  })

  client.on('mensaje', (payload) => {
    console.log('Mensaje', payload)
    saveMessage(payload)
    io.emit('mensaje', payload)
  })
})

const saveMessage = async(payload) => {
  try {
    const pasoI = `${payload}`
    const paso2 = JSON.parse(pasoI)
    console.log(paso2)
    const message = new Message(paso2)
    await message.save()
  } catch (error) {
    console.log(error)
  }
}
