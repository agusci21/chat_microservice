const Message = require('../models/messages')

const getMessages = async (req, res) => {
    const from = req.params.from
    const to = req.params.to

    const last30 = await Message.find({
        $or: [{from: from, to:to}, {from: to, to: from}]
    })
    .sort({createdAt: 'desc'})
    .limit(30)

    res.json({
        ok:true,
        msg: last30
    })
}

module.exports = {
    getMessages
}