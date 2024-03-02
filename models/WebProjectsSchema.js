const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var projectSchema = new Schema({
    Title: {type: String, required: true},
    Image: String,
    Github: String,
    Info: String,
    Download: String
})

module.exports = mongoose.model('WebProjects', projectSchema);