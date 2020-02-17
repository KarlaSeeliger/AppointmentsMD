var mongoose = require("mongoose");

var NoteSchema = new mongoose.Schema({
    id: String,
    date: Date,
    textS: String,
    textO: String,
    textA: String,
    textP: String,
    BPd: Number,
    BPs: Number,
    HR: Number,
    RR: Number,
    Temp: Number,
    dx: String
});
module.exports = mongoose.model("note", NoteSchema); 

