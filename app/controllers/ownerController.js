const mysql = require('../../db/mysql')

module.exports = {
    totalAndAmountOfGeneratedDebts: (req,res) => {
        let id = req.params.id;
        mysql.query('select count(owner_id), sum(amount) from debt where owner_id=?', id, queryAnalises(err,rows,fields))
    },// CREO QUE VA EN DEBT
    totalAssociatedPayments: (req,res) =>{
        let id = req.params.id;
        mysql.query('select count(owner_id) from payment where owner_id=?', id, queryAnalises(err,rows,))
    }, // CREO QUE VA EN PAYMENT
    create: (req,res) =>{
        mysql.query('insert into owner set ?', req.body, queryAnalises(err,rows,fields))
    },
    modify: (req,res) =>{
        let id = req.params.id;
        mysql.query('update owner set ? where id=?', [req.body,id], queryAnalises(err,rows,fields))
    },
    getOwner: (req,res) =>{
        let id = req.params.id ; 
        mysql.query('select first_name, paternal_surname, maternal_surname, email from debtor where id=?', id, queryAnalises(err,rows,fields))
    }
}