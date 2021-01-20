function queryAnalises(err,rows,fields){
    if(!err){
        res.json(rows);
    }else{
        res.json(err)
    }
}


/*
IDEA DE REFACTOR PARA CONTROLLERS

function controller&Query(name, req, res, id, mysqlQuery) {
    name: (req,res) =>{
        if ()
        // la idea de este if es evaluar si me pasaron id como parámetro o no
    }
}


planteamiento: evaluar si va a haber id o no
independientemente de la respuesta, se va a tener que llamar a una funcion para realizar query


*/