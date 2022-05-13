const fs = require('fs');


const saveMessage = (message) => {
    const rawData = fs.readFileSync('./database/data.json')
    const file = JSON.parse(rawData)
    let {messages} = file
    messages.push(message)
    console.log(messages)
    const returnableData = {messages}
    fs.writeFileSync('./database/data.json', JSON.stringify(returnableData))
}

module.exports = saveMessage