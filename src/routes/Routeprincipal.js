const {Router} = require('express');
const router = Router();
const principalcontroller = require('../controllers/Principalcontroller')

router.get('/',principalcontroller.principal_controller);

module.exports = router;