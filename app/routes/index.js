/* 
we link debt.js with all of the /debt routes, debtor.js with /debtor routes and owner.js with /OWNER routes

in each /routeName , you should set the needed methods and link each one of them with the corresponding controller
*/

var router = require('express').Router();  

var debtor = require('./debtor') // this line should be written for each bd entity that will have assigned methods
router.use('/debtor',debtor)

var debt = require('./debt')
router.use('/debt',debt)

router.get('/', (req,res) =>{ // debug for you to make sure that everything´s working as expected
    res.status(200).json({message: 'You´ve been succesfully connected to our API'})
    // 200 : succesful HTTP page connection
} )
module.exports = router