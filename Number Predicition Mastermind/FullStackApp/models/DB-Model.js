const mongoose = require('mongoose')

const dbSchema = new mongoose.Schema({
    year:{
        type: string,
        required: false,

    },

    dataArray:{
        type: Array,
        required: true,

    },
   
})

module.exports = mongoose.model('historyData',dbSchema)