const mysql = require('../../db/mysql')

module.exports = {
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