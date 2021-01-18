let mysql = require('../db/mysql')

module.exports = {
    listOwnerDebtors: (req,res)=>{
        let id = req.params.id;
        mysql.query('select first_name, paternal_surname, maternal_surname, email from debtor where created_by=? or updated_by=?', id,queryAnalises(err,rows,fields))
    },
    getDebtor: (req,res) => {
        let id = req.params.id;
        mysql.query('select first_name, paternal_surname, maternal_surname, email from debtor where id=?', id, queryAnalises(err,rows,fields))
    },
    list: (req,res) =>{
        mysql.query('select first_name, paternal_surname, maternal_surname, email from debtor', queryAnalises(err,rows,fields))
    },
    create: (req,res) =>{
        mysql.query('insert into debtor set ?', req.body, queryAnalises(err,rows,fields))
    },
    modify: (req,res) => {
        mysql.query('update debtor set ?',req.body, queryAnalises(err,rows,fields))
    }
}//mandar desde html info del owner 