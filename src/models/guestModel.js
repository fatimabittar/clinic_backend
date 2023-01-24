const mongoose = require ('mongoose')

const guestSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: [true, ' please add a name']
    },
    phone: {
        type: Number,
        required: [true, ' please add a name']
    },
    date_time: {
        type: Date,
        default: Date.now
    },
    Doctor_name: {
        type: String,
        required: [true, ' please add a name']
    },
    Message: {
        type: String,
        required: [true, ' please add a name']
    },},
     {
        timestamps: true
    });

module.exports = mongoose.model('Guest',guestSchema)
