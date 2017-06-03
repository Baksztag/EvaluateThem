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

//VIEW ENGINE
app.set('view engine', 'ejs');

//START LISTENING
app.listen(3000, function() {
    console.log('listening on 3000')
});


//ROUTES
app.get('/student', function(req, res){
    // reqjson = JSON.parse(req);
    // reqjson.get()
    // res.sendFile(__dirname + '/index.html');
    connection.query('SELECT * from Student where IndexNumber = 69', function (error, results, fields) {
        if (error) return console.log(error);
        console.log(results[0].Lastname);
        // ress = '<h1>' + results[0].Firstname + ' ' + results[0].Lastname + ' ' + results[0].Title + '</h1>'
        // res.send(ress);
        res.render('index.ejs', {firstname: results[0]} )
    });
    // console.log(req.query);
    // res.render('index.ejs', {firstname: req.query['surname']})
});


app.get('/', function(req, res){
    // connection.query('SELECT * from Employee', function (error, results, fields) {
    //
    // });
    res.render('index.ejs', {firstname: ''})
    // res.send("OK");
});

app.get('/subject/:id/opinions', function (req, res) {
    
});