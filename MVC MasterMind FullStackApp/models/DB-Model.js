const mongoose = require('mongoose')

const dbSchema = new mongoose.Schema({
    year:{
        type: String,
        required: false,

    },

    data:{
        type: Object,
        required: true,

    },
   
})

module.exports = mongoose.model('historyData',dbSchema)