const mysql = require('../../db/mysql')

module.exports = {
    create: (req,res) =>{
        mysql.query('insert into owner set ?', req.body, (err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err)
            }        
        })
    },
    modify: (req,res) =>{
        let id = req.params.id;
        mysql.query('update owner set ? where id=?', [req.body,id], (err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err)
            }        
        })
    },
    getOwner: (req,res) =>{
        let id = req.params.id ; 
        mysql.query('select first_name, paternal_surname, maternal_surname, email from debtor where id=?', id, (err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err)
            }        
        })
    }
} 