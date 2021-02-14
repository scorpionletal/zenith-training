const {Router} = require('express');
const router = Router();
const preinscritoscontroller = require('../controllers/Preinscritoscontroller')

router.post('/',preinscritoscontroller.preinscritos_controller);

module.exports = router;