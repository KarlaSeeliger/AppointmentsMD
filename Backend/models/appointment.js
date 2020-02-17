var mongoose = require("mongoose");

var AppointmentSchema = new mongoose.Schema({
    date: Date,
    patient: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "patient",
    }]

});
AppointmentSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model("appointment", AppointmentSchema);