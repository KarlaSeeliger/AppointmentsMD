var mongoose = require("mongoose");

var NoteSchema = new mongoose.Schema({
    id: String,
    date: Date,
    text: String
});
module.exports = mongoose.model("note", NoteSchema); 

