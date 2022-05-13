const fs = require('fs')
const { stringify } = require('querystring')

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
  const from = `${value['from']}`
  const to = `${value['to']}`
  const rawData = fs.readFileSync('./database/data.json')
  console.log(rawData)
  const file = JSON.parse(rawData)
  const { messages } = file
  let retornableList = []
  for (i = 0; i < messages.length; i++) {
    if (
      (messages[i]['from'] == from && messages[i]['to'] == to) ||
      (messages[i]['from'] == to && messages[i]['to'] == from)
    ) {
      retornableList.push(messages[i])
    }
  }
  console.log(JSON.stringify(retornableList))
  return JSON.stringify(retornableList)
}

module.exports = { saveMessage, getMessages }
