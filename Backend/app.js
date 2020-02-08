var express= require('express');
var app=express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var patient = require("./models/patient");
var note = require("./models/note");
var appointment= require("./models/appointment");
var cors = require('cors');


app.use(cors());


mongoose.connect("mongodb+srv://Karla:seeliger@cluster0-ghuir.mongodb.net/appointmentsMD?retryWrites=true&w=majority").then(()=>{
    console.log("connected");
})
.catch(()=>{console.log("failed")})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});



app.post('/api/appointments', (req, res) => {
    var date = req.body.date;
    appointment.create({date: date}, (err, newappointment) => {
        if (err) {
            console.log(err);
        } else {
            console.log("appointment added");
            console.log(newappointment);
            res.status(201).json({
                message: 'appoirntment added',
                appointmentId: newappointment._id
            });
        }

    })
});

     
app.post('/api/patients', (req, res) => {
    var name = req.body.Name;
    var lastName=req.body.lastName;
    var birth = req.body.Birthdate;
    var PhoneNum=req.body.phoneNum;
    var notes=req.body.notes;
    var addpatient = { Name: name, lastName: lastName, Birthdate: birth, PhoneNum: PhoneNum,Notes:notes}
    patient.create(addpatient,(err, newpatient) =>{
        if (err) {
            console.log(err);
        } else {
            console.log("patient added");
            console.log(newpatient);
            res.status(201).json({ 
                message: 'post added',
                patientId: newpatient._id });}
    
    })
});



app.get('/api/patients',(req,res,next)=>{
    console.log('Server for appointmentsMD has started');
    patient.find({}).then(patientlist => {
        res.status(200).json({
            message: "patients fetched succesfully",
            patients: patientlist
        });
       
    })});


app.get('/api/appointments', (req, res, next) => {
    appointment.find({}).sort('date').then(appointmentlist => {
        res.status(200).json({
            message: "appointments fetched succesfully",
            appointments: appointmentlist 
        });

    })
});

app.post('/api/patients/addnote/:id',(req, res) => {
    var id = req.params.id;
    console.log(id);
        patient.findById(req.params.id, function (err, patient) {
            if (err) {
                console.log(err);
            } else {
                console.log(patient);
                var text = req.body.text;
                var date = Date.now();
                console.log(date);
                note.create({ date: date, text: text }, function (err, note) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(note);
                        patient.Notes.push(note);
                        patient.save();
                        console.log(note);
                        res.status(201).json({ message: 'post added',
                            noteId: note._id, notedate: note.date });
                    }
                })}})});
            

module.exports=app;