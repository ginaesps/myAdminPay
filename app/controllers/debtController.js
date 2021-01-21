const { query } = require('../../db/mysql');
const mysql = require('../../db/mysql')

module.exports = {
    listDebtorDebts: (req,res) => {
        let id = req.params.id;
        mysql.query('select amount,concept from debt where debtor_id =?', id, queryAnalises(err,rows,fields))
    },
    howManyByDebtorByDate: (req,res) =>{
        let id = req.params.id;
        mysql.query('select count(id) from debt where debtor_id = ? and created_at like "%?%"', [id, req.body], queryAnalises(err,rows,fields))
    },
    listOwnerDebts: (req,res) => {
        let id = req.params.id;
        mysql.query('select amount,concept from debt where owner_id = ?', id, queryAnalises(err,rows,fields))
    },
    byOwnerByDate: (req,res) =>{
        let id = req.params.id ;
        mysql.query('select amount, concept from debt where owner_id = ? and created_at like "%?%"', [id, req.body], queryAnalises(err,rows,fields))
    },
    finalAmountByDebtor: (req,res) =>{
        let id = req.params.id;
        mysql.query('select sum(amount) from debt where debtor_id = ?', id, queryAnalises(err,rows,fields))
    },
    latestByDebtor: (req,res) =>{
        let id = req.params.id;
        mysql.query('select amount, concept from debt where debtor_id = ? and created_at = ( select max(created_at) from debt)', id, queryAnalises(err,rows,fields))
    },
    totalAndAmountGeneratedByOwner: (req,res) => {
        let id = req.params.id;
        mysql.query('select count(owner_id), sum(amount) from debt where owner_id=?', id, queryAnalises(err,rows,fields))
    },
    create: (req,res) => {
        mysql.query('insert into debt set ?', req.body, queryAnalises(err,rows,fields))
    }
}