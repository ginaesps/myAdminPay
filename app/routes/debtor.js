var debtorController = require('../controllers/debtorController.js')
var router = require('express').Router()

router.get('/owner/:id', (req,res)=>{ // res le lleva info de servidor a cliente
    debtorController.listOwnerDebtors(req,res);
}) 

router.get('/:id', (req,res) =>{
    debtorController.getDebtor(req,res);
})

router.get('/', (req,res) =>{
    debtorController.list(req,res);
})

router.post('/', (req,res) =>{
    debtorController.create(req,res);
})

router.put('/:id',(req,res)=> {
    debtorController.modify(req,res);
})

module.exports = router;

//localhost:1339/debtor/owner/:id