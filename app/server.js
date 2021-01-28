/* this file contains all the needed modules:
express, corse and bodyParser

jwt,mysql and config are required for the token authentication

all of the require lines invoke the needed modules into the proyect

our route will go on http://localhost:8080*/

const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express') //we call Express

var jwt=require('jsonwebtoken');
var mysql=require('../db/mysql.js');
var config=require('./config/config.js');
 
//app.set('llave',config.llave); //we recover the master password (encripts the rest of the info)

var router = require('./routes') 
const port = process.env.PORT || 1339 //port assignment

var app = express() // this variable will be the easy way to use the express module

app.use(cors());
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())
var rutaLogin=require('express').Router();
app.use('/login', rutaLogin)

app.use('/api',router) // we link /api to the folder routes

rutaLogin.post('/',(req,res)=>{
    console.log(req.body);
    let user=req.body.login;
    let pwd=req.body.password;
    if (!user || !pwd)
        res.json({mensaje:"Faltan datos"});
    else{
        mysql.query('select * from users where login = ? and password = ?', [user, pwd],(err,rows,fields)=>{
            if (!err){
                console.log(rows[0].login);
                

                if (rows[0].login==user){
                    const payload={check:true};
                    const token = jwt.sign(payload,app.get('llave'),{
                    expiresIn:1440
                    });
                    res.json({
                    mensaje: 'Autenticación correcta',
                    token: token,
                    rows:rows
                    });     
                }else{
                    res.json({mensaje:"Usuario no encontrado"});
                }
            } else{
                    res.json({mensaje:"usuario incorrecto"});
            }
        })
    }
})



app.listen(port) // our server starts working

console.log(`API listening on port ${port}`); // we make sure the server is working as expected
