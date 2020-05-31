const {Router} = require('express');
const router = Router();
const mesagetocontactcontroller = require('../controllers/Principalcontroller')

router.post('/mesagetocontact',mesagetocontactcontroller.mesagetocontact_controller);

module.exports = router;