const {Router} = require('express');
const router = Router();

const routeprincipal = require('./Routeprincipal');


router.use('/',routeprincipal);


module.exports = router;