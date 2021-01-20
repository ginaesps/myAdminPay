var debtController = require('../controllers/debtController');
var router = require('express').Router();

//how many debts does a debtor has assigned
router.get('/debtor/:id', (req,res) =>{
    debtController.listDebtorDebts(req,res);
})

//how many debts have been assigned to a debtor in a specific date
router.get('/debtor/:id', (req,res) =>{
    debtController.howManyByDebtorByDate(req,res);
})

//how many debts has an owner created
router.get('/owner/:id', (req,res) =>{
    debtController.listOwnerDebts(req,res);
})


//debts created in a specific date by a specific owner
router.get('/owner/:id', (req,res) =>{
    debtController.byOwnerByDate(req,res);
})

//total amount of all the assigned debts
router.get('/debtor/:id', (req,res) =>{
    debtController.finalAmountByDebtor(req,res);
})

//latest debt assigned to a specific debtor
router.get('/debtor/:id', (req,res) =>{
    debtController.latestByDebtor(req,res);
})

router.post('/', (req,res) =>{
    debtController.create(req,res);
})

module.exports = router 
