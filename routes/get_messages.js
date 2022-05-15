//Path /api/messages

const {Router} = require('express')
const { getMessages } = require('../controllers/get_messages')
const router = Router()

router.get('/:from/:to', getMessages)

module.exports = router