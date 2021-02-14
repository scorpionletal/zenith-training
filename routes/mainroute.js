const {Router} = require('express');
const router = Router();

const routeprincipal = require('./Routeprincipal');
const routermesagetocontact = require('./Routermesagetocontact');
const routerpreinscritos = require('./Routepreincritos');


router.use('/',routeprincipal);

router.use('/',routermesagetocontact);

router.use('/cursos',routerpreinscritos);


module.exports = router;