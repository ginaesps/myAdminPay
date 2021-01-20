const mysql = require('../../bd/mysql')

module.exports = {
    listDebtorPayments: (req,res) =>{
        let id = req.params.id;
        mysql.query('select count(debtor_id), sum(amount) from payment where debtor_id=?', id, queryAnalises(err,rows,fields))
    },
    totalAndAmountByOwner: (req,res) =>{
        let id = req.params.id;
        mysql.query('select count(owner_id), sum(amount) from payment where owner_id = ?',id,queryAnalises(err,rows,fields))
    },
    totalAndAmountByOwnerByDate: (req,res) =>{
        let id = req.params.id;
        mysql.query('select count(owner_id), sum(amount) from payment where owner_id = ? and created_at like"%?%"',[id,req.body], queryAnalises(err,rows,fields))
    },//DUDA   propuesta: usar like para la fecha
    mostRecentByOwner: (req,res) =>{
        let id = req.params.id ; 
        mysql.query('select amount, concept from payment where owner_id = ? and created_at like "%?%" ', [id, req.body], queryAnalises(err,rows,fields))
    },
    list: (req,res) =>{
        //ES NECESARIO?
    },
    listByDate: (req,res) =>{
        let id = req.params.id ; 
        mysql.query('select amount, concept from payment where owner_id = ? and created_at like "%?%" ',[id,req.body], queryAnalises(err,rows,fields))
    },
    totalAndAmountByDebtorByDate: (req,res) =>{
        let id = req.params.id;
        mysql.query('select count(debtor_id), sum(amount) from payment where debtor_id = ? and created_at like "%?%" group by debtor_id', id, queryAnalises(err,rows,fields))
    }
}



