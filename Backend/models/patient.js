
var mongoose = require("mongoose");

var PatientSchema = new mongoose.Schema({
    Name: String,
    lastName: String,
    Birthdate: Date,
    PhoneNum: String,
    appointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "appointment",
        //autopopulate: true
    }],
    Notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "note",
        autopopulate: true
    }]
});

PatientSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model("patient", PatientSchema); 
