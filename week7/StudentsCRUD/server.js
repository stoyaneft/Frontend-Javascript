"use strict"

// load the express module
var express = require('express');
var jf = require('jsonfile');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


var FILE = 'students.json';
var students = jf.readFileSync(FILE);
var id = 1;

// declare our app
var app = express();


// configuration and middleware
app.use(express.static('public'));
//app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());


app.get('/students', function(req, res){
    res.jsonp({
        msg: 'get successful',
        data: students
    });
});

app.get('/students/:id', function(req, res){
    var id = req.params.id;
    var s;
    students.forEach(function(student) {
            if (student.id == id) {
                s = student;
            }
        });
    res.jsonp(s);
});

app.post('/students', function(req, res){
    var id = req.body.id;
    var name = req.body.name;
    var email = req.body.email;
    var newStudent = {
        id: id,
        name: name,
        email: email
    };
    students.push(newStudent);
    console.log(req.body);
    jf.writeFileSync(FILE, students);
    res.jsonp({
        msg: 'student added',
        data: newStudent
    });
});

app.put('/students/:id', function(req, res){
    // get the id from the params
    var id = req.params.id;
    var s;
    // update the info from the body if passed or use the existing one
    students.forEach(function(student) {
            if (student.id == id) {
                s = student
                s.name = req.body.name || s.name;
                s.email = req.body.email || s.email;
            }
        });
    jf.writeFileSync(FILE, students);
    res.jsonp({
    msg: 'students data updated',
    data: s
    });
});


app.delete('/students/:id', function(req, res){
    var id = req.params.id;
    var s;
    var found = false;
    students.forEach(function(student, index) {
        if (student.id == id) {
            students.splice(index, 1);
            res.jsonp('student '+id+' successfully deleted!');
            found = true;
            }
    });
    jf.writeFileSync(FILE, students);
    if (!found) {
        res.jsonp('student '+id+' does not exist!');
    }
});


// listen for requests
var server = app.listen(1337, function() {
 console.log('Listening on port %d', server.address().port);
});
