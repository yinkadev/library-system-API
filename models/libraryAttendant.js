const mongoose = require('mongoose')
const librarySchema = new mongoose.Schema({

    name:{type:String, required:true},
    stafId:{type:String, required:true},

returnDate: { type: Date, default: null }
},
{timestamps: true})

module.exports = mongoose.model("Library", librarySchema);