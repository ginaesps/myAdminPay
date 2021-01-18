const mysqlConnection = require('../db/mysql');

mysql = require('../db/mysql')

module.exports = {
    listDebtorDebts: (req,res) => {
        let id = req.params.id;
        mysql.query('select amount,concept from debt where debtor_id =?', id, queryAnalises(err,rows,fields))
    },
    listOwnerDebts: (req,res) => {
        let id = req.params.id;
        mysql.query('select amount,concept from debt where owner_id = ?', id, queryAnalises(err,rows,fields))
    },
    create: (req,res) => {
        mysql.query('insert into debt set ?', req.body, queryAnalises(err,rows,fields))
    }
}