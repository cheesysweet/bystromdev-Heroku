const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    Title: {type: String, required: true},
    Info: String,
    Image: String,
    Status: {type: String, required: true},
    Date: String,
})

module.exports = mongoose.model('IcaMaxiTasks', taskSchema);