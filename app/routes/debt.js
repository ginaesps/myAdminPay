var debtController = require('../controllers/debtController');
var router = require('express').Router();

router.get('/debtor/:id', (req,res) =>{
    debtController.listDebtorDebts(req,res);
})

router.get('/owner/:id', (req,res) =>{
    debtController.listOwnerDebts(req,res);
})

router.post('/', (req,res) =>{
    debtController.create(req,res);
})

module.exports = router 
