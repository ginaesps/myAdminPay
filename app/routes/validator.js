var validatorController = require('../controllers/validatorController.js')
var router = require('express').Router();

router.post('/login',(req,res)=>{
    validatorController.validate(req,res);
})