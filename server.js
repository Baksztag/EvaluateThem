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


//ROUTES
// app.get('/student', function(req, res){
//     // reqjson = JSON.parse(req);
//     // reqjson.get()
//     // res.sendFile(__dirname + '/index.html');
//     connection.query('SELECT * from Student where IndexNumber = 69', function (error, results, fields) {
//         if (error) return console.log(error);
//         console.log(results[0].Lastname);
//         // ress = '<h1>' + results[0].Firstname + ' ' + results[0].Lastname + ' ' + results[0].Title + '</h1>'
//         // res.send(ress);
//         res.render('index.ejs', {firstname: results[0]} )
//     });
//     // console.log(req.query);
//     // res.render('index.ejs', {firstname: req.query['surname']})
// });

app.get('/', function(req, res){
    res.send("OK");
});

app.get('/v1/subjects', function (req, res) {
    connection.query('SELECT * FROM Subject', function (error, results, fields) {
        res.send(results);
        console.log(results);
    });

});

app.get('/v1/subject/:id', function (req, res) {
    connection.query('SELECT * FROM Subject WHERE SubjectID = ' + req.params.id, function (error, results, fields) {
        res.send(results);
        console.log(results);
    });
});

app.get('/v1/subject/:id/employees', function (req, res) {

});

app.get('/v1/subject/:id/opinions', function (req, res) {
    
});

app.get('/v1/employees', function (req, res) {
    connection.query('SELECT * FROM Employee', function (error, results, fields) {
        res.send(results);
        console.log(results);
    });
});

app.get('/v1/employee/:id', function (req, res) {
    connection.query('SELECT * FROM Employee WHERE EmployeeID = ' + req.params.id, function (error, results, fields) {
        res.send(results);
        console.log(results);
    });
});

app.get('/v1/employee/:id/opinions', function (req, res) {

});

app.post('/v1/subject/:id/opinion', function (req, res) {

});

app.post('/v1/employee/:id/opinion', function (req, res) {

});