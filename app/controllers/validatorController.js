const mysql = require('../../bd/mysql')

module.exports = {
    validate: (req,res) =>{
        let user=req.body.phone_number;
        let pwd=req.body.password;
        console.log(req.body);
        if (!user || !pwd)
            res.json({mensaje:'You\'re missing a field'});
        else{
            mysql.query('select * from owner where phone_number=? and password =?',[user,pwd],(err,rows,fields)=>{
            //if there's an error
            if (err)
                res.json({message:"There has been an error"});
            else{
                //if the consult was succesfull but the user doesn't exist
                if(rows.length==0){
                    res.json({mensaje:"You haven\'t created an account yet"});
                }else{
                    /*const payload={check:true};
                    const token=jwt.sign(payload,app.get('llave'),{
                        expiresIn:240
                    });*/
 
                    res.json({message:"You've logged in successfully", rows:rows});
                }
            }
            })
        }
    }
}
