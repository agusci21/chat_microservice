const saveMessage = require('../database/config')
const { io } = require('../index')

// Mensajes de Sockets
io.on('connection', (client) => {
  console.log('Cliente conectado')

  client.emit('active-bands', bands.getBands())

  client.on('disconnect', () => {
    console.log('Cliente desconectado')
  })

  client.on('mensaje', (payload) => {
    console.log('Mensaje', payload)
    saveMessage(payload)
    io.emit('mensaje', payload)
  })

  client.on('vote-band', (payload) => {
    bands.voteBand(payload.id)
    io.emit('active-bands', bands.getBands())
  })

  client.on('add-band', (payload) => {
    const newBand = new Band(payload.name)
    bands.addBand(newBand)
    io.emit('active-bands', bands.getBands())
  })

  client.on('delete-band', (payload) => {
    bands.deleteBand(payload.id)
    io.emit('active-bands', bands.getBands())
  })

  // client.on('emitir-mensaje', ( payload ) => {
  //     // console.log(payload);
  //     // io.emit('nuevo-mensaje', payload ); // emite a todos!
  //     client.broadcast.emit('nuevo-mensaje', payload ); // emite a todos menos el que lo emitió
  // })
})
