/* this file contains all the needed modules:
express, corse and bodyParser*/

/* los require jalan los módulos al proyecto, 
pero se pueden exportar de diferentes formas*/

var express = require('express') //we call Express
//en el caso del modulo express, lo hizo como servidor http y lo trabaja tal cual está ahí
var app = express()
var cors = require('cors');
var bodyParser = require('body-parser');

var port = process.env.PORT || 1339 //port assignment
app.use(cors());
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json()) //WHAT´S THE FUNCTIONALITY OF THS LINE?

//our route will go on http://localhost:8080
//it´s a good thing for it to have a prefix because of the different API versions
// QUE TIENEN QUE VER LAS VERSIONES DE API CON EL PREFIJO
var router = require('./app/controllers/routes')
app.use('/api',router) //enlazamos a /api el folder routes
app.listen(port) // our server starts working
console.log(`API listening on port ${port}`);