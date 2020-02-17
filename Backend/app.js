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

app.post('/api/appointments/add', (req, res) => {
    var name = "Raul";
    var date="02/02/2020";
  
    
    patient.find({Name: name}, function (err, patient) {
        if (err) {
            console.log(err);
        } else {
            console.log(patient);
            
            appointment.create({date: date }, function (err, app) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(app);
                    app.patient.push(patient);
                    console.log(app);
                    patient.appointments.push(app);
                    patient.save();
                    console.log(app);
                    res.status(201).json({
                        message: 'post added',
                        
                    });
                }
            })
        }
    })
});



app.post('/api/appointments/newpatient', (req, res) => {
    var obj=req.body;
    console.log(obj);
    var date = obj.date;
    console.log(date);
    var id = obj.id;
    console.log(id);
    var patientapp = obj.patient;
    var name = patientapp[0].Name;
    var lastName = patientapp[0].lastName;
    var birth = patientapp[0].Birthdate;
    var PhoneNum = patientapp[0].phoneNum;
    var addpatient = { Name: name, lastName: lastName, Birthdate: birth, PhoneNum: PhoneNum};
    patient.create(addpatient,(err,newpatient)=>{
        if(err){
        console.log(err);}
        else{
            console.log("patient" +newpatient);
            appointment.create({ date: date }, (err, newappointment) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("appointment"+newappointment);
                    newappointment.patient.push(newpatient);
                    newappointment.save();
                    newpatient.appointments.push(newappointment);
                    newappointment.save();
                    newpatient.save();
                    console.log("appointment added");
                    console.log(newappointment);
                    res.status(201).json({
                        message: 'appoirntment added',
                        appointmentId: newappointment._id,
                        patientId: patient._id  
                    });

            }})
   
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
                var textS = req.body.textS;
                var textO = req.body.textO;
                var textA = req.body.textA;
                var textP = req.body.textP;
                var date = Date.now();
                var BPs = req.body.BPs;
                var BPd = req.body.BPd;
                var HR = req.body.HR;
                var Temp = req.body.Temp;
                var Br = req.body.RR;
                var dx= req.body.dx;
                console.log(date);
                note.create({ date: date, textS: textS, textO: textO, textA: textA, textP: textP, BPd: BPd, BPs: BPs, HR: HR, Temp: Temp, RR: Br, dx: dx }, function (err, note) {
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