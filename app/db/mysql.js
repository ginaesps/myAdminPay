const msyql = require ('mysql');
const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'debt_system'
});

mysqlConnection.connect((err) =>{
    if(err){
        console.log(err);
        return;
    } else{
        console.log('DB is connected');
    }
});

module.exports = mysqlConnection;