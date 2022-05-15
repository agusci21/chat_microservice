const { Schema, model } = require('mongoose');

const MessageSchema = Schema({

    from: {
        type: String,
        ref: 'Usuario',
        required: true
    },
    to: {
        type: String,
        ref: 'Usuario',
        required: true
    },
    text: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

MessageSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    return object;
})



module.exports = model('Message', MessageSchema );