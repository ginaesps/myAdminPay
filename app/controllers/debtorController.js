let mysql = require('../db/mysql')

module.exports = {
    listOwnerDebtors: (req,res)=>{
        let id = req.params.id;
        console.log(req.body);
        mysql.query('select first_name, paternal_surname, maternal_surname, email from debtor where created_by=? or updated_by=?', id,(err,rows,fields) =>{
            if(!err){
                res.json(rows);
            }else{
                res.json(err)
            }
        })
    },
    getDebtor: (req,res) => {
        let id = req.params.id;
        mysql.query('select first_name, paternal_surname, maternal_surname, email from debtor where id=?', id, (err,rows,fields) => {
            if(!err){
                res.json(rows)
            }else{
                res.json(err)
            }
        })
    },
    list: (req,res) =>{
        mysql.query('select first_name, paternal_surname, maternal_surname, email from debtor', (err,rows,fields) => {
            if(!err){
                res.json(rows)
            }else{
                res.json(err)
            }
        })
    },
    create: (req,res) =>{
        //como verificar que el debtor a crear no existe ya? si el num telefono es el login, primero puedo hacer un select que en caso de regresar vacío, confirme que no existe
        mysql.query()
    }
}//mandar desde html info del owner 