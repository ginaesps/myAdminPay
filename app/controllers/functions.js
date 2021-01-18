function queryAnalises(err,rows,fields){
    if(!err){
        res.json(rows);
    }else{
        res.json(err)
    }
}