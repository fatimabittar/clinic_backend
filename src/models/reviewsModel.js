const mongoose = require ('mongoose')

const reviewsSchema = new mongoose.Schema 
({
    full_name: { 
        type: String,
        required: true 
    },
    Message: { 
        type: String,
        required: true 
    },
    image: {
        type: String 
    },
},
{
    timestamps: true
});

module.exports = mongoose.model('Review',reviewsSchema)
