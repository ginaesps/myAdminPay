const mysql = require('../../db/mysql')

module.exports = {
    listOwnerDebtors: (req,res)=>{
        let id = req.params.id;
        mysql.query('select first_name, paternal_surname, maternal_surname, email from debtor where created_by=? or updated_by=?', id,(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err)
            }        
        })
    },
    getDebtor: (req,res) => {
        let id = req.params.id;
        mysql.query('select first_name, paternal_surname, maternal_surname, email from debtor where id=?', id, (err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err)
            }        
        })
    },
    list: (req,res) =>{
        mysql.query('select first_name, paternal_surname, maternal_surname, email from debtor', (err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err)
            }        
        })
    },
    howMany: (req,res) =>{
        mysql.query('select count(id) from debtor', (err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err)
            }        
        })
    },
    create: (req,res) =>{
        mysql.query('insert into debtor set ?', req.body, (err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err)
            }        
        })
    },
    modify: (req,res) => {
        let id = req.params.id;
        mysql.query('update debtor set ? where id=?',[req.body, id], (err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err)
            }        
        })
    }
}
//the needed id en cases like listOwnerDebtors will be obtained from the login of the user that's asking for the method