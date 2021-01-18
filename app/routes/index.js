/* 
VINCULA ARCHIVOS clientes.js CON RUTA /clientes
AQUÍ DEBEMOS ASIGNAR 
/debts
/owners
/debtors
/payments
EN CADA UNA DE ESTAS RUTAS VAN LOS MÉTODOS A TRABAJAR Y LOS ENLAZAS CON CONTROLADORES CORRESPONDIENTES
EN LA RUTA PARA CADA ENTIDAD SE DEBEN DEFINIR LOS MÉTODOS Y PARÁMETROS A USAR 
 */

var router = require('express').Router();

var debtor = require('./debtor')
router.use('/debtor',debtor)

var debt = require('./debt')
router.use('/debt',debt)

router.get('/', (req,res) =>{
    res.status(200).json({message: 'You´ve been succesfully connected to our API'})
    // 200 : succesful HTTP page connection
} )
module.exports = router