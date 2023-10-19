var express = require('express');
var router = express.Router();

var usercontroller = require('../controller/usercontroller');

router.post('/insert',usercontroller.insert);
router.get('/',user.get_data);


module.exports = router;
