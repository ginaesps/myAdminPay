/* this file contains all the needed modules:
express, corse and bodyParser

all of the require lines invoke the needed modules into the proyect

our route will go on http://localhost:8080*/

const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express') //we call Express
var router = require('./app/routes') // var router = require('./app/controllers/routes')
const port = process.env.PORT || 1339 //port assignment

var app = express() // this variable will be the easy way to use the express module

app.use(cors());
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())

app.use('/api',router) // we link /api to the folder routes

app.listen(port) // our server starts working

console.log(`API listening on port ${port}`); // we make sure the server is working as expected