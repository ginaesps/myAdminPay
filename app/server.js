/* this file contains all the needed modules:
express, corse and bodyParser

jwt,mysql and config are required for the token authentication

all of the require lines invoke the needed modules into the proyect

our route will go on http://localhost:8080*/

const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express') 

const jwt=require('jsonwebtoken')
const config = require('./config/config') 
const mysql = config.db
 
//app.set('llave',config.llave); //we recover the master password (encripts the rest of the info)

const router = require('./routes') 

const app = express() // this variable will be the easy way to use the express module

app.use(cors());
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())

const rutaLogin=require('express').Router();
app.use('/login', rutaLogin)

app.use('/api', router) // we link /api to the folder routes

rutaLogin.post('/',(req,res)=>{
    console.log(req.body);
    let user=req.body.phone_number;
    let pwd=req.body.password;
    if (!user || !pwd)
        res.json({mensaje:"Faltan datos"});
    else{
        mysql.query('select * from owner where phone_number = ? and password = ?', [user, pwd],(err,rows,fields)=>{
            if (!err){
                console.log(rows[0].login);
                

                if (rows.length!=0){
                    /*const payload={check:true};
                    const token = jwt.sign(payload,app.get('llave'),{
                    expiresIn:1440
                    });*/
                    res.json({
                    mensaje: 'Autenticación correcta',
                    //token: token,
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



app.listen(config.port, ()=>{ // our server starts working
    console.log(`API REST running on port ${config.port}`); // we make sure the server is working as expected
}) 

