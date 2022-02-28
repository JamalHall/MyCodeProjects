const mongoose = require('mongoose')

const dbSchema = new mongoose.Schema({
    uploadDate:{
        type: String,
        required: true,
    },

    data:{
        type: Object,
        required: true,
    },
   
})

module.exports = mongoose.model('historyData',dbSchema)