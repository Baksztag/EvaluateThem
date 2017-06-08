//EXPRESS
const express = require('express');
const app = express();

//DATABASE
const env = require('node-env-file');
env(__dirname + '/.env');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

//START LISTENING
app.listen(3000, function() {
    console.log('listening on 3000')
});


app.get('/', function(req, res){
    res.send("OK");
});

app.get('/v1/subjects', function (req, res) {
    connection.query('SELECT * FROM Subject', function (error, results, fields) {
        res.send(results);
        console.log(results);
    });

});

app.get('/v1/subjects/:id', function (req, res) {
    connection.query('SELECT * FROM Subject WHERE SubjectID = ' + req.params.id, function (error, results, fields) {
        res.send(results);
        console.log(results);
    });
});

app.get('/v1/subjects/:id/employees', function (req, res) {

});

app.get('/v1/subjects/:id/opinions', function (req, res) {
    
});

app.get('/v1/employees', function (req, res) {
    connection.query('SELECT * FROM Employee', function (error, results, fields) {
        res.send(results);
        console.log(results);
    });
});

app.get('/v1/employees/:id', function (req, res) {
    connection.query('SELECT * FROM Employee WHERE EmployeeID = ' + req.params.id, function (error, results, fields) {
        res.send(results);
        console.log(results);
    });
});

app.get('/v1/employees/:id/opinions', function (req, res) {

});

app.post('/v1/subjects/:id/opinions', function (req, res) {

});

app.post('/v1/employees/:id/opinions', function (req, res) {

});