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
