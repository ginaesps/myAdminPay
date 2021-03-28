const { query } = require('../../db/mysql'); //NO RECONOZCO ESTA LINEA 
const mysql = require('../../db/mysql')

module.exports = {
    listDebtorDebts: (req,res) => {
        let id = req.params.id;
        mysql.query('select amount,concept from debt where debtor_id =?', id, (err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err)
            }        
        })
    },
    howManyByDebtorByDate: (req,res) =>{
        let id = req.params.id;
        mysql.query('select count(id) from debt where debtor_id = ? and created_at like "%?%"', [id, req.body], (err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err)
            }        
        })
    },
    listOwnerDebts: (req,res) => {
        let id = req.params.id;
        mysql.query('select debt.amount, debt.concept from debt, debtor where debt.debtor_id=debtor.id and debtor.owner_id=?', id, (err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err)
            }        
        })
    },
    byOwnerByDate: (req,res) =>{
        let id = req.params.id ;
        mysql.query('select debt.amount, debt.concept from debt inner join debtor on debt.debtor_id=debtor.id where debtor.owner_id=? and debt.created_at like "%?"', [id, req.body], (err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err)
            }        
        })
    },
    finalAmountByDebtor: (req,res) =>{
        let id = req.params.id;
        mysql.query('select sum(amount) from debt where debtor_id = ?', id, (err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err)
            }        
        })
    },
    latestByDebtor: (req,res) =>{
        let id = req.params.id;
        mysql.query('select amount, concept from debt where debtor_id = ? and created_at = ( select max(created_at) from debt)', id, (err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err)
            }        
        })
    },
    totalAndAmountGeneratedByOwner: (req,res) => {
        let id = req.params.id;
        mysql.query('select count(debt.debtor_id), sum(debt.amount) from debt inner join debtor on debt.debtor_id=debtor.id where debtor.owner_id=?', id, (err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err)
            }        
        })
    },
    create: (req,res) => {
        mysql.query('insert into debt set ?', req.body, (err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err)
            }        
        })
    }
}