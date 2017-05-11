const express = require('express');
const app = express();
const mysql = require('mysql');

const connectionDetails = require('./ConnectionDetails');

app.set('view engine', 'ejs');


app.listen(3000, function() {
    console.log('listening on 3000')
});


const connection = connectionDetails.getConnection();

connection.connect();

app.get('/student', function(req, res){
    // reqjson = JSON.parse(req);
    // reqjson.get()
    // res.sendFile(__dirname + '/index.html');
    connection.query('SELECT * from Student where IndexNumber = 69', function (error, results, fields) {
        if (error) throw error;
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
});


// connection.query('SELECT Lastname from Student where Lastname = ', function (error, results, fields) {
//     if (error) throw error;
//     console.log(results[0].Lastname);
//     ress = '<h1>' + results[0].Firstname + ' ' + results[0].Lastname + ' ' + results[0].Title + '</h1>'
//     res.send(ress);
// });
// JSON.parse(req);