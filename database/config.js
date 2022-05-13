const fs = require('fs')

const saveMessage = (message) => {
  const rawData = fs.readFileSync('./database/data.json')
  const file = JSON.parse(rawData)
  let { messages } = file
  messages.push(message)
  console.log(`Cantidad de mensajes: ${messages.length}`)
  const returnableData = { messages }
  fs.writeFileSync('./database/data.json', JSON.stringify(returnableData))
}

const getMessages = (value) => {
  const id = value["id"]
  console.log(id)
  const rawData = fs.readFileSync('./database/data.json')
  const file = JSON.parse(rawData)
  const { messages } = file
  let retornableList = []
  for (i = 0; i < messages.length; i++) {
    if (messages[i]['from'] == id || messages[i]['to'] == id) {
      retornableList.push(messages[i])
    }
  }
  return retornableList
}

module.exports = { saveMessage, getMessages }
