const mongoose = require('mongoose')

const dbSchema = new mongoose.Schema({
    uploadDate:{
        type: String,
        required: true,
    },

    year:{
        type: Number,
        required: true,
    },

    date:{
        type: Object,
        required: true,
    },

    data:{
        type: Array,
        required: true,
    },
   
})

module.exports = mongoose.model('historic',dbSchema)


// uploadDate:{
//     type: String,
//     required: true,
// },

// year:{
//     type: Number,
//     required: true,
// },

// date:{
//     type: String,
//     required: true,
// },

// winNums:{
//     type: String,
//     required: true,
// },

// prize:{
//     type: String,
//     required: true,
// },

// data:{
//     type: Object,
//     required: true,
// },

// })

// module.exports = mongoose.model('historyData',dbSchema)