var ownerController = require('../controllers/ownerController');
var router = require('express').Router();

//create owner
router.post('/', (req,res) =>{
    ownerController.create(req,res);
})

//modify existing information of an owner
router.put('/:id', (req,res) =>{
    ownerController.modify(req,res);
})

//retrieve an owner's information
router.get('/:id', (req,res) =>{
    ownerController.getOwner(req,res);
})

/*
//how many debtors does an owner have associated
router.get('/debtor', (req,res) =>{
    ownerController.associatedDebtors(req,res);
})
*/