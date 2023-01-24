const mongoose =require ('mongoose')

const adminIdSchema = mongoose.Schema({
    user_name : {
        type: String,
        required: [true, ' please add a name']
    },
    email:{
        type:String,
        required:[true,'please add an email'],
        unique: true
    },
    password:{
        type:String,
        required:[true,'please add a password']
    },
    reviews:{
        type: String,
    },
    }, 
    {
        timestamps: true
    })

    module.exports = mongoose.model('User',adminIdSchema)