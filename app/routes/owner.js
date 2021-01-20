var ownerController = require('../controllers/ownerController');
var router = require('express').Router();

//how many debts and how much out of the total it is by owner
router.get('/debt/:id', (req,res) =>{
    ownerController.totalAndAmountOfGeneratedDebts(req,res);
}) // CREO QUE VA EN DEBT

// how many payments does an owner has recieved
router.get('/payment/:id', (req,res) =>{ // LA RUTA ES CORRECTA?
    ownerController.totalAssociatedPayments(req,res);
}) // CREO QUE VA EN PAYMENT
// creo que tambien se debería considerar la suma de esos pagos 

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