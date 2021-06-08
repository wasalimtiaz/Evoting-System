const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nameSchema = new Schema({
    name:String,
    location:String,
    userId:String,

})

module.exports = mongoose.model('Name',nameSchema)