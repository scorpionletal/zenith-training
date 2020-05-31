const {Router} = require('express');
const router = Router();

const routeprincipal = require('./Routeprincipal');
const routermesagetocontact = require('./Routermesagetocontact');


router.use('/',routeprincipal);

router.use('/',routermesagetocontact);


module.exports = router;